import Link from "next/link";
import { spaces, spaceTypes, typeLabel, typeRoute } from "@/lib/spaces";

const descriptions = {
  Home: "Apartments, villas & family homes",
  Room: "Private rooms & shared living",
  Plot: "Open land, garden plots & yards",
  Commercial: "Offices, shops & creative studios",
};

export function Collections() {
  return <section className="discovery-collections" aria-labelledby="collections-title">
    <div className="discovery-section-heading"><div><p>Room for every kind of life</p><h2 id="collections-title">Find a space that feels right.</h2></div><p className="discovery-heading-note">A place to settle in, start something,<br />or make room for a new idea.</p></div>
    <div className="discovery-collection-grid">{spaceTypes.map(type => {
      const items = spaces.filter(s => s.type === type);
      return <Link href={typeRoute[type]} className="discovery-collection" key={type}>
        <img src={items[0].image} alt="" loading="lazy" />
        <div><span>{items.length} sample spaces</span><h3>{typeLabel[type]}</h3><p>{descriptions[type]}</p></div><b aria-hidden="true">↗</b>
      </Link>;
    })}</div>
  </section>;
}

export function RentalGuide() {
  const steps = [
    { title: "Start with your everyday needs", text: "Choose a space type and a landmark radius. Compare rent, floor area and the features you will actually use.", image: "photo-1600210492486-724fe5c67fb0", alt: "Comfortable living room with natural light", detail: "Shortlist your essentials" },
    { title: "Look beyond the photographs", text: "Check dimensions, water, power, access and parking. For plots, ask about boundaries and the intended use of the land.", image: "photo-1500382017468-9049fed747ef", alt: "Open green landscape", detail: "Prepare for your viewing" },
    { title: "Get the details in writing", text: "Discuss the deposit, maintenance, notice period and house rules with the owner before agreeing to your move.", image: "photo-1497366754035-f200968a6e72", alt: "Bright workspace with desks and seating", detail: "Plan your next step" },
  ];
  return <section className="discovery-guide"><div className="discovery-guide-inner">
    <div className="discovery-section-heading"><div><p>A considered way to rent</p><h2>A little preparation.<br />A better beginning.</h2></div><Link href="/how-it-works">How renting works <span aria-hidden="true">↗</span></Link></div>
    <div className="discovery-guide-grid">{steps.map((step, i) => <article key={step.title}><div className="discovery-guide-image"><img src={`https://images.unsplash.com/${step.image}?auto=format&fit=crop&w=800&q=80`} alt={step.alt} loading="lazy" /><span>Step {i + 1}</span></div><p className="discovery-guide-detail">{step.detail}</p><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
  </div></section>;
}

export function RentalQuestions() {
  const questions = [
    ["What kinds of spaces can I explore?", "Browse homes and apartments, private and shared rooms, open plots, offices, shops and studios. Each category highlights the details that matter, from bedroom counts to plot dimensions and power connections."],
    ["Why don’t listings show an exact address?", "Listings use an approximate distance from Trivandrum Railway Station to help you compare convenience while keeping the property address private. Arrange an approved viewing with the owner to receive directions."],
    ["Does the monthly rent include other charges?", "Do not assume it does. Ask the owner about deposits, electricity, water, maintenance, parking and internet. Shared-room listings may quote rent per person; check the listing details."],
    ["What should I check when renting a plot?", "Check the length and width, road access, water, drainage, boundary fencing and any existing structures. Confirm your intended use and any required permissions before signing an agreement."],
    ["Are these properties available to book?", "This website currently presents sample listings and illustrative photographs. Availability, prices and facilities are examples, not confirmed rental offers. Live owner verification and booking services are not connected yet."],
  ];
  return <section className="discovery-faq"><div><p className="discovery-eyebrow">A few useful answers</p><h2>Before you<br />make your move.</h2><p className="discovery-faq-intro">The small details make a big difference. Start here, then bring your questions to the viewing.</p><Link href="/about">Get to know Al Waqt <span aria-hidden="true">↗</span></Link></div><div>{questions.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>;
}
