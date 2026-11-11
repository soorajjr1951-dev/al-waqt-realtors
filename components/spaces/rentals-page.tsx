import { Suspense } from "react";
import { Cta } from "@/components/theme/cta";
import { PageBanner } from "@/components/theme/page-banner";
import { InnerShell } from "@/components/theme/shell";
import { RentalsView } from "./rentals-view";
import { SpaceType, typeLabel } from "@/lib/spaces";

/** Shared page for /rentals and the per-type pages. */
export function RentalsPage({ type }: { type?: SpaceType }) {
  const title = type ? `${typeLabel[type]}` : "Explore all properties";

  return (
    <InnerShell>
      <PageBanner title={title} trail={type ? [{ label: "Rentals", href: "/rentals" }, { label: typeLabel[type] }] : [{ label: "Rentals" }]} />
      {/* useSearchParams needs a Suspense boundary in a statically exported app. */}
      <Suspense fallback={<section className="property bg-gray-100 padding-y-120"><div className="container container-two"><p>Loading spaces…</p></div></section>}>
        <RentalsView type={type} />
      </Suspense>
      <Cta />
    </InnerShell>
  );
}
