import type { Review } from "@/types";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-white border border-steel-pale p-5">
      {/* Stars */}
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: review.rating }).map((_, i) => (
          <span key={i} className="text-[#f5a623] text-sm">
            &#9733;
          </span>
        ))}
      </div>
      <p className="text-[11px] text-[#555] leading-[1.65] mb-3">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="text-[11px] font-medium text-brand-black">
        {review.author}
      </div>
      <div className="text-[10px] text-brand-mid">
        {review.company} · {review.location}
      </div>
    </div>
  );
}
