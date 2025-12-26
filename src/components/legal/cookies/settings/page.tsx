// src/components/legal/cookies/settings/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import ClientSettings from "./ClientSettings";

export const metadata: Metadata = {
  title: "Cookie Settings — Innvois",
  description: "Manage your Innvois cookie preferences.",
};

export default function CookieSettingsPage() {
  return (
    <article className="prose prose-neutral max-w-none prose-h1:mb-3 prose-h2:mt-8 prose-h2:mb-3 prose-p:leading-relaxed">
      <h1 className="text-4xl font-bold">Cookie Settings</h1>
      <p className="text-sm text-neutral-500 mb-8">
        Adjust which optional cookies you allow on Innvois.
      </p>

      <div className="not-prose">
        <ClientSettings />
      </div>

      <p className="mt-6 text-sm">
        Back to{" "}
        <Link href="/legal/cookies" className="text-[#059669] hover:underline">
          Cookie Policy
        </Link>.
      </p>
    </article>
  );
}