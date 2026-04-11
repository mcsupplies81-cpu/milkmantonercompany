import Link from "next/link";
import type { BlogPost } from "@/types";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block bg-white border border-steel-pale p-5 hover:border-steel transition-colors group"
    >
      <div className="text-[9px] tracking-[0.14em] text-steel uppercase mb-2">
        {post.tag}
      </div>
      <h3 className="font-heading text-[15px] text-brand-black mb-2 group-hover:text-brand-mid transition-colors">
        {post.title}
      </h3>
      <span className="text-[11px] text-brand-mid tracking-[0.02em]">
        {post.readTime} &rarr;
      </span>
    </Link>
  );
}
