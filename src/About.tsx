import ClockIcon from "./Components/Icons/ClockIcon";
import DocsIcon from "./Components/Icons/Docs";
import RocketIcon from "./Components/Icons/Rocket";
import StackIcon from "./Components/Icons/Stack";
import SkillsSection from "./Components/SkillSeaction";
import Github from "./Github";
import LinkedIn from "./LinkedIn";
import Location from "./Location";
import Mail from "./Mail";
import { motion } from "motion/react";

export default function About() {
  const QuickLinks = [
    { name: "Download resume", icon: <DocsIcon /> , link : 'https://drive.google.com/file/d/15pcL4Mauqh2BWsFNY42SnlnmfKSfmsew/view?usp=sharing' },
    { name: "Github", icon: <Github /> , link : 'https://github.com/surajgupt01' },
    { name: "LinkedIn", icon: <LinkedIn /> , link : 'https://www.linkedin.com/in/suraj-gupta-1894051ba/' },
    { name: "Email me", icon: <Mail /> , link : 'mailto:surajgupt880@gmail.com' },
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
      initial={{ opacity: 0, translateY: 30 }}
      animate={{
        opacity: 1,
        translateY: 0,
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="sm:p-4 p-4 h-auto relative text-xs sm:text-sm flex flex-col border-neutral-200 gap-5 "
      id="home"
    >
      <div className="flex flex-row items-center justify-start gap-2 text-xs">
        <span className="bg-green-500 rounded-full w-1.5 h-1.5 animate-pulse"></span>
        <p className="text-neutral-800 font-medium">{`Open to remote opportunities`}</p>
        <div className="bg-neutral-100 border border-neutral-200 shadow-2xs rounded-lg text-purple-600 px-2.5 py-0.5 text-[11px] font-medium">{`Actively looking`}</div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-row justify-between items-start w-full">
          <div className="flex flex-col gap-1.5">
            <h1 className="text-neutral-900 lg:text-3xl text-2xl font-semibold tracking-tight">{`Suraj Gupta`}</h1>
            <p className="lg:text-xs text-[11px] text-neutral-500 font-medium">{`Full-stack developer · Next.js, Node.js, TypeScript`}</p>
            <div className="flex flex-row items-center gap-1.5 text-[11px] text-neutral-500 mt-0.5">
              <Location />
              <span>{`India · IST (UTC+5:30) · open to async work`}</span>
            </div>
          </div>
          <div className="rounded-full lg:w-20 lg:h-20 w-14 h-14 border border-neutral-200 border-dashed font-semibold text-neutral-400 bg-neutral-50 lg:text-2xl text-xl flex justify-center items-center shrink-0">
            {"SG"}
          </div>
        </div>
        <p className="lg:w-[90%] w-full text-justify text-xs sm:text-sm leading-relaxed text-neutral-500 mt-1">
          {`Building AI-powered, production-ready web applications with clean APIs, scalable backend systems, and intuitive user experiences. 1+ year of real-world shipping experience. Open to remote contract and full-time opportunities.`}
        </p>
      </div>

      <div className="flex flex-row flex-wrap items-center gap-2 mt-1">
        {QuickLinks.map((e) => (
          <a
            key={e.name}
            href={e.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg py-1.5 px-3 border border-neutral-200 bg-white shadow-2xs h-8 flex flex-row items-center gap-1.5 text-xs text-neutral-700 cursor-pointer transition-all duration-200 hover:bg-neutral-50 hover:border-neutral-300"
          >
            {e.icon}
            <span>{e.name}</span>
          </a>
        ))}
      </div>

      <div className="border-y border-neutral-200 w-full flex flex-col gap-3 py-6">
        <h2 className="text-[11px] uppercase tracking-[0.2em] text-neutral-400 font-semibold w-full text-left">
          {`What I bring`}
        </h2>

        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3">
          {Offerings.map((e) => (
            <div
              key={e.name}
              className="bg-neutral-50 border border-neutral-200/60 py-3.5 px-4 rounded-lg flex flex-col items-start justify-center gap-1"
            >
              <div className="mb-1 text-neutral-700">{e.icon}</div>
              <div className="font-semibold text-xs text-neutral-900">{e.name}</div>
              <div className="font-normal text-[11px] text-neutral-500">{e.desc}</div>
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
        <p className="sm:text-xs text-[11px] text-neutral-600 leading-relaxed">
          Full-stack developer specializing in{" "}
          <span className="font-medium text-neutral-900">
            Next.js, Node.js, Prisma, and modern databases
          </span>
          . I build fast, reliable, and production-ready applications.
        </p>
        <p className="sm:text-xs text-[11px] text-neutral-600 leading-relaxed">
          Passionate about clean code and intuitive UX, I enjoy solving real-world problems through technology.
        </p>
      </div>
    </section>
  );
}