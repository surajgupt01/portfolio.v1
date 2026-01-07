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
    { name: "Github", icon: "devicon-github-plain " },
    { name: "Linux", icon: "devicon-linux-plain" },
    { name: "AuthJs", icon: "devicon-authjs-plain" },
  ];

  return (
    <div className="sm:w-[90%] w-[95%] mb-4 mx-auto">
      <h1 className="text-gray-500 text-xl font-semibold mt-5 mb-2">Skills</h1>
     <div className="text-gray-500 font-light italic w-full text-center text-[10px]">Modern technologies powering my work.</div> 
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 gap-y-2 mt-5">
        {skills.map((skill) => (
          <SkillCard name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
}
