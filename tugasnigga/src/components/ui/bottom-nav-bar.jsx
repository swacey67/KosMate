"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Search, Info, User } from "lucide-react";
import { cn } from "../../lib/utils";

// Menu navigasi disesuaikan untuk KosMate
const navItems = [
  { label: "Home", icon: Home, path: "/" },
  { label: "Explore", icon: Search, path: "/explore" },
  { label: "About", icon: Info, action: "about" },
  { label: "Account", icon: User, path: "/auth" },
];

const MOBILE_LABEL_WIDTH = 76;

export function BottomNavBar({ pathname, navigate, scrollToAbout }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Menyinkronkan efek "aktif" dengan URL saat ini
  useEffect(() => {
    if (pathname === "/") setActiveIndex(0);
    else if (pathname === "/explore") setActiveIndex(1);
    else if (pathname === "/auth") setActiveIndex(3);
  }, [pathname]);

  const handleNav = (item, idx) => {
    setActiveIndex(idx);
    if (item.action === "about") {
      scrollToAbout();
    } else if (item.path) {
      navigate(item.path);
    }
  };

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      role="navigation"
      className={cn(
        "fixed inset-x-0 bottom-6 mx-auto z-[1000] w-fit",
        // Gaya Dark Glassmorphism khas KosMate
        "glass-panel bg-[#0A1128]/90 border border-white/10 rounded-full flex items-center p-2 shadow-[0_0_40px_rgba(45,212,191,0.15)] space-x-1 h-[64px]"
      )}
    >
      {navItems.map((item, idx) => {
        const Icon = item.icon;
        const isActive = activeIndex === idx;

        return (
          <motion.button
            key={item.label}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "flex items-center gap-0 px-4 py-2.5 rounded-full transition-colors duration-300 relative h-12 min-w-[50px]",
              isActive
                ? "bg-teal-500/20 text-teal-400 gap-2"
                : "bg-transparent text-slate-400 hover:bg-white/5 hover:text-slate-200",
              "focus:outline-none"
            )}
            onClick={() => handleNav(item, idx)}
            type="button"
          >
            <Icon size={22} strokeWidth={2} className="transition-colors duration-200 shrink-0" />

            <motion.div
              initial={false}
              animate={{
                width: isActive ? `${MOBILE_LABEL_WIDTH}px` : "0px",
                opacity: isActive ? 1 : 0,
                marginLeft: isActive ? "4px" : "0px",
              }}
              transition={{
                width: { type: "spring", stiffness: 350, damping: 32 },
                opacity: { duration: 0.2 },
                marginLeft: { duration: 0.2 },
              }}
              className="overflow-hidden flex items-center"
            >
              <span
                className={cn(
                  "font-bold text-sm whitespace-nowrap",
                  isActive ? "text-teal-400" : "opacity-0"
                )}
              >
                {item.label}
              </span>
            </motion.div>
          </motion.button>
        );
      })}
    </motion.nav>
  );
}