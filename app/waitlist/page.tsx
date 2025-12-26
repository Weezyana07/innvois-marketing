import Link from "next/link";

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <Link href="/" className="text-sm text-neutral-600 hover:text-[#059669]">← Back to Innvois</Link>
        <h1 className="mt-4 text-3xl font-bold tracking-tight">Join the Innvois waitlist</h1>
        <p className="mt-3 text-neutral-600">
          Innvois is preparing for public launch. Join the waitlist to get early access.
        </p>

        <div className="mt-8 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-neutral-600">
            For now, please send your email and business name to:
          </p>
          <a
            href="mailto:hello@innvois.com?subject=Innvois%20Waitlist%20Request"
            className="mt-3 inline-flex items-center justify-center rounded-md bg-[#059669] px-4 py-2 text-sm font-semibold text-white hover:bg-[#047857]"
          >
            Email info@innvois.com
          </a>

          <div className="mt-4 text-xs text-neutral-500">
            Tip: include your phone number and what you sell. We’ll prioritize active businesses.
          </div>
        </div>
      </div>
    </div>
  );
}
