import Link from "next/link";

/** The theme's logo images are size placeholders, so the brand is a wordmark. */
export function Logo({ tone = "light", className = "" }: { tone?: "light" | "dark"; className?: string }) {
  return (
    <Link href="/" className={`nivasa-logo nivasa-logo--${tone} ${className}`} aria-label="Al Waqt home">
      <span className="nivasa-logo__mark" style={{ fontSize: "14px", fontWeight: 700 }}>AW</span>
      <span className="nivasa-logo__word">Al Waqt</span>
    </Link>
  );
}
