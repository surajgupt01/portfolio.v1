import "./App.css";
import { Routes, Route } from "react-router-dom";
import Projects from "./Projects";
import About from "./About";
import Education from "./Education";
import Experience from "./Experiences";
import BlogSection from "./Blogs";
import Footer from "./Footer";
import FloatingNav from "./Nav";
import ArticlePage from "./Components/PulseArticle";
import ArticlesListPage from "./Components/Articles";
import LuenArticlePage from "./Components/LuenArticle";
import { ThemeProvider } from "./ThemeProvider"; // Adjust path if needed

function MainLayout() {
  return (
    <div className="min-h-screen relative w-full bg-gray-50 dark:bg-neutral-950 text-neutral-700 dark:text-neutral-200 transition-colors duration-300 flex flex-col justify-center items-center sm:p-8 sm:pt-4 p-3 selection:bg-blue-300">
      <FloatingNav />

      <div className="lg:w-[60%] w-full md:ml-5 h-auto flex flex-col justify-center items-center border-gray-200 dark:border-neutral-800 sm:p-3 p-2">
        <div className="sm:p-6 sm:pt-4 p-2 border-gray-300 dark:border-neutral-800 w-full h-full">
          <About />
          <Experience />
          <Projects />
          <Education />
          <BlogSection />
        </div>
      </div>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <div className="scroll-smooth duration-300 ease-in-out min-h-screen bg-gray-50 dark:bg-neutral-950">
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/blogs/pulse-ai" element={<ArticlePage />} />
          <Route path="/blogs" element={<ArticlesListPage />} />
          <Route path="/blogs/luen-saas-journey" element={<LuenArticlePage />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;