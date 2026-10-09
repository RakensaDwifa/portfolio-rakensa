import type { ComponentType } from "react";
import { ArrowRight } from "lucide-react";
import SiHtml5 from "@icons-pack/react-simple-icons/icons/SiHtml5";
import SiCss from "@icons-pack/react-simple-icons/icons/SiCss";
import SiJavascript from "@icons-pack/react-simple-icons/icons/SiJavascript";
import SiTailwindcss from "@icons-pack/react-simple-icons/icons/SiTailwindcss";
import SiReact from "@icons-pack/react-simple-icons/icons/SiReact";
import SiNextdotjs from "@icons-pack/react-simple-icons/icons/SiNextdotjs";
import SiGit from "@icons-pack/react-simple-icons/icons/SiGit";
import SiGithub from "@icons-pack/react-simple-icons/icons/SiGithub";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { techStackData } from "@/data/portfolioData";
import type { TechLayer } from "@/types/portfolio";

type IconComponent = ComponentType<{
  size?: number | string;
  color?: string;
  className?: string;
  title?: string;
}>;

const ICONS: Record<string, IconComponent> = {
  html5: SiHtml5,
  css: SiCss,
  javascript: SiJavascript,
  tailwindcss: SiTailwindcss,
  react: SiReact,
  nextdotjs: SiNextdotjs,
  git: SiGit,
  github: SiGithub,
};

const LAYERS: { id: TechLayer; label: string; caption: string }[] = [
  { id: "foundation", label: "Foundation", caption: "Languages & markup" },
  { id: "framework", label: "Framework", caption: "Building the interface" },
  { id: "tooling", label: "Tooling", caption: "Ship & collaborate" },
];

function TechIcon({
  iconKey,
  color,
  size = 28,
}: {
  iconKey: string;
  color: string;
  size?: number;
}) {
  const Icon = ICONS[iconKey] ?? SiCss;
  return <Icon size={size} color={color} />;
}

export function TechPipeline() {
  return (
    <section id="skills" className="scroll-mt-24 bg-sand-100 py-20 sm:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <Reveal>
          <SectionHeading
            eyebrow="Tech stack"
            title="The tools I build with"
            description="From language fundamentals to the tooling that gets work shipped — here is the stack I reach for and keep sharpening."
          />
        </Reveal>

        <div className="mt-12 flex flex-col gap-4 lg:flex-row lg:items-stretch">
          {LAYERS.map((layer, index) => {
            const items = techStackData.filter((tech) => tech.layer === layer.id);
            return (
              <div key={layer.id} className="flex flex-1 items-center gap-4">
                <Reveal delay={index * 0.08} className="w-full">
                  <div className="h-full rounded-3xl border-2 border-ink bg-sand-50 p-6 shadow-brutal">
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-display text-lg font-extrabold">{layer.label}</h3>
                      <span className="font-mono text-xs text-ink-soft">
                        0{index + 1}
                      </span>
                    </div>
                    <p className="mt-1 font-mono text-xs uppercase tracking-widest text-ink-soft">
                      {layer.caption}
                    </p>

                    <ul className="mt-5 grid gap-2">
                      {items.map((tech) => (
                        <li
                          key={`${tech.name}-${layer.id}`}
                          className="flex items-center gap-3 rounded-xl border border-ink/15 bg-sand-100 px-3 py-2"
                        >
                          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border-2 border-ink bg-sand-50">
                            <TechIcon iconKey={tech.iconKey} color={tech.color} size={18} />
                          </span>
                          <span className="text-sm font-semibold">{tech.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
                {index < LAYERS.length - 1 ? (
                  <ArrowRight
                    className="hidden shrink-0 text-ink/40 lg:block"
                    size={24}
                    aria-hidden="true"
                  />
                ) : null}
              </div>
            );
          })}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {techStackData
            .filter((tech) => tech.layer !== "tooling" || tech.name !== "Responsive Design")
            .slice(0, 6)
            .map((tech, index) => (
              <Reveal key={tech.name} delay={index * 0.05}>
                <div className="group flex h-full items-start gap-4 rounded-2xl border-2 border-ink bg-sand-50 p-5 shadow-brutal-xs transition-transform hover:-translate-y-1">
                  <span
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border-2 border-ink"
                    style={{ backgroundColor: `${tech.color}1a` }}
                  >
                    <TechIcon iconKey={tech.iconKey} color={tech.color} />
                  </span>
                  <div>
                    <p className="font-display text-base font-extrabold">{tech.name}</p>
                    <p className="font-mono text-[11px] uppercase tracking-widest text-ocean-dark">
                      {tech.roleTag}
                    </p>
                    <p className="mt-2 text-sm text-ink-soft">{tech.usageContext}</p>
                  </div>
                </div>
              </Reveal>
            ))}
        </div>
      </div>
    </section>
  );
}
