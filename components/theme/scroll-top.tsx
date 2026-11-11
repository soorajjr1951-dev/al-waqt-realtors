"use client";

import { useEffect, useRef, useState } from "react";

/** Circular scroll-progress "back to top" button from the theme. */
export function ScrollTop() {
  const path = useRef<SVGPathElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = path.current;
    if (!el) return;
    const length = el.getTotalLength();
    el.style.strokeDasharray = `${length} ${length}`;

    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? window.scrollY / max : 0;
      el.style.strokeDashoffset = String(length - ratio * length);
      setVisible(window.scrollY > 50);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      className={`progress-wrap ${visible ? "active-progress" : ""}`}
      role="button"
      tabIndex={0}
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      onKeyDown={(event) => { if (event.key === "Enter") window.scrollTo({ top: 0, behavior: "smooth" }); }}
    >
      <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path ref={path} d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
    </div>
  );
}
