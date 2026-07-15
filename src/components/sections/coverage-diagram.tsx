type City = { name: string; blurb: string };

const positions = [
  { x: 260, y: 115 },
  { x: 210, y: 205 },
  { x: 155, y: 275 },
  { x: 255, y: 385 },
  { x: 365, y: 160 },
];

export function CoverageDiagram({ title, cities }: { title: string; cities: City[] }) {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-white/12 bg-ink p-6 text-white sm:p-8">
      <svg
        viewBox="0 0 500 500"
        role="img"
        aria-label={title}
        className="mx-auto aspect-square w-full max-w-lg"
      >
        <path
          d="M126 72 282 54l90 56 48 108-26 128-106 96-130-34-77-105 18-126Z"
          fill="none"
          stroke="rgb(255 255 255 / 0.13)"
          strokeWidth="2"
        />
        <path
          d="M125 307c67-59 125-91 247-117"
          fill="none"
          stroke="rgb(70 184 223 / 0.28)"
          strokeDasharray="7 10"
          strokeWidth="2"
        />
        {cities.slice(0, 5).map((city, index) => {
          const point = positions[index];
          return (
            <g key={city.name}>
              <circle cx={point.x} cy={point.y} r="15" fill="rgb(0 147 203 / 0.18)" />
              <circle cx={point.x} cy={point.y} r="5" fill="#46b8df" />
              <text
                x={point.x + 18}
                y={point.y + 5}
                fill="white"
                fontSize="15"
                fontFamily="var(--font-archivo), sans-serif"
              >
                {city.name}
              </text>
            </g>
          );
        })}
      </svg>
      <div className="border-t border-white/10 pt-5">
        <p className="eyebrow text-azure-bright">Zuid-Holland</p>
        <p className="mt-2 text-sm leading-relaxed text-mist">Airco@Business · Voorschoten</p>
      </div>
    </div>
  );
}
