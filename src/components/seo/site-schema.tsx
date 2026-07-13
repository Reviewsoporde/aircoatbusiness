import {
  localBusinessSchema,
  organizationSchema,
  webSiteSchema,
} from "@/lib/schema";
import { JsonLd } from "./json-ld";

/** Site-wide JSON-LD: Organization + LocalBusiness (HVACBusiness) + WebSite. */
export function SiteSchema() {
  return (
    <JsonLd
      data={[organizationSchema(), localBusinessSchema(), webSiteSchema()]}
    />
  );
}
