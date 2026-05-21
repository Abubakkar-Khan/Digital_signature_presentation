"use client";

import { Users, Coffee } from "lucide-react";

export default function Section3Hamza3({ onNext }) {
  return (
    <div className="w-full h-full flex flex-col justify-between p-4 md:p-6 swiss-grid relative overflow-hidden">
      {/* Slide Header */}
      <div className="flex justify-between items-baseline border-b-2 border-black pb-2 mb-2">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-gray-400">
          <Users className="w-4 h-4 text-[#FF3B30]" />
          <span>[ THE STORY OF HAMZA: PART 3 - THE GHOSTING ]</span>
        </div>
        <span className="swiss-badge text-[10px] border-2 border-black">
          SLIDE 05 / 30
        </span>
      </div>

      {/* Main Content */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 items-center my-auto overflow-hidden">
        <div className="col-span-1 md:col-span-6 flex flex-col justify-center">
          <span className="px-2 py-0.5 text-[10px] font-mono text-white bg-[#FF3B30] border border-black uppercase w-max mb-3">
            HAMZA DEFAULTS SERIES: CHAPTER 03
          </span>
          <h2 className="text-2xl md:text-5xl font-space font-black uppercase text-white leading-none mb-3">
            Sajid's <br />
            <span className="px-2 py-0.5 bg-[#FF3B30] text-white border-2 border-black inline-block transform -rotate-1 shadow-[2px_2px_0px_#000] rounded">
              Tension
            </span>
          </h2>
          <p className="text-gray-400 font-mono text-xs leading-relaxed mb-4">
            3 months pass. The contract delivery deadline is long gone. Hamza is completely unreachable, not responding to calls, messages, or emails. Sajid is left sitting in immense tension, realizing he has been ghosted and defaulted.
          </p>
          <div className="p-3 border-2 border-black bg-[#181922] rounded text-[10px] font-mono text-gray-300">
            ⚠️ <strong>Current Status:</strong> Sajid realizes the ink signature on paper didn't automatically guarantee code delivery.
          </div>
        </div>

        {/* Visual Graphic */}
        <div className="col-span-1 md:col-span-6 flex justify-center">
          <div className="doodle-card p-4 border-[#FF3B30] text-center w-full max-w-[360px] flex flex-col justify-between items-center">
            <span className="text-[9px] font-mono text-gray-500 uppercase mb-2">SAJID IN TENSION</span>

            <div className="relative w-full aspect-square rounded-lg border-2 border-black overflow-hidden bg-black flex items-center justify-center mb-2 shadow-[2px_2px_0px_#000]">
              <img
                src="/sajid_sitting_in_tension.png"
                alt="Sajid sitting in deep tension"
                className="w-full h-full object-cover animate-fade-in"
              />
            </div>

            <span className="text-[9px] font-mono text-gray-400 italic mt-1">
              "No code, no updates... what do I do about my deposit and project?"
            </span>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="flex justify-between items-center border-t-2 border-black pt-2 mt-2">
        <span className="text-[10px] font-mono text-gray-500">
          Sajid is in tension. Tap next to see the legal action he takes.
        </span>
        <button
          onClick={onNext}
          className="px-6 py-2.5 doodle-btn doodle-btn-red text-[10px] font-black uppercase border-2 border-black cursor-pointer"
        >
          Next: Sajid Sues Hamza
        </button>
      </div>
    </div>
  );
}
