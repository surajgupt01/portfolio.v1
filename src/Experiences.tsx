import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function Experience() {
  const [moreTrivolve, setMoreTrivolve] = useState(false);
  const [moreUpwork, setMoreUpwork] = useState(false);

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.section
      ref={ref}
      style={{ y, opacity }}
      className="w-full py-12 sm:py-16 flex justify-center max-w-3xl mx-auto"
      id="work"
    >
      <div className="w-full">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-8 sm:mb-10">
          <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-semibold mb-1.5">
            Career Journey
          </span>
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900">
            Work Experience
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-neutral-200 pl-5 sm:pl-6 space-y-8">
          
          {/* ================= UPWORK (Present) ================= */}
          <div className="relative">
            {/* Timeline Dot */}
            <div className="absolute -left-[25px] sm:-left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-neutral-200 bg-neutral-900 animate-pulse shadow-2xs" />

            <div className="rounded-xl border border-neutral-200 bg-white p-5 sm:p-6 shadow-2xs transition-all duration-300 hover:border-neutral-300 hover:shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                
                {/* Company info */}
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 shrink-0 overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50 p-1.5 shadow-2xs flex items-center justify-center font-bold text-neutral-900 text-base">
                    U
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold tracking-tight text-neutral-900">
                      Upwork
                    </h3>
                    <p className="mt-0.5 text-xs font-medium text-neutral-500">
                      Freelance Full-Stack & GenAI Developer · Remote
                    </p>
                  </div>
                </div>

                {/* Date Badge */}
                <div className="self-start sm:self-center">
                  <span className="inline-flex items-center rounded-lg border border-neutral-200 bg-neutral-50 px-2.5 py-0.5 text-[11px] font-medium text-neutral-600 shadow-2xs">
                    Jun 2026 – Present
                  </span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-2 text-xs sm:text-sm leading-relaxed text-neutral-600">
                <div className="flex gap-2.5 items-start">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                  <p>
                    Built and shipped a full-stack client platform for global residency, citizenship, and business advisory services using Next.js, TypeScript, and Supabase, owning requirements through production deployment.
                  </p>
                </div>

                <div className="flex gap-2.5 items-start">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                  <p>
                    Engineered a custom CMS module for dynamic document generation and client workflow automation, replacing a manual document-handling process.
                  </p>
                </div>

                <div className="flex gap-2.5 items-start">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                  <p>
                    Implemented Supabase Row Level Security (RLS) for data access control and used Next.js Server Components to reduce unnecessary client-side data fetching.
                  </p>
                </div>

                {moreUpwork && (
                  <div className="space-y-2 pt-1">
                    <div className="flex gap-2.5 items-start">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                      <p>
                        Independently gathered requirements and delivered a second client project, a portfolio website for an international media industry client.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Toggle */}
              <button
                onClick={() => setMoreUpwork((prev) => !prev)}
                className="mt-4 text-xs font-medium cursor-pointer text-neutral-900 transition-colors hover:text-neutral-600"
              >
                {moreUpwork ? "Show less" : "Show more"}
              </button>
            </div>
          </div>

          {/* ================= TRIVOLVE TECH ================= */}
          <div className="relative">
            {/* Timeline Dot */}
            <div className="absolute -left-[25px] sm:-left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-neutral-200 bg-white shadow-2xs" />

            <div className="rounded-xl border border-neutral-200 bg-white p-5 sm:p-6 shadow-2xs transition-all duration-300 hover:border-neutral-300 hover:shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                
                {/* Company info */}
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 shrink-0 overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50 p-1 shadow-2xs">
                    <img
                      src="./assets/trivolve_tech_logo.jpg"
                      alt="Trivolve Tech"
                      className="h-full w-full object-cover rounded-md"
                    />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold tracking-tight text-neutral-900">
                      Trivolve Tech
                    </h3>
                    <p className="mt-0.5 text-xs font-medium text-neutral-500">
                      Full-Stack Developer Intern · Remote
                    </p>
                  </div>
                </div>

                {/* Date Badge */}
                <div className="self-start sm:self-center">
                  <span className="inline-flex items-center rounded-lg border border-neutral-200 bg-neutral-50 px-2.5 py-0.5 text-[11px] font-medium text-neutral-600 shadow-2xs">
                    Nov 2025 – Mar 2026
                  </span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-2 text-xs sm:text-sm leading-relaxed text-neutral-600">
                <div className="flex gap-2.5 items-start">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                  <p>
                    Built and improved UI components on a Web3 platform using Next.js + Tailwind CSS.
                  </p>
                </div>

                <div className="flex gap-2.5 items-start">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                  <p>
                    Owned end-to-end frontend of a key feature from design to deployment.
                  </p>
                </div>

                <div className="flex gap-2.5 items-start">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                  <p>
                    Improved responsiveness, layout structure, and component reusability across production applications.
                  </p>
                </div>

                {moreTrivolve && (
                  <div className="space-y-2 pt-1">
                    <div className="flex gap-2.5 items-start">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                      <p>
                        Built the frontend of a Polymarket-style mobile application using React Native.
                      </p>
                    </div>

                    <div className="flex gap-2.5 items-start">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                      <p>
                        Designed modular landing page sections and reusable UI component systems.
                      </p>
                    </div>

                    <div className="flex gap-2.5 items-start">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                      <p>
                        Collaborated closely on backend integrations and production feature delivery.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Toggle */}
              <button
                onClick={() => setMoreTrivolve((prev) => !prev)}
                className="mt-4 text-xs font-medium cursor-pointer text-neutral-900 transition-colors hover:text-neutral-600"
              >
                {moreTrivolve ? "Show less" : "Show more"}
              </button>
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}