import { blogs } from "./BlogsItems"


export default function Blogs(){
    return(

        <div className="flex justify-center p-4 h-190 overflow-auto scrollbar-hide w-full ">
          <div className="scroll-smooth  p-2  overflow-auto scrollbar-hide sm:h-150 h-full w-full overflow-x-hidden flex flex-col items-center ">
              {
                blogs.slice().reverse().map((e:string)=>(
                  
                    <div className="bg-gray-800/50 shadow-sm backdrop:blur-md w-92 sm:w-160 h-auto p-4 mb-4  text-gray-300 text-sm rounded-xl flex flex-col items-center">
                         <div className="flex items-center mb-4  w-full">
                         <div className="w-10 h-10 rounded-full bg-blue-600  font-semibold text-white flex justify-center items-center">S</div>
                         <span className="font-semibold ml-2">Suraj</span>
                         </div>
                        <p className="mb-2 text-justify sm:w-130 w-80">{e}</p>
                        
                    </div> 
                 
                ))
              }
          </div>
        </div>

    )
}