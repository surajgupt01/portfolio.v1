import "./App.css";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experiences";

function App() {
  // const [router, setRouter] = useState<String | null>("About");

  // const [menu, setMenu] = useState(false);

  // const menuList = ["About", "Projects", "Blogs", "Contact me"];

  // useEffect(() => {}, [router]);

  return (
    <>
      <div className="h-auto relative w-full bg-linear-to-l from   bg-gray-50 text-gray-700 flex  flex-col  justify-center items-center sm:p-8 sm:pt-4 p-3 scroll-smooth   selection:bg-blue-300">
        {/* <button onClick={()=>{
         console.log('button clicked')
         setMenu(!menu)
       }} className='absolute top-5 left-5 z-100'>==</button> */}

        {/* <div className={`p-4 duration-300 sm:static fixed backdrop-blur-xl top-0   z-100 sm:w-50 w-[85%] mt-5 rounded-lg sm:border-0 border-1 border-gray-400   `}>
         <ul className='sm:grid sm:grid-cols-1 flex justify-evenly  items-center text-gray-400 '>
          {
            menuList.map((item)=>(
            <li className={``} key={item}>
            <button className={`cursor-pointer ${router == item ? 'text-blue-500' : ''} `} onClick={(e:React.MouseEvent<HTMLElement>)=>{
            if(e){
              setRouter(e.currentTarget.textContent)

              setMenu(!menu)
              
              console.log(router)
            }
           }}>{item}</button>
           </li>
            ))}
           

         </ul>
      </div> */}
        {/* <div className="bg-gray-800 w-[80%] left-auto right-auto h-[1px] absolute top-18"></div> */}
        <div
          className={` sm:w-180 md:ml-5 h-auto   flex flex-col justify-center  items-center   w-full border-r border-l border-gray-200 sm:p-6 p-2  `}
        >
          {/* { router == 'About' &&  <About/>}

{router === "Projects" && <Projects/>}

{router === "Blogs" && <Blogs/>}

{router === "Contact me" && <Contact/>} */}
          <div className=" sm:p-6 sm:pt-4 p-2  border-gray-300 w-full h-full  ">
            <About />
            <Experience />
            <Projects />
            {/* <Blogs /> */}
            <Education />
            <Contact />
          </div>
        </div>
        <footer>
          <div className="text-gray-500 font-medium italic w-full text-center">
            Designed & developed by me ❤️‍🔥 with lots of ☕<br></br>
            <span className="text-xs">Always learning. Always building</span>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
