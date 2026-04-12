import Link from "next/link";
import Image from "next/image";

interface HeroSectionProps {
  tag?: string;
  title: React.ReactNode;
  description: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  badges?: string[];
  backgroundImage?: string;
  backgroundLabel?: string;
}

export function HeroSection({
  tag,
  title,
  description,
  primaryCTA,
  secondaryCTA,
  badges,
  backgroundImage,
  backgroundLabel,
}: HeroSectionProps) {
  return (
    <div className="relative bg-steel-pale border-b-2 border-brand-black overflow-hidden">
      {/* Image area */}
      <div className="w-full h-[300px] md:h-[540px] bg-steel relative overflow-hidden">
        {backgroundImage ? (
          <Image
            src={backgroundImage}
            alt="Hero background"
            fill
            className="object-cover object-center"
            sizes="100vw"
            quality={90}
            priority
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-[11px] text-white/70 text-center">
              [ {backgroundLabel || "Hero photo goes here"} ]
            </p>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-black/75" />
      </div>

      {/* Body */}
      <div className="px-5 py-7 md:px-8 md:py-10 bg-steel-pale relative">
        {tag && (
          <div className="inline-block bg-brand-black text-white text-[9px] tracking-[0.16em] px-2.5 py-1 mb-3 uppercase">
            {tag}
          </div>
        )}
        <h1 className="font-heading text-[30px] md:text-[42px] leading-[1.1] text-brand-black mb-2.5 tracking-[-0.3px]">
          {title}
        </h1>
        <p className="text-[12px] md:text-sm text-brand-mid leading-[1.65] mb-5 max-w-[440px]">
          {description}
        </p>
        {(primaryCTA || secondaryCTA) && (
          <div className="flex gap-2 flex-wrap mb-5">
            {primaryCTA && (
              <Link
                href={primaryCTA.href}
                className="bg-brand-black text-white text-[11px] px-[18px] py-2.5 font-medium tracking-[0.04em] hover:bg-brand-accent transition-colors"
              >
                {primaryCTA.label}
              </Link>
            )}
            {secondaryCTA && (
              <Link
                href={secondaryCTA.href}
                className="border-[1.5px] border-brand-black text-brand-black text-[11px] px-[18px] py-2.5 tracking-[0.04em] hover:bg-brand-black hover:text-white transition-colors"
              >
                {secondaryCTA.label}
              </Link>
            )}
          </div>
        )}
        {badges && badges.length > 0 && (
          <div className="flex gap-1.5 flex-wrap">
            {badges.map((badge) => (
              <span
                key={badge}
                className="bg-white border border-steel text-brand-mid text-[9px] px-2.5 py-1 tracking-[0.05em]"
              >
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
