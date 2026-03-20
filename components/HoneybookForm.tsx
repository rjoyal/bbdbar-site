"use client";

import { useEffect } from "react";

export default function HoneybookForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js";
    script.async = true;
    (window as unknown as Record<string, unknown>)._HB_ =
      (window as unknown as Record<string, unknown>)._HB_ || {};
    (
      (window as unknown as Record<string, unknown>)._HB_ as Record<
        string,
        unknown
      >
    ).pid = "6213a16676ae4e000848b36a";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="hb-p-6213a16676ae4e000848b36a-1" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src="https://www.honeybook.com/p.png?pid=6213a16676ae4e000848b36a"
        alt=""
      />
    </>
  );
}
