// src/components/legal/terms/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Innvois",
  description: "Innvois Terms of Service outlining acceptable use, payments, and compliance with Nigerian laws.",
};

export default function TermsPage() {
  return (
    <article className="prose prose-neutral max-w-none dark:prose-invert prose-h1:mb-3 prose-h2:mt-8 prose-h2:mb-3 prose-p:leading-relaxed">
      <h1 className="text-4xl font-bold">Terms of Service</h1>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-8">
        Last updated: <strong>October 2025</strong>
      </p>

      <p>
        Welcome to <strong>Innvois Solutions LTD</strong> (“Innvois”, “we”, “our”, or “us”).
        By using our platform, you agree to the terms below.
      </p>

      <h2 className="text-2xl font-semibold">1. Description of Service</h2>
      <p>
        Innvois provides invoicing, payment, and financial management tools for businesses across Nigeria and Africa.
      </p>

      <h2 className="text-2xl font-semibold">2. Accounts</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Provide accurate and verifiable details when registering.</li>
        <li>You are responsible for maintaining your account’s security and credentials.</li>
      </ul>

      <h2 className="text-2xl font-semibold">3. Payments and Fees</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Payments are processed by licensed CBN partners (e.g., Paystack, Flutterwave, or VeridianPay).</li>
        <li>All applicable taxes and service fees comply with <strong>FIRS</strong> laws and guidance.</li>
        <li>Refunds follow <strong>CBN</strong> consumer protection rules and processor policies.</li>
      </ul>

      <h2 className="text-2xl font-semibold">4. Acceptable Use</h2>
      <p>You may not use Innvois for:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Fraudulent transactions or money laundering.</li>
        <li>Illegal commerce, tax evasion, or scam activity.</li>
        <li>Spamming, system abuse, or attempts to bypass security controls.</li>
      </ul>

      <h2 className="text-2xl font-semibold">5. Compliance & Responsibility</h2>
      <p>
        You agree to comply with Nigeria’s <strong>NDPA 2023</strong>, <strong>NITDA</strong> standards, and financial
        laws of the <strong>CBN</strong> and <strong>FIRS</strong>.
      </p>

      <h2 className="text-2xl font-semibold">6. Intellectual Property</h2>
      <p>
        All product designs, logos, and content belong to <strong>VeridianCore Labs</strong>. Unauthorized reproduction is prohibited.
      </p>

      <h2 className="text-2xl font-semibold">7. Liability Disclaimer</h2>
      <p>
        The service is provided “as is.” Innvois is not liable for losses due to user error, network issues,
        or third-party downtime.
      </p>

      <h2 className="text-2xl font-semibold">8. Governing Law</h2>
      <p>
        These Terms are governed by the laws of the <strong>Federal Republic of Nigeria</strong>.
      </p>

      <h2 className="text-2xl font-semibold">9. Contact</h2>
      <p>
        Support: <a className="text-emerald-700 dark:text-emerald-300" href="mailto:support@innvois.com">support@innvois.com</a>
      </p>

      <p className="mt-4 text-sm">
          For details on how we use cookies, see our{" "}
          <Link href="/legal/cookies" className="text-emerald-700 dark:text-emerald-300 hover:underline">
            Cookie Policy
          </Link>.
          <Link href="/legal/cookies/settings" className="text-emerald-700 hover:underline dark:text-emerald-300">
            Manage cookies
          </Link>
        </p>

      <hr className="my-8 border-emerald-100 dark:border-white/10" />

      <p className="text-sm italic text-neutral-500 dark:text-neutral-400">
        Innvois is a VeridianCore Labs initiative for digital revenue transformation in Africa.
      </p>
    </article>
  );
}