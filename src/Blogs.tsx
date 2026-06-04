import { CalendarDays, ArrowRight } from "lucide-react";

export default function BlogSection() {
  return (
    <section className="w-full px-3 lg:py-16 py-8 text-white " id="blog">
      {/* Heading */}
      <div className="lg:mb-14 mb-7">
        <p className="text-md uppercase tracking-[0.2em] text-zinc-500">
          Blogs
        </p>
      </div>

      {/* Blog Card */}
      <div className="group flex flex-col gap-4  bg-zinc-200 px-3 py-4 rounded-xl  transition-all duration-300 md:flex-row md:items-center md:justify-between cursor-pointer">
        {/* Left Content */}
        <div className="max-w-3xl">
          <h3 className="text-xl font-semibold tracking-tight text-zinc-900 transition duration-300 group-hover:text-zinc-500">
            Why Most AI SaaS Products Fail at UX ?
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-zinc-500">
            Building with AI is easy now. Building intuitive, trustworthy, and
            production-ready AI experiences is still the hard part.
          </p>

          {/* Date */}
          <div className="mt-3 flex items-center gap-2 text-sm text-zinc-500">
            <CalendarDays size={16} />
            <span>June 1, 2026</span>
          </div>
        </div>

        {/* Right CTA */}
        <button
          className="
            flex flex-row items-center justify-end gap-2
            text-sm text-zinc-600
            transition-all duration-300
            hover:gap-3
            w-30
            cursor-pointer
            hover:text-zinc-500
          "
        >
          <span>Read more</span>
          <ArrowRight size={20} />
        </button>
      </div>

      {/* Bottom Button */}
      {/* <div className="mt-12 flex justify-center">
        <button
          className="
            rounded-xl
            border border-zinc-700
            bg-zinc-900/70
            px-6 py-3
            text-base font-medium text-zinc-200
            backdrop-blur-sm
            transition-all duration-300
            hover:border-zinc-500
            hover:bg-zinc-800
            hover:text-white
          "
        >
          Show all blogs
        </button>
      </div> */}
    </section>
  );
}
