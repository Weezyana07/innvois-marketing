// app/legal/layout.tsx
import LegalLayout from "@/components/legal/layout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <LegalLayout>{children}</LegalLayout>;
}