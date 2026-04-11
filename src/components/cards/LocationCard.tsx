import Link from "next/link";

interface LocationCardProps {
  name: string;
  subtitle: string;
  image: string;
  href: string;
}

export function LocationCard({ name, subtitle, image, href }: LocationCardProps) {
  return (
    <Link href={href} className="group relative h-[130px] md:h-[180px] overflow-hidden block">
      {/* Background */}
      <div className="absolute inset-0 bg-steel">
        <div
          className="w-full h-full bg-cover bg-center grayscale-[30%] group-hover:grayscale-0 transition-all duration-300"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-black/80" />
      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 px-3 py-2.5">
        <h4 className="text-[12px] font-medium text-white tracking-[0.02em]">
          {name}
        </h4>
        <p className="text-[10px] text-steel-light">{subtitle}</p>
      </div>
    </Link>
  );
}
