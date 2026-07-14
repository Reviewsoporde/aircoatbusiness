"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  label: string;
  caption: string;
};

const START = 28.6;
const TARGET = 21.0;
const DURATION_MS = 2400;

/** Corner tick for the instrument-panel frame */
function Tick({ className }: { className: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute size-2.5 border-azure/60 ${className}`}
    />
  );
}

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
    <div className="relative border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md sm:p-9">
      <Tick className="top-0 left-0 border-t border-l" />
      <Tick className="top-0 right-0 border-t border-r" />
      <Tick className="bottom-0 left-0 border-b border-l" />
      <Tick className="right-0 bottom-0 border-r border-b" />

      <p className="eyebrow mb-8 text-mist">{label}</p>
      <p className="font-mono text-7xl leading-none tabular-nums text-white sm:text-8xl">
        {value.toFixed(1).replace(".", ",")}
        <span className="ml-2 text-2xl text-mist sm:text-3xl">°C</span>
      </p>
      <div
        aria-hidden
        className="mt-8 h-px w-full bg-white/10"
      >
        <div
          className="h-px bg-azure transition-[width] duration-200 ease-out"
          style={{ width: `${((START - value) / (START - TARGET)) * 100}%` }}
        />
      </div>
      <p className="mt-5 flex items-center gap-2 font-mono text-xs tracking-wider text-mist">
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
