import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div
      className={
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl text-left"
      }
    >
      <span className="inline-block rounded-full border-2 border-ink bg-ocean-soft px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest shadow-brutal-xs">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-ink-soft">{description}</p>
      ) : null}
    </div>
  );
}
