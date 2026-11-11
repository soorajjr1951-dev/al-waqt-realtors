"use client";

import Link from "next/link";
import { useState } from "react";
import { HoverLink } from "@/components/theme/hover-link";
import { LANDMARK, Space, SpaceType, formatRent, spaceTypes, spaces, typeLabel } from "@/lib/spaces";

type Tab = "All" | SpaceType;

/** Theme "service-9" list: featured spaces filtered by type. */
export function FeaturedTabs() {
  const [tab, setTab] = useState<Tab>("All");
  const [saved, setSaved] = useState<string[]>([]);
  const tabs: Tab[] = ["All", ...spaceTypes];
  const list: Space[] = (tab === "All" ? spaces : spaces.filter((space) => space.type === tab)).slice(0, 4);

  const toggleSaved = (slug: string) =>
    setSaved((current) => (current.includes(slug) ? current.filter((item) => item !== slug) : [...current, slug]));

  return (
    <section className="service-9-area padding-y-120 h9-bg-secondary position-relative z-index-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="section-9-wrapper text-center mb-5">
              <h6 className="section-9-subtitle">Featured properties</h6>
              <h2 className="section-9-title h9-text-white">Spaces you can <br /><span>make your own</span></h2>
              <p className="section-9-paragraph font-inter h9-paragraph-color">
                Every listing shows its size, facilities and distance from {LANDMARK}. Exact addresses stay private.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <nav>
            <div className="nav service-9-nav-tabs nav-tabs d-flex justify-content-center" role="tablist">
              {tabs.map((item) => (
                <button
                  key={item}
                  type="button"
                  role="tab"
                  aria-selected={tab === item}
                  className={`nav-link service-9-nav-link ${tab === item ? "active" : ""}`}
                  onClick={() => setTab(item)}
                >
                  {item === "All" ? "All spaces" : typeLabel[item]}
                </button>
              ))}
            </div>
          </nav>
        </div>
        <div className="row">
          <div className="co-xl-12">
            <div className="tab-content">
              <div className="tab-pane fade show active" role="tabpanel">
                <div className="service-9-wrapper">
                  {list.map((space) => (
                    <div className="service-9-item d-flex justify-content-between" key={space.slug}>
                      <div className="service-9-wrap d-flex">
                        <div className="service-9-thumb">
                          <Link href={`/listings/${space.slug}`}><img src={space.image} alt={space.title} /></Link>
                          <div className="service-9-thumb-tag">
                            <span className="one">{space.type}</span>
                            {space.available !== "Available now" && <span className="two">Soon</span>}
                          </div>
                        </div>
                        <div className="service-9-content">
                          <div className="service-9-price d-flex align-items-center">
                            <h4>{formatRent(space.price)}</h4>
                            <span className="h9-bg-primary font-poppins">per month</span>
                          </div>
                          <h4 className="service-9-title font-plusjakarta"><Link href={`/listings/${space.slug}`}>{space.title}</Link></h4>
                          <p className="service-9-paragraph font-inter w-100">{space.description}</p>
                          <div className="service-9-list">
                            <ul className="d-flex">
                              <li className="d-flex align-items-center"><span><img src="/cityscape/images/icons/service-9-icon1.svg" alt="" /></span> {space.size}</li>
                              {space.details.slice(0, 2).map((detail, index) => (
                                <li className="d-flex align-items-center" key={detail}>
                                  <span><img src={`/cityscape/images/icons/service-9-icon${index + 2}.svg`} alt="" /></span> {detail}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="service-9-button-wrap d-flex align-items-center">
                            <Link href={`/listings/${space.slug}`}>Details <span><img src="/cityscape/images/icons/service-btn-right-arrow.svg" alt="" /></span></Link>
                            <h6><span><i className="fas fa-map-marker-alt" /></span> {space.distance} km from station</h6>
                          </div>
                        </div>
                      </div>
                      <div className="service-9-icon">
                        <button
                          type="button"
                          className={`service-9-love-button ${saved.includes(space.slug) ? "active" : ""}`}
                          aria-label={`Save ${space.title}`}
                          aria-pressed={saved.includes(space.slug)}
                          onClick={() => toggleSaved(space.slug)}
                        >
                          <span><img src="/cityscape/images/icons/service-9-love-icon.svg" alt="" /></span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-12">
            <div className="service-9-bottom-button text-center">
              <HoverLink href="/rentals" className="home-9-btn">More properties </HoverLink>
            </div>
          </div>
        </div>
      </div>
      <div className="service-9-bg-shape"><img src="/cityscape/images/shapes/service-9-bg-shape.png" alt="" /></div>
    </section>
  );
}
