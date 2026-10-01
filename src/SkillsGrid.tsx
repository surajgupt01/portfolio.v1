import SkillCard from "./Icons";

export default function SkillsGrid() {
  const skills = [
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "TypeScript", icon: "devicon-typescript-plain colored" },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
    { name: "Prisma ORM", icon: "devicon-prisma-original colored" },
    { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
    { name: "Node.js", icon: "devicon-nodejs-plain colored" },
    { name: "Next.js", icon: "devicon-nextjs-plain" },
    { name: "Docker", icon: "devicon-docker-plain colored" },
    { name: "CI / CD", icon: "devicon-githubactions-plain colored" },
    { name: "ReactJs", icon: "devicon-react-plain colored" },
    { name: "TailwindCss", icon: "devicon-tailwindcss-plain colored" },
    { name: "Github", icon: "devicon-github-plain" },
    { name: "Linux", icon: "devicon-linux-plain" },
    { name: "AuthJs", icon: "devicon-authjs-plain" },
  ];

  return (
    <div className="sm:w-[90%] w-[95%] mb-4 mx-auto transition-colors duration-300">
      <div className="flex flex-col items-start text-left mt-5 mb-2">
        <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 font-semibold mb-1">
          Stack
        </span>
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          Skills
        </h2>
      </div>

      <p className="text-neutral-500 dark:text-neutral-400 font-normal text-xs sm:text-sm">
        Modern technologies and tools powering my work.
      </p>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2.5 gap-y-3 mt-5">
        {skills.map((skill) => (
          <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
}