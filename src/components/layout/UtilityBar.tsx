import Link from "next/link";

export function UtilityBar() {
  return (
    <div className="bg-brand-black">
      <div className="max-w-6xl mx-auto px-5 py-2.5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 min-w-0">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="w-4 h-4 text-steel-light shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
            <circle cx="12" cy="10" r="2.5" />
          </svg>
          <span className="text-[11px] text-steel-light truncate">
            Proudly Serving Sacramento, the Bay Area, Silicon Valley &amp; Reno
          </span>
        </div>

        <a
          href="tel:+19162539804"
          className="text-[11px] text-white flex items-center gap-2 shrink-0 hover:text-steel-light transition-colors"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6.2 6.2l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z" />
          </svg>
          <span>(916) 253-9804</span>
        </a>

        <Link
          href="/contact"
          className="border border-steel text-white text-[11px] px-4 py-1.5 hover:bg-white hover:text-brand-black transition-colors shrink-0"
        >
          Get a Quote
        </Link>
      </div>
    </div>
  );
}
