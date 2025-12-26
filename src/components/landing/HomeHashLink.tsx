"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

type Props = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> &
  Omit<LinkProps, "href"> & {
    hash: string; // e.g. "#features"
  };

export default function HomeHashLink({ hash, children, ...rest }: Props) {
  const pathname = usePathname();
  const href = pathname === "/" ? hash : `/${hash}`;

  return (
    <Link href={href} scroll {...rest}>
      {children}
    </Link>
  );
}