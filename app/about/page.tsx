import Link from "next/link";
import { Cta } from "@/components/theme/cta";
import { PageBanner } from "@/components/theme/page-banner";
import { InnerShell } from "@/components/theme/shell";
import { spaces } from "@/lib/spaces";

export const metadata = { title: "About us | Al Waqt" };

const values = [
  { icon: "ppty-type-icon1.svg", title: "Useful over noisy", text: "Dimensions, access, facilities and availability are more helpful than an endless gallery of vague claims." },
  { icon: "ppty-type-icon2.svg", title: "Private by default", text: "Public listings show landmark distance, not an address. The owner decides when it is right to reveal more." },
  { icon: "ppty-type-icon3.svg", title: "Built for every space", text: "Land, shops, offices and buildings belong in one straightforward search experience." },
];

export default function About() {
  return (
    <InnerShell>
      <PageBanner title="About Al Waqt" trail={[{ label: "About us" }]} />

      <section className="about-three bg-white padding-y-120">
        <div className="container container-two">
          <div className="row gy-4 align-items-center">
            <div className="col-lg-6">
              <div className="about-three-thumb">
                <div className="about-three-thumb__inner"><img src={spaces[0].image} alt="A bright, well-kept home" /></div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-heading style-left">
                  <span className="section-heading__subtitle bg-gray-100"><span className="text-gradient fw-semibold">About us</span></span>
                  <h2 className="section-heading__title">A rental search that respects both sides.</h2>
                  <p className="section-heading__desc font-18">
                    People need enough information to decide whether to enquire. Owners need control over their property information. Al Waqt is built around both needs.
                  </p>
                </div>
                <ul className="check-list style-two">
                  {["Details renters can compare", "Exact addresses stay with the owner", "Search by locality and transaction", "Land, shops, offices and buildings"].map((item) => (
                    <li className="check-list__item d-flex align-items-center" key={item}>
                      <span className="icon"><i className="fas fa-check" /></span>
                      <span className="text fw-semibold">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="about-button">
                  <Link href="/rentals" className="btn btn-outline-main bg-white">Explore rentals <span className="icon-right"><i className="fas fa-arrow-right" /></span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="property-type-three padding-y-120">
        <div className="container container-two">
          <div className="section-heading style-left">
            <span className="section-heading__subtitle bg-white"><span className="text-gradient fw-semibold">What we believe</span></span>
            <h2 className="section-heading__title">Renting made clearer for everyone</h2>
          </div>
          <div className="row gy-4">
            {values.map((value) => (
              <div className="col-xl-4 col-sm-6 col-xs-6" key={value.title}>
                <div className="property-type-three-item d-flex align-items-start">
                  <span className="property-type-three-item__icon flex-shrink-0"><img src={`/cityscape/images/icons/${value.icon}`} alt="" /></span>
                  <div className="property-type-three-item__content">
                    <h6 className="property-type-three-item__title">{value.title}</h6>
                    <p className="property-type-three-item__desc font-18">{value.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Cta title="Ready to find a space or list" highlight="one?" text="Browse properties from Attingal to Kazhakootam, or tell renters about your space." href="/rentals" label="Explore rentals" />
    </InnerShell>
  );
}
