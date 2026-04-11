"use client";

import { useState, useEffect } from "react";

const taglines = [
  "Your local partner for office technology",
  "Your local partner for managed services",
  "Your local partner for IT solutions",
  "Your local partner for toner & supplies",
];

export function RotatingTagline() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % taglines.length);
        setFade(true);
      }, 400);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white border-b-2 border-brand-black px-5 py-6 md:py-8 text-center">
      <div className="max-w-3xl mx-auto">
        <p
          className={`font-heading text-xl md:text-2xl text-brand-black transition-opacity duration-400 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          &ldquo;{taglines[index]}&rdquo;
        </p>
        <p className="text-[11px] text-brand-mid tracking-[0.08em] uppercase mt-2">
          Milk Man Toner Company · Northern California
        </p>
      </div>
    </div>
  );
}
