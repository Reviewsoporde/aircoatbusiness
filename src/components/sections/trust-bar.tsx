/** Compact trust/value bar directly under the hero — short points only. */
export function TrustBar({ points }: { points: string[] }) {
  return (
    <div className="border-y border-steel bg-carbon">
      <ul className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4 py-4 sm:px-6 lg:justify-between lg:px-8">
        {points.map((point) => (
          <li
            key={point}
            className="flex items-center gap-2 font-mono text-xs tracking-wider text-mist"
          >
            <span aria-hidden className="size-1 bg-azure-bright" />
            {point.toUpperCase()}
          </li>
        ))}
      </ul>
    </div>
  );
}
