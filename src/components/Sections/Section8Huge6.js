"use client";

import { Star } from "lucide-react";
import KeyspaceZoomSimulator from "../KeyspaceZoomSimulator";

export default function Section8Huge6({ onNext, goToSlide }) {
  return (
    <div className="w-full h-full flex flex-col justify-between p-4 md:p-6 swiss-grid relative overflow-hidden">
      {/* Slide Header */}
      <div className="flex justify-between items-baseline border-b-2 border-black pb-2 mb-2">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-gray-400">
          <Star className="w-4 h-4 text-[#FF3B30]" />
          <span>[ THE SCALE OF 2^256: LAYER 6 - TIME MULTIPLIER 1 ]</span>
        </div>
        <span className="swiss-badge text-[10px] border-2 border-black">
          SLIDE 19 / 30
        </span>
      </div>

      {/* Main Grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 items-center my-auto overflow-hidden">
        <div className="col-span-1 md:col-span-6 flex flex-col justify-center">
          <span className="px-2 py-0.5 text-[10px] font-mono text-white bg-[#FF3B30] border border-black uppercase w-max mb-3">
            KEYSPACE MULTIPLIER: LAYER 6
          </span>
          <h2 className="text-2xl md:text-5xl font-space font-black uppercase text-white leading-none mb-3">
            The Century <br />
            <span className="px-2 py-0.5 bg-[#FF3B30] text-white border-2 border-black inline-block transform -rotate-1 shadow-[2px_2px_0px_#000] rounded">
              Run Time
            </span>
          </h2>
          <p className="text-gray-400 font-mono text-xs leading-relaxed mb-4">
            Run this massive Giga Galactic supercomputer network non-stop for a duration of 4 billion seconds. How long is that in human years?
          </p>

          {/* Mathematical Multiplier Sequence */}
          <div className="p-3.5 border-2 border-black bg-black rounded-lg mb-4">
            <span className="text-[8px] font-mono text-gray-500 uppercase block mb-1">
              MULTIPLIER SEQUENCE (6x)
            </span>
            <div className="font-mono text-xs md:text-[11px] text-[#FF3B30] font-black break-all leading-tight">
              4,000,000,000 × 4,000,000,000 × 4,000,000,000 × 4,000,000,000 × 4,000,000,000 × 4,000,000,000
            </div>
          </div>
        </div>

        {/* Visual Graphic - Interactive Cosmic Zoom */}
        <div className="col-span-1 md:col-span-6 h-full flex flex-col justify-center">
          <KeyspaceZoomSimulator level={6} onLevelChange={(lvl) => goToSlide(lvl + 13)} />
        </div>
      </div>

      {/* Footer bar */}
      <div className="flex justify-between items-center border-t-2 border-black pt-2 mt-2">
        <span className="text-[10px] font-mono text-gray-500">
          Layer 6 loaded. Tap next to multiply the keyspace by another 4 billion (Time Multiplier 2).
        </span>
        <button
          onClick={onNext}
          className="px-6 py-2.5 doodle-btn doodle-btn-magenta text-[10px] font-black uppercase border-2 border-black cursor-pointer"
        >
          Next Layer (Time Multiplier 2)
        </button>
      </div>
    </div>
  );
}
