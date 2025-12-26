import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Innvois — Invoicing, Payments & Tax Tracking for SMEs",
  description:
    "Create invoices, accept payments, generate receipts, and track VAT/tax—all in one simple platform.",
  metadataBase: new URL("https://www.innvois.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
