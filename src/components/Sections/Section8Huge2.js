"use client";

import { Star, Server } from "lucide-react";

export default function Section8Huge2({ onNext }) {
  return (
    <div className="w-full h-full flex flex-col justify-between p-4 md:p-6 swiss-grid relative overflow-hidden">
      {/* Slide Header */}
      <div className="flex justify-between items-baseline border-b-2 border-black pb-2 mb-2">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-gray-400">
          <Star className="w-4 h-4 text-[#007AFF]" />
          <span>[ THE SCALE OF 2^256: LAYER 2 - THE GOOGLE LEVEL ]</span>
        </div>
        <span className="swiss-badge text-[10px] border-2 border-black">
          SLIDE 14 / 27
        </span>
      </div>

      {/* Main Grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 items-center my-auto overflow-hidden">
        <div className="col-span-1 md:col-span-6 flex flex-col justify-center">
          <span className="px-2 py-0.5 text-[10px] font-mono text-white bg-[#007AFF] border border-black uppercase w-max mb-3">
            KEYSPACE MULTIPLIER: LAYER 2
          </span>
          <h2 className="text-2xl md:text-5xl font-space font-black uppercase text-white leading-none mb-3">
            The Google <br />
            <span className="px-2 py-0.5 bg-[#007AFF] text-white border-2 border-black inline-block transform rotate-1 shadow-[2px_2px_0px_#000] rounded">
              Cluster Level
            </span>
          </h2>
          <p className="text-gray-400 font-mono text-xs leading-relaxed mb-4">
            Now multiply that baseline computer by another 4 billion. This represents a colossal global cluster array consisting of 4 billion high-performance GPU rigs.
          </p>

          {/* Mathematical Multiplier Sequence */}
          <div className="p-3.5 border-2 border-black bg-black rounded-lg mb-4">
            <span className="text-[8px] font-mono text-gray-500 uppercase block mb-1">
              MULTIPLIER SEQUENCE (2x)
            </span>
            <div className="font-mono text-xs md:text-sm text-[#007AFF] font-black break-all leading-tight">
              4,000,000,000 × 4,000,000,000
            </div>
          </div>
        </div>

        {/* Visual Graphic */}
        <div className="col-span-1 md:col-span-6">
          <div className="doodle-card p-4 border-[#007AFF] text-center min-h-[220px] flex flex-col justify-between items-center">
            <span className="text-[9px] font-mono text-gray-500 uppercase">SERVER ARRAY NET</span>

            <div className="w-full p-4 border-2 border-black bg-black rounded-lg text-center flex flex-col items-center justify-center">
              <Server className="w-12 h-12 text-[#007AFF] mb-2" />
              <div className="text-[10px] font-mono text-gray-300 leading-tight">
                🗄️ <strong>4,000,000,000 GPU rigs</strong> connected in a massive grid.
              </div>
            </div>

            <span className="text-[9px] font-mono text-gray-400 italic">
              "Running a global supercomputer network..."
            </span>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="flex justify-between items-center border-t-2 border-black pt-2 mt-2">
        <span className="text-[10px] font-mono text-gray-500">
          Layer 2 loaded. Tap next to multiply the keyspace by another 4 billion (Planetary level).
        </span>
        <button
          onClick={onNext}
          className="px-6 py-2.5 doodle-btn doodle-btn-magenta text-[10px] font-black uppercase border-2 border-black cursor-pointer"
        >
          Next Layer (Planetary Level)
        </button>
      </div>
    </div>
  );
}
