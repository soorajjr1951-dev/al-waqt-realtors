"use client";

import { useState } from "react";

export type FaqItem = { question: string; answer: string };

/** Theme "common-accordion style-two". One item open at a time. */
export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="common-accordion style-two accordion">
      {items.map((item, index) => {
        const expanded = open === index;
        return (
          <div className="accordion-item" key={item.question}>
            <h2 className="accordion-header">
              <button type="button" className={`accordion-button ${expanded ? "" : "collapsed"}`} aria-expanded={expanded} onClick={() => setOpen(expanded ? -1 : index)}>
                {item.question}
              </button>
            </h2>
            <div className={`accordion-collapse collapse ${expanded ? "show" : ""}`}>
              <div className="accordion-body"><p className="accordion-body__desc font-18">{item.answer}</p></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
