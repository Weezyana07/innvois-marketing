"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { fadeInUp } from "./animations";
import Link from "next/link";

const tiers = [
  {
    name: "Free",
    price: "₦0",
    note: "Launch plan",
    points: [
      "Create and send invoices",
      "Payment links for customers",
      "Receipts and basic revenue tracking",
      "VAT/tax tracking basics",
    ],
    cta: "Join waitlist",
  },
  {
    name: "Starter",
    price: "Coming soon",
    note: "For growing businesses",
    points: [
      "Higher monthly invoice limits",
      "Team access & roles",
      "Expense tracking",
      "Reports and exports",
    ],
    cta: "Request early access",
  },
  {
    name: "Pro",
    price: "Coming soon",
    note: "For serious operators",
    points: [
      "Advanced automations",
      "Inventory + profit insights",
      "Compliance & audit tools",
      "Priority support",
    ],
    cta: "Talk to us",
  },
];

export default function Pricing() {
  return (
    <Section id="pricing" variant="tint">
      <div className="max-w-2xl">
        <div className="text-sm font-semibold text-[#059669]">Pricing</div>
        <h2 className="mt-2 text-3xl font-bold tracking-tight">Start free. Upgrade when you grow.</h2>
        <p className="mt-3 text-neutral-600">
          Innvois launches with a free plan. Paid plans arrive as we roll out more automation.
        </p>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {tiers.map((t, i) => (
          <motion.div
            key={t.name}
            {...fadeInUp(0.05 * i)}
            className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-baseline justify-between">
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <div className="text-sm text-neutral-500">{t.note}</div>
            </div>
            <div className="mt-4 text-3xl font-bold">{t.price}</div>
            <ul className="mt-6 grid gap-2 text-sm text-neutral-700">
              {t.points.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#059669]" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                href={t.name === "Pro" ? "mailto:hello@innvois.com" : "/waitlist"}
                className="inline-flex w-full items-center justify-center rounded-md bg-[#059669] px-4 py-2 text-sm font-semibold text-white hover:bg-[#047857]"
              >
                {t.cta}
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
