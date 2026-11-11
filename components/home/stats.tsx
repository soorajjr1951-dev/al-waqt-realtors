import { spaceTypes, spaces } from "@/lib/spaces";

/** Theme "counter-four" strip. Values come from the live listing data, not marketing numbers. */
export function Stats() {
  const stats = [
    { icon: "counter-four1.svg", value: `${spaces.length}`, label: "Spaces currently listed" },
    { icon: "counter-four2.svg", value: `${spaceTypes.length}`, label: "Rental categories" },
    { icon: "counter-four3.svg", value: "0", label: "Public exact addresses" },
    { icon: "counter-four4.svg", value: "24/7", label: "Browse at your own pace" },
  ];

  return (
    <section className="counter-four bg-white padding-y-120">
      <div className="container container-two">
        <div className="counter-three-wrapper">
          {stats.map((stat) => (
            <div className="counter-three-item style-two flx-align" key={stat.label}>
              <span className="counter-three-item__icon"><img src={`/cityscape/images/icons/${stat.icon}`} alt="" /></span>
              <div className="counter-three-item__content">
                <h2 className="counter-three-item__number text-heading">{stat.value}</h2>
                <span className="counter-three-item__text text-body">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
