import { motion } from "motion/react";

export default function Education() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-white py-16 sm:py-20 flex justify-center"
      id="education"
    >
      <div className="w-full ">
        {/* Section Header */}
        <div className="flex flex-col items-start  text-left sm:text-center mb-10 sm:mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-semibold mb-3">
            Academic Background
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">
            Education
          </h2>
        </div>

        {/* Education Card Container */}
        <div className="relative rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-xs transition-all duration-300 hover:border-neutral-300 hover:shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            
            {/* Left: Logo & Details */}
            <div className="flex items-start sm:items-center gap-4 sm:gap-5">
              {/* Institution Logo */}
              <div className="h-14 w-14 sm:h-16 sm:w-16 shrink-0 overflow-hidden rounded-xl border border-neutral-100 bg-neutral-50 p-2 shadow-xs transition-transform duration-300 hover:scale-105">
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
                <p className="mt-1 text-sm text-neutral-600 font-medium">
                  B.Tech in Computer and Communication Engineering
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="inline-flex items-center rounded-md bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-700">
                    CGPA: 8.12
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Date Badge */}
            <div className="self-start sm:self-center">
              <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-1 text-xs font-medium text-neutral-600 shadow-xs">
                2021 – 2025
              </span>
            </div>

          </div>
        </div>

      </div>
    </motion.section>
  );
}