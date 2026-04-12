"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface HeroSlide {
  src: string;
  alt: string;
}

interface HeroImageRotatorProps {
  slides: HeroSlide[];
}

export function HeroImageRotator({ slides }: HeroImageRotatorProps) {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (slides.length <= 1) return;
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setPrev(current);
        setCurrent((c) => (c + 1) % slides.length);
        setFading(false);
      }, 800);
    }, 6000);
    return () => clearInterval(interval);
  }, [current, slides.length]);

  return (
    <div className="absolute inset-0">
      {/* Previous slide - stays visible during fade */}
      {prev !== null && (
        <Image
          key={`prev-${prev}`}
          src={slides[prev].src}
          alt={slides[prev].alt}
          fill
          className="object-cover object-center"
          sizes="100vw"
          quality={90}
          priority={prev === 0}
        />
      )}
      {/* Current slide - fades in */}
      <Image
        key={`current-${current}`}
        src={slides[current].src}
        alt={slides[current].alt}
        fill
        className="object-cover object-center transition-opacity duration-[800ms]"
        style={{ opacity: fading ? 0 : 1 }}
        sizes="100vw"
        quality={90}
        priority={current === 0}
      />
    </div>
  );
}
