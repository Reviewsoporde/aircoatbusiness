/** Compact trust/value bar directly under the hero — short points only. */
export function TrustBar({ points }: { points: string[] }) {
  return (
    <div className="border-y border-white/8 bg-ink">
      <ul className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-2.5 px-4 py-5 sm:px-6 lg:justify-between lg:px-8">
        {points.map((point) => (
          <li
            key={point}
            className="flex items-center gap-2.5 font-mono text-[11px] tracking-[0.18em] text-white/55"
          >
            <span aria-hidden className="size-1 bg-azure-bright" />
            {point.toUpperCase()}
          </li>
        ))}
      </ul>
    </div>
  );
}
