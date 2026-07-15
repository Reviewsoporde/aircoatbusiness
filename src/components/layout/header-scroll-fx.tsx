"use client";

import { useEffect } from "react";

/**
 * Adds the compact glass state after the page-top sentinel leaves the viewport.
 * IntersectionObserver avoids running work on every scroll frame.
 */
export function HeaderScrollFx({
  targetId,
  sentinelId = "header-scroll-sentinel",
}: {
  targetId: string;
  sentinelId?: string;
}) {
  useEffect(() => {
    const header = document.getElementById(targetId);
    const sentinel = document.getElementById(sentinelId);
    if (!header || !sentinel) return;

    const observer = new IntersectionObserver(([entry]) => {
      header.toggleAttribute("data-scrolled", !entry.isIntersecting);
    });

    observer.observe(sentinel);
    const hero = document.querySelector<HTMLElement>(".site-main > section:first-of-type");
    const heroObserver = hero
      ? new IntersectionObserver(
          ([entry]) => {
            header.toggleAttribute("data-past-hero", !entry.isIntersecting);
          },
          { rootMargin: "-80px 0px 0px 0px", threshold: 0 },
        )
      : null;
    if (hero && heroObserver) heroObserver.observe(hero);

    return () => {
      observer.disconnect();
      heroObserver?.disconnect();
    };
  }, [sentinelId, targetId]);

  return null;
}
