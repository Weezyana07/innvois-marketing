// src/components/legal/layout.tsx
import Link from "next/link";
import { ForceLightOnce, Header, Footer } from "@/components/landing";

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900" style={{ colorScheme: "light" }}>
      <ForceLightOnce />
      <Header />

      <main className="flex-1">
        <section className="border-b bg-[linear-gradient(to_bottom,#ecfdf5_0%,rgba(236,253,245,0)_70%)]">
          <div className="container mx-auto px-4 py-10 md:py-12">
            <div className="flex items-center justify-between gap-3">
              <Link href="/" className="text-sm font-medium text-neutral-700 hover:text-[#059669]">
                ← Back to home
              </Link>
              <div className="text-sm text-neutral-500">Legal</div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-10 md:py-12">
          <div
            className={[
              "rounded-2xl border border-neutral-200 bg-white p-6 md:p-10 shadow-sm",
              // ✅ theme Tailwind Typography globally for legal pages
              "prose prose-neutral max-w-none",
              "prose-a:text-[#059669] prose-a:no-underline hover:prose-a:underline",
              "prose-h1:text-neutral-900 prose-h2:text-neutral-900 prose-h3:text-neutral-900",
              "prose-hr:border-emerald-100",
              "prose-strong:text-neutral-900",
            ].join(" ")}
          >
            {children}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}