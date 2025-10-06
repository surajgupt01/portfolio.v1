import { blogs } from "./Blogs"


export default function Blogs(){
    return(

        <div className="flex justify-center p-4 h-150 overflow-auto scrollbar-hide">
          <div className="scroll-smooth h-auto">
              {
                blogs.slice().reverse().map((e:string)=>(
                  
                    <div className="bg-gray-800/50 shadow-sm backdrop:blur-md w-100 sm:w-160 h-auto p-4 m-4 text-gray-300 text-sm rounded-lg flex flex-col items-center">
                         <div className="flex items-center mb-4  w-full">
                         <div className="w-10 h-10 rounded-full bg-indigo-500  font-semibold text-white flex justify-center items-center">S</div>
                         <span className="font-semibold ml-2">Suraj</span>
                         </div>
                        <p className="mb-2 text-justify sm:w-130 w-90">{e}</p>
                        
                    </div> 
                 
                ))
              }
          </div>
        </div>

    )
}