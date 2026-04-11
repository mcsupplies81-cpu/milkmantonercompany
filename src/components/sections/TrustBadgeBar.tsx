interface TrustBadgeBarProps {
  badges: string[];
}

export function TrustBadgeBar({ badges }: TrustBadgeBarProps) {
  return (
    <div className="bg-brand-black px-5 py-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
      {badges.map((badge) => (
        <span
          key={badge}
          className="text-[10px] text-[#999] tracking-[0.08em] uppercase"
        >
          {badge}
        </span>
      ))}
    </div>
  );
}
