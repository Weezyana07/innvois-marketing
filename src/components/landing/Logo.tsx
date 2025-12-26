// src/components/landing/logo.tsx
"use client";
import Image from "next/image";

export function LogoMark({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <Image
      src="/innvois-mark.svg"
      alt="Innvois"
      width={size}
      height={size}
      className={className}
      priority
    />
  );
}

export function LogoLockup({
  height = 28,
  className = "",
}: { height?: number; className?: string }) {
  return (
    <Image
      src="/innvois-lockup.svg"
      alt="Innvois"
      width={Math.round(height * (640 / 160))}
      height={height}
      className={className}
      priority
    />
  );
}
