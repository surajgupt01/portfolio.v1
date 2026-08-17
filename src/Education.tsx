import { motion } from "motion/react";

export default function Education() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full bg-white py-12 sm:py-16 flex justify-center max-w-3xl mx-auto"
      id="education"
    >
      <div className="w-full">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-8 sm:mb-10">
          <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-semibold mb-1.5">
            Academic Background
          </span>
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900">
            Education
          </h2>
        </div>

        {/* Education Card Container */}
        <div className="relative rounded-xl border border-neutral-200 bg-white p-5 sm:p-6 shadow-2xs transition-all duration-300 hover:border-neutral-300 hover:shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            
            {/* Left: Logo & Details */}
            <div className="flex items-start sm:items-center gap-3.5 sm:gap-4">
              {/* Institution Logo */}
              <div className="h-12 w-12 sm:h-14 sm:w-14 shrink-0 overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50 p-1.5 shadow-2xs flex items-center justify-center">
                <img
                  src="./assets/Manipal_University_Jaipur_logo.png"
                  alt="Manipal University Jaipur"
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Text Info */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold tracking-tight text-neutral-900">
                  Manipal University Jaipur
                </h3>
                <p className="mt-0.5 text-xs sm:text-sm text-neutral-600 font-medium">
                  B.Tech in Computer and Communication Engineering
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="inline-flex items-center rounded-md bg-neutral-100 px-2 py-0.5 text-[11px] font-medium text-neutral-700">
                    CGPA: 8.12
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Date Badge */}
            <div className="self-start sm:self-center">
              <span className="inline-flex items-center rounded-lg border border-neutral-200 bg-neutral-50 px-2.5 py-0.5 text-[11px] font-medium text-neutral-600 shadow-2xs">
                2021 – 2025
              </span>
            </div>

          </div>
        </div>

      </div>
    </motion.section>
  );
}