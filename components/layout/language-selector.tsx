"use client";

import { useState } from "react";
import { Check, ChevronDown, Globe } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const languages = ["English"];

export function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(languages[0]);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
        className="flex items-center gap-2 rounded-full border border-white/15 px-3.5 py-2 text-sm text-white/70 transition-colors hover:border-white/30 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <Globe className="h-4 w-4" aria-hidden="true" />
        {selected}
        <ChevronDown
          className="h-3.5 w-3.5 transition-transform"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full right-0 z-10 mb-2 w-40 rounded-xl border border-white/10 bg-surface-dark p-1 shadow-[0_12px_32px_rgba(0,0,0,0.35)]"
          >
            {languages.map((language) => (
              <li key={language}>
                <button
                  type="button"
                  role="option"
                  aria-selected={selected === language}
                  onClick={() => {
                    setSelected(language);
                    setOpen(false);
                  }}
                  className="flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-left text-sm text-white/80 hover:bg-white/10 hover:text-white"
                >
                  {language}
                  {selected === language && <Check className="h-3.5 w-3.5" aria-hidden="true" />}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
