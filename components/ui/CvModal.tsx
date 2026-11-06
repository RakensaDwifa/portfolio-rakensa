"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowDownToLine, ExternalLink, X } from "lucide-react";
import { getLenis } from "@/lib/lenis";

export function CvModal({
  isOpen,
  onClose,
  resumeUrl,
}: {
  isOpen: boolean;
  onClose: () => void;
  resumeUrl: string;
}) {
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    getLenis()?.stop();

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      getLenis()?.start();
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-3 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Curriculum Vitae Preview"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex h-[88vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border-2 border-ink bg-sand-50 shadow-brutal-lg"
          >
            <div className="flex items-center justify-between border-b-2 border-ink bg-sand-100 px-5 py-4 sm:px-6">
              <div>
                <h3 className="font-display text-lg font-extrabold sm:text-xl">
                  Curriculum Vitae
                </h3>
                <p className="font-mono text-xs text-ink-soft">
                  Rakensa Dwifa Noverdiastra • Engineering Physics
                </p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={resumeUrl}
                  download
                  className="inline-flex items-center gap-1.5 rounded-xl border-2 border-ink bg-ocean px-3.5 py-1.5 font-mono text-xs font-bold text-white shadow-brutal-xs transition-transform hover:-translate-y-0.5"
                >
                  <ArrowDownToLine size={14} />
                  <span className="hidden sm:inline">Download</span>
                </a>
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border-2 border-ink bg-sand-50 px-3 py-1.5 font-mono text-xs font-bold text-ink shadow-brutal-xs transition-transform hover:-translate-y-0.5"
                  aria-label="Open in new tab"
                >
                  <ExternalLink size={14} />
                  <span className="hidden sm:inline">New tab</span>
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close CV preview"
                  className="grid h-8 w-8 place-items-center rounded-xl border-2 border-ink bg-sand-50 shadow-brutal-xs transition-transform hover:-translate-y-0.5"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            <div data-lenis-prevent className="min-h-0 flex-1 bg-sand-200">
              <iframe
                src={`${resumeUrl}#toolbar=0`}
                title="Rakensa Dwifa CV"
                className="h-full w-full border-0"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
