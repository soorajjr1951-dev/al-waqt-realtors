"use client";

import { useState } from "react";
import { HoverLink } from "@/components/theme/hover-link";
import { LANDMARK } from "@/lib/spaces";

// Order matters: the theme's four icons are a house, a currency symbol, a document and a handshake.
const items = [
  { title: "Search by landmark", text: `Find a space within a practical distance of ${LANDMARK}, a place you already know. Homes, rooms, plots and commercial places share one search.` },
  { title: "Clear prices and details", text: "Dimensions, facilities, availability and monthly rent are shown up front, before you contact anyone." },
  { title: "Keep addresses protected", text: "Public listings show distance from the landmark, never a street address. The exact location stays with the owner." },
  { title: "Viewings on the owner's terms", text: "Owners approve each viewing request and share the location privately, only when it is right to do so." },
];

export function WhyAccordion({ image }: { image: string }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="about-9-area padding-y-120 h9-grey-bg">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="about-9-left">
              <div className="about-9-thumb mb-40 position-relative">
                <img src={image} alt="A commercial space available to rent" />
              </div>
              <p className="about-9-left-paragraph font-inter h9-paragraph-color w-100 mb-40">
                Al Waqt gives renters the information to decide, and owners control over when their exact address is shared.
              </p>
              <div className="about-9-btn-box d-flex align-items-center gap-4">
                <HoverLink href="/how-it-works" className="home-9-btn">How it works </HoverLink>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="about-9-right">
              <div className="section-9-wrapper mb-5">
                <h6 className="section-9-subtitle">Why rent with Al Waqt</h6>
                <h2 className="section-9-title">Rental search built on <span>clear information.</span></h2>
              </div>
              <div className="about-9-right-accordion">
                <div className="accordion about-9-accordion">
                  {items.map((item, index) => {
                    const expanded = open === index;
                    return (
                      <div className={`accordion-item about-9-accordion-item ${index < items.length - 1 ? "mb-3" : ""}`} key={item.title}>
                        <h2 className="accordion-header">
                          <button
                            type="button"
                            className={`accordion-button about-9-accordion-button ${expanded ? "" : "collapsed"}`}
                            aria-expanded={expanded}
                            onClick={() => setOpen(expanded ? -1 : index)}
                          >
                            <span><img src={`/cityscape/images/icons/about-9-icon${index + 1}.svg`} alt="" /></span>
                            {item.title}
                          </button>
                        </h2>
                        <div className={`accordion-collapse collapse ${expanded ? "show" : ""}`}>
                          <div className="accordion-body about-9-accordion-body">{item.text}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
