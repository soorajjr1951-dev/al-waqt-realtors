"use client";

import Link from "next/link";
import { useState } from "react";
import { LANDMARK, Space, formatRent } from "@/lib/spaces";

type Decision = "pending" | "approved" | "rejected";

/** Admin review queue. Decisions only change local state until a backend exists. */
export function ListingReview({ queue }: { queue: Space[] }) {
  const [decisions, setDecisions] = useState<Record<string, Decision>>({});
  const decide = (slug: string, decision: Decision) => setDecisions((current) => ({ ...current, [slug]: decision }));

  return (
    <div className="overflow-auto">
      <div className="card common-card min-w-maxContent">
        <div className="card-body">
          <table className="table style-two">
            <thead>
              <tr><th>Pending listing</th><th>Type</th><th>Status</th><th>Decision</th></tr>
            </thead>
            <tbody>
              {queue.map((space) => {
                const decision = decisions[space.slug] ?? "pending";
                return (
                  <tr key={space.slug}>
                    <td>
                      <div className="d-flex align-items-center gap-3">
                        <div className="cart-item__thumb"><img src={space.image} alt="" className="cover-img" /></div>
                        <div className="cart-item__content">
                          <h6 className="cart-item__title fw-500 font-18"><Link href={`/listings/${space.slug}`} className="link">{space.title}</Link></h6>
                          <p className="property-item__location d-flex gap-2 font-14">
                            <span className="icon text-gradient"><i className="fas fa-map-marker-alt" /></span>{space.distance} km from {LANDMARK}
                          </p>
                          <span className="cart-item__price">Rent: <span className="fw-500 text-heading">{formatRent(space.price)}</span></span>
                        </div>
                      </div>
                    </td>
                    <td>{space.type}</td>
                    <td className="text-capitalize">{decision}</td>
                    <td>
                      <div className="d-flex gap-2">
                        <button type="button" className="rounded-btn text-success bg-success bg-opacity-10 flex-shrink-0" aria-label={`Approve ${space.title}`} onClick={() => decide(space.slug, "approved")}><i className="fas fa-check" /></button>
                        <button type="button" className="rounded-btn delete-btn text-danger bg-danger bg-opacity-10 flex-shrink-0" aria-label={`Reject ${space.title}`} onClick={() => decide(space.slug, "rejected")}><i className="fas fa-times" /></button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
