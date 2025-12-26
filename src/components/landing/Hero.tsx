// src/components/landing/Hero.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { CreditCard } from "lucide-react";
import { fadeInUp } from "./animations";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* subtle tints */}
      <div aria-hidden className="absolute inset-0 z-0 bg-[linear-gradient(to_bottom,#ecfdf5_0%,rgba(236,253,245,0)_70%)]" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 z-0 h-[18rem] md:h-[20rem] w-[50rem] md:w-[60rem] rounded-full opacity-40 blur-3xl bg-[radial-gradient(45%_45%_at_50%_50%,rgba(16,185,129,0.18)_0%,rgba(16,185,129,0)_70%)]"
      />

      {/* ✅ stack on md/tablet, split only on lg */}
      <div
        id="main"
        className="relative z-10 container mx-auto px-4 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center"
      >
        {/* LEFT: copy */}
        <motion.div {...fadeInUp(0)}>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#d1fae5] bg-white/70 px-3 py-1 text-xs font-medium text-[#047857]">
            <CreditCard className="w-4 h-4" /> E-Invoicing, Payments & Business Tracking for SMEs
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Get paid faster with <span className="text-[#059669]">smart invoices</span>.
          </h1>

          <p className="mt-3 text-lg text-neutral-600">
            Send invoices customers can pay instantly. Track paid vs unpaid, expenses, and profit with VAT-ready records by default.
          </p>

          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <Link
              href="/waitlist"
              className="inline-flex items-center justify-center rounded-md bg-[#059669] px-6 py-3 text-white font-semibold hover:bg-[#047857]"
              data-analytics="cta_waitlist_hero"
            >
              Request early access
            </Link>
            <a
              href="#demo"
              className="inline-flex items-center justify-center rounded-md border px-6 py-3 font-medium hover:bg-neutral-50"
            >
              See a live demo
            </a>
          </div>

          {/* Trusted by */}
          <div className="mt-7">
            <p className="text-xs uppercase tracking-wide text-neutral-500">Trusted by growing businesses</p>

            <div className="mt-3 flex flex-wrap items-center gap-3">
              {/* Drips */}
              <div className="flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-2">
                <Image
                  src="/drips.png"
                  alt="Drips Confectionary"
                  width={120}
                  height={28}
                  className="h-5 w-auto object-contain"
                />
                <span className="text-sm font-medium text-neutral-700">Drips Confectionary</span>
              </div>

              {/* Obsession */}
              <div className="flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-2">
                <Image
                  src="/obsession.png"
                  alt="Obsession Accessories"
                  width={120}
                  height={28}
                  className="h-5 w-auto object-contain"
                />
                <span className="text-sm font-medium text-neutral-700">Obsession Accessories</span>
              </div>
            </div>

            <p className="mt-2 text-xs text-neutral-500">
              Logos shown with permission. More customer stories coming soon.
            </p>
          </div>
        </motion.div>

        {/* RIGHT: image - ✅ placed under on md/tablet automatically because grid becomes 1 column */}
        <motion.div
          {...fadeInUp(0.2)}
          className="rounded-2xl border border-neutral-200 bg-white shadow-sm overflow-hidden"
        >
          <div className="h-9 bg-neutral-100 flex items-center gap-1 px-3">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
          </div>

          <div className="p-4 md:p-5">
            <div className="rounded-xl border overflow-hidden bg-neutral-100">
              <Image
                src="/dashboard.png"
                alt="Innvois dashboard"
                width={1280}
                height={800}
                priority
                className="w-full h-auto"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}