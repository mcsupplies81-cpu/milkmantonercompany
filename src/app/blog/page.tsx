import type { Metadata } from "next";
import Link from "next/link";
import { BlogCard } from "@/components/cards/BlogCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { blogPosts } from "@/data/blog-posts";
import { company } from "@/data/company";

export const metadata: Metadata = buildMetadata({
  title: "Blog  -  Copier & Printer Tips for NorCal Businesses",
  description:
    "Expert tips on copier leasing, managed print services, and office technology from Milk Man Toner Company. Serving Sacramento, Bay Area, and Northern California.",
  path: "/blog",
});

export default function BlogIndexPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", url: company.website },
          { name: "Blog", url: `${company.website}/blog` },
        ])}
      />

      {/* Breadcrumbs */}
      <div className="px-5 py-3 bg-steel-bg border-b border-steel-pale">
        <div className="max-w-6xl mx-auto text-[11px] text-brand-mid">
          <Link href="/" className="hover:text-brand-black transition-colors">
            Home
          </Link>
          <span className="mx-1.5">/</span>
          <span className="text-brand-black">Blog</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-steel-pale border-b-2 border-brand-black px-5 py-10 md:py-14 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-brand-black text-white text-[9px] tracking-[0.16em] px-2.5 py-1 mb-3 uppercase">
            Blog
          </div>
          <h1 className="font-heading text-[30px] md:text-[42px] leading-[1.1] text-brand-black mb-3 tracking-[-0.3px]">
            Insights &amp; tips
          </h1>
          <p className="text-[12px] md:text-sm text-brand-mid leading-[1.65] max-w-xl">
            Expert advice on copiers, printers, managed print, and office
            technology  -  from your local NorCal partner.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="px-5 py-10 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
