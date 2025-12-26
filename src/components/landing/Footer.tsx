// src/components/landing/Footer.tsx
"use client";
import Link from "next/link";
import { LogoMark } from "./Logo";
import HomeHashLink from "./HomeHashLink";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-neutral-200">
      <div className="container mx-auto px-4 py-10 grid md:grid-cols-3 gap-6 text-sm">
        <div>
          <div className="flex items-center gap-2">
            <LogoMark size={28} className="rounded-md" />
            <span className="font-semibold">Innvois</span>
          </div>
          <p className="mt-3 text-neutral-600">Smart e-invoicing and collections for SMEs.</p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="font-semibold">Product</div>
            <ul className="mt-2 space-y-2">
              <li><HomeHashLink hash="#features" className="hover:text-[#059669]">Features</HomeHashLink></li>
              <li><HomeHashLink hash="#pricing" className="hover:text-[#059669]">Pricing</HomeHashLink></li>
              {/* <li><Link href="/status" className="hover:text-[#059669]">Status</Link></li> */}
              {/* <li><Link href="/changelog" className="hover:text-[#059669]">Changelog</Link></li> */}
            </ul>
          </div>
          <div>
            <div className="font-semibold">Company</div>
            <ul className="mt-2 space-y-2">
              <li><Link href="/about" className="hover:text-[#059669]">About</Link></li>
              <li><Link href="/contact" className="hover:text-[#059669]">Contact</Link></li>
              <li><Link href="/legal/terms" className="hover:text-[#059669]">Terms</Link></li>
              <li><Link href="/legal/privacy" className="hover:text-[#059669]">Privacy</Link></li>
              <li><Link href="/legal/cookies" className="hover:text-[#059669]">Cookies</Link></li>
            </ul>
          </div>
        </div>
        <div className="md:text-right">
          <div>&copy; {new Date().getFullYear()} Innvois</div>
          <div className="text-neutral-500">All rights reserved.</div>

          {/* Replace the waitlist form with a simple CTA */}
          <div className="mt-3">
            <Link
              href="/waitlist"
              className="inline-flex items-center justify-center rounded-md bg-[#059669] px-4 py-2 text-white font-semibold hover:bg-[#047857]"
            >
              Join waitlist
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
