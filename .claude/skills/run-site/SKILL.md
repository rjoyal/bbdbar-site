---
name: run-site
description: Build, run, and drive the bbdbar.com Next.js site. Use when asked to start the dev server, take a screenshot of a page, check that content changes rendered, or interact with the site's UI.
---

This is a statically-exported Next.js (App Router) marketing site — no
backend, content is hardcoded in page files. Drive it by starting the
dev server, then automating a headless Chromium against it via the
Playwright REPL at `.claude/skills/run-site/driver.mjs`.

All paths below are relative to the repo root (`site/`).

## Prerequisites

None beyond Node — `playwright` is a devDependency and its Chromium
build is cached locally.

```bash
npm install
npx playwright install chromium   # one-time, if not already cached
```

## Build

No separate build step needed to run the driver — it targets `next dev`.
(`npm run build` exists for production/static export but isn't required
for local verification.)

## Run (agent path)

Start the dev server in the background, wait for it to serve, then pipe
commands to the driver via a heredoc — one command per line, executed
in order:

```bash
npm run dev &
for i in $(seq 1 30); do curl -sf http://localhost:3000 >/dev/null && break; sleep 1; done

node .claude/skills/run-site/driver.mjs <<'EOF'
launch
nav /services
wait text=Gelato Bar
ss 01-services
console --errors
quit
EOF
```

Stop the dev server when done: `lsof -ti:3000 -sTCP:LISTEN | xargs -r kill`
(avoid `pkill -f` — too broad, can match the agent's own shell).

Screenshots land in `/tmp/shots/` (override with `SCREENSHOT_DIR`).
Base URL defaults to `http://localhost:3000` (override with `BASE_URL`).

### Commands

| command | what it does |
|---|---|
| `launch` | start headless Chromium |
| `nav <path>` | navigate to `<path>` (relative to `BASE_URL`) or a full URL |
| `ss [name]` | full-page screenshot → `/tmp/shots/<name>.png` |
| `wait <sel>` | wait for a selector (10s timeout) — `text=...` selectors work |
| `click <sel>` / `click-text <text>` | click an element |
| `text [sel]` | print `innerText` of selector (or whole page) |
| `eval <js>` | evaluate JS in the page, print JSON result |
| `console [--errors]` | print captured console/page-error messages since last `nav` |
| `quit` | close browser, exit |

For iterative debugging, run the driver under `tmux` and `send-keys`
one command at a time instead of a heredoc — same commands, same
session. (Not verified in this repo: this dev Mac doesn't have `tmux`
installed by default — `brew install tmux` if you want it. The heredoc
path above needs neither `tmux` nor GNU `timeout`, which also isn't on
stock macOS.)

## Run (human path)

```bash
npm run dev   # http://localhost:3000, hot reload. Ctrl-C to stop.
```

## Test

```bash
npm run lint
```

---

## Gotchas

- **Heredoc/piped stdin races `close` against in-flight commands.**
  Node's `readline` fires `'line'` for every buffered line (and then
  `'close'`) before an `await`-ed async command handler resolves. If
  the driver called `process.exit()` straight from the `'close'`
  handler, it killed the process mid-`launch()` — every command after
  the first silently no-op'd with no error. Fixed by chaining commands
  on a single promise and having `'close'` await that chain before
  exiting. If you extend the driver, keep new commands going through
  the same `chain`/`queue` mechanism rather than firing directly off
  `rl.on('line', ...)`.
- **No `xvfb` needed.** This runs on macOS (and works fine on Linux
  too) with plain headless Chromium — there's no Electron/native
  window to fake a display for.
- **`/inquire`'s Honeybook widget renders blank right after `nav`.**
  The third-party widget script hasn't finished loading by the time
  `page.goto`'s `load` event fires — the embed area is just empty
  space in an immediate screenshot. Not a site bug; `wait` for a
  selector inside the widget (or add a short delay) before judging
  that section.

## Troubleshooting

- **`ERROR: launch first` on every command:** you're hitting the
  stdin race above — make sure you're on the fixed driver (chained
  queue, not a bare `rl.on('line', async ...)`).
- **`chromium.launch()` fails with a missing-executable error:** run
  `npx playwright install chromium`.
- **Dev server port already in use:** another instance is likely
  still running from a previous session — reuse it (check
  `lsof -ti:3000 -sTCP:LISTEN`) rather than failing; only kill it if
  you started it and are done.
