import Link from "next/link";
import { LANDMARK, countByType, spaceTypes, spaces, typeLabel, typeRoute } from "@/lib/spaces";

/** Right-hand widgets for the rentals pages, using the theme's "common-sidebar" blocks. */
export function SpacesSidebar() {
  return (
    <div className="common-sidebar-wrapper">
      <div className="common-sidebar">
        <h6 className="common-sidebar__title">Space types</h6>
        <ul className="category-list">
          {spaceTypes.map((type) => (
            <li className="category-list__item" key={type}>
              <Link href={typeRoute[type]} className="category-list__link flx-between">
                <span className="text">{typeLabel[type]}</span>
                <span className="number">({countByType(type)})</span>
              </Link>
            </li>
          ))}
          <li className="category-list__item">
            <Link href="/rentals" className="category-list__link flx-between">
              <span className="text">All rentals</span>
              <span className="number">({spaces.length})</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="common-sidebar">
        <h6 className="common-sidebar__title">Nearest to the station</h6>
        {[...spaces].sort((a, b) => (a.distance ?? Infinity) - (b.distance ?? Infinity)).slice(0, 3).map((space) => (
          <div className="latest-blog" key={space.slug}>
            <div className="latest-blog__thumb">
              <Link href={`/listings/${space.slug}`}><img src={space.image} className="cover-img" alt={space.title} loading="lazy" /></Link>
            </div>
            <div className="latest-blog__content">
              <span className="latest-blog__category font-12 flx-align gap-1">
                <span className="icon text-gradient"><i className="fas fa-map-marker-alt" /></span>
                {space.distance} km away
              </span>
              <h6 className="latest-blog__title"><Link href={`/listings/${space.slug}`}>{space.title}</Link></h6>
            </div>
          </div>
        ))}
      </div>

      <div className="common-sidebar">
        <h6 className="common-sidebar__title">Privacy first</h6>
        <p className="font-14">
          Distances are measured from {LANDMARK}. A renter can see how far a space is, but never an exact street address on a public page.
        </p>
        <Link href="/how-it-works" className="simple-btn text-gradient fw-semibold font-14 mt-3 d-inline-flex">
          How privacy works <span className="icon-right"><i className="fas fa-arrow-right" /></span>
        </Link>
      </div>
    </div>
  );
}
