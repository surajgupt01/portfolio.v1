import Github from "./Github";
import Link from "./Link";
import { ProjectsDescription } from "./ProjectDescription";

export default function Projects() {
  function jumpTab(links: string) {
    window.open(links, "_blank", "noopener,noreferrer");
  }

  return (
    <div
      className="w-full bg-white py-16 sm:py-20 flex flex-col items-center"
      id="projects"
    >
      {/* Outer wrapper takes full 100% width of the page */}
      <div className="w-full max-w-6xl px-4 flex flex-col items-center">
        
        {/* Section Header - Takes full parent width and left-aligned */}
        <div className="w-full flex flex-col items-start text-left mb-10 sm:mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-semibold mb-3">
            Proof of Work
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">
            Featured Projects
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-500 max-w-lg">
            Real-world applications I’ve designed, built, and shipped to
            production.
          </p>
        </div>

        {/* Projects Grid - Restricted to 90% to 75% width, centered cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[90%] md:w-[85%] justify-items-center">
          {ProjectsDescription.map((e) => (
            <div
              key={e.title}
              className="group/card flex flex-col justify-between rounded-xl border border-neutral-200 bg-white p-5 shadow-xs transition-all duration-300 hover:border-neutral-300 hover:shadow-sm w-full"
            >
              <div>
                {/* Project Image / Thumbnail Wrapper */}
                <div className="relative mb-4 overflow-hidden rounded-lg border border-neutral-100 bg-neutral-50 aspect-video">
                  <img
                    src={e.link}
                    alt={`Screenshot of ${e.title}`}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover/card:scale-105"
                  />

                  {/* Action Links - Always visible on mobile, overlay on desktop hover */}
                  <div className="absolute inset-0 bg-neutral-900/10 sm:bg-neutral-900/40 sm:opacity-0 sm:group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4">
                    <button
                      onClick={() => jumpTab(e.github)}
                      className="rounded-full bg-white sm:bg-white p-3 sm:p-2.5 text-neutral-900 shadow-lg sm:shadow-sm transition-transform hover:scale-110 cursor-pointer active:scale-95"
                      aria-label="Open GitHub Repository"
                    >
                      <Github />
                    </button>
                    <button
                      onClick={() => jumpTab(e.liveLink)}
                      className="rounded-full bg-white sm:bg-white p-3 sm:p-2.5 text-neutral-900 shadow-lg sm:shadow-sm transition-transform hover:scale-110 cursor-pointer active:scale-95"
                      aria-label="Open Live Demo"
                    >
                      <Link />
                    </button>
                  </div>
                </div>

                {/* Title & Status */}
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-semibold text-neutral-900 group-hover/card:text-neutral-700 transition-colors">
                    {e.title}
                  </h3>
                  {e.status && (
                    <span className="shrink-0 rounded-full bg-green-50 px-2.5 py-0.5 text-[10px] font-medium text-green-700 border border-green-100">
                      {e.status}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-neutral-600 line-clamp-3">
                  {e.description}
                </p>
              </div>

              {/* Tech Stack Badges */}
              <div className="mt-5 pt-4 border-t border-neutral-100">
                <div className="flex flex-wrap items-center gap-1.5">
                  {e.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-neutral-100 px-2 py-1 text-[10px] font-medium text-neutral-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}