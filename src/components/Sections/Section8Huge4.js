"use client";

import { Star } from "lucide-react";

export default function Section8Huge4({ onNext }) {
  return (
    <div className="w-full h-full flex flex-col justify-between p-4 md:p-6 swiss-grid relative overflow-hidden">
      {/* Slide Header */}
      <div className="flex justify-between items-baseline border-b-2 border-black pb-2 mb-2">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-gray-400">
          <Star className="w-4 h-4 text-[#FFCC00]" />
          <span>[ THE SCALE OF 2^256: LAYER 4 - THE GALACTIC LEVEL ]</span>
        </div>
        <span className="swiss-badge text-[10px] border-2 border-black">
          SLIDE 16 / 27
        </span>
      </div>

      {/* Main Grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 items-center my-auto overflow-hidden">
        <div className="col-span-1 md:col-span-6 flex flex-col justify-center">
          <span className="px-2 py-0.5 text-[10px] font-mono text-black bg-[#FFCC00] border border-black uppercase w-max mb-3">
            KEYSPACE MULTIPLIER: LAYER 4
          </span>
          <h2 className="text-2xl md:text-5xl font-space font-black uppercase text-white leading-none mb-3">
            The Galactic <br />
            <span className="px-2 py-0.5 bg-[#FFCC00] text-black border-2 border-black inline-block transform -rotate-1 shadow-[2px_2px_0px_#000] rounded">
              Earth Level
            </span>
          </h2>
          <p className="text-gray-400 font-mono text-xs leading-relaxed mb-4">
            Imagine 4 billion copies of Earth. Since the Milky Way has between 100 and 400 billion stars, this is equivalent to roughly <strong>1% of every star in the galaxy</strong> having its own Earth, running a planetary botnet network.
          </p>

          {/* Mathematical Multiplier Sequence */}
          <div className="p-3.5 border-2 border-black bg-black rounded-lg mb-4">
            <span className="text-[8px] font-mono text-gray-500 uppercase block mb-1">
              MULTIPLIER SEQUENCE (4x)
            </span>
            <div className="font-mono text-xs md:text-sm text-[#FFCC00] font-black break-all leading-tight">
              4,000,000,000 × 4,000,000,000 × 4,000,000,000 × 4,000,000,000
            </div>
          </div>
        </div>

        {/* Visual Graphic - Galaxy Stars Image */}
        <div className="col-span-1 md:col-span-6">
          <div className="doodle-card p-4 border-[#FFCC00] text-center min-h-[220px] flex flex-col justify-between items-center">
            <span className="text-[9px] font-mono text-gray-500 uppercase">MILKY WAY ORBIT DATA</span>

            <div className="relative w-full h-[140px] rounded-lg border-2 border-black overflow-hidden bg-black flex items-center justify-center">
              <img
                src="/galaxy_stars.png"
                alt="Galaxy Stars"
                className="w-full h-full object-cover"
              />
            </div>

            <span className="text-[9px] font-mono text-gray-400 italic">
              "4 Billion Earths orbiting stars in the Milky Way..."
            </span>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="flex justify-between items-center border-t-2 border-black pt-2 mt-2">
        <span className="text-[10px] font-mono text-gray-500">
          Layer 4 loaded. Tap next to multiply the keyspace by another 4 billion (Universe level).
        </span>
        <button
          onClick={onNext}
          className="px-6 py-2.5 doodle-btn doodle-btn-magenta text-[10px] font-black uppercase border-2 border-black cursor-pointer"
        >
          Next Layer (Universe Level)
        </button>
      </div>
    </div>
  );
}
