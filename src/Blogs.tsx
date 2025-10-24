import { useState } from "react"
import { blogs } from "./BlogsItems"
import Close from "./Components/Close"


export default function Blogs(){

    const [b , setBlog]  = useState<number>(-1)
    return(

        <div className="relative flex justify-center  p-4  overflow-auto scrollbar-hide w-full h-screen  sm:pt-2 pt-6 ">
          <div className="scroll-smooth  p-2  overflow-auto scrollbar-hide  h-auto w-full overflow-x-hidden grid sm:mt-0 mt-20   md:grid-cols-2 lg:grid-cols-3 grid-cols-1 justify-items-center items-center-safe ">
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

              {blogs.map((e,index)=>(
             
                
                <div className="border-1 p-4 border-gray-700 hover:border-gray-500 rounded-md w-65 h-80 m-4 cursor-pointer" onClick={()=>{
                    setBlog(index)
                    console.log(index)
                }}>
                    <div className="border-1 border-gray-500 h-35 rounded-md"></div>
                    <div className="text-sm mt-5">{e.title}</div>
                    <div className="text-sm text-gray-500 mt-2">{e.Intro}</div>
                </div>
              ))}

             {b >= 0  && <div className="sm:w-180 w-full sm:h-150 sm:top-20 top-30 absolute bg-gray-800/70 backdrop-blur-sm sm:text-md text-sm text-gray-400  p-4 flex flex-col items-center    rounded-lg">
              <div className="w-full flex justify-end" onClick={()=>setBlog(-1)}><Close/></div> 
               <div className="mt-10  h-auto w-auto"> {blogs[b].description}</div>
             </div>}
          </div>
        </div>

    )
}