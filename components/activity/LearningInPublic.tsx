import SiGithub from "@icons-pack/react-simple-icons/icons/SiGithub";
import { Reveal } from "@/components/ui/Reveal";
import { profileData } from "@/data/portfolioData";

const NOW = [
  { label: "Building", value: "This portfolio with Next.js & TypeScript" },
  { label: "Learning", value: "React patterns & component architecture" },
  { label: "Practicing", value: "Responsive, accessible interfaces" },
  { label: "Exploring", value: "Where physics and computing overlap" },
];

export function LearningInPublic() {
  const github = profileData.socials.find((social) => social.key === "github");

  return (
    <section className="bg-ink py-20 text-sand-50 sm:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal>
            <span className="inline-block rounded-full border-2 border-sand-50/40 bg-ink px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest">
              Learning in public
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
              Always building, always learning.
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-sand-50/70">
              Most of what I know I learned by shipping small projects. I document the
              process on GitHub — commits, experiments, and the occasional late-night fix.
            </p>
            {github ? (
              <a
                href={github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-xl border-2 border-sand-50 bg-ocean px-5 py-3 text-sm font-bold text-white shadow-brutal-sm transition-transform hover:-translate-y-0.5"
              >
                <SiGithub size={18} />
                Follow {github.handle}
              </a>
            ) : null}
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <ul className="grid gap-3">
              {NOW.map((entry, index) => (
                <li
                  key={entry.label}
                  className="flex items-center gap-4 rounded-2xl border-2 border-sand-50/25 bg-ink px-5 py-4 transition-colors hover:border-ocean"
                >
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-ocean-soft">
                    0{index + 1}
                  </span>
                  <div>
                    <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-sand-50/60">
                      {entry.label}
                    </p>
                    <p className="text-sm font-semibold text-sand-50">{entry.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
