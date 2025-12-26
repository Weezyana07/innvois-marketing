// src/components/legal/cookies/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import CookieToggles from "./CookieToggles";

export const metadata: Metadata = {
  title: "Cookie Policy — Innvois",
  description: "How Innvois uses cookies and how you can manage your preferences.",
};

export default function CookiesPage() {
  return (
    <article className="prose prose-neutral max-w-none prose-h1:mb-3 prose-h2:mt-8 prose-h2:mb-3 prose-p:leading-relaxed">
      <h1 className="text-4xl font-bold">Cookie Policy</h1>
      <p className="text-sm text-neutral-500 mb-8">
        Last updated: <strong>October 2025</strong>
      </p>

      <p>
        Innvois (“we”, “our”) uses cookies and similar technologies to run our site, improve performance,
        and personalize content. This page explains what we use and how you can control it.
      </p>

      <h2 className="text-2xl font-semibold">1. What are cookies?</h2>
      <p>
        Cookies are small text files stored on your device to remember settings, keep you signed in,
        measure usage, and improve your experience.
      </p>

      <h2 className="text-2xl font-semibold">2. Types we use</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Strictly necessary</strong> (required): security, session, load balancing.</li>
        <li><strong>Analytics</strong>: understanding traffic and performance.</li>
        <li><strong>Marketing</strong> (if enabled): measuring campaigns and attribution.</li>
      </ul>

      <h2 className="text-2xl font-semibold">3. Manage preferences</h2>
      <p>
        Use the controls below to set your preferences. Strictly necessary cookies are always on because
        the site won’t work without them.
      </p>

      {/* Client controls */}
      <div className="not-prose mt-4">
        <CookieToggles />
      </div>

      <h2 className="text-2xl font-semibold">4. Third parties</h2>
      <p>
        We may use reputable providers (e.g., analytics, email, payment). Where used, they may set their own cookies
        subject to their policies.
      </p>

      <h2 className="text-2xl font-semibold">5. Your rights</h2>
      <p>
        You can withdraw consent at any time from this page or via the cookie banner. You can also clear cookies
        from your browser settings.
      </p>

      <h2 className="text-2xl font-semibold">6. Contact</h2>
      <p>
        Questions?{" "}
        <a className="text-[#059669] hover:underline" href="mailto:privacy@innvois.com">
          privacy@innvois.com
        </a>
      </p>

      <p className="mt-6 text-sm">
        You can also{" "}
        <Link href="/legal/cookies/settings" className="text-[#059669] hover:underline">
          manage cookie settings
        </Link>.
      </p>
    </article>
  );
}