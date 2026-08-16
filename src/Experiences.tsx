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

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.section
      ref={ref}
      style={{ y, opacity }}
      className="w-full bg-white py-16 sm:py-20 flex justify-center"
      id="work"
    >
      <div className="w-full">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left sm:text-center mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-semibold mb-3">
            Career Journey
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">
            Work Experience
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-neutral-200 pl-6 sm:pl-8 space-y-12">
          
          {/* ================= UPWORK (Present) ================= */}
          <div className="relative">
            {/* Timeline Dot */}
            <div className="absolute -left-[29px] sm:-left-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-neutral-300 bg-white shadow-xs" />

            <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-xs transition-all duration-300 hover:border-neutral-300 hover:shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                
                {/* Company info */}
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 sm:h-14 sm:w-14 shrink-0 overflow-hidden rounded-xl border border-neutral-100 bg-neutral-50 p-2 shadow-xs flex items-center justify-center font-bold text-neutral-900 text-lg">
                    U
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-neutral-900">
                      Upwork
                    </h3>
                    <p className="mt-0.5 text-sm font-medium text-neutral-600">
                      Freelance Full-Stack & GenAI Developer · Remote
                    </p>
                  </div>
                </div>

                {/* Date Badge */}
                <div className="self-start sm:self-center">
                  <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-600 shadow-xs">
                    Jun 2026 – Present
                  </span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-2.5 text-xs sm:text-sm leading-relaxed text-neutral-600">
                <div className="flex gap-3 items-start">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                  <p>
                    Built and shipped a full-stack client platform for global residency, citizenship, and business advisory services using Next.js, TypeScript, and Supabase, owning requirements through production deployment.
                  </p>
                </div>

                <div className="flex gap-3 items-start">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                  <p>
                    Engineered a custom CMS module for dynamic document generation and client workflow automation, replacing a manual document-handling process.
                  </p>
                </div>

                <div className="flex gap-3 items-start">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                  <p>
                    Implemented Supabase Row Level Security (RLS) for data access control and used Next.js Server Components to reduce unnecessary client-side data fetching.
                  </p>
                </div>

                {moreUpwork && (
                  <div className="space-y-2.5 pt-2">
                    <div className="flex gap-3 items-start">
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
                className="mt-5 text-xs font-medium cursor-pointer text-neutral-900 transition-colors hover:text-neutral-600"
              >
                {moreUpwork ? "Show less" : "Show more"}
              </button>
            </div>
          </div>

          {/* ================= TRIVOLVE TECH ================= */}
          <div className="relative">
            {/* Timeline Dot */}
            <div className="absolute -left-[29px] sm:-left-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-neutral-300 bg-white shadow-xs" />

            <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-xs transition-all duration-300 hover:border-neutral-300 hover:shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                
                {/* Company info */}
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 sm:h-14 sm:w-14 shrink-0 overflow-hidden rounded-xl border border-neutral-100 bg-neutral-50 p-1 shadow-xs">
                    <img
                      src="./assets/trivolve_tech_logo.jpg"
                      alt="Trivolve Tech"
                      className="h-full w-full object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-neutral-900">
                      Trivolve Tech
                    </h3>
                    <p className="mt-0.5 text-sm font-medium text-neutral-600">
                      Full-Stack Developer Intern · Remote
                    </p>
                  </div>
                </div>

                {/* Date Badge */}
                <div className="self-start sm:self-center">
                  <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-600 shadow-xs">
                    Nov 2025 – Mar 2026
                  </span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-2.5 text-xs sm:text-sm leading-relaxed text-neutral-600">
                <div className="flex gap-3 items-start">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                  <p>
                    Built and improved UI components on a Web3 platform using Next.js + Tailwind CSS.
                  </p>
                </div>

                <div className="flex gap-3 items-start">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                  <p>
                    Owned end-to-end frontend of a key feature from design to deployment.
                  </p>
                </div>

                <div className="flex gap-3 items-start">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                  <p>
                    Improved responsiveness, layout structure, and component reusability across production applications.
                  </p>
                </div>

                {moreTrivolve && (
                  <div className="space-y-2.5 pt-2">
                    <div className="flex gap-3 items-start">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                      <p>
                        Built the frontend of a Polymarket-style mobile application using React Native.
                      </p>
                    </div>

                    <div className="flex gap-3 items-start">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                      <p>
                        Designed modular landing page sections and reusable UI component systems.
                      </p>
                    </div>

                    <div className="flex gap-3 items-start">
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
                className="mt-5 text-xs font-medium cursor-pointer text-neutral-900 transition-colors hover:text-neutral-600"
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