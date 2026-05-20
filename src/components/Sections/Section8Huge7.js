"use client";

import { Star, Hourglass } from "lucide-react";

export default function Section8Huge7({ onNext }) {
  return (
    <div className="w-full h-full flex flex-col justify-between p-4 md:p-6 swiss-grid relative overflow-hidden">
      {/* Slide Header */}
      <div className="flex justify-between items-baseline border-b-2 border-black pb-2 mb-2">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-gray-400">
          <Star className="w-4 h-4 text-[#FFCC00]" />
          <span>[ THE SCALE OF 2^256: LAYER 7 - TIME MULTIPLIER 2 ]</span>
        </div>
        <span className="swiss-badge text-[10px] border-2 border-black">
          SLIDE 19 / 27
        </span>
      </div>

      {/* Main Grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 items-center my-auto overflow-hidden">
        <div className="col-span-1 md:col-span-6 flex flex-col justify-center">
          <span className="px-2 py-0.5 text-[10px] font-mono text-black bg-[#FFCC00] border border-black uppercase w-max mb-3">
            KEYSPACE MULTIPLIER: LAYER 7
          </span>
          <h2 className="text-2xl md:text-5xl font-space font-black uppercase text-white leading-none mb-3">
            The Cosmic <br />
            <span className="px-2 py-0.5 bg-[#FFCC00] text-black border-2 border-black inline-block transform -rotate-1 shadow-[2px_2px_0px_#000] rounded">
              Age Span
            </span>
          </h2>
          <p className="text-gray-400 font-mono text-xs leading-relaxed mb-4">
            Multiply that running duration by another 4 billion. The total computation span equals approximately 507 billion years. This is <strong>37 times the age of the universe</strong>.
          </p>

          {/* Mathematical Multiplier Sequence */}
          <div className="p-3.5 border-2 border-black bg-black rounded-lg mb-4">
            <span className="text-[8px] font-mono text-gray-500 uppercase block mb-1">
              MULTIPLIER SEQUENCE (7x)
            </span>
            <div className="font-mono text-[9px] md:text-[10px] text-[#FFCC00] font-black break-all leading-tight">
              4,000,000,000 × 4,000,000,000 × 4,000,000,000 × 4,000,000,000 × 4,000,000,000 × 4,000,000,000 × 4,000,000,000
            </div>
          </div>
        </div>

        {/* Visual Graphic */}
        <div className="col-span-1 md:col-span-6">
          <div className="doodle-card p-4 border-[#FFCC00] text-center min-h-[220px] flex flex-col justify-between items-center">
            <span className="text-[9px] font-mono text-gray-500 uppercase">UNIVERSE TIMELINE</span>

            <div className="w-full p-4 border-2 border-black bg-black rounded-lg text-center flex flex-col items-center justify-center">
              <Hourglass className="w-12 h-12 text-[#FFCC00] mb-2" />
              <div className="text-[10px] font-mono text-gray-300 leading-tight">
                ⏳ <strong>507,000,000,000 years</strong> of galaxy computing power.
              </div>
            </div>

            <span className="text-[9px] font-mono text-gray-400 italic">
              "Age of the Universe: ~13.8 Billion Years..."
            </span>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="flex justify-between items-center border-t-2 border-black pt-2 mt-2">
        <span className="text-[10px] font-mono text-gray-500">
          Layer 7 loaded. Tap next to see the final conclusion and odds of guessing a 256-bit key.
        </span>
        <button
          onClick={onNext}
          className="px-6 py-2.5 doodle-btn doodle-btn-magenta text-[10px] font-black uppercase border-2 border-black cursor-pointer"
        >
          Next: The Odds
        </button>
      </div>
    </div>
  );
}
