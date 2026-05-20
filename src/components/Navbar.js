"use client";

import { ShieldCheck } from "lucide-react";

export default function Navbar({ currentSlide, goToSlide }) {
  const scrollProgress = (currentSlide / 24) * 100;

  // Define categories and their starting slide index (1-indexed)
  const navItems = [
    { label: "Intro", categoryId: "intro", slideIndex: 1 },
    { label: "Hamza Story", categoryId: "story", slideIndex: 2 },
    { label: "Existence", categoryId: "existence", slideIndex: 8 },
    { label: "Live Hash", categoryId: "hash", slideIndex: 9 },
    { label: "2^256 Scale", categoryId: "scale", slideIndex: 10 },
    { label: "Encryption", categoryId: "encryption", slideIndex: 19 },
    { label: "Blueprint", categoryId: "blueprint", slideIndex: 22 },
    { label: "Live Code", categoryId: "code", slideIndex: 23 },
  ];

  // Helper to find which category is active based on currentSlide index
  const getActiveCategory = () => {
    if (currentSlide === 1) return "intro";
    if (currentSlide >= 2 && currentSlide <= 6) return "story";
    if (currentSlide === 7 || currentSlide === 8) return "existence";
    if (currentSlide === 9) return "hash";
    if (currentSlide >= 10 && currentSlide <= 17) return "scale";
    if (currentSlide >= 18 && currentSlide <= 21) return "encryption";
    if (currentSlide === 22) return "blueprint";
    return "code";
  };

  const activeCategory = getActiveCategory();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0E0F12] border-b-3 border-black">
      {/* Swiss Solid Progress Bar */}
      <div className="w-full h-[4px] bg-[#1F202B]">
        <div
          className="h-full bg-[var(--swiss-red)] transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Navbar Row */}
      <nav className="mx-auto w-full px-6 py-4 flex items-center justify-between">
        {/* Brand Logo - Swiss Minimal */}
        <div 
          onClick={() => goToSlide(1)}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="p-1 border-2 border-black bg-black text-[var(--swiss-red)]">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <span className="font-space font-black tracking-tighter text-xs md:text-sm text-white uppercase">
            DIGITAL_SIGNATURES <span className="text-[9px] font-mono text-[var(--swiss-yellow)] lowercase font-normal ml-1">v3.0</span>
          </span>
        </div>

        {/* Categories List */}
        <div className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => {
            const isActive = activeCategory === item.categoryId;
            return (
              <button
                key={item.categoryId}
                onClick={() => goToSlide(item.slideIndex)}
                className={`px-3 py-1 text-[10px] font-mono font-black uppercase transition-all duration-100 border-2 border-black rounded ${
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

        {/* Slide Counter Indicator */}
        <div className="flex items-center gap-3">
          <div className="px-2.5 py-1 border-2 border-black bg-black text-[9px] text-[var(--swiss-yellow)] font-mono uppercase tracking-widest">
            SLIDE {currentSlide.toString().padStart(2, "0")} / 24
          </div>
        </div>
      </nav>
    </header>
  );
}
