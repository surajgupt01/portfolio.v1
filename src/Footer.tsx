import { Mail, FileDown, CalendarDays, Rss } from "lucide-react";
import LinkedIn from "./LinkedIn";
import Github from "./Github";

export default function Footer() {
  return (
    <footer className="w-full py-16 sm:py-20 flex justify-center" id="contact">
      <div className="w-[90%] md:w-[75%] max-w-5xl">
        <div className="flex flex-col text-neutral-900">
          
          {/* CTA Section */}
          <div className="border-b border-neutral-200 pb-16">
            <div className="flex flex-col items-center text-center">
              
              {/* Availability Badge */}
              <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-xs font-medium text-neutral-700 shadow-2xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Available for remote opportunities
              </div>

              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">
                Building something exciting?
              </h2>

              {/* Subtext */}
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-neutral-600 max-w-xl">
                I&apos;m available for remote full-time roles, freelance projects,
                and startup collaborations. Always interested in ambitious
                products and meaningful challenges.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-row flex-wrap items-center justify-center gap-3">
                {/* Email (Primary Action) */}
                <button
                  onClick={() => window.open("mailto:suragupt880@gmail.com")}
                  className="
                    cursor-pointer
                    flex items-center gap-2
                    rounded-md
                    bg-neutral-900
                    px-4.5 py-2.5
                    text-sm font-medium text-white
                    shadow-xs
                    transition-all duration-200
                    hover:bg-neutral-800
                    active:scale-95
                  "
                >
                  <Mail size={16} />
                  Send an Email
                </button>

                {/* Consultation */}
                <button
                  className="
                    cursor-pointer
                    flex items-center gap-2
                    rounded-md
                    border border-neutral-300
                    bg-white
                    px-4.5 py-2.5
                    text-sm font-medium text-neutral-700
                    shadow-xs
                    transition-all duration-200
                    hover:bg-neutral-50
                    hover:border-neutral-400
                    active:scale-95
                  "
                  onClick={() => {
                    window.open("https://cal.com/suraj-gupta/20min");
                  }}
                >
                  <CalendarDays size={16} />
                  Book a Call
                </button>

                {/* Resume */}
                <button
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/15pcL4Mauqh2BWsFNY42SnlnmfKSfmsew/view?usp=sharing",
                      "_blank"
                    )
                  }
                  className="
                    cursor-pointer
                    flex items-center gap-2
                    rounded-md
                    border border-neutral-300
                    bg-white
                    px-4.5 py-2.5
                    text-sm font-medium text-neutral-700
                    shadow-xs
                    transition-all duration-200
                    hover:bg-neutral-50
                    hover:border-neutral-400
                    active:scale-95
                  "
                >
                  <FileDown size={16} />
                  Download Resume
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            
            {/* Left Info */}
            <div className="flex flex-col items-center sm:items-start">
              <span className="text-sm font-medium text-neutral-900">© 2026 Suraj Gupta</span>
              <span className="text-xs text-neutral-500 mt-0.5">
                Full-stack + GenAI Engineer
              </span>
            </div>

            {/* Right Links */}
            <div className="flex items-center gap-6 text-sm text-neutral-600">
              <a
                href="https://github.com/surajgupt01"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors duration-200 hover:text-neutral-900"
              >
                <Github />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/suraj-gupta-1894051ba/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors duration-200 hover:text-neutral-900"
              >
                <LinkedIn />
                LinkedIn
              </a>

              <a
                href="#"
                className="flex items-center gap-2 transition-colors duration-200 hover:text-neutral-900"
              >
                <Rss size={16} />
                Blog
              </a>
            </div>

          </div>

        </div>
      </div>
    </footer>
  );
}