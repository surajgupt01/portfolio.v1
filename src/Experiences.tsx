export default function Experience() {
  return (
    <div className="w-full p-4">
      <div className="border border-dashed border-gray-800 mt-10 mb-6 w-full"></div>

      <div className="w-full p-2 text-left">
        <h1 className="font-medium text-2xl text-gray-400 text-center">
          Work Experience
        </h1>
      </div>
      <div className="text-gray-500 font-light italic w-full text-center">
       My journey of learning, building, and shipping.
      </div>

      <div className="w-full flex justify-between items-center  font-semibold mt-4 sm:p-4 p-2">
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
              <div>JAN 2026</div>
            </div>
          </div>

          <div className="text-sm text-gray-300 mt-1 ml-4 font-normal">
            {" "}
            FullStack Developer Intern{" "}
            <span className="text-xs text-gray-500 ml-1">{" (remote)"}</span>
            <br></br>
            <span className="text-xs font-normal text-gray-400 text-justify">
              {`Worked as a Full-Stack Developer Intern, I worked on a Web3 platform,improving UI components, `}
              <br></br>
              {`refining user experience, and validating APIs for reliability and performance.`}
            </span>
          </div>
        </div>
      </div>
      {/* <div className="border border-dashed border-gray-800 mt-20 mb-2 w-full"></div> */}
    </div>
  );
}
