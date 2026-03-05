"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Search, Info, User } from "lucide-react";
import { cn } from "../../lib/utils";

const navItems = [
  { label: "Home", icon: Home, path: "/" },
  { label: "Explore", icon: Search, path: "/explore" },
  { label: "About", icon: Info, action: "about" },
  { label: "Account", icon: User, path: "/auth" },
];

const MOBILE_LABEL_WIDTH = 76;

export function BottomNavBar({ pathname, navigate, scrollToAbout }) {
  const [activeIndex, setActiveIndex] = useState(0);

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
      // LOGIC CHANGE: Animasi sekarang turun dari atas (y: -50)
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      role="navigation"
      className={cn(
        // LOGIC CHANGE: Pindah ke Atas Kanan layar (top-6 right-4)
        "fixed top-6 right-4 md:top-8 md:right-12 z-[1000] w-fit",
        "glass-panel bg-[#0A1128]/90 border border-white/10 rounded-full flex items-center p-1.5 md:p-2 shadow-[0_0_40px_rgba(45,212,191,0.15)] space-x-1 h-[56px] md:h-[64px]"
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
              // Penyesuaian ukuran agar lebih pas saat ditaruh di atas
              "flex items-center gap-0 px-3 py-2 md:px-4 md:py-2.5 rounded-full transition-colors duration-300 relative h-10 md:h-12 min-w-[44px] md:min-w-[50px]",
              isActive
                ? "bg-teal-500/20 text-teal-400 gap-2"
                : "bg-transparent text-slate-400 hover:bg-white/5 hover:text-slate-200",
              "focus:outline-none"
            )}
            onClick={() => handleNav(item, idx)}
            type="button"
          >
            <Icon size={20} strokeWidth={2} className="transition-colors duration-200 shrink-0 md:w-[22px] md:h-[22px]" />

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
                  "font-bold text-xs md:text-sm whitespace-nowrap",
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