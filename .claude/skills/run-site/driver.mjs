// REPL driver for the bbdbar.com Next.js site.
// Drives a headless Chromium (Playwright) against the local dev server.
// Designed for agents: run under tmux, send-keys commands, capture-pane output.
import { chromium } from 'playwright';
import * as readline from 'node:readline';
import * as fs from 'node:fs';
import * as path from 'node:path';

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';
const SHOT_DIR = process.env.SCREENSHOT_DIR || '/tmp/shots';
fs.mkdirSync(SHOT_DIR, { recursive: true });

let browser = null;
let page = null;
const consoleMsgs = [];

const COMMANDS = {
  async launch() {
    if (browser) return console.log('already launched');
    browser = await chromium.launch();
    page = await browser.newPage();
    page.on('console', (msg) => consoleMsgs.push({ type: msg.type(), text: msg.text() }));
    page.on('pageerror', (err) => consoleMsgs.push({ type: 'pageerror', text: err.message }));
    console.log('launched.');
  },

  async nav(p) {
    if (!page) return console.log('ERROR: launch first');
    const url = /^https?:\/\//.test(p) ? p : BASE_URL + (p.startsWith('/') ? p : '/' + p);
    consoleMsgs.length = 0;
    await page.goto(url, { waitUntil: 'load', timeout: 30_000 });
    console.log('nav ->', url);
  },

  async ss(name) {
    if (!page) return console.log('ERROR: launch first');
    const f = path.join(SHOT_DIR, (name || `ss-${Date.now()}`) + '.png');
    await page.screenshot({ path: f, fullPage: true });
    console.log('screenshot:', f);
  },

  async click(sel) {
    if (!page) return console.log('ERROR: launch first');
    try { await page.click(sel, { timeout: 5000 }); console.log('click', sel, '-> OK'); }
    catch (e) { console.log('click', sel, '-> ERROR:', e.message); }
  },

  async 'click-text'(text) {
    if (!page) return console.log('ERROR: launch first');
    try {
      await page.getByText(text, { exact: false }).first().click({ timeout: 5000 });
      console.log('click-text', JSON.stringify(text), '-> OK');
    } catch (e) { console.log('click-text', JSON.stringify(text), '-> ERROR:', e.message); }
  },

  async wait(sel) {
    if (!page) return console.log('ERROR: launch first');
    try { await page.waitForSelector(sel, { timeout: 10_000 }); console.log('found:', sel); }
    catch { console.log('TIMEOUT:', sel); }
  },

  async text(sel) {
    if (!page) return console.log('ERROR: launch first');
    console.log(await page.evaluate(
      (s) => (s ? document.querySelector(s) : document.body)?.innerText ?? '(null)',
      sel || null,
    ));
  },

  async eval(expr) {
    if (!page) return console.log('ERROR: launch first');
    try { console.log(JSON.stringify(await page.evaluate(expr))); }
    catch (e) { console.log('ERROR:', e.message); }
  },

  async console(filter) {
    const msgs = filter === '--errors'
      ? consoleMsgs.filter((m) => m.type === 'error' || m.type === 'pageerror')
      : consoleMsgs;
    if (msgs.length === 0) return console.log('(none)');
    for (const m of msgs) console.log(`[${m.type}] ${m.text}`);
  },

  async quit() { if (browser) await browser.close().catch(() => {}); browser = null; page = null; },
  help() { console.log('commands:', Object.keys(COMMANDS).join(', ')); },
};

const rl = readline.createInterface({ input: process.stdin, output: process.stdout, prompt: 'driver> ' });

// Piped/heredoc stdin delivers every line (then 'close') before the first
// async command resolves — readline doesn't wait for our handler. Queue
// lines and chain them on one promise so `launch` finishes before `nav`
// starts, and 'close' waits for that same chain before exiting.
const queue = [];
let chain = Promise.resolve();
let exited = false;

function processQueue() {
  chain = chain.then(async () => {
    while (queue.length) {
      const line = queue.shift();
      const [cmd, ...rest] = line.trim().split(/\s+/);
      if (!cmd) { rl.prompt(); continue; }
      const fn = COMMANDS[cmd];
      if (!fn) { console.log('unknown:', cmd, '— try: help'); rl.prompt(); continue; }
      try { await fn(rest.join(' ')); } catch (e) { console.log('ERROR:', e.message); }
      if (cmd === 'quit') { exited = true; rl.close(); process.exit(0); }
      rl.prompt();
    }
  });
}

rl.on('line', (line) => { queue.push(line); processQueue(); });
rl.on('close', async () => {
  if (exited) return;
  await chain;
  await COMMANDS.quit();
  process.exit(0);
});

console.log('site driver — "help" for commands, "launch" to start');
rl.prompt();
