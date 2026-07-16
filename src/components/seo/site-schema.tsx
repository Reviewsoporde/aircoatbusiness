import {
  contactPointSchema,
  localBusinessSchema,
  organizationSchema,
  webSiteSchema,
} from "@/lib/schema";
import { JsonLd } from "./json-ld";

/** Site-wide JSON-LD entity graph, including an explicit ContactPoint entity. */
export function SiteSchema() {
  return (
    <JsonLd
      data={[
        organizationSchema(),
        localBusinessSchema(),
        webSiteSchema(),
        contactPointSchema(),
      ]}
    />
  );
}
