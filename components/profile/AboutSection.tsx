import {
  Code2,
  GraduationCap,
  MapPin,
  Radar,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profileData } from "@/data/portfolioData";

const FACTS = [
  { icon: GraduationCap, label: "Education", value: profileData.education },
  { icon: MapPin, label: "Based in", value: profileData.location },
  { icon: Code2, label: "Focus", value: "Web development & frontend interfaces" },
  { icon: Radar, label: "Availability", value: profileData.status },
];

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <SectionHeading
              eyebrow="About me"
              title="A physics student who fell for the web."
              description={profileData.about[0]}
            />
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
              {profileData.about[1]}
            </p>

            <div className="mt-8">
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-ink-soft">
                What I care about
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {profileData.interests.map((interest) => (
                  <li
                    key={interest}
                    className="rounded-full border-2 border-ink bg-sand-100 px-3 py-1.5 text-sm font-semibold shadow-brutal-xs"
                  >
                    {interest}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <div className="rounded-3xl border-2 border-ink bg-sand-100 p-6 shadow-brutal-lg sm:p-8">
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest">
                <Sparkles size={16} className="text-ocean-dark" />
                Quick facts
              </div>

              <dl className="mt-6 grid gap-5">
                {FACTS.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border-2 border-ink bg-sand-50 shadow-brutal-xs">
                      <Icon size={18} className="text-ocean-dark" />
                    </span>
                    <div>
                      <dt className="font-mono text-xs font-bold uppercase tracking-widest text-ink-soft">
                        {label}
                      </dt>
                      <dd className="mt-0.5 text-sm font-semibold">{value}</dd>
                    </div>
                  </div>
                ))}
              </dl>

              <div className="mt-6 rounded-2xl border-2 border-dashed border-ink/40 bg-sand-50 p-4">
                <p className="text-sm text-ink-soft">
                  &ldquo;I like problems that make me learn something new — then turning
                  that into something people can actually use.&rdquo;
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
