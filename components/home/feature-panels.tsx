"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LANDMARK } from "@/lib/spaces";

const panels = [
  { title: "Search by landmark", text: `Start at ${LANDMARK} and choose a distance that works for your routine.`, href: "/rentals" },
  { title: "Compare useful details", text: "See dimensions, facilities, availability, price and approximate distance before contacting anyone.", href: "/rentals" },
  { title: "Request a viewing", text: "Ask to visit a space. If the owner accepts, they share the viewing location with you privately.", href: "/how-it-works" },
];

/** Accordion-style panels; on phones every panel is shown open. */
export function FeaturePanels({ image }: { image: string }) {
  const [active, setActive] = useState(0);
  const [wide, setWide] = useState(true);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    const sync = () => setWide(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  return (
    <section className="feature-9-area h9-grey-bg padding-y-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-7 col-md-7">
            <div className="section-9-wrapper mb-5">
              <h6 className="section-9-subtitle">Find more than a property</h6>
              <h2 className="section-9-title">A better way to <span>rent nearby</span></h2>
            </div>
          </div>
          <div className="col-xl-6 col-lg-5 col-md-5">
            <div className="feature-top-text">
              <p className="feature-9-top-paragraph h9-paragraph-color font-plusjakarta">
                Compare dimensions, amenities, availability and landmark distance before you enquire. Owners keep control over when their exact address is shared.
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-end">
          <div className="col-xl-3">
            <div className="feature-9-thumb"><img src={image} alt="A bright rental interior" /></div>
          </div>
          <div className="col-xl-9">
            <div className="row-custom-wrapper">
              <div className="row-custom d-flex">
                {panels.map((panel, index) => (
                  <div
                    key={panel.title}
                    className={`col-custom ${!wide || active === index ? "active" : ""}`}
                    onClick={() => setActive(index)}
                  >
                    <div className="panel-9-item">
                      <div className="panel-9-content">
                        <span><img src="/cityscape/images/icons/feature-9-icon2.svg" alt="" /></span>
                        <h4 className="panel-9-title child-one">{panel.title}</h4>
                      </div>
                    </div>
                    <div className="panel-9-item-2">
                      <div className="panel-9-content-2">
                        <span><img src="/cityscape/images/icons/feature-9-icon1.svg" alt="" /></span>
                        <h4 className="panel-9-title-2">{panel.title}</h4>
                        <p>{panel.text}</p>
                        <div className="feature-9-button">
                          <Link href={panel.href} aria-label={panel.title}><span><img src="/cityscape/images/icons/feature-9-right-arrow.svg" alt="" /></span></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="feature-9-bg-shape"><img src="/cityscape/images/shapes/feature-9-bg-shape.png" alt="" /></div>
    </section>
  );
}
