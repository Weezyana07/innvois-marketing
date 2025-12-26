// src/components/landing/Demo.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import { fadeInUp } from "./animations";

export default function Demo() {
  // If /public/demo/demo.mp4 doesn't exist, we show /public/dashboard.png
  const [canPlay, setCanPlay] = useState(false);

  useEffect(() => {
    const test = document.createElement("video");
    setCanPlay(Boolean(test.canPlayType && test.canPlayType("video/mp4")));
  }, []);

  return (
    <section id="demo" className="section section--tint">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <motion.div {...fadeInUp(0)} className="rounded-2xl border p-6 md:p-10 bg-white">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-bold tracking-tight">A dashboard built for SMEs</h3>
              <p className="mt-3 text-neutral-600">Simple cards, clean tables, instant filters — no clutter.</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-center gap-2"><CheckCircle2 className="text-[#059669] w-4 h-4" /> Paid vs Unpaid at a glance</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-[#059669] w-4 h-4" /> Export CSV / PDF</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-[#059669] w-4 h-4" /> Mobile-friendly by default</li>
              </ul>
              <Link href="/waitlist" className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#059669] px-5 py-3 text-white font-semibold hover:bg-[#047857]" data-analytics="cta_waitlist_demo">
                Request access <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="h-72 md:h-80 rounded-xl border overflow-hidden bg-black/5">
              {canPlay ? (
                <video
                  className="h-full w-full object-cover"
                  src="/demo/demo.mp4"   // put your file at public/demo/demo.mp4
                  poster="/dashboard.png" // nice preview if it hasn't loaded
                  autoPlay muted loop playsInline preload="metadata"
                />
              ) : (
                <Image
                  src="/dashboard.png"
                  alt="Innvois dashboard"
                  width={1280} height={800}
                  className="h-full w-full object-cover"
                />
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}