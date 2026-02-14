import Location from "./Location";
import ContactNav from "./ContactNav";
import SkillsGrid from "./SkillsGrid";

export default function About() {
  return (
    <div className="sm:p-4 p-2 h-150 relative text-[5px] sm:text-sm flex flex-col   border-gray-300 shadow-lg rounded-2xl shadow-gray-300 ">
      {/* <h1 className="font-medium text-4xl text-gray-600">About</h1> */}
      <div className="w-full h-full">
        <div className="flex border-1 scale-90 border-gray-300 p-2 rounded-2xl w-30 justify-between items-center absolute sm:left-6 left-3 sm:top-20 top-8">
          <ContactNav />
        </div>

        <div className="sm:w-30 absolute p-1 right-32   top-20">
          <div className="flex-col items-center ">
            <div className="font-semibold text-center sm:text-md text-[14px] ">{"Suraj Gupta"}</div>
            <div className="flex items-center text-xs justify-center">
              <div className="text-xs text-red-400">
                <Location />
              </div>
              <p className="text-xs text-blue-400">India</p>
            </div>
          </div>
        </div>

        <div className=" border-gray-700 sm:w-25 sm:h-25 w-20 h-20 overflow-hidden  rounded-full absolute right-10 top-10  ">
          <img src="/assets/DP.jpeg" className=" -rotate-30  "></img>
        </div>
      </div>
      {/* 
      <div className=" text-gray-400 w-[90%]  h-full flex justify-center   text-justify ">
        <p className="text-gray-300 leading-relaxed text-justify  sm:text-xs">
          I'm <span className="text-white font-semibold">Suraj Gupta</span>, an
          aspiring <span className="text-white">Frontend Developer</span> ,{" "}
          <span className="text-white">Full Stack Engineer</span>,{" "}
          <span className="text-white">Freelancer</span> with hands-on
          experience in building responsive and scalable web applications.
          <br />
          Passionate about clean code and intuitive UX, I enjoy solving
          real-world problems through technology.
          <br />
          Currently seeking opportunities to collaborate on impactful projects
          and contribute to fast-paced, learning-driven teams or Contact me for
          freelance work.
        </p>
      </div> */}
      <div className="text-gray-800 font-light italic w-full text-center sm:text-sm text-[12px]">
        A full-stack developer who enjoys building clean, scalable products.
      </div>
      <Hero />
      <SkillsGrid />
    </div>
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
