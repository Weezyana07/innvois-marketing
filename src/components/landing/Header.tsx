// src/components/landing/Header.tsx
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { LogoMark } from "./Logo"; 
import { usePathname } from "next/navigation";
import HomeHashLink from "./HomeHashLink";

export default function Header() {
  const pathname = usePathname();

  const href = (hash: string) => (pathname === "/" ? hash : `/${hash}`);

  return (
    <header className="sticky top-0 z-40 border-b bg-white/70 backdrop-blur border-neutral-200">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2" aria-label="Innvois home">
            <LogoMark size={32} className="rounded-lg" />
            <span className="font-semibold text-lg tracking-tight">Innvois</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            <HomeHashLink hash="#features" className="hover:text-[#059669]">Features</HomeHashLink>
            <HomeHashLink hash="#usecases" className="hover:text-[#059669]">Use cases</HomeHashLink>
            <HomeHashLink hash="#how" className="hover:text-[#059669]">How it works</HomeHashLink>
            <HomeHashLink hash="#pricing" className="hover:text-[#059669]">Pricing</HomeHashLink>
            <HomeHashLink hash="#faq" className="hover:text-[#059669]">FAQ</HomeHashLink>
          </div>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/waitlist" className="text-sm font-medium hover:text-[#059669]">Join waitlist</Link>
            <Link
              href="/waitlist"
              className="inline-flex items-center gap-2 rounded-md bg-[#059669] px-4 py-2 text-sm font-semibold text-white hover:bg-[#047857]"
              data-analytics="cta_waitlist_header"
            >
              Request access <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Burger */}
          <HeaderBurger  href={href}/>
        </div>
      </nav>
    </header>
  );
}

function HeaderBurger({ href }: { href: (hash: string) => string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden inline-flex items-center justify-center rounded-md border border-neutral-200 p-2"
        aria-label="Open menu"
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <Menu className="h-5 w-5" />
      </button>
      {open && <HeaderDrawer onClose={() => setOpen(false)} href={href} />}
    </>
  );
}

function HeaderDrawer({ onClose, href }: { onClose: () => void; href: (hash: string) => string }) {
  if (typeof document === "undefined") return null;
  return createPortal(<DrawerContent onClose={onClose} href={href} />, document.body);
}

function DrawerContent({ onClose, href }: { onClose: () => void; href: (hash: string) => string }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [enter, setEnter] = useState(false);

  useEffect(() => {
    setEnter(true);
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") onClose(); }
    function onClick(e: MouseEvent) { if (panelRef.current && !panelRef.current.contains(e.target as Node)) onClose(); }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("mousedown", onClick); };
  }, [onClose]);

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm lg:hidden" />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        className={[
          "fixed right-0 top-0 z-[60] h-full w-[88%] max-w-sm",
          "bg-white border-l border-neutral-200 shadow-xl",
          "p-4 flex flex-col transform transition-transform duration-200 ease-out lg:hidden",
          enter ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center gap-2">
            <LogoMark size={28} className="rounded-lg" />
            <span className="font-semibold">Innvois</span>
          </div>
          <button onClick={onClose} aria-label="Close menu" className="rounded-md border border-neutral-200 p-2">
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="mt-4 grid gap-2 text-base">
          <HomeHashLink onClick={onClose} hash="#features"  className="rounded-md px-2 py-2 hover:bg-neutral-50">Features</HomeHashLink>
          <HomeHashLink onClick={onClose} hash="#usecases" className="rounded-md px-2 py-2 hover:bg-neutral-50">Use cases</HomeHashLink>
          <HomeHashLink onClick={onClose} hash="#how"      className="rounded-md px-2 py-2 hover:bg-neutral-50">How it works</HomeHashLink>
          <HomeHashLink onClick={onClose} hash="#pricing"  className="rounded-md px-2 py-2 hover:bg-neutral-50">Pricing</HomeHashLink>
          <HomeHashLink onClick={onClose} hash="#faq"      className="rounded-md px-2 py-2 hover:bg-neutral-50">FAQ</HomeHashLink>
        </nav>

        <div className="mt-4 border-t border-neutral-200 pt-4 grid gap-2">
          <Link onClick={onClose} href="/waitlist"  className="rounded-md px-2 py-2 hover:bg-neutral-50">Join waitlist</Link>
          <Link
            onClick={onClose}
            href="/waitlist"
            className="mt-1 inline-flex items-center justify-center rounded-md bg-[#059669] px-4 py-2 text-white font-semibold hover:bg-[#047857]"
            data-analytics="cta_waitlist_drawer"
          >
            Request access
          </Link>
        </div>

        <div className="mt-auto text-xs text-neutral-500">© {new Date().getFullYear()} Innvois</div>
      </div>
    </>
  );
}
