import Link from "next/link";
import { DemoNote, Portal, PortalTab, Widget } from "@/components/portal/portal";
import { ProfileForm } from "@/components/portal/profile-form";
import { PageBanner } from "@/components/theme/page-banner";
import { InnerShell } from "@/components/theme/shell";
import { LANDMARK, formatRent, spaces } from "@/lib/spaces";

export const metadata = { title: "My dashboard | Al Waqt" };

const saved = [spaces[0], spaces[1]];

const tabs: PortalTab[] = [
  {
    id: "overview",
    label: "Overview",
    icon: "fa-home",
    content: (
      <>
        <DemoNote />
        <div className="row gy-4 dashboard-widget-wrapper">
          <Widget icon="fa-heart" value={saved.length} label="Saved spaces" />
          <Widget icon="fa-calendar-check" value={0} label="Viewing requests" />
          <Widget icon="fa-envelope" value={0} label="Messages" />
        </div>
      </>
    ),
  },
  {
    id: "saved",
    label: "Saved spaces",
    icon: "fa-heart",
    content: (
      <div className="overflow-auto">
        <div className="card common-card min-w-maxContent">
          <div className="card-body">
            <table className="table style-two">
              <thead><tr><th>Saved spaces</th><th>Viewing</th></tr></thead>
              <tbody>
                {saved.map((space) => (
                  <tr key={space.slug}>
                    <td>
                      <div className="d-flex align-items-center gap-3">
                        <div className="cart-item__thumb"><img src={space.image} alt="" className="cover-img" /></div>
                        <div className="cart-item__content">
                          <h6 className="cart-item__title fw-500 font-18"><Link href={`/listings/${space.slug}`} className="link">{space.title}</Link></h6>
                          <p className="property-item__location d-flex gap-2 font-14">
                            <span className="icon text-gradient"><i className="fas fa-map-marker-alt" /></span>{space.distance} km from {LANDMARK}
                          </p>
                          <span className="cart-item__price">Rent: <span className="fw-500 text-heading">{formatRent(space.price)} / month</span></span>
                        </div>
                      </div>
                    </td>
                    <td><Link href={`/listings/${space.slug}#enquiry`} className="btn btn-outline-main btn-sm">Enquire on WhatsApp</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "viewings",
    label: "Viewings",
    icon: "fa-calendar-check",
    content: (
      <div className="card common-card">
        <div className="card-body text-center py-5">
          <h6 className="mb-2">No viewing requests yet</h6>
          <p className="mb-3">Open a property, complete the enquiry form and continue on WhatsApp. Enquiries are not tracked in this demo dashboard.</p>
          <Link href="/rentals" className="btn btn-main">Browse spaces</Link>
        </div>
      </div>
    ),
  },
  { id: "profile", label: "Profile", icon: "fa-user", content: <ProfileForm /> },
];

export default function Dashboard() {
  return (
    <InnerShell>
      <PageBanner title="Renter account" trail={[{ label: "Dashboard" }]} />
      <Portal tabs={tabs} />
    </InnerShell>
  );
}
