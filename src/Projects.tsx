import Github from "./Github";
import Link from "./Link";

import { ProjectsDescription } from "./ProjectDescription";

export default function Projects() {
  function jumpTab(Links: string) {
    window.open(Links);
  }

  return (
    <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-3 p-2 sm:p-8 text-left justify-between w-full text-xs relative">
      {/* <p className='text-lg font-semibold mt-8'> Projects:</p> */}

      {ProjectsDescription.map((e) => (
        <div
          className=" border-1 border-gray-800 p-4 rounded-sm cursor-pointer hover:border-gray-600 duration-300 ease-in-out h-90 sm:h-85"
          key={e.title}
        >
          <div className="flex scale-75 w-30 justify-between items-center mb-2 ">
            <div onClick={() => jumpTab(e.github)}>
              <Github />
            </div>

            <div className="flex text-xs justify-between  ">
              <Link />{" "}
              <span
                className="hover:text-green-400"
                onClick={() => jumpTab(e.liveLink)}
              >
                {" "}
                Live view
              </span>
            </div>
          </div>

          {e.title=='Form Builder' ?<div className="flex justify-center items-center border-gray-600 rounded-sm w-full h-20 animate-pulse text-xl"> Coming soon</div> :  <img src={e.link} className="mb-2 rounded-sm"></img>}

          <p className="font-semibold">{e.title}</p>
          <div className="text-gray-600 mt-2 text-left">{e.description}</div>
        </div>
      ))}
    </div>
  );
}
