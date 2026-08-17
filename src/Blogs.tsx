import { CalendarDays, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

export default function BlogSection() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/blogs");
  };

  return (
    <section
      className="w-full bg-white py-12 sm:py-16 flex justify-center max-w-3xl mx-auto"
      id="blog"
    >
      <div className="w-full">
        {/* Section Header with "Show All" Link */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 sm:mb-10 gap-3">
          <div className="flex flex-col items-start text-left">
            <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-semibold mb-1.5">
              Thoughts & Writings
            </span>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900">
              Latest Articles
            </h2>
          </div>

          {/* Top-right "Show all blogs" action button */}
          <button
            onClick={() => {
              handleClick();
            }}
            className="cursor-pointer inline-flex items-center gap-1 text-xs font-medium text-neutral-600 transition-colors duration-200 hover:text-neutral-900 self-start sm:self-auto"
          >
            <span>View all articles</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Blog Card */}
        <div
          onClick={() => {
            navigate("/blogs/pulse-ai");
          }}
          className="group relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-xl border border-neutral-200 bg-white p-5 sm:p-6 shadow-2xs transition-all duration-300 hover:border-neutral-300 hover:shadow-xs cursor-pointer"
        >
          {/* Left Content */}
          <div className="max-w-xl">
            <h3 className="text-base sm:text-lg font-semibold tracking-tight text-neutral-900 transition-colors duration-200 group-hover:text-neutral-600">
              How I Built Pulse AI
            </h3>

            <p className="mt-1.5 text-[11px] sm:text-xs leading-relaxed text-neutral-500">
              Building an AI-powered ingredient analysis platform using OCR, LLMs, and modern full-stack technologies.
            </p>

            {/* Date */}
            <div className="mt-3 flex items-center gap-1.5 text-[11px] text-neutral-400">
              <CalendarDays size={12} />
              <span>June 1, 2026</span>
            </div>
          </div>

          {/* Right CTA */}
          <div className="flex items-center gap-1 text-xs font-medium text-neutral-900 transition-colors whitespace-nowrap duration-200 group-hover:text-neutral-600 self-start sm:self-center">
            <span>Read article</span>
            <ArrowRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-1 shrink-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}