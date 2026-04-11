"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { company } from "@/data/company";
import { mainNav, type NavSection } from "@/data/navigation";

function DropdownMenu({ section }: { section: NavSection }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  if (!section.children) {
    return (
      <Link
        href={section.href}
        className="text-[11px] text-[#555] tracking-[0.02em] hover:text-brand-black transition-colors"
      >
        {section.label}
      </Link>
    );
  }

  return (
    // hover events on the outer wrapper so moving mouse from button → panel stays open
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-[11px] text-[#555] tracking-[0.02em] hover:text-brand-black transition-colors cursor-pointer py-1"
      >
        {section.label}
        <svg
          className={`w-2.5 h-2.5 transition-transform ${open ? "rotate-180" : ""}`}
          viewBox="0 0 10 6"
          fill="none"
        >
          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 w-60 bg-white border-[1.5px] border-brand-black z-50 shadow-sm">
          {/* "All X" hub link */}
          <Link
            href={section.href}
            onClick={() => setOpen(false)}
            className="flex items-center gap-1 px-4 py-3 border-b border-steel-pale hover:bg-steel-bg transition-colors"
          >
            <span className="text-[10px] font-medium text-brand-black tracking-[0.08em] uppercase">
              All {section.label}
            </span>
            <span className="text-brand-mid text-[10px]">→</span>
          </Link>
          {section.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 hover:bg-steel-bg transition-colors border-b border-steel-pale last:border-b-0"
            >
              <span className="block text-[12px] font-medium text-brand-black">
                {child.label}
              </span>
              {child.description && (
                <span className="block text-[10px] text-brand-mid mt-0.5 leading-[1.4]">
                  {child.description}
                </span>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-2 border-brand-black">
      <div className="flex items-center justify-between px-5 h-14 max-w-[1400px] mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/images/logo.jpg"
            alt="Milk Man Toner Company"
            width={90}
            height={108}
            className="h-[46px] w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-5">
          {mainNav.map((section) => (
            <DropdownMenu key={section.label} section={section} />
          ))}
        </div>

        {/* Desktop right */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a
            href={company.phoneHref}
            className="text-[11px] text-[#555] tracking-[0.02em] hover:text-brand-black"
          >
            {company.phone}
          </a>
          <Link
            href="/contact"
            className="bg-brand-black text-white text-[11px] px-3.5 py-1.5 tracking-[0.04em] hover:bg-brand-accent transition-colors"
          >
            Get a quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col gap-1 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`w-5 h-0.5 bg-brand-black transition-transform ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`}
          />
          <span
            className={`w-5 h-0.5 bg-brand-black transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`w-5 h-0.5 bg-brand-black transition-transform ${mobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t-2 border-brand-black bg-white">
          {mainNav.map((section) => (
            <div key={section.label}>
              {section.children ? (
                <>
                  <button
                    onClick={() =>
                      setExpandedSection(
                        expandedSection === section.label
                          ? null
                          : section.label
                      )
                    }
                    className="w-full flex items-center justify-between px-5 py-3 text-sm text-brand-black border-b border-steel-pale font-medium"
                  >
                    {section.label}
                    <svg
                      className={`w-3 h-3 transition-transform ${expandedSection === section.label ? "rotate-180" : ""}`}
                      viewBox="0 0 10 6"
                      fill="none"
                    >
                      <path
                        d="M1 1l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </button>
                  {expandedSection === section.label && (
                    <div className="bg-steel-bg">
                      <Link
                        href={section.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-7 py-2.5 text-[11px] font-medium text-brand-mid border-b border-steel-pale"
                      >
                        All {section.label} →
                      </Link>
                      {section.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-7 py-2.5 text-[12px] text-brand-black border-b border-steel-pale hover:bg-steel-pale"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={section.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-5 py-3 text-sm text-brand-black border-b border-steel-pale font-medium"
                >
                  {section.label}
                </Link>
              )}
            </div>
          ))}
          <div className="px-5 py-3 flex flex-col gap-2">
            <a href={company.phoneHref} className="text-sm text-brand-mid">
              {company.phone}
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="bg-brand-black text-white text-sm px-4 py-2 text-center tracking-[0.04em]"
            >
              Get a quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
