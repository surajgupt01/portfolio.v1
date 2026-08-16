import { CalendarDays, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

export default function BlogSection() {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to a specific route
    navigate("/blogs");

    // Optional: Pass state or navigate back/forward (-1 goes back)
    // navigate(-1);
  };
  return (
    <section
      className="w-full bg-white py-16 sm:py-20 flex justify-center"
      id="blog"
    >
      <div className="">
        {/* Section Header with "Show All" Link */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 sm:mb-10 gap-4">
          <div className="flex flex-col items-start text-left">
            <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-semibold mb-2">
              Thoughts & Writings
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">
              Latest Articles
            </h2>
          </div>

          {/* Top-right "Show all blogs" action button */}
          <button
            onClick={() => {
              handleClick();
            }}
            className="cursor-pointer inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-neutral-600 transition-colors duration-200 hover:text-neutral-900 self-start sm:self-auto"
          >
            <span>View all articles</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Blog Card */}
        <div
          onClick={() => {
            // Add your individual blog post link handler here
          }}
          className="group relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-2xl border border-neutral-200 bg-white p-6 sm:p-6 shadow-xs transition-all duration-300 hover:border-neutral-300 hover:shadow-sm cursor-pointer"
        >
          {/* Left Content */}
          <div className="max-w-2xl">
            <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-neutral-900 transition-colors duration-200 group-hover:text-neutral-600">
              How I Built Pulse AI
            </h3>

            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-neutral-500">
              Building an AI-powered ingredient analysis platform using OCR,
              LLMs, and modern full-stack technologies.
            </p>

            {/* Date */}
            <div className="mt-4 flex items-center gap-2 text-xs text-neutral-400">
              <CalendarDays size={14} />
              <span>June 1, 2026</span>
            </div>
          </div>

          {/* Right CTA */}
          <div className="flex items-center  text-xs sm:text-sm font-medium text-neutral-900 transition-colors whitespace-nowrap duration-200 group-hover:text-neutral-600 self-start sm:self-center">
            <a href="/blogs/pulse-ai">Read article</a>
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
