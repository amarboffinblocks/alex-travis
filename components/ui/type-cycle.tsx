"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

type TypeCycleProps = {
  words: readonly string[];
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  holdMs?: number;
  accent?: boolean;
};

/**
 * Cycles through words with a typewriter effect.
 * Width follows the visible text — no reserved gap for longer phrases.
 */
function TypeCycle({
  words,
  className,
  typeSpeed = 70,
  deleteSpeed = 45,
  holdMs = 1800,
  accent = false,
}: TypeCycleProps) {
  const shouldReduceMotion = useReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion || words.length === 0) return;

    const current = words[wordIndex] ?? "";
    const doneTyping = !isDeleting && text === current;
    const doneDeleting = isDeleting && text.length === 0;

    if (doneTyping) {
      const hold = window.setTimeout(() => setIsDeleting(true), holdMs);
      return () => window.clearTimeout(hold);
    }

    if (doneDeleting) {
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
      return;
    }

    const delay = isDeleting ? deleteSpeed : typeSpeed;
    const tick = window.setTimeout(() => {
      setText((prev) =>
        isDeleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1)
      );
    }, delay);

    return () => window.clearTimeout(tick);
  }, [
    text,
    isDeleting,
    wordIndex,
    words,
    typeSpeed,
    deleteSpeed,
    holdMs,
    shouldReduceMotion,
  ]);

  const display = shouldReduceMotion ? (words[0] ?? "") : text;

  return (
    <span
      className={cn(
        "relative inline-flex items-baseline whitespace-nowrap",
        className
      )}
      aria-live="polite"
      aria-atomic="true"
    >
      {accent ? (
        <span
          aria-hidden
          className="absolute inset-x-0 bottom-[0.1em] z-0 h-[0.32em] rounded-sm bg-accent-yellow"
        />
      ) : null}
      <span className="relative z-10 inline-flex items-baseline">
        {display}
        {!shouldReduceMotion ? (
          <motion.span
            aria-hidden
            className="ml-0.5 inline-block h-[0.85em] w-[0.08em] shrink-0 translate-y-[0.12em] rounded-full bg-current"
            animate={{ opacity: [1, 0] }}
            transition={{
              duration: 0.7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ) : null}
      </span>
    </span>
  );
}

export { TypeCycle };
