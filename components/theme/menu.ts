export type MenuItem = { label: string; href?: string; children?: { label: string; href: string }[] };

export const menu: MenuItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Properties",
    children: [
      { label: "All rentals", href: "/rentals" },
      { label: "Homes", href: "/homes" },
      { label: "Rooms", href: "/rooms" },
      { label: "Plots", href: "/plots" },
      { label: "Commercial", href: "/commercial" },
    ],
  },
  { label: "How it works", href: "/how-it-works" },
  { label: "About us", href: "/about" },
  {
    label: "Account",
    children: [
      { label: "Sign in", href: "/login" },
      { label: "My dashboard", href: "/dashboard" },
      { label: "Admin", href: "/admin" },
    ],
  },
];

export function isActive(pathname: string, href?: string): boolean {
  if (!href) return false;
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");
}
