"use client";

export type ConsentCategory = "necessary" | "analytics" | "marketing";
export type ConsentState = Record<ConsentCategory, boolean>;

const KEY = "innvois.cookieConsent.v1";

export function getStoredConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as ConsentState) : null;
  } catch {
    return null;
  }
}

export function saveConsent(state: ConsentState) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(state));
  // Optional: a simple cookie for server hints (not required for this coming-soon setup)
  document.cookie = `innvois_consent=${encodeURIComponent(
    JSON.stringify(state)
  )}; Path=/; Max-Age=${60 * 60 * 24 * 365}; SameSite=Lax`;
}

export function hasMadeChoice() {
  return !!getStoredConsent();
}

export const DEFAULT_CONSENT: ConsentState = {
  necessary: true,     // always on / not toggleable
  analytics: false,
  marketing: false,
};