import { Cta } from "@/components/theme/cta";
import { FaqAccordion } from "@/components/theme/faq-accordion";
import { PageBanner } from "@/components/theme/page-banner";
import { InnerShell } from "@/components/theme/shell";
import { LANDMARK } from "@/lib/spaces";

export const metadata = { title: "How it works | Al Waqt" };

const steps = [
  { icon: "ppty-type-icon1.svg", title: "1. Search by locality", text: `Browse locations from Attingal to Kazhakootam, then choose rent, sale or lease/rent.` },
  { icon: "ppty-type-icon2.svg", title: "2. Compare useful details", text: "Compare the supplied area, floor details and locality. Request missing details on WhatsApp." },
  { icon: "ppty-type-icon3.svg", title: "3. Enquire on WhatsApp", text: "Fill in the enquiry form, open WhatsApp and send the prepared message. Confirm availability and arrange a visit in the conversation." },
];

const faqs = [
  { question: "Why don't listings show an address?", answer: "Public pages show locality instead of an exact street address. That keeps each owner in control of their property information." },
  { question: "How do I find out where a space is?", answer: "Complete the enquiry form on the property page. Continue on WhatsApp to arrange a visit and request the exact location." },
  { question: "What does the distance mean?", answer: `Only the Attingal land-and-house listing includes a distance: 2 km from Attingal. Other listings show their supplied locality.` },
  { question: "Who can list a space?", answer: "Owners and agents can fill in the List a property form and send the details on WhatsApp. Photos can be shared in that conversation." },
];

export default function HowItWorks() {
  return (
    <InnerShell>
      <PageBanner title="How it works" trail={[{ label: "How it works" }]} />

      <section className="property-type-three padding-y-120">
        <div className="container container-two">
          <div className="section-heading style-left">
            <span className="section-heading__subtitle bg-white"><span className="text-gradient fw-semibold">Renting, without oversharing</span></span>
            <h2 className="section-heading__title">A clearer way to find a place nearby</h2>
            <p className="section-heading__desc font-18">Al Waqt puts the important details up front, while keeping a property&apos;s exact location under the owner&apos;s control.</p>
          </div>
          <div className="row gy-4">
            {steps.map((step) => (
              <div className="col-xl-4 col-sm-6 col-xs-6" key={step.title}>
                <div className="property-type-three-item d-flex align-items-start">
                  <span className="property-type-three-item__icon flex-shrink-0"><img src={`/cityscape/images/icons/${step.icon}`} alt="" /></span>
                  <div className="property-type-three-item__content">
                    <h6 className="property-type-three-item__title">{step.title}</h6>
                    <p className="property-type-three-item__desc font-18">{step.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-two padding-b-120">
        <div className="container container-two">
          <div className="section-heading">
            <span className="section-heading__subtitle bg-gray-100"><span className="text-gradient fw-semibold">Common questions</span></span>
            <h2 className="section-heading__title">How privacy and viewings work</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8"><FaqAccordion items={faqs} /></div>
          </div>
        </div>
      </section>

      <Cta title="Designed to make first contact" highlight="easier" text="Browse land and commercial properties across the listed localities." href="/rentals" label="Browse spaces" />
    </InnerShell>
  );
}
