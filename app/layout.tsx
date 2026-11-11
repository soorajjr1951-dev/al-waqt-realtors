import type { Metadata } from "next";
import { ScrollTop } from "@/components/theme/scroll-top";

export const metadata: Metadata = {
  title: "Al Waqt | Spaces worth finding",
  description: "Find rooms, homes, plots and commercial spaces near Attingal to Kazhakootam.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Cityscape theme styles, loaded in the same order as the original template. */}
        <link rel="stylesheet" href="/cityscape/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/cityscape/css/fontawesome-all.min.css" />
        <link rel="stylesheet" href="/cityscape/css/line-awesome.min.css" />
        <link rel="stylesheet" href="/cityscape/css/main.css" />
        {/* Theme overrides. Must come last so they win over the theme's own rules. */}
        <link rel="stylesheet" href="/cityscape/css/nivasa.css" />
        <link rel="stylesheet" href="/cityscape/css/discovery.css" />
        <link rel="stylesheet" href="/cityscape/css/classic.css" /><link rel="stylesheet" href="/cityscape/css/marketplace.css" />
      </head>
      <body>
        {children}
        <ScrollTop />
      </body>
    </html>
  );
}

