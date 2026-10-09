"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    LINKS.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:pt-4">
      <nav
        aria-label="Primary"
        className={`mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-2xl border-2 border-ink px-4 py-3 transition-all duration-300 ${
          scrolled
            ? "bg-sand-50/95 shadow-brutal-sm backdrop-blur"
            : "bg-sand-50/70 backdrop-blur-sm"
        }`}
      >
        <a
          href="#home"
          className="group flex items-center gap-2 font-display text-base font-extrabold tracking-tight"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg border-2 border-ink bg-ocean text-sm font-black text-white shadow-brutal-xs transition-transform group-hover:-translate-y-0.5">
            R
          </span>
          <span className="hidden sm:inline">Rakensa Dwifa</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? "true" : undefined}
                className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                  active === link.id
                    ? "bg-ink text-sand-50"
                    : "text-ink-soft hover:bg-sand-200 hover:text-ink"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-xl border-2 border-ink bg-ocean px-4 py-2 text-sm font-bold text-white shadow-brutal-xs transition-transform hover:-translate-y-0.5 sm:inline-block"
          >
            Let&apos;s talk
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-xl border-2 border-ink bg-sand-100 shadow-brutal-xs lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="mx-auto mt-3 max-w-6xl rounded-2xl border-2 border-ink bg-sand-50 p-3 shadow-brutal lg:hidden"
        >
          <ul className="grid gap-1">
            {LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                    active === link.id
                      ? "bg-ink text-sand-50"
                      : "text-ink-soft hover:bg-sand-200 hover:text-ink"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
