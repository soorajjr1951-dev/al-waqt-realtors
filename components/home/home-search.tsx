"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { LANDMARK, SpaceType, spaceTypes, typeLabel } from "@/lib/spaces";

/** Landmark search bar. Submitting opens the rentals page with these filters applied. */
export function HomeSearch() {
  const router = useRouter();
  const [type, setType] = useState<"" | SpaceType>("");
  const [radius, setRadius] = useState("5");

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const params = new URLSearchParams();
    if (type) params.set("type", type);
    params.set("radius", radius);
    router.push(`/rentals?${params.toString()}`);
  };

  return (
    <section className="h9-grey-bg padding-y-60">
      <div className="container">
        <div className="property-filter">
          <form onSubmit={submit}>
            <div className="row gy-4 align-items-center">
              <div className="col-lg-4 col-md-6">
                <div className="position-relative">
                  <input type="text" className="common-input common-input--withLeftIcon pill text-gray-800" value={LANDMARK} readOnly aria-label="Search landmark" />
                  <span className="input-icon input-icon--left text-gradient"><img src="/cityscape/images/icons/location.svg" alt="" /></span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="select-has-icon">
                  <select className="form-select common-input common-input--withLeftIcon pill text-gray-800" value={type} onChange={(event) => setType(event.target.value as typeof type)} aria-label="Space type">
                    <option value="">All spaces</option>
                    {spaceTypes.map((item) => <option key={item} value={item}>{typeLabel[item]}</option>)}
                  </select>
                  <span className="input-icon input-icon--left text-gradient"><img src="/cityscape/images/icons/type.svg" alt="" /></span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="select-has-icon">
                  <select className="form-select common-input common-input--withLeftIcon pill text-gray-800" value={radius} onChange={(event) => setRadius(event.target.value)} aria-label="Search radius">
                    <option value="2">Within 2 km</option>
                    <option value="5">Within 5 km</option>
                    <option value="10">Within 10 km</option>
                  </select>
                  <span className="input-icon input-icon--left text-gradient"><img src="/cityscape/images/icons/status.svg" alt="" /></span>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <button type="submit" className="btn btn-main w-100">Search <span className="icon-right"><i className="fas fa-arrow-right" /></span></button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
