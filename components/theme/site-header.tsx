"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { HoverLink } from "./hover-link";
import { Logo } from "./logo";
import { isActive, menu } from "./menu";
import { LANDMARK } from "@/lib/spaces";

type Variant = "home" | "inner";

/** Header, mobile menu, off-canvas panel and search popup from the Cityscape theme. */
export function SiteHeader({ variant = "inner" }: { variant?: Variant }) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [canvasOpen, setCanvasOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const isHome = variant === "home";

  // The theme locks page scroll with body classes while a panel is open.
  useEffect(() => {
    document.body.classList.toggle("scroll-hide-sm", mobileOpen);
    document.body.classList.toggle("scroll-hide", canvasOpen);
    return () => document.body.classList.remove("scroll-hide-sm", "scroll-hide");
  }, [mobileOpen, canvasOpen]);

  // Close any open panel after navigating.
  useEffect(() => {
    setMobileOpen(false);
    setCanvasOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  const closeAll = () => {
    setMobileOpen(false);
    setCanvasOpen(false);
  };

  const submitSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const q = String(new FormData(event.currentTarget).get("q") ?? "").trim();
    setSearchOpen(false);
    setCanvasOpen(false);
    router.push(q ? `/rentals?q=${encodeURIComponent(q)}` : "/rentals");
  };

  const desktopMenu = (
    <ul className={`nav-menu ${isHome ? "nav-menu-9" : ""} flx-align`}>
      {menu.map((item) => {
        const active = item.href ? isActive(pathname, item.href) : item.children?.some((child) => isActive(pathname, child.href));
        return (
          <li key={item.label} className={`nav-menu__item ${item.children ? "has-submenu" : ""} ${active ? "activePage" : ""}`}>
            {item.href ? (
              <Link href={item.href} className="nav-menu__link">{item.label}</Link>
            ) : (
              <a href="#" className="nav-menu__link" onClick={(event) => event.preventDefault()}>{item.label}</a>
            )}
            {item.children && (
              <ul className="nav-submenu">
                {item.children.map((child) => (
                  <li key={child.href} className={`nav-submenu__item ${isActive(pathname, child.href) ? "activePage" : ""}`}>
                    <Link href={child.href} className="nav-submenu__link">{child.label}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      {/* Overlays */}
      <div className={`side-overlay ${mobileOpen || canvasOpen ? "show" : ""}`} onClick={closeAll} />
      <div className={`search-popup-overlay ${searchOpen ? "search-popup-overlay-open" : ""}`} onClick={() => setSearchOpen(false)} />

      {/* Search popup */}
      <div className={`search_popup ${searchOpen ? "search-opened" : ""}`} role="dialog" aria-label="Search">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="search_wrapper">
                <div className="search_top d-flex justify-content-between align-items-center">
                  <div className="search_logo"><Logo tone="dark" /></div>
                  <div className="search_close">
                    <button type="button" className="search_close_btn" onClick={() => setSearchOpen(false)} aria-label="Close search">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 1L1 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M1 1L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="search_form">
                  <form onSubmit={submitSearch}>
                    <div className="search_input">
                      <input className="search-input-field" name="q" type="text" placeholder="Search homes, rooms, plots or commercial spaces..." />
                      <span className="search-focus-border" />
                      <button type="submit" aria-label="Search">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M19.0002 19.0002L17.2002 17.2002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu d-lg-none d-block ${mobileOpen ? "active" : ""}`}>
        <button type="button" className="close-button" onClick={closeAll} aria-label="Close menu"><i className="las la-times" /></button>
        <div className="mobile-menu__inner">
          <div className="mobile-menu__logo"><Logo tone="dark" /></div>
          <div className="mobile-menu__menu">
            <ul className="nav-menu flx-align nav-menu--mobile">
              {menu.map((item) => {
                const open = openSub === item.label;
                return (
                  <li key={item.label} className={`nav-menu__item ${item.children ? "has-submenu" : ""} ${open ? "active" : ""} ${item.href && isActive(pathname, item.href) ? "activePage" : ""}`}>
                    {item.href ? (
                      <Link href={item.href} className="nav-menu__link">{item.label}</Link>
                    ) : (
                      <a href="#" className="nav-menu__link" onClick={(event) => { event.preventDefault(); setOpenSub(open ? null : item.label); }}>{item.label}</a>
                    )}
                    {item.children && (
                      <ul className="nav-submenu" style={{ display: open ? "block" : "none" }}>
                        {item.children.map((child) => (
                          <li key={child.href} className="nav-submenu__item"><Link href={child.href} className="nav-submenu__link">{child.label}</Link></li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
            <Link href="/list-your-space" className="btn btn-outline-light d-lg-none d-block mt-4">
              List a space <span className="icon-right text-gradient"><i className="fas fa-arrow-right" /></span>
            </Link>
          </div>
        </div>
      </div>

      {/* Off-canvas panel (home header) */}
      {isHome && (
        <div className={`common-offcanvas d-lg-block d-none ${canvasOpen ? "active" : ""}`}>
          <div className="flx-between">
            <Logo tone="light" />
            <button type="button" className="close-button d-flex position-relative top-0 end-0" onClick={closeAll} aria-label="Close panel"><i className="las la-times" /></button>
          </div>
          <div className="search-box mt-5">
            <form onSubmit={submitSearch}>
              <input type="text" name="q" className="common-input common-input--light" placeholder="Search..." />
              <button type="submit" className="icon" aria-label="Search"><i className="fas fa-search" /></button>
            </form>
          </div>
          <ul className="address-list mt-5">
            <li className="address-list__item flx-align">
              <span className="address-list__icon"><i className="fas fa-map-marker-alt" /></span>
              <div className="address-list__content">
                <p className="address-list__text">Rentals around {LANDMARK},<br />Thiruvananthapuram, Kerala</p>
              </div>
            </li>
            <li className="address-list__item flx-align">
              <span className="address-list__icon"><i className="fas fa-lock" /></span>
              <div className="address-list__content">
                <p className="address-list__text">Exact property addresses are shared only after an approved viewing.</p>
              </div>
            </li>
          </ul>
          <div className="google-map mt-5">
            {/* Only load the third-party map once the panel is actually opened. */}
            {canvasOpen && (
              <iframe
                title={`Map of ${LANDMARK}`}
                src="https://maps.google.com/maps?q=Thiruvananthapuram+Central+Railway+Station&z=14&output=embed"
                loading="lazy"
                className="w-100 h-100"
              />
            )}
          </div>
        </div>
      )}

      {isHome ? (
        <header className="header header-9">
          <div className="container-fluid gx-0">
            <nav className="header-inner flx-between">
              <div className="header-9-left d-flex align-items-center">
                <div className="header-9-left-inner d-flex align-items-center">
                  <div className="header-9-left-toggle-btn">
                    <button type="button" className="offcanvas-btn d-lg-block d-none" onClick={() => setCanvasOpen(true)}>
                      <span><img src="/cityscape/images/icons/toggle.svg" alt="" /></span>
                      Menu
                    </button>
                  </div>
                  <div className="logo header-9-logo"><Logo tone="light" /></div>
                </div>
                <div className="header-menu d-lg-block d-none">{desktopMenu}</div>
              </div>
              <div className="header-right flx-align">
                <div className="search-box header-9-search-box">
                  <button type="button" className="open-search h9-search-popup" onClick={() => setSearchOpen(true)} aria-label="Open search">
                    <span><img src="/cityscape/images/icons/search.svg" alt="" /></span>
                  </button>
                </div>
                <div className="header-button">
                  <HoverLink href="/list-your-space" className="header-9-btn">Add Listing </HoverLink>
                </div>
                <button type="button" className="toggle-mobileMenu header-9-toggle-mobileMenu d-lg-none ms-3" onClick={() => setMobileOpen(true)} aria-label="Open menu"><i className="las la-bars" /></button>
              </div>
            </nav>
          </div>
        </header>
      ) : (
        <header className="header dark-header has-border">
          <div className="container container-two">
            <nav className="header-inner flx-between">
              <div className="logo"><Logo tone="light" /></div>
              <div className="header-menu d-lg-block d-none">{desktopMenu}</div>
              <div className="header-right flx-align">
                <Link href="/list-your-space" className="btn btn-outline-main btn-outline-main-dark d-lg-block d-none">
                  Add Listing <span className="icon-right icon"><i className="fas fa-arrow-right" /></span>
                </Link>
                <button type="button" className="toggle-mobileMenu d-lg-none ms-3" onClick={() => setMobileOpen(true)} aria-label="Open menu"><i className="las la-bars" /></button>
              </div>
            </nav>
          </div>
        </header>
      )}
    </>
  );
}
