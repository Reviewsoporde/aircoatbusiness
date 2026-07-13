"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  label: string;
  caption: string;
};

const START = 28.6;
const TARGET = 21.0;
const DURATION_MS = 2400;

/**
 * Signature element: a temperature readout that settles from an uncomfortable
 * 28,6 °C to a constant 21,0 °C — the product's promise, enacted on page load.
 * Respects prefers-reduced-motion (renders the target immediately).
 */
export function TempReadout({ label, caption }: Props) {
  const [value, setValue] = useState(START);
  const [settled, setSettled] = useState(false);
  const frame = useRef<number>(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = reduceMotion ? 1 : Math.min((now - t0) / DURATION_MS, 1);
      // ease-out quart — fast drop, gentle landing
      const eased = 1 - Math.pow(1 - p, 4);
      setValue(START + (TARGET - START) * eased);
      if (p < 1) {
        frame.current = requestAnimationFrame(tick);
      } else {
        setSettled(true);
      }
    };
    frame.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame.current);
  }, []);

  return (
    <div className="border border-steel bg-carbon/80 p-6 backdrop-blur-sm sm:p-8">
      <p className="eyebrow mb-6 text-mist">{label}</p>
      <p className="font-mono text-6xl font-medium tabular-nums leading-none text-white sm:text-7xl">
        {value.toFixed(1).replace(".", ",")}
        <span className="ml-2 text-2xl text-mist sm:text-3xl">°C</span>
      </p>
      <p className="mt-6 flex items-center gap-2 font-mono text-xs tracking-wider text-mist">
        <span
          aria-hidden
          className={`inline-block size-1.5 rounded-full transition-colors duration-500 ${
            settled ? "bg-azure-bright" : "bg-mist/50"
          }`}
        />
        {caption}
      </p>
    </div>
  );
}
