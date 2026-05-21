"use client";

import { Users, Edit3 } from "lucide-react";

export default function Section3Hamza2({ onNext }) {
  return (
    <div className="w-full h-full flex flex-col justify-between p-4 md:p-6 swiss-grid relative overflow-hidden">
      {/* Slide Header */}
      <div className="flex justify-between items-baseline border-b-2 border-black pb-2 mb-2">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-gray-400">
          <Users className="w-4 h-4 text-[#007AFF]" />
          <span>[ THE STORY OF HAMZA: PART 2 - THE INK SIGNATURE ]</span>
        </div>
        <span className="swiss-badge text-[10px] border-2 border-black">
          SLIDE 04 / 30
        </span>
      </div>

      {/* Main Content */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 items-center my-auto overflow-hidden">
        <div className="col-span-1 md:col-span-6 flex flex-col justify-center">
          <span className="px-2 py-0.5 text-[10px] font-mono text-white bg-[#007AFF] border border-black uppercase w-max mb-3">
            HAMZA DEFAULTS SERIES: CHAPTER 02
          </span>
          <h2 className="text-2xl md:text-5xl font-space font-black uppercase text-white leading-none mb-3">
            Hamza Goes <br />
            <span className="px-2 py-0.5 bg-[#007AFF] text-white border-2 border-black inline-block transform rotate-1 shadow-[2px_2px_0px_#000] rounded">
              To Sleep
            </span>
          </h2>
          <p className="text-gray-400 font-mono text-xs leading-relaxed mb-4">
            Instead of writing code, Hamza packs his bags, heads off to his village, and goes completely to sleep. He ignores all project deadlines and sleeps peacefully, leaving Sajid in the dark.
          </p>
          <div className="p-3 border-2 border-black bg-[#181922] rounded text-[10px] font-mono text-gray-300">
            💤 <strong>Current Status:</strong> Hamza is in deep slumber at his village. No progress is being made on the software.
          </div>
        </div>

        {/* Visual Graphic */}
        <div className="col-span-1 md:col-span-6">
          <div className="doodle-card p-4 border-[#007AFF] text-center min-h-[270px] flex flex-col justify-between items-center">
            <span className="text-[9px] font-mono text-gray-500 uppercase">HAMZA'S VILLAGE RETREAT</span>

            <div className="relative w-full h-[180px] rounded-lg border-2 border-black overflow-hidden bg-black flex items-center justify-center mb-2 shadow-[2px_2px_0px_#000]">
              <img
                src="/hamza sleeping.png"
                alt="Hamza sleeping peacefully in his village"
                className="w-full h-full object-cover animate-fade-in"
              />
            </div>

            <span className="text-[9px] font-mono text-gray-400 italic">
              "Deadlines? Code dashboards? Zzz... let me sleep..."
            </span>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="flex justify-between items-center border-t-2 border-black pt-2 mt-2">
        <span className="text-[10px] font-mono text-gray-500">
          Hamza has gone off to sleep. Tap next to see how Sajid sits in tension.
        </span>
        <button
          onClick={onNext}
          className="px-6 py-2.5 doodle-btn doodle-btn-magenta text-[10px] font-black uppercase border-2 border-black cursor-pointer"
        >
          Next: Sajid's Tension
        </button>
      </div>
    </div>
  );
}
