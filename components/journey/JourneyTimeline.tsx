import type { ComponentType } from "react";
import { Code2, GraduationCap, Rocket } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experienceData } from "@/data/portfolioData";
import type { ExperienceCategory } from "@/types/portfolio";

const CATEGORY: Record<
  ExperienceCategory,
  { icon: ComponentType<{ size?: number; className?: string }>; chip: string }
> = {
  education: { icon: GraduationCap, chip: "bg-ocean text-white" },
  learning: { icon: Code2, chip: "bg-ink text-sand-50" },
  project: { icon: Rocket, chip: "bg-ocean-soft text-ink" },
};

export function JourneyTimeline() {
  return (
    <section id="journey" className="scroll-mt-24 py-20 sm:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <Reveal>
          <SectionHeading
            eyebrow="The journey"
            title="From curiosity to code"
            description="A short timeline of how I got here — balancing formal study with self-taught, hands-on practice."
          />
        </Reveal>

        <ol className="relative mt-12 ml-3 border-l-2 border-dashed border-ink/30 pl-8 sm:ml-4">
          {experienceData.map((entry, index) => {
            const meta = CATEGORY[entry.category];
            const Icon = meta.icon;
            return (
              <li key={entry.id} className="relative pb-10 last:pb-0">
                <span className="absolute -left-[2.65rem] grid h-9 w-9 place-items-center rounded-full border-2 border-ink bg-sand-50 shadow-brutal-xs">
                  <Icon size={16} className="text-ocean-dark" />
                </span>

                <Reveal delay={index * 0.08}>
                  <div className="rounded-3xl border-2 border-ink bg-sand-50 p-6 shadow-brutal transition-transform hover:-translate-y-1 sm:p-7">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full border-2 border-ink bg-sand-100 px-3 py-1 font-mono text-xs font-bold">
                        {entry.period}
                      </span>
                      <span
                        className={`rounded-full border-2 border-ink px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest ${meta.chip}`}
                      >
                        {entry.badge}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-xl font-extrabold">
                      {entry.role}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-ocean-dark">
                      {entry.organization}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                      {entry.description}
                    </p>

                    {entry.highlights?.length ? (
                      <ul className="mt-4 grid gap-2">
                        {entry.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex gap-3 text-sm text-ink-soft"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ocean" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    {entry.tech?.length ? (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {entry.tech.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-ink/25 bg-sand-100 px-2 py-0.5 font-mono text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
