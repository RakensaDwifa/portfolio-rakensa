"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ExternalLink, Plus, X } from "lucide-react";
import SiGithub from "@icons-pack/react-simple-icons/icons/SiGithub";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projectsData } from "@/data/portfolioData";
import type { Project } from "@/types/portfolio";

function ProjectCard({
  project,
  onOpen,
  index,
}: {
  project: Project;
  onOpen: (project: Project) => void;
  index: number;
}) {
  if (project.placeholder) {
    return (
      <Reveal delay={index * 0.06} className="h-full">
        <div className="flex h-full min-h-64 flex-col items-center justify-center gap-3 rounded-3xl border-2 border-dashed border-ink/40 bg-sand-100/60 p-8 text-center">
          <span className="grid h-12 w-12 place-items-center rounded-full border-2 border-dashed border-ink/50 text-ink/50">
            <Plus size={22} />
          </span>
          <p className="font-display text-lg font-bold text-ink/70">{project.title}</p>
          <p className="max-w-xs text-sm text-ink-soft">{project.summary}</p>
          <span className="mt-1 rounded-full border-2 border-ink/40 px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest text-ink/60">
            Coming soon
          </span>
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal delay={index * 0.06} className="h-full">
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="group flex h-full w-full flex-col overflow-hidden rounded-3xl border-2 border-ink bg-sand-50 text-left shadow-brutal transition-transform duration-300 hover:-translate-y-1 hover:shadow-brutal-lg"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden border-b-2 border-ink bg-ocean-soft">
          {project.imageUrl ? (
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              sizes={
                project.featured
                  ? "(min-width: 1024px) 1120px, 100vw"
                  : "(min-width: 1024px) 560px, 100vw"
              }
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="grid h-full w-full place-items-center bg-grid font-mono text-sm text-ink/50">
              preview
            </div>
          )}
          {project.year ? (
            <span className="absolute right-3 top-3 rounded-lg border-2 border-ink bg-sand-50 px-2 py-1 font-mono text-xs font-bold shadow-brutal-xs">
              {project.year}
            </span>
          ) : null}
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center gap-2">
            <span className="rounded-full border-2 border-ink bg-ocean-soft px-2.5 py-0.5 font-mono text-[11px] font-bold uppercase tracking-widest">
              {project.featured ? "Featured" : project.category}
            </span>
          </div>
          <h3 className="mt-3 font-display text-xl font-extrabold">{project.title}</h3>
          <p className="mt-1 text-sm text-ink-soft">{project.subtitle}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-ink/25 bg-sand-100 px-2 py-0.5 font-mono text-xs"
              >
                {tech}
              </span>
            ))}
          </div>

          <span className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-ocean-dark">
            View details
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </div>
      </button>
    </Reveal>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-6">
      <div
        className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} details`}
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.98 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-3xl border-2 border-ink bg-sand-50 shadow-brutal-lg sm:rounded-3xl"
      >
        <div className="relative aspect-[16/9] w-full shrink-0 border-b-2 border-ink bg-ocean-soft">
          {project.imageUrl ? (
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              sizes="768px"
              className="object-cover"
            />
          ) : (
            <div className="grid h-full w-full place-items-center bg-grid font-mono text-sm text-ink/50">
              preview
            </div>
          )}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-xl border-2 border-ink bg-sand-50 shadow-brutal-xs transition-transform hover:-translate-y-0.5"
          >
            <X size={18} />
          </button>
        </div>

        <div className="overflow-y-auto p-6 sm:p-8">
          <span className="rounded-full border-2 border-ink bg-ocean-soft px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest">
            {project.category}
          </span>
          <h3 className="mt-4 font-display text-2xl font-extrabold sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-2 text-base text-ink-soft">{project.subtitle}</p>

          {project.description ? (
            <p className="mt-5 text-sm leading-relaxed text-ink-soft">
              {project.description}
            </p>
          ) : null}

          {project.metrics?.length ? (
            <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border-2 border-ink bg-sand-100 px-4 py-3 shadow-brutal-xs"
                >
                  <dt className="font-mono text-[11px] font-bold uppercase tracking-widest text-ink-soft">
                    {metric.label}
                  </dt>
                  <dd className="mt-1 text-sm font-bold">{metric.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}

          {project.architecture?.length ? (
            <div className="mt-8">
              <h4 className="font-display text-sm font-extrabold uppercase tracking-wide">
                What I built
              </h4>
              <ul className="mt-3 grid gap-2">
                {project.architecture.map((point) => (
                  <li key={point} className="flex gap-3 text-sm text-ink-soft">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ocean" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {project.highlights?.length ? (
            <div className="mt-8 flex flex-wrap gap-2">
              {project.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-full border-2 border-ink bg-sand-100 px-3 py-1 text-xs font-semibold shadow-brutal-xs"
                >
                  {highlight}
                </span>
              ))}
            </div>
          ) : null}

          <div className="mt-8">
            <h4 className="font-display text-sm font-extrabold uppercase tracking-wide">
              Tech stack
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border-2 border-ink/30 bg-sand-100 px-2.5 py-1 font-mono text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {(project.githubUrl || project.demoUrl) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-ink bg-ocean px-4 py-2.5 text-sm font-bold text-white shadow-brutal-xs transition-transform hover:-translate-y-0.5"
                >
                  Live site
                  <ExternalLink size={16} />
                </a>
              ) : null}
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-ink bg-sand-50 px-4 py-2.5 text-sm font-bold shadow-brutal-xs transition-transform hover:-translate-y-0.5"
                >
                  Source code
                  <SiGithub size={16} />
                </a>
              ) : null}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export function ProjectShowcase() {
  const [selected, setSelected] = useState<Project | null>(null);
  const close = useCallback(() => setSelected(null), []);

  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <Reveal>
          <SectionHeading
            eyebrow="Selected work"
            title="Projects & experiments"
            description="A small but growing collection. Every project is a chance to learn something and ship something that works."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className={project.featured ? "lg:col-span-2" : undefined}
            >
              <ProjectCard project={project} onOpen={setSelected} index={index} />
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected ? <ProjectModal project={selected} onClose={close} /> : null}
      </AnimatePresence>
    </section>
  );
}
