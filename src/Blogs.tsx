import { useState } from "react";
import { blogs } from "./BlogsItems";
import Close from "./Components/Close";

export default function Blogs() {
  const [b, setBlog] = useState<number>(-1);
  return (
    <div className="relative flex flex-col justify-center  p-6  overflow-auto scrollbar-hide w-full  h-auto   ">
      <div className="w-full p-2 text-center">
        <h1 className="font-medium text-2xl text-gray-700">Blogs</h1>
      </div>
      <div className="text-gray-500 font-light italic w-full text-center">
        Thoughts, learnings, and insights from my development journey.
      </div>

      <div className="scroll-smooth  p-2  overflow-auto scrollbar-hide w-full h-auto  overflow-x-hidden grid md:grid-cols-2 sm:mt-10 mt-28    justify-items-center items-center-safe ">
        {/* {
                blogs.slice().reverse().map((e:string)=>(
                  
                    <div className="bg-gray-800/50 shadow-sm backdrop:blur-md w-92 sm:w-160 h-auto p-4 mb-4  text-gray-300 text-sm rounded-xl flex flex-col items-center">
                         <div className="flex items-center mb-4  w-full">
                         <div className="w-10 h-10 rounded-full bg-blue-600  font-semibold text-white flex justify-center items-center">S</div>
                         <span className="font-semibold ml-2">Suraj</span>
                         </div>
                        <p className="mb-2 text-justify sm:w-130 w-80">{e}</p>
                        
                    </div> 
                 
                ))
              } */}

        {blogs.map((e, index) => (
          <div
            className="relative border-1 p-4 border-gray-300 hover:border-gray-400 duration-300 ease-in-out rounded-md w-65 h-85 m-4 cursor-pointer group "
            onClick={() => {
              setBlog(index);
              console.log(index);
            }}
          >
            <div className=" border-gray-500 h-35 rounded-md">
              <img
                src={e.link}
                className="opacity-50 group-hover:opacity-70 rounded-sm"
              ></img>
            </div>
            <div className=" backdrop-blur-sm group-hover:backdrop-blur-xs duration-100 bg-black/10 p-2 w-full h-auto overflow-hidden   text-white z-10">
              <div className="text-sm mt-5 text-white ">{e.title}</div>
              <div className="text-sm text-gray-200 mt-2">{e.Intro}</div>
            </div>
          </div>
        ))}

        {b >= 0 && (
          <div
            className={`sm:w-180 w-full sm:h-150 sm:top-20 top-30 absolute bg-gray-800/70 backdrop-blur-sm sm:text-md text-sm text-gray-400  p-4 flex flex-col items-center    rounded-lg transition-all duration-1000 ease-in-out transform ${
              b == -1 ? "scale-0" : "scale-100"
            }`}
          >
            <div
              className="w-full flex justify-end"
              onClick={() => setBlog(-1)}
            >
              <Close />
            </div>
            <div className="mt-10  h-auto w-auto"> {blogs[b].description}</div>
          </div>
        )}
      </div>
      <div className="border border-dashed border-gray-800 mt-2 mb-2 w-full"></div>
    </div>
  );
}
