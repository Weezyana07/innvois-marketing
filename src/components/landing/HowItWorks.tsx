// src/components/landing/HowItWorks.tsx
"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "./animations";
import Section from "@/components/landing/Section";

export default function HowItWorks() {
  return (
    <Section id="how" variant="mesh">
      <div className="container mx-auto px-4">
        <motion.div {...fadeInUp(0)}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">How it works</h2>
          <p className="mt-3 text-neutral-600">From invoice to cash — in three simple steps.</p>
        </motion.div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {["Create invoice", "Share pay link", "Get paid"].map((step, i) => (
            <motion.div key={step} {...fadeInUp(0.1 * i)} className="rounded-xl border p-6 bg-white">
              <div className="text-sm font-semibold text-[#047857]">Step {i + 1}</div>
              <h3 className="mt-2 font-semibold text-lg">{step}</h3>
              <p className="mt-2 text-sm text-neutral-600">
                {i === 0 ? "Add items, tax, and customer email/phone."
                  : i === 1 ? "Send via WhatsApp, SMS, or email — no signup needed."
                  : "Payment hits your account; status updates automatically."}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}