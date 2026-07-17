import { cn } from "@/lib/utils";

const GOOGLE_MARK_URL =
  "https://www.gstatic.com/images/branding/product/1x/googleg_32dp.png";

export function GoogleMark({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      className={cn("block shrink-0 bg-contain bg-center bg-no-repeat", className)}
      style={{ backgroundImage: `url(${GOOGLE_MARK_URL})` }}
      {...props}
    />
  );
}
