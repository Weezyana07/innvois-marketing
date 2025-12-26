// src/components/legal/Cookies/settings/ClientSettings.tsx
"use client";

import { ConsentState, DEFAULT_CONSENT, getStoredConsent, saveConsent } from "lib/cookies/consent";
import { useEffect, useState } from "react";
// import { type ConsentState, getStoredConsent, saveConsent, DEFAULT_CONSENT } from "@/lib/cookies/consent";

export default function ClientSettings() {
  const [consent, setConsent] = useState<ConsentState>(() => getStoredConsent() ?? DEFAULT_CONSENT);

  useEffect(() => {
    // keep localStorage (or cookies) in sync and notify banner/trackers
    saveConsent(consent);
    window.dispatchEvent(new CustomEvent("cookie-consent-change", { detail: consent }));
  }, [consent]);

  return (
    <div className="rounded-2xl bg-white/80 backdrop-blur border border-emerald-100 p-6 shadow-sm dark:bg-white/5 dark:border-white/10">
      <div className="flex items-center justify-between py-3">
        <div>
          <div className="font-medium">Necessary cookies</div>
          <div className="text-sm text-neutral-600 dark:text-neutral-400">Required for security and basic features.</div>
        </div>
        <input type="checkbox" checked readOnly className="size-4 accent-emerald-600 opacity-60 cursor-not-allowed" />
      </div>

      <div className="flex items-center justify-between py-3 border-t border-emerald-100/60 dark:border-white/10">
        <div>
          <div className="font-medium">Analytics cookies</div>
          <div className="text-sm text-neutral-600 dark:text-neutral-400">Helps us understand usage and reliability.</div>
        </div>
        <input
          type="checkbox"
          className="size-4 accent-[#059669]"
          checked={!!consent.analytics}
          onChange={(e) => setConsent((c) => ({ ...c, analytics: e.target.checked }))}
        />
      </div>

      <div className="flex items-center justify-between py-3 border-t border-emerald-100/60 dark:border-white/10">
        <div>
          <div className="font-medium">Marketing cookies</div>
          <div className="text-sm text-neutral-600 dark:text-neutral-400">Optional; for attribution and campaigns.</div>
        </div>
        <input
          type="checkbox"
          className="size-4 accent-emerald-600"
          checked={!!consent.marketing}
          onChange={(e) => setConsent((c) => ({ ...c, marketing: e.target.checked }))}
        />
      </div>

      <div className="mt-4 flex gap-2">
        <button
          onClick={() => setConsent({ necessary: true, analytics: true, marketing: true })}
          className="rounded-xl px-4 py-2 text-sm font-semibold text-white bg-[#059669] hover:bg-[#047857]"
        >
          Accept all
        </button>
        <button
          onClick={() => setConsent({ necessary: true, analytics: false, marketing: false })}
          className="rounded-xl border px-4 py-2 text-sm"
        >
          Reject optional
        </button>
      </div>
    </div>
  );
}