"use client";

import { useSyncExternalStore } from "react";
import { ArrowUp } from "lucide-react";
import { profileData } from "@/data/portfolioData";

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
];

const subscribeToNothing = () => () => {};
const getClientYear = () => new Date().getFullYear();
const getServerYear = () => 2026;

export function Footer() {
  const year = useSyncExternalStore(
    subscribeToNothing,
    getClientYear,
    getServerYear,
  );

  return (
    <footer className="border-t-2 border-ink bg-sand-100">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <a href="#home" className="flex items-center gap-2 font-display text-lg font-extrabold">
              <span className="grid h-9 w-9 place-items-center rounded-lg border-2 border-ink bg-ocean text-sm font-black text-white shadow-brutal-xs">
                R
              </span>
              {profileData.name}
            </a>
            <p className="mt-4 text-sm text-ink-soft">{profileData.tagline}.</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {profileData.socials.map((social) => (
                <li key={social.key}>
                  <a
                    href={social.url}
                    target={social.key === "email" ? undefined : "_blank"}
                    rel={social.key === "email" ? undefined : "noopener noreferrer"}
                    className="inline-block rounded-lg border-2 border-ink bg-sand-50 px-3 py-1.5 text-xs font-semibold shadow-brutal-xs transition-transform hover:-translate-y-0.5"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer">
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-ink-soft">
              Navigate
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2 text-sm font-semibold sm:grid-cols-3">
              {NAV.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-ink-soft transition-colors hover:text-ocean-dark"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t-2 border-dashed border-ink/20 pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-ink-soft">
            © {year} {profileData.name}. Built with Next.js & Tailwind CSS.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-ink bg-sand-50 px-4 py-2 text-xs font-bold shadow-brutal-xs transition-transform hover:-translate-y-0.5"
          >
            Back to top
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
