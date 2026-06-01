import "./App.css";
import Projects from "./Projects";
import About from "./About";
// import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experiences";
import BlogSection from "./Blogs";
import Footer from "./Footer";
import FloatingNav from "./Nav";

function App() {


  return (
    <>
      <div className="h-auto relative w-full bg-linear-to-l from   bg-gray-50 text-gray-700 flex  flex-col  justify-center items-center sm:p-8 sm:pt-4 p-3 scroll-smooth   selection:bg-blue-300">

      <FloatingNav/>
       

        <div
          className={` lg:w-[60%] w-full  md:ml-5 h-auto   flex flex-col justify-center  items-center  border-l border-gray-200 sm:p-6 p-2  `}
        >

          <div className=" sm:p-6 sm:pt-4 p-2  border-gray-300 w-full h-full ">
            <About />
            <Experience />
            <Projects />

            <Education />
            {/* <Contact /> */}
            <BlogSection/>
          </div>
        </div>
        {/* <footer>
          <div className="text-gray-500 font-medium italic w-full text-center">
            Designed & developed by me ❤️‍🔥 with lots of ☕<br></br>
            <span className="text-xs">Always learning. Always building</span>
          </div>
        </footer> */}
        <Footer/>
      </div>
    </>
  );
}

export default App;
