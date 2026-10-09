"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowDownToLine, ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import { profileData } from "@/data/portfolioData";

const ROLES = ["Web Developer", "Frontend Enthusiast", "Physics Student", "Problem Solver"];

function Typewriter() {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[index];
    let delay = deleting ? 45 : 95;
    if (!deleting && sub === current) delay = 1500;
    if (deleting && sub === "") delay = 300;

    const timer = setTimeout(() => {
      if (!deleting && sub === current) {
        setDeleting(true);
      } else if (deleting && sub === "") {
        setDeleting(false);
        setIndex((value) => (value + 1) % ROLES.length);
      } else {
        setSub(current.slice(0, sub.length + (deleting ? -1 : 1)));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [sub, deleting, index]);

  return (
    <span className="text-ocean-dark">
      {sub}
      <span className="ml-0.5 inline-block animate-blink font-mono">_</span>
    </span>
  );
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-36 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />

      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.span
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-sand-100 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-widest shadow-brutal-xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ocean opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-ocean" />
              </span>
              {profileData.status}
            </motion.span>

            <motion.h1
              variants={item}
              className="mt-6 font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl"
            >
              Hi, I&apos;m{" "}
              <span className="underline decoration-ocean decoration-4 underline-offset-4">
                {profileData.shortName}
              </span>
              .
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-5 max-w-xl text-lg font-medium text-ink-soft"
            >
              {profileData.tagline}. <Typewriter />
            </motion.p>

            <motion.p
              variants={item}
              className="mt-4 max-w-xl text-base text-ink-soft/90"
            >
              {profileData.bio}
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-ink bg-ocean px-5 py-3 text-sm font-bold text-white shadow-brutal-sm transition-transform hover:-translate-y-0.5"
              >
                View my work
                <ArrowUpRight size={18} />
              </a>
              <a
                href={profileData.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-xl border-2 border-ink bg-sand-50 px-5 py-3 text-sm font-bold text-ink shadow-brutal-sm transition-transform hover:-translate-y-0.5"
              >
                Download CV
                <ArrowDownToLine size={18} />
              </a>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm text-ink-soft"
            >
              <span className="inline-flex items-center gap-2">
                <MapPin size={16} className="text-ocean-dark" />
                {profileData.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <Sparkles size={16} className="text-ocean-dark" />
                {profileData.experienceStart}
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="animate-float-slow">
              <div className="relative rotate-2 overflow-hidden rounded-[2rem] border-2 border-ink bg-ocean-soft shadow-brutal-lg">
                <Image
                  src={profileData.avatarUrl}
                  alt={`Portrait of ${profileData.name}`}
                  width={520}
                  height={620}
                  priority
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>

            <span className="absolute -left-3 top-8 rotate-[-6deg] rounded-lg border-2 border-ink bg-sand-50 px-3 py-1.5 font-mono text-xs font-bold shadow-brutal-xs sm:-left-5">
              📍 Bandung, ID
            </span>
            <span className="absolute -right-2 bottom-10 rotate-[5deg] rounded-lg border-2 border-ink bg-ink px-3 py-1.5 font-mono text-xs font-bold text-sand-50 shadow-brutal-xs sm:-right-4">
              &lt;/&gt; web dev
            </span>
          </motion.div>
        </div>
      </div>

      <div className="ocean-strip mt-20 h-3 w-full border-y-2 border-ink sm:mt-24" />
    </section>
  );
}
