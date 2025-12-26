// src/components/landing/FeaturesUseCases.tsx
"use client";
import { motion } from "framer-motion";
import { CreditCard, CheckCircle2, LineChart } from "lucide-react";
import { fadeInUp } from "./animations";
import Section from "@/components/landing/Section";

export default function FeaturesUseCases() {
  return (
    <>
      {/* FEATURES */}
      <Section id="features" variant="tint">
        <motion.div {...fadeInUp(0)}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Everything you need to collect like a pro.</h2>
          <p className="mt-3 text-neutral-600">Issue invoices, share pay links, reconcile automatically.</p>
        </motion.div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <motion.div {...fadeInUp(0.1)} className="rounded-xl border p-5">
            <CheckCircle2 className="h-10 w-10 text-[#059669] mb-4" />
            <h3 className="font-semibold text-lg">One-click invoices</h3>
            <p className="mt-2 text-sm text-neutral-600">Logo, tax, items — generate beautiful invoices in seconds.</p>
          </motion.div>
          <motion.div {...fadeInUp(0.2)} className="rounded-xl border p-5">
            <CreditCard className="h-10 w-10 text-[#059669] mb-4" />
            <h3 className="font-semibold text-lg">Pay by link</h3>
            <p className="mt-2 text-sm text-neutral-600">Customers don’t sign up. They just tap the link and pay.</p>
          </motion.div>
          <motion.div {...fadeInUp(0.3)} className="rounded-xl border p-5">
            <LineChart className="h-10 w-10 text-[#059669] mb-4" />
            <h3 className="font-semibold text-lg">Money clarity</h3>
            <p className="mt-2 text-sm text-neutral-600">
              Track revenue, expenses, and profit with VAT-ready records and exports when you need them.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* USE CASES */}
      <Section id="usecases" variant="tint">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Built for how you work</h2>
        <p className="mt-3 text-neutral-600">Pick the flow that matches your business.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            { title: "Freelancers", pts: ["Quick quote → invoice", "Deposit links", "Receipt in one tap"] },
            { title: "Retail & Services", pts: ["WhatsApp pay links", "POS/QR ready", "Daily payouts"] },
            { title: "Agencies", pts: ["Recurring invoices", "Multiple clients", "Exports for accounting"] },
          ].map(({ title, pts }) => (
            <div key={title} className="rounded-xl border p-6 bg-white">
              <h3 className="font-semibold">{title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-600">
                {pts.map((p) => (<li key={p}>✅ {p}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}