import { Mail, FileDown, CalendarDays, Rss } from "lucide-react";

import LinkedIn from "./LinkedIn";
import Github from "./Github";

export default function Footer() {
  return (
    <footer className="md:w-[70%] w-[85%] px-4 py-10">
      <div className="rounded-xl text-white">
        {/* CTA Section */}
        <div className="border-b border-zinc-200 pb-14">
          <div className="flex flex-col items-center text-justify">
            {/* Heading */}
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-800">
              Ready to build something impactful?
            </h2>

            {/* Subtext */}
            <p className="mt-4 w-full text-sm leading-relaxed text-zinc-500">
              I&apos;m available for remote full-time roles, freelance projects,
              and startup collaborations. Whether you&apos;re building an
              AI-powered SaaS product, modern full-stack application, or
              scalable backend system, let&apos;s discuss how I can help bring
              your vision to life.
            </p>

            {/* Availability */}
            <div className="mt-5 flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-1 text-sm text-green-700">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              Available for remote opportunities
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-row flex-wrap items-center justify-center gap-4 ">
              {/* Resume */}
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/15pcL4Mauqh2BWsFNY42SnlnmfKSfmsew/view?usp=sharing",
                    "_blank",
                  )
                }
                className="
                cursor-pointer
                  flex items-center gap-2
                  rounded-lg
                  border border-zinc-300
                  bg-white
                  px-4 py-2
                  text-sm font-medium text-zinc-700
                  transition-all duration-300
                  hover:scale-[1.03]
                  hover:border-zinc-400
                  hover:bg-zinc-100
                "
              >
                <FileDown size={16} />
                Download Resume
              </button>

              {/* Email */}
              <button
                onClick={() => window.open("mailto:suragupt880@gmail.com")}
                className="
                cursor-pointer
                  flex items-center gap-2
                  rounded-lg
                  border border-indigo-500/20
                  bg-black
                  px-4 py-2
                  text-sm font-medium text-white
                  transition-all duration-300
                  hover:scale-[1.03]
                  hover:border-neutral-400/40
                  hover:bg-neutral-900
                "
              >
                <Mail size={16} />
                Send an Email
              </button>

              {/* Consultation */}
              <button
                className="
                  flex items-center gap-2
                cursor-pointer

                  rounded-lg
                  border border-zinc-300
                  bg-neutral-100
                  px-4 py-2
                  text-sm font-medium text-zinc-700
                  transition-all duration-300
                  hover:scale-[1.03]
                  hover:border-zinc-400
                  hover:bg-neutral-200
                "
              >
                <CalendarDays size={16} />
                Book a Call
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 flex flex-col md:gap-6 gap-3 md:flex-row md:items-center md:justify-between">
          {/* Left */}
          <div className="flex flex-col">
            <span className="text-md text-zinc-700">© 2026 Suraj Gupta</span>

            <span className="mt-1 text-sm text-zinc-500">
              Full-stack + GenAI Engineer
            </span>
          </div>

          {/* Right Links */}
          <div className="flex items-center gap-8 text-zinc-500">
            <a
              href="https://github.com/surajgupt01"
              target="_blank"
              className="flex items-center gap-2 transition duration-300 hover:text-zinc-800"
            >
              <Github />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/suraj-gupta-1894051ba/"
              target="_blank"
              className="flex items-center gap-2 transition duration-300 hover:text-zinc-800"
            >
              <LinkedIn />
              LinkedIn
            </a>

            <a
              href="#"
              className="flex items-center gap-2 transition duration-300 hover:text-zinc-800"
            >
              <Rss size={18} />
              Blog
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
