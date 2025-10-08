import { useRef, useState } from "react";
import ContactNav from "./ContactNav";
import axios from "axios";

export default function Contact() {

  const [status ,setStatus] = useState<number>(0)  
  const handleEmail = async (formData: FormData) => {
    try {
      console.log(formData);

      const response =  await axios.post(
        "https://contact-form-five-rust.vercel.app/get-mail",

        {
          name: formData.get("name"),
          sender: formData.get("email"),
          text: formData.get("message"),
        },

        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log(response)
      setStatus(response?.status)
      setTimeout(() => {

        setStatus(0)
        
      }, 3000);
    } catch (e) {
      console.log(e);
    }
  };

  const textAreaRef = useRef(null);

  return (
    <div className="flex justify-center items-center flex-col relative  p-4  ">
      <div className="flex border-1 border-gray-700 p-2 rounded-2xl w-30 justify-between items-center absolute right-10 sm:right-2 -top-20">
        <ContactNav />
      </div>

      {status==200 && <div className=" bg-gray-700 absolute -top-32 transition-all ease-in-out duration-500 right-2 p-2 text-xs">mail sent successfully</div>}

      <form
        action={handleEmail}
        className="border-1 rounded-lg p-4 flex flex-col items-center border-gray-600  sm:w-120  "
      >
        <div className="mb-2 text-gray-600 font-semibold">Mail me</div>
        <input
          name="name"
          placeholder="name"
          type="text"
          className="w-85 sm:w-100  border-1 rounded-sm p-2 border-gray-700 "
        ></input>
        <input
          name="email"
          placeholder="email"
          type="email"
          className="w-85 sm:w-100 border-1 border-gray-700 rounded-sm p-2 mt-2"
        ></input>
        <textarea
          name="message"
          placeholder="message "
          className="border-1 border-gray-700 w-85 sm:w-100 h-50 p-2 resize-none rounded-sm mt-2 scrollbar-hide"
          ref={textAreaRef}
        ></textarea>
        <button
          type="submit"
          className="bg-blue-700 hover:bg-blue-800 w-80 border-1 border-black rounded-md text-center p-2 mt-4 cursor-pointer"
        >
          submit
        </button>
      </form>
    </div>
  );
}
