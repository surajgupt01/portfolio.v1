import Location from "./Location";
import ContactNav from "./ContactNav";

export default function About() {

  
  return (
    <div className="p-4 h-150 relative text-xs sm:text-sm  ">
      <div className="flex border-1 border-gray-700 p-2 rounded-2xl w-30 justify-between items-center absolute lett-2 top-0">
        <ContactNav/>
      </div>

      <div className="w-30 absolute right-35 top-20">
        <p>Suraj Gupta</p>
        <div className="flex justify-around w-15 scale-80">
          <Location />
          <span className="text-blue-400">India</span>
        </div>
      </div>

      <div className="border-1 border-gray-700 w-30 h-30 rounded-sm absolute right-10  ">
        <img
          src="/assets/WhatsApp Image 2025-06-08 at 01.54.25_7486be92.jpg"
          className=" rounded-sm "
        ></img>
      </div>

      <div className="text-sm text-gray-400 w-80 sm:w-200 text-justify mt-50">
        <p className="text-gray-300 leading-relaxed text-xs sm:text-sm">
          I'm <span className="text-white font-semibold">Suraj Gupta</span>, an
          aspiring <span className="text-white">Frontend Developer</span> ,{" "}
          <span className="text-white">Full Stack Engineer</span>,{" "}
          <span className="text-white">Freelancer</span> with hands-on
          experience in building responsive and scalable web applications. I
          specialize in using{" "}
          <span className="text-blue-400">
            ReactJS, TypeScript, TailwindCSS
          </span>{" "}
          on the frontend, and{" "}
          <span className="text-blue-400">NodeJS, MongoDB</span> for backend
          development.
          <br />
          <br />
          Passionate about clean code and intuitive UX, I enjoy solving
          real-world problems through technology. I’ve also worked with{" "}
          <span className="text-blue-400">
            FastAPI, Python, and data visualization libraries
          </span>{" "}
          to extract insights from data, combining my love for backend logic
          with elegant UI design.
          <br />
          <br />
          Currently seeking opportunities to collaborate on impactful projects
          and contribute to fast-paced, learning-driven teams or Contact me for
          freelance work.
        </p>
      </div>
    </div>
  );
}
