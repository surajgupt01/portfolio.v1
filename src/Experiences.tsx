import { useState } from "react";

export default function Experience() {
  const [more, setMore] = useState(false);
  return (
    <div className="w-full p-4 ">
      <div className="border border-dashed border-gray-300 mt-10 mb-6 w-full"></div>

      <div className="w-full p-2 text-left">
        <h1 className="font-medium text-2xl text-gray-700 text-center">
          Work Experience
        </h1>
      </div>
      <div className="text-gray-800 font-light italic w-full text-center">
        My journey of learning, building, and shipping.
      </div>

      <div className="w-full flex justify-between items-center  font-semibold mt-4 sm:p-4 p-2  ">
        <div className="sm:text-lg text-md flex flex-col items-start">
          <div className="flex justify-between w-full items-center gap-2">
            <div className=" h-9 flex justify-center items-center w-auto   rounded-md   cursor-pointer">
              <img
                src="./assets/trivolve_tech_logo.jpg"
                className="h-full hover:rotate-6 duration-300 ease-in-out"
              ></img>
              <span className="ml-2 ">Trivolve Tech</span>
            </div>{" "}
            <div className="flex justify-center font-normal items-center gap-2 text-xs text-gray-400">
              <div>NOV 2025</div>
              {"-"}
              <div>MAR 2026</div>
            </div>
          </div>

          <div
            className={`text-sm text-gray-700 mt-1 ml-4 font-normal  overflow-hidden duration-300 ease-in-out  ${more ? "h-auto" : "h-20"}`}
          >
            {" "}
            FullStack Developer Intern{" "}
            <span className="text-xs text-gray-500 ml-1">{" (remote)"}</span>
            <br></br>
            {/*
            <span className="text-xs font-normal text-gray-500 text-justify">
              {`Worked as a Full-Stack Developer Intern, I worked on a Web3 platform,improving UI components, `}
              <br></br>
              {`refining user experience, and validating APIs for reliability and performance.`}
            </span> */}
            <span>
              {`Contributed as a Full-Stack Developer Intern on a Web3 platform, building and enhancing user-facing    features using Next.js and Tailwind CSS.
Improved UI components and overall user experience by refining layouts, responsiveness, and component structure.
Built the end-to-end frontend of a Polymarket-style mobile application using React Native, implementing core screens, navigation flows, and interactive UI elements.
Designed and implemented landing page sections and modular frontend components aligned with product requirements.
Validated and tested backend APIs to ensure reliable integrations and consistent application behavior.
Collaborated with team members to deliver production-ready features aligned with product  requirements.`}
            </span>
          </div>
          <div className=" w-full flex justify-end">
            <button
              className="text-xs hover:text-neutral-500 cursor-pointer duration-300 ease-in-out"
              onClick={() => setMore((e) => !e)}
            >
              {more ? `see more` : "see less"}
            </button>
          </div>
        </div>
      </div>
      {/* <div className="border border-dashed border-gray-800 mt-20 mb-2 w-full"></div> */}
    </div>
  );
}
