"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { HoverLink } from "@/components/theme/hover-link";
import { LANDMARK, Space } from "@/lib/spaces";

type Slide = { title: ReactNode; text: string; cta: string; href: string; space: Space };

// The theme eases each slide's text in over 2.5s, so leave a good while for it to be read.
const INTERVAL_MS = 7000;
const FADE_MS = 1300;

/** Cross-fading hero from the theme's "banner-9" design, with autoplay that pauses on hover or focus. */
export function HeroSlider({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const previous = useRef(0);
  const count = slides.length;

  // Remember which slide just left so its text can fade out with the cross-fade instead of vanishing.
  useEffect(() => {
    if (previous.current === index) return;
    setLeaving(previous.current);
    previous.current = index;
    const timer = window.setTimeout(() => setLeaving(null), FADE_MS);
    return () => window.clearTimeout(timer);
  }, [index]);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion || count < 2) return;
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % count), INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion, count]);

  const go = (step: number) => setIndex((current) => (current + step + count) % count);

  return (
    <div
      className="banner-9-wrapper p-relative z-index-1"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="banner-9-active hero-fade" role="group" aria-roledescription="carousel" aria-label="Featured spaces">
        {slides.map((slide, i) => (
          <div
            key={i}
            // "swiper-slide(-active)" are the class names the theme's CSS uses to reveal the headline and button.
            className={`hero-fade__slide swiper-slide ${i === index ? "is-active swiper-slide-active" : ""} ${i === leaving ? "is-leaving" : ""}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}`}
            aria-hidden={i !== index}
          >
            <div className="banner-9-ovarlay">
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-8">
                    <div className="banner-9-content">
                      <div className="banner-9-title-box">
                        <h1 className="banner-9-title font-plusjakarta text-capitalize">{slide.title}</h1>
                        <p className="banner-9-paragraph font-inter h9-paragraph-color w-100">{slide.text}</p>
                      </div>
                      <div className="banner-9-btn-box">
                        <HoverLink href={slide.href} className="home-9-btn">{slide.cta} </HoverLink>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="banner-9-thumb">
                      <img src={slide.space.image} alt={slide.space.title} />
                      <div className="banner-9-address">
                        <div className="banner-9-address-content">
                          <h4>{slide.space.title}</h4>
                          <p>
                            <span><img src="/cityscape/images/icons/banner-9-location.svg" alt="" /></span>{" "}
                            {slide.space.distance} km from {LANDMARK}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {count > 1 && (
          <div className="banner-9-arrow-box">
            <button type="button" className="slider-prev" aria-label="Previous slide" onClick={() => go(-1)}>
              <i className="fas fa-arrow-left" />
            </button>
            <button type="button" className="slider-next" aria-label="Next slide" onClick={() => go(1)}>
              <i className="fas fa-arrow-right" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
