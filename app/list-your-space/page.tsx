import { ListSpaceForm } from "@/components/forms/list-space-form";
import { PageBanner } from "@/components/theme/page-banner";
import { InnerShell } from "@/components/theme/shell";

export const metadata = { title: "List a space | Al Waqt" };

export default function ListYourSpace() {
  return (
    <InnerShell>
      <PageBanner title="List a space" trail={[{ label: "List a space" }]} />
      <section className="listing padding-y-120">
        <div className="container container-two">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="section-heading style-left">
                <span className="section-heading__subtitle bg-gray-100"><span className="text-gradient fw-semibold">For owners and agents</span></span>
                <h2 className="section-heading__title">List a space with the details renters need</h2>
                <p className="section-heading__desc font-18">Fill in your property and contact details, then review and send your listing enquiry on WhatsApp. Share photos and discuss the next steps in the conversation.</p>
              </div>
              <ListSpaceForm />
            </div>
          </div>
        </div>
      </section>
    </InnerShell>
  );
}
