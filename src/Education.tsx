export default function Education() {
  return (
    <div className="w-full sm:p-4 p-2">
      <div className="w-full p-2 text-left">
        <h1 className="font-medium text-2xl text-gray-600">Education</h1>
      </div>
      <div className="w-full flex justify-between items-center  font-semibold mt-4 p-4">
        <div className=" flex  items-start">
          <div className="flex justify-center items-center gap-2">
            <div className="w-12 h-12  rounded-md hover:rotate-6 duration-300 ease-in-out cursor-pointer">
              <img
                src="./assets/Manipal_University_Jaipur_logo.png"
                className="w-full h-full"
              ></img>
            </div>{" "}
            
          </div>

          <div className="text-sm text-gray-400 mt-1 ml-4 font-normal flex flex-col">
            <span className="sm:text-lg text-md font-semibold text-gray-300">Manipal University Jaipur</span>
            {" "}
            B.Tech in Computer and Communication{" "}
            <span className="text-xs font-light">{" (8.12 CGPA) "}</span>
          </div>
        </div>
        <div className="flex justify-center font-semibold items-center gap-2 text-xs text-gray-400">
          <div>2021</div>
          {"-"}
          <div>2025</div>
        </div>
      </div>
      <div className="border border-dashed border-gray-800 mt-20 mb-2 w-full"></div>
    </div>
  );
}
