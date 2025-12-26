// src/components/legal/Cookies/CookieToggles.tsx
"use client";

import { useEffect, useState } from "react";

export default function CookieToggles() {
  const [analytics, setAnalytics] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("cookie:analytics") === "true";
  });
  const [marketing, setMarketing] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("cookie:marketing") === "true";
  });

  useEffect(() => {
    localStorage.setItem("cookie:analytics", String(analytics));
    window.dispatchEvent(new CustomEvent("cookie-consent-change", { detail: { analytics } }));
  }, [analytics]);

  useEffect(() => {
    localStorage.setItem("cookie:marketing", String(marketing));
    window.dispatchEvent(new CustomEvent("cookie-consent-change", { detail: { marketing } }));
  }, [marketing]);

  return (
    <div className="rounded-2xl bg-white border border-neutral-200 p-4 shadow-sm">
      <div className="flex items-center justify-between py-2">
        <span className="font-medium">Analytics cookies</span>
        <label className="inline-flex items-center gap-2">
          <input
            type="checkbox"
            checked={analytics}
            onChange={(e) => setAnalytics(e.target.checked)}
            className="size-4 accent-[#059669]"
          />
        </label>
      </div>
      <div className="flex items-center justify-between py-2 border-t border-emerald-100/60 dark:border-white/10">
        <span className="font-medium">Marketing cookies</span>
        <label className="inline-flex items-center gap-2">
          <input
            type="checkbox"
            checked={marketing}
            onChange={(e) => setMarketing(e.target.checked)}
            className="size-4 accent-emerald-600"
          />
        </label>
      </div>
    </div>
  );
}