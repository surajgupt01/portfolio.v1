import ClockIcon from "./Components/Icons/ClockIcon";
import DocsIcon from "./Components/Icons/Docs";
import RocketIcon from "./Components/Icons/Rocket";
import StackIcon from "./Components/Icons/Stack";
import SkillsSection from "./Components/SkillSeaction";
import Github from "./Github";
import LinkedIn from "./LinkedIn";
import Location from "./Location";
import Mail from "./Mail";
import {  motion } from "motion/react";

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
      desc: "production ready projects",
      icon: <ClockIcon />,
    },
  ];
  return (
    <motion.div
      initial={{ opacity : 0 , translateY: 50 }}
      animate={{
        opacity: 1,
        translateY: 0,
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="sm:p-4 p-2 h-auto relative text-[5px] sm:text-sm flex flex-col   border-gray-300 gap-4  "
    >
      <div className="flex flex-row items-center justify-start p-1  gap-2 text-xs">
        <span className="bg-green-500 rounded-full p-1 w-1 h-1 animate-pulse"></span>
        <p className="text-black font-semibold">{`Open to remote opportunities `}</p>
        <div className="bg-gray-100 shadow-sm  rounded-xl text-purple-500 px-4 py-1">{`Actively looking`}</div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-col gap-2">
            <div className="text-black lg:text-4xl text-3xl font-semibold tracking-wide">{`Suraj Gupta`}</div>
            <div className="lg:text-sm text-xs">{`Full-stack developer · Next.js, Node.js, TypeScript`}</div>
            <div className="flex flex-row items-center gap-1 text-xs text-black">
              <Location />
              {` India · IST (UTC+5:30) · open to async work`}
            </div>
          </div>
          <div className="rounded-full lg:w-25 lg:h-25 w-18 h-18 p-2 border border-gray-300 border-dashed font-semibold text-neutral-400 bg-neutral-100 lg:text-5xl text-3xl flex justify-center items-center">
            {"SG"}
          </div>
        </div>
        <div className="lg:w-[70%] w-[95%] text-justify text-sm mt-2 text-gray-500">{`Building AI-powered, production-ready web applications with clean APIs, scalable backend systems, and intuitive user experiences. 1+ year of real-world shipping experience. Open to remote contract and full-time opportunities.`}</div>
      </div>

      <div className="flex flex-row flex-wrap items-center gap-3 mt-2">
        {QuickLinks.map((e) => (
          <a href={e.link} target="_blank" className="rounded-xl py-1 px-4 border border-gray-400 w-auto h-8 flex flex-row items-center gap-1 justify-start text-xs cursor-pointer duration-300 ease-in-out hover:bg-neutral-100 hover:border-dashed">
            {e.icon}
            {e.name}
          </a>
        ))}
      </div>

      <div className="border-y border-neutral-200 w-full flex flex-col gap-2 py-4 items-center justify-around">
        {/* <div className="font-semibold text-left w-full p-2">{`What I bring`}</div> */}
        <h2 className="mb-8 text-sm px-6 uppercase tracking-[0.2em] text-zinc-400 w-full text-left">
          {`What I bring`}
        </h2>

        <div className=" w-full flex md:flex-row flex-col gap-4 py-4 items-center justify-center">
          {Offerings.map((e) => (
            <div className="bg-zinc-100 py-4 px-4 rounded-lg flex flex-col items-center justify-center gap-1 w-50">
              <div>{e.icon}</div>
              <div className="font-semibold text-sm">{e.name}</div>
              <div className="font-normal text-xs">{e.desc}</div>
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
    <section className=" flex items-center justify-center px-4 h-full">
      {/* Background Glow */}
      <div className="" />

      <div className="max-w-4xl text-justify">
        {/* Subheading */}
        <p className="sm:text-sm text-[11px] text-gray-700  leading-loose">
          Full-stack developer specializing in{" "}
          <span className="font-medium text-gray-900 ">
            Next.js, Node.js, Prisma, and modern databases
          </span>
          .
          <br />I build fast, reliable, and production-ready applications.
        </p>
        <p className="sm:text-sm text-[11px] leading-loose">
          Passionate about clean code and intuitive UX, I enjoy solving
          real-world problems through technology.
        </p>
      </div>
    </section>
  );
}
