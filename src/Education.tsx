import { motion } from "motion/react";

export default function Education() {
  return (
    <motion.section
      initial={{ y: 120 }}
      viewport={{ once: true }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="w-full lg:px-6 lg:py-16 px-3 py-8 text-white"
    >
      {/* Heading */}
      <div className="mb-10">
        <p className="text-md uppercase tracking-[0.2em] text-zinc-500">
          Education
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative ">
        {/* Timeline Dot */}

        {/* Content */}
        <div className=" lg:gap-6 gap-2 flex flex-row items-start justify-between">
          {/* Left */}
          <div className="flex items-start lg:gap-4 gap-2">
            {/* Logo */}
            <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl  p-1 transition duration-300 hover:rotate-6">
              <img
                src="./assets/Manipal_University_Jaipur_logo.png"
                alt="Manipal University Jaipur"
                className="h-full w-full object-contain"
              />
            </div>

            {/* Text */}
            <div>
              <h2 className="lg:text-lg text-md font-semibold tracking-tight text-zinc-800">
                Manipal University Jaipur
              </h2>

              <p className="mt-2 text-sm text-zinc-800">
                B.Tech in Computer and Communication
              </p>

              <p className="mt-1 text-xs text-zinc-500">CGPA: 8.12</p>
            </div>
          </div>

          {/* Date Badge */}
          <div className="shrink-0">
            <div className="rounded-full  px-3 py-1 text-xs text-zinc-800 bg-zinc-200 shadow-sm">
              2021 – 2025
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
