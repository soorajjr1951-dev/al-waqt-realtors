"use client";

import Link from "next/link";
import { MouseEvent, ReactNode, useRef } from "react";

type Props = {
  href?: string;
  children: ReactNode;
  className?: string;
  /** Show the long arrow icon after the label. */
  arrow?: boolean;
  type?: "button" | "submit";
};

/** Theme "h9-hover-btn": a gold circle that grows out of the pointer position. */
export function HoverLink({ href, children, className = "home-9-btn", arrow = true, type = "button" }: Props) {
  const dot = useRef<HTMLSpanElement>(null);

  const place = (event: MouseEvent<HTMLElement>) => {
    const box = event.currentTarget.getBoundingClientRect();
    if (dot.current) {
      dot.current.style.top = `${event.clientY - box.top}px`;
      dot.current.style.left = `${event.clientX - box.left}px`;
    }
  };

  const inner = (
    <>
      {children}
      {arrow && <span><img src="/cityscape/images/icons/right-arrow-long.svg" alt="" /></span>}
      <span className="h9-hover-btn-circle-dot" ref={dot} />
    </>
  );
  const cls = `${className} h9-hover-btn`;

  return href ? (
    <Link href={href} className={cls} onMouseEnter={place} onMouseLeave={place}>{inner}</Link>
  ) : (
    <button type={type} className={cls} onMouseEnter={place} onMouseLeave={place}>{inner}</button>
  );
}
