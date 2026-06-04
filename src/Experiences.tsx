import { useState , useRef } from "react";
import {motion, useScroll, useTransform} from "motion/react"

export default function Experience() {
  const [more, setMore] = useState(false);


 const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <motion.section ref={ref} style={{y , opacity}} className="w-full px-6 py-16 text-white" id="work">
      {/* Heading */}
      <div className="mb-10">
        <p className="text-md uppercase tracking-[0.2em] text-zinc-500">
          Work Experience
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative border-l border-zinc-700 pl-4">
        
        {/* Timeline Dot */}
        <div className="absolute -left-[4px] top-2 h-2 w-2 rounded-full border border-zinc-500 bg-zinc-900" />

        {/* Experience Card */}
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            
            {/* Company */}
            <div className="flex items-center gap-3">
              <img
                src="./assets/trivolve_tech_logo.jpg"
                alt="Trivolve Tech"
                className="h-10 w-10 rounded-md object-cover"
              />

              <div>
                <h2 className="text-xl font-semibold tracking-tight text-black">
                  Trivolve Tech
                </h2>

                <p className="mt-1 text-md text-zinc-400">
                  Full-Stack Developer Intern · Remote
                </p>
              </div>
            </div>

            {/* Bullet Points */}
            <div className="mt-8 space-y-1 text-xs leading-relaxed text-zinc-500">
              <div className="flex gap-3">
                <span className="mt-2 h-1 w-1 rounded-full bg-zinc-400" />
                <p>
                  Built and improved UI components on a Web3 platform using
                  Next.js + Tailwind
                </p>
              </div>

              <div className="flex gap-3">
                <span className="mt-2 h-1 w-1 rounded-full bg-zinc-400" />
                <p>
                  Owned end-to-end frontend of a key feature from design to
                  deployment
                </p>
              </div>

              <div className="flex gap-3">
                <span className="mt-2 h-1 w-1 rounded-full bg-zinc-400" />
                <p>
                  Improved responsiveness, layout structure, and component
                  reusability
                </p>
              </div>

              {/* Expandable Content */}
              {more && (
                <>
                  <div className="flex gap-3">
                    <span className="mt-2 h-1 w-1 rounded-full bg-zinc-400" />
                    <p>
                      Built the frontend of a Polymarket-style mobile
                      application using React Native
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <span className="mt-2 h-1 w-1 rounded-full bg-zinc-400" />
                    <p>
                      Designed modular landing page sections and reusable UI
                      systems
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <span className="mt-2 h-1 w-1 rounded-full bg-zinc-400" />
                    <p>
                      Collaborated with backend integrations and production
                      feature delivery
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* Toggle */}
            <button
              onClick={() => setMore((e) => !e)}
              className="mt-6 text-xs cursor-pointer duration-300 ease-in-out text-zinc-700 transition hover:text-zinc-500"
            >
              {more ? "See less" : "See more"}
            </button>
          </div>

          {/* Date Badge */}
          <div className="shrink-0">
            <div className="rounded-full border border-zinc-200 bg-zinc-200/70 px-4 py-1 text-xs text-zinc-700 shadow-sm backdrop-blur-sm">
              Nov 2025 – Mar 2026
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      {/* <div className="mt-16 border-b border-zinc-800" /> */}
    </motion.section>
  );
}