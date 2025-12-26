// src/app/(public)/contact/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Shield, ArrowRight, Clock, Sparkles } from "lucide-react";
import { Header, Footer, ForceLightOnce } from "../landing";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "ok" | "err">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) throw new Error("Bad response");
      setState("ok");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setState("err");
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900" style={{ colorScheme: "light" }}>
      <ForceLightOnce />
      <Header />

      <main className="flex-1">
        {/* HERO */}
        <section className="border-b bg-[linear-gradient(to_bottom,#ecfdf5_0%,rgba(236,253,245,0)_70%)]">
          <div className="container mx-auto px-4 py-12 md:py-16">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#d1fae5] bg-white/70 px-3 py-1 text-xs font-medium text-[#047857]">
              <Sparkles className="w-4 h-4" /> Contact
            </p>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">Let’s talk.</h1>
            <p className="mt-4 max-w-2xl text-lg text-neutral-600">
              Support, partnerships, press, or demos — send a message and we’ll get back to you.
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="container mx-auto px-4 py-12 md:py-16">
          {/* ✅ Stacks on tablet, becomes 2 cols on lg (pro feel) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            {/* FORM */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm">
              <h2 className="text-xl font-bold tracking-tight">Send us a message</h2>
              <p className="mt-2 text-sm text-neutral-600">
                Use the form — messages go straight to our inbox and are routed internally.
              </p>

              <form onSubmit={onSubmit} className="mt-6 grid gap-4">
                <div className="grid gap-2">
                  <label className="text-sm font-medium">Name</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="rounded-md border border-neutral-200 px-3 py-2 outline-none focus:ring-2 focus:ring-[#059669]"
                    placeholder="Your name"
                  />
                </div>

                <div className="grid gap-2">
                  <label className="text-sm font-medium">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="rounded-md border border-neutral-200 px-3 py-2 outline-none focus:ring-2 focus:ring-[#059669]"
                    placeholder="you@business.com"
                  />
                </div>

                <div className="grid gap-2">
                  <label className="text-sm font-medium">Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={6}
                    className="rounded-md border border-neutral-200 px-3 py-2 outline-none focus:ring-2 focus:ring-[#059669]"
                    placeholder="Tell us what you need…"
                  />
                </div>

                <button
                  disabled={state === "loading"}
                  className="rounded-md bg-[#059669] px-5 py-3 text-white font-semibold hover:bg-[#047857] disabled:opacity-60"
                >
                  {state === "loading" ? "Sending…" : "Send message"}
                </button>

                {state === "ok" && <p className="text-sm text-[#047857]">Message received ✅ We’ll reply soon.</p>}
                {state === "err" && <p className="text-sm text-red-600">Something went wrong. Try again.</p>}

                <p className="text-xs text-neutral-500">
                  By contacting us, you agree to our{" "}
                  <Link href="/legal/privacy" className="text-[#059669] hover:underline">
                    Privacy Policy
                  </Link>.
                </p>
              </form>
            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-6">
              {/* QUICK ACTIONS */}
              <div className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm">
                <h3 className="text-xl font-bold tracking-tight">Quick actions</h3>

                <div className="mt-4 grid gap-3 text-sm">
                  {/* ✅ Fix: pricing should go to landing section */}
                  <Link href="/#pricing" className="inline-flex items-center justify-between rounded-xl border border-neutral-200 px-4 py-3 hover:bg-neutral-50">
                    <span>Pricing</span>
                    <ArrowRight className="w-4 h-4 text-neutral-400" />
                  </Link>

                  <Link href="/#demo" className="inline-flex items-center justify-between rounded-xl border border-neutral-200 px-4 py-3 hover:bg-neutral-50">
                    <span>See demo</span>
                    <ArrowRight className="w-4 h-4 text-neutral-400" />
                  </Link>

                  <Link href="/about" className="inline-flex items-center justify-between rounded-xl border border-neutral-200 px-4 py-3 hover:bg-neutral-50">
                    <span>About Innvois</span>
                    <ArrowRight className="w-4 h-4 text-neutral-400" />
                  </Link>

                  {/* ✅ Fix: privacy route */}
                  <Link href="/legal/privacy" className="inline-flex items-center justify-between rounded-xl border border-neutral-200 px-4 py-3 hover:bg-neutral-50">
                    <span>Privacy</span>
                    <ArrowRight className="w-4 h-4 text-neutral-400" />
                  </Link>

                  <div className="flex gap-3">
                    <Link href="/legal/terms" className="flex-1 inline-flex items-center justify-between rounded-xl border border-neutral-200 px-4 py-3 hover:bg-neutral-50">
                      <span>Terms</span>
                      <ArrowRight className="w-4 h-4 text-neutral-400" />
                    </Link>
                    <Link href="/legal/cookies" className="flex-1 inline-flex items-center justify-between rounded-xl border border-neutral-200 px-4 py-3 hover:bg-neutral-50">
                      <span>Cookies</span>
                      <ArrowRight className="w-4 h-4 text-neutral-400" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* CONTACT CHANNELS */}
              <div className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm">
                <h3 className="text-xl font-bold tracking-tight">Contact channels</h3>

                <div className="mt-4 grid gap-4">
                  <div className="flex items-start gap-3 rounded-xl border border-neutral-200 p-4">
                    <Mail className="w-5 h-5 text-[#059669] mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold">General inquiries</div>
                      <a className="text-sm text-neutral-600 hover:text-[#059669]" href="mailto:info@innvois.com">
                        info@innvois.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-neutral-200 p-4">
                    <Shield className="w-5 h-5 text-[#059669] mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold">Security disclosures</div>
                      <a className="text-sm text-neutral-600 hover:text-[#059669]" href="mailto:security@innvois.com">
                        security@innvois.com
                      </a>
                      <div className="mt-1 text-xs text-neutral-500">Report responsibly — we take this seriously.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-neutral-200 p-4">
                    <Clock className="w-5 h-5 text-[#059669] mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold">Typical response time</div>
                      <div className="text-sm text-neutral-600">Within 24–48 hours (business days)</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* WHAT TO CONTACT FOR */}
              <div className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm">
                <h3 className="text-xl font-bold tracking-tight">What should you contact us for?</h3>
                <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                  <li>✅ Demo requests & onboarding support</li>
                  <li>✅ Partnerships (banks, telcos, agents, platforms)</li>
                  <li>✅ Press/media</li>
                  <li>✅ Security disclosures</li>
                </ul>
                <p className="mt-4 text-xs text-neutral-500">
                  Tip: include your business name + what you want to achieve so we can route faster.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}