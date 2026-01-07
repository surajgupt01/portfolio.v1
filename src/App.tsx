import "./App.css";
import Projects from "./Projects";
import About from "./About";
import Blogs from "./Blogs";
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
      <div className="h-auto w-full bg-linear-to-l from   bg-black text-white flex  flex-col  justify-center items-center sm:p-8 p-3 scroll-smooth  shadow-2xl shadow-blue-900">
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

        <div
          className={` sm:w-180 md:ml-5 h-auto   flex flex-col justify-center  items-center   w-full border-r border-l border-gray-900 sm:p-6 p-2 `}
        >
          {/* { router == 'About' &&  <About/>}

{router === "Projects" && <Projects/>}

{router === "Blogs" && <Blogs/>}

{router === "Contact me" && <Contact/>} */}
          <div className="border-dashed sm:p-6 p-2 border rounded-xl border-gray-600 w-full h-full shadow-2xl shadow-rose-900">
            <About />
            <Experience />
            <Projects />
            <Blogs />
            <Education />
            <Contact />
          </div>
        </div>
        <footer>
          <div className="text-gray-400 font-light italic w-full text-center">
            Designed & developed by me ❤️‍🔥 with lots of ☕<br></br>
            <span className="text-xs">Always learning. Always building</span>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
