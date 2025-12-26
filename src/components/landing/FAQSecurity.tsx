// src/components/landing/FAQSecurity.tsx
"use client";

import { useMemo, useState } from "react";
import Section from "./Section";
import { Search } from "lucide-react";

type Cat = "All" | "Product" | "Pricing" | "Security";

type QA = {
  category: Exclude<Cat, "All">;
  q: string;
  a: string;
};

const QA_ITEMS: QA[] = [
  // PRODUCT
  {
    category: "Product",
    q: "Do customers need accounts?",
    a: "No. They just tap the pay link and pay — no signup required.",
  },
  {
    category: "Product",
    q: "How do customers pay?",
    a: "Cards, bank transfers, and QR — depending on your gateway setup.",
  },
  {
    category: "Product",
    q: "Can I brand my invoices?",
    a: "Yes — add your logo and business details, and it appears on invoices and receipts.",
  },
  {
    category: "Product",
    q: "Does Innvois include product catalog?",
    a: "Yes. Save items/services once and reuse them when creating invoices to reduce manual entry.",
  },
  {
    category: "Product",
    q: "Can I track paid vs unpaid?",
    a: "Yes. You can see paid, unpaid, and overdue invoices at a glance.",
  },
  {
    category: "Product",
    q: "Is Innvois VAT-ready?",
    a: "Yes. Innvois supports VAT-style records and keeps invoice history organized for reporting.",
  },
  {
    category: "Product",
    q: "Can I export my records?",
    a: "Yes. Export CSV for reconciliation and reporting.",
  },

  // PRICING
  {
    category: "Pricing",
    q: "Can I switch plans later?",
    a: "Yes. You can upgrade or downgrade anytime. Changes apply immediately or from the next billing cycle depending on billing setup.",
  },
  {
    category: "Pricing",
    q: "Do I need a card to start?",
    a: "No. Start on the Free plan without a card and upgrade when you’re ready.",
  },
  {
    category: "Pricing",
    q: "What’s the difference between Starter and Pro?",
    a: "Starter is invoicing + getting paid + product catalog. Pro adds business tracking: expenses, profit visibility, advanced exports, and support for more users and multiple businesses.",
  },
  {
    category: "Pricing",
    q: "Does Starter include product catalog?",
    a: "Yes. Starter includes product catalog so you can save items/services and reuse them on invoices.",
  },
  {
    category: "Pricing",
    q: "Does Starter include expenses tracking?",
    a: "No. Expenses and profit visibility are available on Pro.",
  },
  {
    category: "Pricing",
    q: "How does yearly billing work?",
    a: "Yearly means you pay once for the year and get a discount vs monthly. You can still upgrade anytime.",
  },
  {
    category: "Pricing",
    q: "Are there invoice limits?",
    a: "Free has a monthly invoice limit. Starter and Pro are unlimited. For very high volumes or custom workflows, contact us for enterprise.",
  },
  {
    category: "Pricing",
    q: "Do you charge extra transaction fees?",
    a: "Innvois plans cover your software features. Payment processors may still charge standard transaction fees at checkout, depending on your selected gateway.",
  },
  {
    category: "Pricing",
    q: "Can I cancel anytime?",
    a: "Yes. You can cancel anytime. Access stays active until the end of your billing period.",
  },

  // SECURITY
  {
    category: "Security",
    q: "How do you protect my data?",
    a: "We use secure transport (TLS) and structured access controls. Where applicable, data is encrypted at rest and monitored for suspicious activity.",
  },
  {
    category: "Security",
    q: "How are payments secured?",
    a: "Payments are handled via gateway partners (e.g., Paystack). PCI requirements are handled by the gateway during checkout.",
  },
  {
    category: "Security",
    q: "Do you keep audit trails?",
    a: "Yes. Critical actions like invoice creation and payment updates are tracked to support accountability and dispute resolution.",
  },
];

function Pill({
  active,
  children,
  onClick,
}: {
  active?: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "inline-flex items-center rounded-full px-3 py-1 text-sm border transition",
        active
          ? "bg-emerald-600 text-white border-emerald-600"
          : "bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-50",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

export default function FAQSecurity() {
  const [category, setCategory] = useState<Cat>("All");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return QA_ITEMS.filter((item) => {
      const matchesCat = category === "All" ? true : item.category === category;
      const matchesQuery =
        !query ||
        item.q.toLowerCase().includes(query) ||
        item.a.toLowerCase().includes(query);
      return matchesCat && matchesQuery;
    });
  }, [category, q]);

  return (
    <>
      {/* FAQ */}
      <Section id="faq" variant="tint">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">FAQs</h2>
            <p className="mt-2 text-neutral-600 max-w-2xl">
              Search answers or filter by category — product, pricing, and security.
            </p>
          </div>

          {/* Search */}
          <div className="w-full md:w-[420px]">
            <div className="flex items-center gap-2 rounded-xl border bg-white px-3 py-2">
              <Search className="w-4 h-4 text-neutral-500" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search FAQs…"
                className="w-full outline-none text-sm"
              />
            </div>
          </div>
        </div>

        {/* Category pills */}
        <div className="mt-5 flex flex-wrap gap-2">
          <Pill active={category === "All"} onClick={() => setCategory("All")}>
            All
          </Pill>
          <Pill active={category === "Product"} onClick={() => setCategory("Product")}>
            Product
          </Pill>
          <Pill active={category === "Pricing"} onClick={() => setCategory("Pricing")}>
            Pricing
          </Pill>
          <Pill active={category === "Security"} onClick={() => setCategory("Security")}>
            Security
          </Pill>

          {(q.trim() || category !== "All") && (
            <button
              type="button"
              onClick={() => {
                setQ("");
                setCategory("All");
              }}
              className="ml-auto text-sm text-emerald-700 hover:underline"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Results */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {filtered.map((item) => (
            <details
              key={`${item.category}:${item.q}`}
              className="rounded-xl border p-5 bg-white open:bg-neutral-50"
            >
              <summary className="font-semibold cursor-pointer">
                <span className="mr-2 inline-flex items-center rounded-full border border-emerald-100 bg-emerald-50 px-2 py-0.5 text-[11px] text-emerald-700">
                  {item.category}
                </span>
                {item.q}
              </summary>
              <p className="mt-2 text-sm text-neutral-600">{item.a}</p>
            </details>
          ))}

          {filtered.length === 0 && (
            <div className="md:col-span-2 rounded-xl border bg-white p-6 text-sm text-neutral-600">
              No results. Try a different keyword (e.g. “yearly”, “Starter”, “VAT”, “export”).
            </div>
          )}
        </div>
      </Section>

      {/* SECURITY CARDS */}
      <Section id="security" variant="plain">
        <div className="container mx-auto px-4 py-12 grid md:grid-cols-3 gap-6">
          {[
            ["Data protection", "TLS in transit, encryption at rest where applicable."],
            ["Payment security", "PCI handled via gateway partners (Paystack/others)."],
            ["Auditability", "Invoice + payment activity trails for tracking and disputes."],
          ].map(([h, p]) => (
            <div key={h} className="rounded-xl border p-6 bg-white">
              <h3 className="font-semibold">{h}</h3>
              <p className="mt-2 text-sm text-neutral-600">{p}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}