import Link from "next/link";
import { HoverLink } from "./hover-link";
import { Logo } from "./logo";
import { LANDMARK, typeLabel, typeRoute, spaceTypes } from "@/lib/spaces";

const year = new Date().getFullYear();

/** Footer used on the home page (theme "footer-9"). */
export function HomeFooter() {
  const highlights = [
    { title: "Search by landmark", text: `Find spaces within a practical distance of ${LANDMARK}.` },
    { title: "Private addresses", text: "Exact locations are shared only after an approved viewing." },
    { title: "List a space", text: "Owners and agents publish clear, useful listings." },
  ];

  return (
    <>
      <section className="footer-9-main h9-grey-bg">
        <div className="footer-9-area h9-bg-secondary padding-y-120">
          <div className="container">
            <div className="row mb-64">
              {highlights.map((item) => (
                <div className="col-xl-4 col-lg-4 col-md-6" key={item.title}>
                  <div className="position-relative z-index-1">
                    <div className="footer-9-wrap d-flex gap-3">
                      <div className="footer-9-icon"><span><img src="/cityscape/images/icons/footer-9-feature-icon.svg" alt="" /></span></div>
                      <div className="footer-9-content">
                        <h4 className="footer-9-title font-plusjakarta h9-text-white">{item.title}</h4>
                        <p className="footer-9-paragraph font-inter">{item.text}</p>
                      </div>
                      <div className="footer-9-wrap-overlay" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-6 col-6">
                <div className="footer-item footer-9-frist-chile">
                  <h6 className="footer-item__title">Browse spaces</h6>
                  <ul className="footer-menu">
                    {spaceTypes.map((type) => (
                      <li className="footer-menu__item" key={type}><Link href={typeRoute[type]} className="footer-menu__link footer-9-menu__link">{typeLabel[type]}</Link></li>
                    ))}
                    <li className="footer-menu__item"><Link href="/rentals" className="footer-menu__link footer-9-menu__link">All rentals</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-6">
                <div className="footer-item ms-xl-5">
                  <h6 className="footer-item__title">Quick links</h6>
                  <ul className="footer-menu">
                    <li className="footer-menu__item"><Link href="/how-it-works" className="footer-menu__link footer-9-menu__link">How it works</Link></li>
                    <li className="footer-menu__item"><Link href="/about" className="footer-menu__link footer-9-menu__link">About us</Link></li>
                    <li className="footer-menu__item"><Link href="/list-your-space" className="footer-menu__link footer-9-menu__link">List a space</Link></li>
                    <li className="footer-menu__item"><Link href="/login" className="footer-menu__link footer-9-menu__link">Sign in</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-11">
                <div className="footer-item footer-9-newsletter ms-xl-5">
                  <h6 className="footer-item__title">Own a space?</h6>
                  <div className="footer-9-newsletter-wrap">
                    <p className="footer-9-newsletter-paragraph">Tell renters what they need to know about dimensions, facilities and availability, and keep your exact address private until you approve a viewing.</p>
                    <div className="footer-9-newsletter-button">
                      <HoverLink href="/list-your-space" className="home-9-btn d-inline-flex gap-2">Add a listing</HoverLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bottom-footer h9-grey-bg">
        <div className="container container-two">
          <div className="bottom-footer__inner flx-between gap-3">
            <p className="bottom-footer__text footer-9-copyright-text h9-text-black">Copyright {year} <Link href="/">Al Waqt</Link>. All rights reserved.</p>
            <div className="footer-9-socail">
              <ul className="d-flex align-items-center gap-3">
                <li><Link href="/how-it-works"><i className="fas fa-lock" /> Privacy model</Link></li>
                <li><Link href="/about"><i className="fas fa-info-circle" /> About</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/** Footer used on inner pages (theme "footer"). */
export function InnerFooter() {
  return (
    <>
      <footer className="footer padding-y-120">
        <div className="container container-two">
          <div className="row gy-5">
            <div className="col-xl-4 col-sm-6 col-xsm-6">
              <div className="footer-item">
                <div className="footer-item__logo"><Logo tone="light" /></div>
                <p className="footer-item__desc">Landmark-led rental search for the spaces that shape your day. Exact addresses stay with the owner.</p>
              </div>
            </div>
            <div className="col-xl-2 col-sm-6 col-xsm-6">
              <div className="footer-item ms-xl-5">
                <h6 className="footer-item__title">Useful links</h6>
                <ul className="footer-menu">
                  <li className="footer-menu__item"><Link href="/how-it-works" className="footer-menu__link">How it works</Link></li>
                  <li className="footer-menu__item"><Link href="/about" className="footer-menu__link">About us</Link></li>
                  <li className="footer-menu__item"><Link href="/list-your-space" className="footer-menu__link">List a space</Link></li>
                  <li className="footer-menu__item"><Link href="/login" className="footer-menu__link">Sign in</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-xsm-6">
              <div className="footer-item">
                <h6 className="footer-item__title">Spaces</h6>
                <ul className="footer-menu">
                  {spaceTypes.map((type) => (
                    <li className="footer-menu__item" key={type}><Link href={typeRoute[type]} className="footer-menu__link">{typeLabel[type]}</Link></li>
                  ))}
                  <li className="footer-menu__item"><Link href="/rentals" className="footer-menu__link">All rentals</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-xsm-6">
              <div className="footer-item">
                <h6 className="footer-item__title">Search area</h6>
                <p className="footer-item__desc">All listings are measured from {LANDMARK}, Thiruvananthapuram.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="bottom-footer">
        <div className="container container-two">
          <div className="bottom-footer__inner flx-between gap-3">
            <p className="bottom-footer__text">&copy; Al Waqt {year} | All Rights Reserved.</p>
            <div className="footer-links">
              <Link href="/how-it-works" className="footer-link">Privacy model</Link>
              <Link href="/about" className="footer-link">About</Link>
              <Link href="/list-your-space" className="footer-link">List a space</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
