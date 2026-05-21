"use client";

import { ShieldCheck } from "lucide-react";

export default function Navbar({ currentSlide, goToSlide, total = 30 }) {
  const scrollProgress = (currentSlide / total) * 100;

  const navItems = [
    { label: "Intro",      categoryId: "intro",      slideIndex: 1  },
    { label: "Hamza",      categoryId: "story",      slideIndex: 3  },
    { label: "Existence",  categoryId: "existence",  slideIndex: 8  },
    { label: "Process",    categoryId: "process",    slideIndex: 10 },
    { label: "Hash",       categoryId: "hash",       slideIndex: 11 },
    { label: "2^256",      categoryId: "scale",      slideIndex: 14 },
    { label: "Encryption", categoryId: "encryption", slideIndex: 22 },
    { label: "DocDroc",    categoryId: "blueprint",  slideIndex: 29 },
  ];

  const getActiveCategory = () => {
    if (currentSlide >= 1  && currentSlide <= 2)        return "intro";
    if (currentSlide >= 3  && currentSlide <= 7)        return "story";
    if (currentSlide >= 8  && currentSlide <= 9)        return "existence";
    if (currentSlide === 10)                            return "process";
    if (currentSlide >= 11 && currentSlide <= 13)       return "hash";
    if (currentSlide >= 14 && currentSlide <= 21)       return "scale";
    if (currentSlide >= 22 && currentSlide <= 28)       return "encryption";
    return "blueprint";
  };

  const active = getActiveCategory();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0E0F12] border-b-2 border-black">
      {/* Progress bar */}
      <div className="w-full h-[3px] bg-[#1F202B]">
        <div
          className="h-full bg-[var(--swiss-red)] transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav className="w-full px-6 py-3 flex items-center justify-between">
        {/* Brand */}
        <div
          onClick={() => goToSlide(1)}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="p-1 border-2 border-black bg-black text-[var(--swiss-red)]">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <span className="font-space font-black tracking-tighter text-xs text-white uppercase">
            DIGITAL_SIGNATURES{" "}
            <span className="text-[9px] font-mono text-[var(--swiss-yellow)] lowercase font-normal ml-1">
              v4.0
            </span>
          </span>
        </div>

        {/* Nav categories */}
        <div className="hidden lg:flex items-center gap-1.5">
          {navItems.map((item) => {
            const isActive = active === item.categoryId;
            return (
              <button
                key={item.categoryId}
                onClick={() => goToSlide(item.slideIndex)}
                className={`px-3 py-1 text-[10px] font-mono font-black uppercase border-2 border-black rounded cursor-pointer transition-all ${
                  isActive
                    ? "bg-black text-[var(--swiss-red)] shadow-[2px_2px_0px_#000]"
                    : "bg-[#181922] text-gray-400 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Slide counter */}
        <div className="px-2.5 py-1 border-2 border-black bg-black text-[9px] text-[var(--swiss-yellow)] font-mono uppercase tracking-widest">
          SLIDE {String(currentSlide).padStart(2, "0")} / {total}
        </div>
      </nav>
    </header>
  );
}
