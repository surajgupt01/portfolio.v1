"use client";

import { useState } from "react";
import { Home, Briefcase, NotebookTabs, Mail } from "lucide-react";
// Note: Depending on your package version, this import might be "framer-motion" instead of "motion/react"
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

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
  const { scrollY } = useScroll(); // Destructured correctly
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (previous === undefined) return;

    // Added a small threshold (latest > 150) so it doesn't hide immediately at the top
    if (latest > previous && latest > 200) {
      // scrolling down
      setHidden(true);
    } else {
      // scrolling up
      setHidden(false);
    }
  });

  return (
    <motion.div
      // Framer Motion properties to handle the Y translation
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: 100, opacity: 0 }, // Pushes the navbar down by 100px and fades it out
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[100]"
    >
      <div
        className="
        hover:gap-7
        duration-300 ease-in-out
        flex items-center gap-3
        px-6 py-3
        rounded-full
        border border-white/10
        bg-black/85 backdrop-blur-xl
        shadow-2xl
        text-white
      "
      >
        {navItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <a key={index} href={item.href} className="relative group">
              <div
                className="
                p-1
                hover:scale-110
                duration-300
                ease-in-out
              "
              >
                <Icon size={20} />
              </div>

              {/* Tooltip */}
              <div
                className="
                absolute left-1/2 -translate-x-1/2
                -top-10
                opacity-0 group-hover:opacity-100
                translate-y-2 group-hover:translate-y-0
                duration-300 ease-in-out
                whitespace-nowrap
                bg-neutral-200 shadow-sm text-black
                text-[10px]
                px-2 py-1 rounded-md
              "
              >
                {item.name}
              </div>
            </a>
          );
        })}
      </div>
    </motion.div>
  );
}