// src/components/landing/ProductShots.tsx
"use client";
import Image from "next/image";
import Section from "./Section";

const shots = [
  { src: "/dashboard.png", alt: "Dashboard overview" },
  // Add more as you have them:
  { src: "/invoice.png", alt: "Create invoice" },
  { src: "/receipt.png", alt: "Customer receipt" },
];

export default function ProductShots() {
  if (shots.length === 0) return null;
  return (
    <Section variant="grid">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">See it in action</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {shots.map(s => (
          <figure key={s.src} className="rounded-xl border bg-white overflow-hidden">
            <Image src={s.src} alt={s.alt} width={1200} height={800} className="w-full h-auto" />
            <figcaption className="px-3 py-2 text-sm text-neutral-600">{s.alt}</figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}