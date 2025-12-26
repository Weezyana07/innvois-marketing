// src/components/legal/privacy/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Innvois",
  description: "Innvois Privacy Policy in compliance with Nigeria’s NDPA and NITDA guidelines.",
};

export default function PrivacyPolicyPage() {
  return (
    <article className="prose prose-neutral max-w-none dark:prose-invert prose-h1:mb-3 prose-h2:mt-8 prose-h2:mb-3 prose-p:leading-relaxed">
      <h1 className="text-4xl font-bold">Privacy Policy</h1>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-8">
        Last updated: <strong>October 2025</strong>
      </p>

      <p>
        At <strong>Innvois Solutions LTD</strong> (“Innvois”, “we”, “our”, or “us”), your privacy matters.
        We are committed to protecting your personal information in line with the
        <strong> Nigerian Data Protection Act (NDPA) 2023</strong> and the <strong>NITDA Data Protection Regulation</strong>.
      </p>

      <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Account Data:</strong> Name, email, and business details when you sign up.</li>
        <li><strong>Usage Data:</strong> Browser, device, and IP information for analytics and security.</li>
        <li><strong>Payment Data:</strong> Collected securely via our payment partners (e.g. Paystack, Flutterwave).</li>
      </ul>

      <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>To create and manage your Innvois account.</li>
        <li>To generate invoices, compute VAT, and process payments securely.</li>
        <li>To send system updates, receipts, or notifications.</li>
        <li>To improve performance, detect abuse, and prevent fraud.</li>
      </ul>

      <h2 className="text-2xl font-semibold">3. Data Sharing & Storage</h2>
      <p>
        We store your data securely on cloud infrastructure that complies with <strong>NITDA</strong> and international
        standards. We only share your information with trusted third-party processors necessary for operations —
        such as payment gateways, email services, and analytics providers.
      </p>

      <h2 className="text-2xl font-semibold">4. Your Rights</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Access, correct, or delete your data.</li>
        <li>Withdraw consent or object to processing.</li>
        <li>File a complaint with the <strong>NDPC</strong> (Nigeria Data Protection Commission).</li>
      </ul>

      <h2 className="text-2xl font-semibold">5. Data Retention</h2>
      <p>
        We retain information as required by applicable Nigerian laws and <strong>FIRS</strong> financial reporting standards.
      </p>

      <h2 className="text-2xl font-semibold">6. Contact Us</h2>
      <p>
        Privacy inquiries:{" "}
        <a className="text-emerald-700 dark:text-emerald-300" href="mailto:privacy@innvois.com">
          privacy@innvois.com
        </a>
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
        Innvois Solutions LTD is a VeridianCore Labs product, proudly built in Nigeria.
      </p>
    </article>
  );
}