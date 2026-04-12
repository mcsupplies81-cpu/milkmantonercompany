import Link from "next/link";
import Image from "next/image";

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
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-center grayscale-[30%] group-hover:grayscale-0 transition-all duration-300"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 300px"
          quality={85}
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
