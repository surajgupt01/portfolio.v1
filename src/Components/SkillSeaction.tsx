const skillIcons: Record<string, string> = {
  JavaScript: "devicon-javascript-plain colored",
  TypeScript: "devicon-typescript-plain colored",
  PostgreSQL: "devicon-postgresql-plain colored",
  "Prisma ORM": "devicon-prisma-original colored",
  MongoDB: "devicon-mongodb-plain colored",
  "Node.js": "devicon-nodejs-plain colored",
  "Next.js": "devicon-nextjs-plain",
  Docker: "devicon-docker-plain colored",
  "CI / CD": "devicon-githubactions-plain colored",
  React: "devicon-react-plain colored",
  ReactJs: "devicon-react-plain colored",
  TailwindCSS: "devicon-tailwindcss-plain colored",
  TailwindCss: "devicon-tailwindcss-plain colored",
  Github: "devicon-github-plain",
  Linux: "devicon-linux-plain",
  "Auth.js": "devicon-authjs-plain",
  AuthJs: "devicon-authjs-plain",
  Express: "devicon-express-original",
  FastAPI: "devicon-fastapi-plain colored",
  "AWS S3": "devicon-amazonwebservices-plain-wordmark colored",
};

const skills = {
  Frontend: ["Next.js", "React", "TypeScript", "TailwindCSS"],
  Backend: ["Node.js", "Express", "Prisma ORM", "FastAPI", "Auth.js"],
  "Data / Infra": ["PostgreSQL", "MongoDB", "AWS S3", "Docker"],
};

export default function SkillsSection() {
  return (
    <section className="w-full max-w-4xl lg:px-6 px-3 lg:py-8 py-4 text-black">
      <h2 className="mb-8 text-sm uppercase tracking-[0.2em] text-zinc-400">
        Skills
      </h2>

      <div className="space-y-4">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="flex flex-col justify-start gap-3 md:flex-row md:items-center"
          >
            {/* Category */}
            <div className="w-24 shrink-0 text-[14px] font-medium leading-tight text-zinc-800">
              {category}
            </div>

            {/* Skill Pills */}
            <div className="flex flex-wrap lg:gap-3 gap-2">
              {items.map((skill) => (
                <div
                  key={skill}
                  className="
                    flex items-center gap-2
                    rounded-xl
                    border border-black/10
                    bg-neutral-100
                    px-3 py-1.5
                    text-xs font-semibold
                    text-zinc-700
                    transition-all duration-300
                    cursor-pointer
                    hover:scale-105
                    hover:border-dashed
                    hover:border-gray-400
                  "
                >
                  <i
                    className={`${skillIcons[skill]} text-sm`}
                  />

                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}