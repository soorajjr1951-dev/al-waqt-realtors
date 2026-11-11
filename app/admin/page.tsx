import { DemoNote, Portal, PortalTab, Widget } from "@/components/portal/portal";
import { ListingReview } from "@/components/portal/listing-review";
import { PageBanner } from "@/components/theme/page-banner";
import { InnerShell } from "@/components/theme/shell";
import { spaces } from "@/lib/spaces";

export const metadata = { title: "Admin | Al Waqt" };

const queue = [spaces[3], spaces[2]];

const tabs: PortalTab[] = [
  {
    id: "overview",
    label: "Overview",
    icon: "fa-chart-line",
    content: (
      <>
        <DemoNote />
        <div className="row gy-4 dashboard-widget-wrapper">
          <Widget icon="fa-clipboard-check" value={12} label="Listings pending review" />
          <Widget icon="fa-calendar-alt" value={28} label="Viewing requests waiting" />
          <Widget icon="fa-flag" value={3} label="Reported listings" />
          <Widget icon="fa-home" value={spaces.length} label="Live listings" />
        </div>
      </>
    ),
  },
  {
    id: "review",
    label: "Listing review",
    icon: "fa-list",
    content: (
      <>
        <DemoNote />
        <ListingReview queue={queue} />
      </>
    ),
  },
];

export default function Admin() {
  return (
    <InnerShell>
      <PageBanner title="Marketplace overview" trail={[{ label: "Admin" }]} />
      <Portal tabs={tabs} />
    </InnerShell>
  );
}
