"use client";

import { useEffect } from "react";

/**
 * The mega-menu dropdowns open via pure CSS (:hover / :focus-within), so
 * clicking a link inside one leaves it focused after client-side navigation
 * and the panel never fades out. Blur the clicked link so the CSS state
 * resets and the dropdown closes. Renders nothing.
 */
export function HeaderNavFx({ targetId }: { targetId: string }) {
  useEffect(() => {
    const el = document.getElementById(targetId);
    if (!el) return;
    const onClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement).closest("a");
      if (link && link.closest("[data-nav-dropdown]")) {
        link.blur();
      }
    };
    el.addEventListener("click", onClick);
    return () => el.removeEventListener("click", onClick);
  }, [targetId]);

  return null;
}
