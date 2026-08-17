import Github from "./Github";
import Link from "./Link";
import { ProjectsDescription } from "./ProjectDescription";

export default function Projects() {
  function jumpTab(links: string) {
    window.open(links, "_blank", "noopener,noreferrer");
  }

  return (
    <div
      className="w-full  py-12 sm:py-16 flex flex-col items-center"
      id="projects"
    >
      {/* Outer wrapper takes full 100% width of the page */}
      <div className="w-full max-w-5xl px-4 flex flex-col items-center">
        
        {/* Section Header - Takes full parent width and left-aligned */}
        <div className="w-full flex flex-col items-start text-left mb-8 sm:mb-10">
          <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-semibold mb-1.5">
            Proof of Work
          </span>
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900">
            Featured Projects
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-neutral-500 max-w-lg leading-relaxed">
            Real-world applications I’ve designed, built, and shipped to production.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[95%] md:w-[90%] justify-items-center">
          {ProjectsDescription.map((e) => (
            <div
              key={e.title}
              className="group/card flex flex-col justify-between rounded-xl border border-neutral-200 bg-white p-4 sm:p-5 shadow-2xs transition-all duration-300 hover:border-neutral-300 hover:shadow-xs w-full"
            >
              <div>
                {/* Project Image / Thumbnail Wrapper */}
                <div className="relative mb-3.5 overflow-hidden rounded-lg border border-neutral-100 bg-neutral-50 aspect-video">
                  <img
                    src={e.link}
                    alt={`Screenshot of ${e.title}`}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover/card:scale-105"
                  />

                  {/* Action Links - Always visible on mobile, overlay on desktop hover */}
                  <div className="absolute inset-0 bg-neutral-900/10 sm:bg-neutral-900/40 sm:opacity-0 sm:group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2.5 p-4">
                    <button
                      onClick={() => jumpTab(e.github)}
                      className="rounded-full bg-white p-2.5 text-neutral-900 shadow-md sm:shadow-sm transition-transform hover:scale-110 cursor-pointer active:scale-95"
                      aria-label="Open GitHub Repository"
                    >
                      <Github />
                    </button>
                    <button
                      onClick={() => jumpTab(e.liveLink)}
                      className="rounded-full bg-white p-2.5 text-neutral-900 shadow-md sm:shadow-sm transition-transform hover:scale-110 cursor-pointer active:scale-95"
                      aria-label="Open Live Demo"
                    >
                      <Link />
                    </button>
                  </div>
                </div>

                {/* Title & Status */}
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm sm:text-base font-semibold text-neutral-900 group-hover/card:text-neutral-700 transition-colors">
                    {e.title}
                  </h3>
                  {e.status && (
                    <span className="shrink-0 rounded-md bg-green-50 px-2 py-0.5 text-[10px] font-medium text-green-700 border border-green-100">
                      {e.status}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="mt-1.5 text-[11px] sm:text-xs leading-relaxed text-neutral-600 line-clamp-3">
                  {e.description}
                </p>
              </div>

              {/* Tech Stack Badges */}
              <div className="mt-4 pt-3 border-t border-neutral-100">
                <div className="flex flex-wrap items-center gap-1.5">
                  {e.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-neutral-100 px-2 py-0.5 text-[10px] font-medium text-neutral-600"
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