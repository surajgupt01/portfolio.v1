import Github from "./Github";
import Link from "./Link";

import { ProjectsDescription } from "./ProjectDescription";

export default function Projects() {
  function jumpTab(Links: string) {
    window.open(Links);
  }

  return (
    <div className="w-full h-full overflow-auto mt-10 ">
      <div className="border border-dashed border-gray-300 mt-2 mb-2 w-full"></div>
      <div className="w-full p-2 text-center">
        <h1 className="font-medium text-2xl text-gray-700">Proof of work</h1>
      </div>

      <div className="text-gray-700 font-light italic w-full text-center">
        Real-world projects. I’ve designed, built, and shipped.
      </div>

      <div className="w-full flex justify-center items-center">
        <div className="w-[90%] h-full mt-15 sm:mt-0 grid grid-cols-1  sm:grid-cols-2 gap-4  sm:p-4 text-left justify-between  text-xs relative overflow-auto  p-3 ">
          {/* <p className='text-lg font-semibold mt-8'> Projects:</p> */}

          {ProjectsDescription.map((e) => (
            <div
              className=" border-1 border-gray-300 p-2 rounded-xl cursor-pointer group  hover:bg-white group hover:border-gray-400 duration-300 ease-in-out h-90 sm:h-80 "
              key={e.title}
            >
              
                <div className="flex scale-[65%] w-30 justify-between items-center  -ml-6 -mt-2 border border-gray-300  rounded-full ">
                  <div
                    className="hover:scale-105 duration-300 ease-in-out "
                    onClick={() => jumpTab(e.github)}
                  >
                    <Github />
                  </div>

                  <div className="flex text-xs justify-center gap-1 items-center  bg-gray-800  rounded-r-full p-2 text-white">
                    <Link />{" "}
                    <span
                      className="hover:text-green-500 duration-300 ease-in-out"
                      onClick={() => jumpTab(e.liveLink)}
                    >
                      {" "}
                      Live view
                    </span>
                  </div>
                </div>


              {e.title == "Form Builder" ? (
                <div className="flex justify-center items-center border-gray-300 rounded-sm w-full h-20 animate-pulse text-xl">
                  {" "}
                  Coming soon
                </div>
              ) : (
                <img src={e.link} className="mb-2 rounded-sm"></img>
              )}

              <p className="font-semibold group-hover:text-blue-500 duration-200 ease-in-out">
                {e.title}
              </p>
              <div className="text-gray-600 mt-2 text-left group-hover:text-gray-800">
                {e.description}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border border-dashed border-gray-300 mt-2 mb-2 w-full"></div>
    </div>
  );
}
