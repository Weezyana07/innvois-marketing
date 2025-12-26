// src/components/landing/Section.tsx
"use client";

import { cn } from "../ui/cn";

type Variant = "plain" | "tint" | "mesh" | "grid" | "raised";
type Props = React.PropsWithChildren<{
  id?: string;
  className?: string;
  container?: boolean;       // adds container paddings
  variant?: Variant;
}>;

export default function Section({
  id, className, container = true, variant = "plain", children,
}: Props) {
  return (
    <section
      id={id}
      className={cn(
        "relative section",
        variant === "tint"  && "section--tint",
        variant === "mesh"  && "section--mesh",
        variant === "grid"  && "section--grid",
        variant === "raised"&& "section--raised",
        className
      )}
    >
      <div className={cn(container && "container mx-auto px-4", "py-10 md:py-16")}>
        {children}
      </div>
    </section>
  );
}