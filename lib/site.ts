import type { Metadata } from "next";

export const siteConfig = {
  name: "Rakensa Dwifa",
  fullName: "Rakensa Dwifa Noverdiastra",
  title: "Rakensa Dwifa — Web Developer & Engineering Physics Student",
  description:
    "Portfolio of Rakensa Dwifa Noverdiastra — Engineering Physics student at Telkom University Bandung and self-taught web developer building clean, responsive websites.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://rakensa-portfolio.vercel.app",
  locale: "en_US",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.fullName, url: siteConfig.url }],
  creator: siteConfig.fullName,
  keywords: [
    "Rakensa Dwifa",
    "web developer",
    "frontend developer",
    "engineering physics",
    "Telkom University",
    "portfolio",
    "Bandung",
    "Indonesia",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    locale: siteConfig.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/img/favicon-32x32.png",
    apple: "/img/apple-touch-icon.png",
  },
};
