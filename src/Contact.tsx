import { useRef } from "react";
import ContactNav from "./ContactNav";
export default function Contact(){



const textAreaRef = useRef(null)


    return(
        <div className="flex justify-center items-center flex-col relative  p-4  ">


            <div className="flex border-1 border-gray-700 p-2 rounded-2xl w-30 justify-between items-center absolute right-10 sm:right-2 -top-20">
               <ContactNav/>
            </div> 
           
           <div className="border-1 rounded-lg p-4 flex flex-col items-center border-gray-600  sm:w-120  ">

              <div className="mb-2 text-gray-600 font-semibold">Mail me</div>
               <input placeholder="name" className="w-85 sm:w-100  border-1 rounded-sm p-2 border-gray-700 "></input>
                <input placeholder="email" className="w-85 sm:w-100 border-1 border-gray-700 rounded-sm p-2 mt-2"></input>
                <textarea placeholder="message " className="border-1 border-gray-700 w-85 sm:w-100 h-50 p-2 resize-none rounded-sm mt-2 scrollbar-hide" ref={textAreaRef} ></textarea>
                <button className="bg-blue-700 hover:bg-blue-800 w-80 border-1 border-black rounded-md text-center p-2 mt-4 cursor-pointer">submit</button>
               
           </div>

  
        </div>
    )
}



 