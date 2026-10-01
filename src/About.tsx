import ClockIcon from "./Components/Icons/ClockIcon";
import DocsIcon from "./Components/Icons/Docs";
import RocketIcon from "./Components/Icons/Rocket";
import StackIcon from "./Components/Icons/Stack";
import SkillsSection from "./Components/SkillSeaction";
import Github from "./Github";
import LinkedIn from "./LinkedIn";
import Location from "./Location";
import Mail from "./Mail";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax translation effect for the cover image
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "45%"]);

  const QuickLinks = [
    {
      name: "Download resume",
      icon: <DocsIcon />,
      link: "https://drive.google.com/file/d/15pcL4Mauqh2BWsFNY42SnlnmfKSfmsew/view?usp=sharing",
    },
    {
      name: "Github",
      icon: <Github />,
      link: "https://github.com/surajgupt01",
    },
    {
      name: "LinkedIn",
      icon: <LinkedIn />,
      link: "https://www.linkedin.com/in/suraj-gupta-1894051ba/",
    },
    {
      name: "Email me",
      icon: <Mail />,
      link: "mailto:surajgupt880@gmail.com",
    },
  ];

  const Offerings = [
    {
      name: "Full-Stack",
      desc: "End-to-end product delivery",
      icon: <StackIcon />,
    },
    {
      name: "Async-ready",
      desc: "Works across timezones",
      icon: <RocketIcon />,
    },
    {
      name: "Ships fast",
      desc: "Production ready projects",
      icon: <ClockIcon />,
    },
  ];

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, translateY: 30 }}
      animate={{
        opacity: 1,
        translateY: 0,
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="sm:p-4 h-auto relative text-xs sm:text-sm flex flex-col border-neutral-200 dark:border-neutral-800 gap-5 transition-colors duration-300"
      id="home"
    >
      {/* Cover Image Container */}
      <div className="w-full h-36 sm:h-48 overflow-hidden rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 relative group cursor-pointer">
        <motion.img
          style={{ y: imageY }}
          src="./assets/feature.png"
          alt="Cover"
          className="w-full h-[125%] object-cover absolute top-0 left-0 grayscale-[25%] transition-all duration-500 ease-out group-hover:scale-105 group-hover:grayscale-0"
        />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-row justify-between items-start w-full">
          <div className="flex flex-col gap-1.5">
            <h1 className="text-neutral-900 dark:text-neutral-100 lg:text-3xl text-2xl font-semibold tracking-tight">
              Suraj Gupta
            </h1>
            <p className="lg:text-xs text-[11px] text-neutral-500 dark:text-neutral-400 font-medium">
              Full-stack developer · Next.js, Node.js, TypeScript
            </p>
            <div className="flex flex-row items-center gap-1.5 text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">
              <Location />
              <span>India · IST (UTC+5:30) · open to async work</span>
            </div>
          </div>

          {/* Avatar / Monogram */}
          <div className="rounded-full lg:w-20 lg:h-20 w-14 h-14 border border-neutral-200 dark:border-neutral-700/80 border-dashed font-semibold text-neutral-400 dark:text-neutral-300 bg-neutral-50 dark:bg-neutral-900 lg:text-2xl text-xl flex justify-center items-center shrink-0">
            SG
          </div>
        </div>

        <p className="lg:w-[90%] w-full text-justify text-xs sm:text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 mt-1">
          Building AI-powered, production-ready web applications with clean APIs, scalable backend systems, and intuitive user experiences. 1+ year of real-world shipping experience. Open to remote contract and full-time opportunities.
        </p>
      </div>

      {/* Quick Action Links */}
      <div className="flex flex-row flex-wrap items-center gap-2 mt-1">
        {QuickLinks.map((e) => (
          <a
            key={e.name}
            href={e.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg py-1.5 px-3 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-2xs h-8 flex flex-row items-center gap-1.5 text-xs text-neutral-700 dark:text-neutral-200 cursor-pointer transition-all duration-200 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700"
          >
            <span className="text-neutral-600 dark:text-neutral-300">{e.icon}</span>
            <span>{e.name}</span>
          </a>
        ))}
      </div>

      {/* What I Bring Section */}
      <div className="border-y border-neutral-200 dark:border-neutral-800 w-full flex flex-col gap-3 py-6">
        <h2 className="text-[11px] uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 font-semibold w-full text-left">
          What I bring
        </h2>

        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3">
          {Offerings.map((e) => (
            <div
              key={e.name}
              className="bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/60 dark:border-neutral-800/80 py-3.5 px-4 rounded-lg flex flex-col items-start justify-center gap-1 transition-colors duration-200"
            >
              <div className="mb-1 text-neutral-700 dark:text-neutral-200">{e.icon}</div>
              <div className="font-semibold text-xs text-neutral-900 dark:text-neutral-100">{e.name}</div>
              <div className="font-normal text-[11px] text-neutral-500 dark:text-neutral-400">{e.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <SkillsSection />
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="flex items-center justify-center px-4 h-full">
      <div className="max-w-2xl text-justify space-y-3">
        <p className="sm:text-xs text-[11px] text-neutral-600 dark:text-neutral-300 leading-relaxed">
          Full-stack developer specializing in{" "}
          <span className="font-medium text-neutral-900 dark:text-neutral-100">
            Next.js, Node.js, Prisma, and modern databases
          </span>
          . I build fast, reliable, and production-ready applications.
        </p>
        <p className="sm:text-xs text-[11px] text-neutral-600 dark:text-neutral-400 leading-relaxed">
          Passionate about clean code and intuitive UX, I enjoy solving real-world problems through technology.
        </p>
      </div>
    </section>
  );
}