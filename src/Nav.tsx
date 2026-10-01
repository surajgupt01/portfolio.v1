"use client";

import { useContext, useState } from "react";
import { Home, Briefcase, NotebookTabs, Mail, Moon, Sun } from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ThemeContext } from "./ThemeContext"; // adjust path as needed

const navItems = [
  {
    name: "Home",
    href: "#home",
    icon: Home,
  },
  {
    name: "Work",
    href: "#work",
    icon: Briefcase,
  },
  {
    name: "Blogs",
    href: "#blog",
    icon: NotebookTabs,
  },
  {
    name: "Contact",
    href: "#contact",
    icon: Mail,
  },
];

export default function FloatingNav() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  // Consume ThemeContext for toggling application theme
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.theme ?? "light";
  const setTheme = themeContext?.setTheme;

  const isDark = theme === "dark";

  const toggleTheme = () => {
    if (setTheme) {
      setTheme(isDark ? "light" : "dark");
    }
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous === undefined) return;

    if (latest > previous && latest > 200) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.div
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: 100, opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100]"
    >
      <div
        className="
          flex items-center gap-3
          px-5 py-2.5
          rounded-full
          border border-white/10
          bg-neutral-950/85 backdrop-blur-xl
          shadow-2xl shadow-black/50
          text-white
        "
      >
        {/* Navigation Items */}
        <div className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <a
                key={index}
                href={item.href}
                className="relative group p-1.5 rounded-full hover:bg-neutral-800/80 transition-colors text-neutral-300 hover:text-white"
              >
                <div className="hover:scale-110 duration-200 ease-in-out">
                  <Icon size={18} />
                </div>

                {/* Tooltip */}
                <div
                  className="
                    absolute left-1/2 -translate-x-1/2
                    -top-9
                    opacity-0 group-hover:opacity-100
                    translate-y-1 group-hover:translate-y-0
                    duration-200 ease-in-out
                    whitespace-nowrap
                    bg-neutral-100 text-neutral-950
                    shadow-md
                    text-[10px] font-medium
                    px-2 py-0.5 rounded-md
                    pointer-events-none
                  "
                >
                  {item.name}
                </div>
              </a>
            );
          })}
        </div>

        {/* Separator */}
        <div className="w-[1px] h-4 bg-neutral-800 mx-0.5" />

        {/* Theme Toggle Button */}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="relative group p-1.5 rounded-full hover:bg-neutral-800/80 transition-colors text-neutral-300 hover:text-white cursor-pointer"
        >
          <div className="hover:scale-110 duration-200 ease-in-out">
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </div>

          {/* Tooltip */}
          <div
            className="
              absolute left-1/2 -translate-x-1/2
              -top-9
              opacity-0 group-hover:opacity-100
              translate-y-1 group-hover:translate-y-0
              duration-200 ease-in-out
              whitespace-nowrap
              bg-neutral-100 text-neutral-950
              shadow-md
              text-[10px] font-medium
              px-2 py-0.5 rounded-md
              pointer-events-none
            "
          >
            {isDark ? "Light mode" : "Dark mode"}
          </div>
        </button>
      </div>
    </motion.div>
  );
}