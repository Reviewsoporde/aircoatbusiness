import { ArrowUpRight, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  profileLabel: string;
  profileLinkLabel: string;
  compactProfileLink?: boolean;
  className?: string;
};

/** Keyless Google Maps embed for the verified business listing. */
export function GoogleBusinessMap({
  title,
  profileLabel,
  profileLinkLabel,
  compactProfileLink = false,
  className,
}: Props) {
  const fullAddress = `${siteConfig.address.street}, ${siteConfig.address.postalCode} ${siteConfig.address.city}`;
  const mapsEmbedUrl = `https://www.google.com/maps?cid=${siteConfig.googleBusiness.cid}&output=embed`;
  const mapsProfileUrl = `https://www.google.com/maps?cid=${siteConfig.googleBusiness.cid}`;

  return (
    <div
      className={cn(
        "group/map relative min-h-[440px] overflow-hidden rounded-[32px] border border-white/12 bg-carbon shadow-panel transition-colors duration-300 focus-within:border-azure/60",
        className,
      )}
    >
      <iframe
        src={mapsEmbedUrl}
        title={title}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 size-full border-0 grayscale-[15%] transition-[filter] duration-500 group-hover/map:grayscale-0"
      />

      {/* Keep map dragging available. Only the profile link takes pointer events. */}
      <div className="pointer-events-none absolute right-4 bottom-4 left-4 z-10 flex sm:right-auto">
        <a
          href={mapsProfileUrl}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={profileLabel}
          className={cn(
            "group/profile pointer-events-auto flex items-center gap-3 border border-white/12 bg-ink/92 text-sm text-white shadow-panel backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-azure/45 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-azure",
            compactProfileLink
              ? "w-auto rounded-full py-2.5 pr-4 pl-2.5"
              : "w-full rounded-[18px] p-4 sm:w-auto sm:max-w-md",
          )}
        >
          <span
            className={cn(
              "flex shrink-0 items-center justify-center rounded-full bg-azure text-ink",
              compactProfileLink ? "size-9" : "size-10",
            )}
          >
            <MapPin className="size-4" aria-hidden />
          </span>
          {compactProfileLink ? (
            <span className="flex items-center gap-1.5 font-semibold text-white">
              {profileLinkLabel}
              <ArrowUpRight
                className="size-3.5 transition-transform duration-300 group-hover/profile:-translate-y-0.5 group-hover/profile:translate-x-0.5"
                aria-hidden
              />
            </span>
          ) : (
            <span className="min-w-0 flex-1">
              <span className="block">{fullAddress}</span>
              <span className="mt-1 flex items-center gap-1.5 font-semibold text-azure-bright">
                {profileLinkLabel}
                <ArrowUpRight
                  className="size-3.5 transition-transform duration-300 group-hover/profile:-translate-y-0.5 group-hover/profile:translate-x-0.5"
                  aria-hidden
                />
              </span>
            </span>
          )}
        </a>
      </div>
    </div>
  );
}
