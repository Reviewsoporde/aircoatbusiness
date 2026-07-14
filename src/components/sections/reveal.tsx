"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Stagger direct children instead of revealing the wrapper as one block */
  group?: boolean;
  /** Extra delay (ms) before this block reveals */
  delay?: number;
  as?: "div" | "ul" | "ol";
};

/**
 * Scroll-entry reveal. Adds `.is-revealed` once the element enters the
 * viewport; the transition itself lives in globals.css so reduced-motion
 * and no-script fallbacks stay in one place.
 */
export function Reveal({ children, className, group, delay, as = "div" }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-revealed");
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-revealed");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as;
  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={cn(group ? "reveal-group" : "reveal", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
