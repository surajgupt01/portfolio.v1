import { Mail, FileDown, CalendarDays, Rss } from "lucide-react";
import LinkedIn from "./LinkedIn";
import Github from "./Github";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full py-12 sm:py-16 flex justify-center mx-auto transition-colors duration-300" id="contact">
      <div className="w-[90%] md:w-[75%] max-w-3xl">
        <div className="flex flex-col text-neutral-900 dark:text-neutral-100">
          
          {/* CTA Section */}
          <div className="border group cursor-pointer border-neutral-200/80 dark:border-neutral-800 rounded-2xl overflow-hidden pb-12 relative bg-neutral-50/50 dark:bg-neutral-900/60 shadow-2xs">
            {/* Background Cover Image */}
            <div className="w-full h-32 sm:h-40 absolute inset-x-0 top-0 overflow-hidden z-0">
              <img
                src="/assets/hero.png"
                alt="Cover"
                className="w-full h-full object-cover object-center opacity-90 dark:opacity-40 group-hover:scale-105 duration-300 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-50 dark:from-neutral-900 via-neutral-50/20 dark:via-neutral-900/40 to-transparent" />
            </div>

            <div className="flex flex-col items-center text-center pt-16 sm:pt-20 px-4 sm:px-8 relative z-10">
              {/* Availability Badge */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/90 backdrop-blur-sm px-3 py-1 text-[11px] font-medium text-neutral-700 dark:text-neutral-300 shadow-2xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Available for remote opportunities
              </div>

              {/* Heading */}
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                Building something exciting?
              </h2>

              {/* Subtext */}
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-neutral-500 dark:text-neutral-400 max-w-lg">
                I&apos;m available for remote full-time roles, freelance
                projects, and startup collaborations. Always interested in
                ambitious products and meaningful challenges.
              </p>

              {/* Buttons */}
              <div className="mt-6 flex flex-row flex-wrap items-center justify-center gap-2.5">
                {/* Email (Primary Action) */}
                <button
                  type="button"
                  onClick={() => window.open("mailto:surajgupt880@gmail.com")}
                  className="
                    cursor-pointer
                    flex items-center gap-1.5
                    rounded-lg
                    border border-transparent dark:border-neutral-700
                    bg-neutral-900 dark:bg-white
                    text-white dark:text-neutral-900
                    px-3.5 py-2
                    text-xs font-medium
                    shadow-2xs
                    transition-all duration-200
                    hover:bg-neutral-800 dark:hover:bg-neutral-200
                    active:scale-95
                  "
                >
                  <Mail size={14} />
                  Send an Email
                </button>

                {/* Consultation */}
                <button
                  type="button"
                  className="
                    cursor-pointer
                    flex items-center gap-1.5
                    rounded-lg
                    border border-neutral-200 dark:border-neutral-800
                    bg-white dark:bg-neutral-900
                    text-neutral-700 dark:text-neutral-200
                    px-3.5 py-2
                    text-xs font-medium
                    shadow-2xs
                    transition-all duration-200
                    hover:bg-neutral-50 dark:hover:bg-neutral-800
                    hover:border-neutral-300 dark:hover:border-neutral-700
                    active:scale-95
                  "
                  onClick={() => {
                    window.open("https://cal.com/suraj-gupta/20min");
                  }}
                >
                  <CalendarDays size={14} />
                  Book a Call
                </button>

                {/* Resume */}
                <button
                  type="button"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/15pcL4Mauqh2BWsFNY42SnlnmfKSfmsew/view?usp=sharing",
                      "_blank",
                    )
                  }
                  className="
                    cursor-pointer
                    flex items-center gap-1.5
                    rounded-lg
                    border border-neutral-200 dark:border-neutral-800
                    bg-white dark:bg-neutral-900
                    text-neutral-700 dark:text-neutral-200
                    px-3.5 py-2
                    text-xs font-medium
                    shadow-2xs
                    transition-all duration-200
                    hover:bg-neutral-50 dark:hover:bg-neutral-800
                    hover:border-neutral-300 dark:hover:border-neutral-700
                    active:scale-95
                  "
                >
                  <FileDown size={14} />
                  Download Resume
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 px-2">
            {/* Left Info */}
            <div className="flex flex-col items-center sm:items-start">
              <span className="text-xs font-medium text-neutral-900 dark:text-neutral-200">
                © 2026 Suraj Gupta
              </span>
              <span className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">
                Full-stack + GenAI Engineer
              </span>
            </div>

            {/* Right Links */}
            <div className="flex items-center gap-5 text-xs text-neutral-600 dark:text-neutral-400">
              <Link
                to="https://github.com/surajgupt01"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition-colors duration-200 hover:text-neutral-900 dark:hover:text-neutral-100"
              >
                <Github />
                GitHub
              </Link>

              <Link
                to="https://www.linkedin.com/in/suraj-gupta-1894051ba/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition-colors duration-200 hover:text-neutral-900 dark:hover:text-neutral-100"
              >
                <LinkedIn />
                LinkedIn
              </Link>

              <Link
                to="/blogs"
                className="flex items-center gap-1.5 transition-colors duration-200 hover:text-neutral-900 dark:hover:text-neutral-100"
              >
                <Rss size={14} />
                Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}