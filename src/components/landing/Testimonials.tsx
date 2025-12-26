// src/components/landing/Testimonials.tsx
"use client";

import Section from "./Section";

export default function TestimonialsPayments() {
  return (
    <>
      {/* TESTIMONIALS */}
      <Section variant="plain">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Loved by growing SMEs</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            ["“We get paid 3× faster.”", "Ada • Ade Foods"],
            ["“Clients pay without chasing.”", "Uche • Pixel Print"],
            ["“Setup took minutes.”", "Zainab • Studio Z"],
          ].map(([q, who]) => (
            <figure key={who} className="rounded-xl border p-6 bg-white">
              <blockquote className="text-neutral-800">{q}</blockquote>
              <figcaption className="mt-3 text-sm text-neutral-500">— {who}</figcaption>
            </figure>
          ))}
        </div>
      </Section>
    </>
  );
}