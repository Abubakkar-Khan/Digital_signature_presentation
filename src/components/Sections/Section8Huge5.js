"use client";

import { Star } from "lucide-react";

export default function Section8Huge5({ onNext }) {
  return (
    <div className="w-full h-full flex flex-col justify-between p-4 md:p-6 swiss-grid relative overflow-hidden">
      {/* Slide Header */}
      <div className="flex justify-between items-baseline border-b-2 border-black pb-2 mb-2">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-gray-400">
          <Star className="w-4 h-4 text-[#007AFF]" />
          <span>[ THE SCALE OF 2^256: LAYER 5 - THE UNIVERSE LEVEL ]</span>
        </div>
        <span className="swiss-badge text-[10px] border-2 border-black">
          SLIDE 14 / 24
        </span>
      </div>

      {/* Main Grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 items-center my-auto overflow-hidden">
        <div className="col-span-1 md:col-span-6 flex flex-col justify-center">
          <span className="px-2 py-0.5 text-[10px] font-mono text-white bg-[#007AFF] border border-black uppercase w-max mb-3">
            KEYSPACE MULTIPLIER: 4 BILLION * MILKY WAYS (5 OF 8)
          </span>
          <h2 className="text-2xl md:text-5xl font-space font-black uppercase text-white leading-none mb-3">
            The Universe <br />
            <span className="px-2 py-0.5 bg-[#007AFF] text-white border-2 border-black inline-block transform rotate-1 shadow-[2px_2px_0px_#000] rounded">
              Supercomputer
            </span>
          </h2>
          <p className="text-gray-400 font-mono text-xs leading-relaxed mb-4">
            Imagine 4 billion copies of the Milky Way galaxy. This massive, hypothetical network—a <strong>"Giga Galactic supercomputer"</strong> grid running in unison—would compute hashes across the cosmos.
          </p>
          <div className="p-3 border-2 border-black bg-[#181922] rounded font-mono text-lg text-white font-black text-center">
            🌌 2^160 Hashes / Second
          </div>
        </div>

        {/* Visual Graphic */}
        <div className="col-span-1 md:col-span-6">
          <div className="doodle-card p-4 border-[#007AFF] text-center min-h-[220px] flex flex-col justify-between items-center">
            <span className="text-[9px] font-mono text-gray-500 uppercase">COSMIC NETWORK GRID</span>

            <div className="w-full p-4 border-2 border-black bg-black rounded-lg text-center">
              <pre className="text-[9px] text-[#007AFF] font-mono leading-none whitespace-pre bg-transparent border-0 p-0 m-0">
                {`   🌀 🌀 🌀 🌀
   🌀 🌀 🌀 🌀
   🌀 🌀 🌀 🌀
  [ 4B Galaxies ]`}
              </pre>
              <div className="text-[10px] font-mono text-gray-300 mt-2">
                <strong>Giga Galactic Supercomputer Grid</strong>
              </div>
            </div>

            <span className="text-[9px] font-mono text-gray-400 italic">
              "Computing 2^160 guesses per second in parallel..."
            </span>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="flex justify-between items-center border-t-2 border-black pt-2 mt-2">
        <span className="text-[10px] font-mono text-gray-500">
          Layer 5 loaded. Tap next to multiply the keyspace by running duration time (Time Multiplier 1).
        </span>
        <button
          onClick={onNext}
          className="px-6 py-2.5 doodle-btn doodle-btn-magenta text-[10px] font-black uppercase border-2 border-black cursor-pointer"
        >
          Next Layer (Time Multiplier 1)
        </button>
      </div>
    </div>
  );
}
