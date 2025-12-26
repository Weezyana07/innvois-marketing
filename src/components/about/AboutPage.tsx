// src/components/about/AboutPage.tsx
import Link from "next/link";
import Image from "next/image";
import { Header, Footer, ForceLightOnce } from "@/components/landing";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900" style={{ colorScheme: "light" }}>
      <ForceLightOnce />
      <Header />

      <main className="flex-1">
        {/* HERO */}
        <section className="border-b bg-[linear-gradient(to_bottom,#ecfdf5_0%,rgba(236,253,245,0)_70%)]">
          <div className="container mx-auto px-4 py-12 md:py-16 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="inline-flex items-center rounded-full border border-[#d1fae5] bg-white/70 px-3 py-1 text-xs font-medium text-[#047857]">
                Company
              </p>

              <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Built for people who sell — <span className="text-[#059669]">not accountants</span>.
              </h1>

              <p className="mt-4 max-w-2xl text-lg text-neutral-600">
                Innvois helps SMEs get paid faster, keep clean records, and understand their money — without spreadsheets or financial stress.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/waitlist"
                  className="inline-flex items-center gap-2 rounded-md bg-[#059669] px-4 py-2 text-sm font-semibold text-white hover:bg-[#047857]"
                  data-analytics="cta_waitlist_header"
                >
                  Request access <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/#demo"
                  className="inline-flex items-center justify-center rounded-md border px-6 py-3 font-medium hover:bg-neutral-50"
                >
                  See demo
                </Link>
              </div>

              {/* small proof row */}
              <div className="mt-6 grid grid-cols-3 gap-3 max-w-md">
                {[
                  ["Fast setup", "Minutes"],
                  ["Built for SMEs", "Nigeria-first"],
                  ["Audit-ready", "By default"],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-xl border bg-white/70 p-3">
                    <div className="text-xs text-neutral-500">{k}</div>
                    <div className="mt-1 text-sm font-semibold">{v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT VISUAL */}
            <div className="rounded-2xl border border-neutral-200 bg-white shadow-sm overflow-hidden">
              <div className="p-4 md:p-5">
                <div className="grid grid-cols-2 gap-3">
                  <figure className="col-span-2 rounded-xl border overflow-hidden bg-neutral-100">
                    <Image
                      src="/dashboard.png"
                      alt="Innvois dashboard"
                      width={1400}
                      height={900}
                      className="w-full h-auto"
                      priority
                    />
                  </figure>
                  <figure className="rounded-xl border overflow-hidden bg-neutral-100">
                    <Image src="/invoice.png" alt="Invoice" width={1200} height={800} className="w-full h-auto" />
                  </figure>
                  <figure className="rounded-xl border overflow-hidden bg-neutral-100">
                    <Image src="/receipt.png" alt="Receipt" width={1200} height={800} className="w-full h-auto" />
                  </figure>
                </div>
                <p className="mt-3 text-xs text-neutral-500">
                  Product views shown for illustration — final UI may evolve as we ship.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY INNVOIS */}
        <section className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why Innvois</h2>
            <p className="mt-3 text-neutral-600">
              Most businesses don’t fail because they can’t sell — they fail because they don’t see their money clearly.
              Innvois gives you clarity from the moment you issue an invoice.
            </p>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              ["Get paid faster", "Send invoices customers can pay instantly by link — no friction, no chasing."],
              ["Know your numbers", "Track revenue, expenses, and profit automatically so you know what you truly made."],
              ["Stay tax-ready", "VAT-ready records and audit trails that make compliance less stressful."],
            ].map(([h, p]) => (
              <div key={h} className="rounded-2xl border p-6 bg-white">
                <h3 className="font-semibold text-lg">{h}</h3>
                <p className="mt-2 text-sm text-neutral-600">{p}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ORIGINAL: MISSION / BUILDING / WHY NOW */}
        <section className="container mx-auto px-4 pb-12 md:pb-16">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              ["Our mission", "Make money management simple for every business owner — from invoice to compliance."],
              ["What we’re building", "Invoicing, payments, expenses, profit visibility, exports, and audit-ready records — all in one place."],
              ["Why now", "SMEs need speed, clarity, and trust. We’re designing a system that fits real Nigerian business workflows."],
            ].map(([h, p]) => (
              <div key={h} className="rounded-2xl border p-6 bg-white">
                <h3 className="font-semibold text-lg">{h}</h3>
                <p className="mt-2 text-sm text-neutral-600">{p}</p>
              </div>
            ))}
          </div>

          {/* HELP + TRUST */}
          <div className="mt-10 grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-2xl border p-6 bg-white">
              <h3 className="text-xl font-bold tracking-tight">How Innvois helps</h3>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                <li>✅ Create professional invoices & receipts in seconds</li>
                <li>✅ Share pay links on WhatsApp/SMS/email — no customer signup</li>
                <li>✅ Automatic paid/unpaid tracking and exports</li>
                <li>✅ Expenses + profit visibility (so you know what you truly made)</li>
                <li>✅ VAT-ready records and audit trails by default</li>
              </ul>
            </div>

            <div className="rounded-2xl border p-6 bg-white">
              <h3 className="text-xl font-bold tracking-tight">Trust & security</h3>
              <p className="mt-3 text-sm text-neutral-600">
                Security-first by design: encrypted transport, secure storage practices, and clean audit trails for every critical action.
              </p>

              <div className="mt-5 grid sm:grid-cols-2 gap-4">
                {[
                  ["Data protection", "Privacy controls and NDPA-aligned practices."],
                  ["Auditability", "Invoice + payment activity trails for dispute resolution."],
                  ["Payments", "PCI handled via gateway partners (Paystack/others)."],
                  ["Reliability", "Built with monitoring + structured logs for stable operations."],
                ].map(([h, p]) => (
                  <div key={h} className="rounded-xl border p-4">
                    <div className="font-semibold text-sm">{h}</div>
                    <div className="mt-1 text-xs text-neutral-600">{p}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <Link href="/contact" className="text-sm font-semibold text-[#059669] hover:underline">
                  Talk to us →
                </Link>
              </div>
            </div>
          </div>

          {/* CTA STRIP */}
          {/* <div className="mt-10 rounded-2xl border bg-[linear-gradient(to_right,#ecfdf5,rgba(236,253,245,0.4))] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="text-lg font-bold tracking-tight">Ready to run your business with clarity?</div>
              <div className="mt-1 text-sm text-neutral-600">
                Create invoices, get paid, and track your money — all in one place.
              </div>
            </div>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-md bg-[#059669] px-6 py-3 text-white font-semibold hover:bg-[#047857]"
            >
              Create your account
            </Link>
          </div> */}
        </section>
      </main>

      <Footer />
    </div>
  );
}