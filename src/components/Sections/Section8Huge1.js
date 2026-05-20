"use client";

import { Star } from "lucide-react";
import KeyspaceZoomSimulator from "../KeyspaceZoomSimulator";

export default function Section8Huge1({ onNext, goToSlide }) {
  return (
    <div className="w-full h-full flex flex-col justify-between p-4 md:p-6 swiss-grid relative overflow-hidden">
      {/* Slide Header */}
      <div className="flex justify-between items-baseline border-b-2 border-black pb-2 mb-2">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-gray-400">
          <Star className="w-4 h-4 text-[#FFCC00]" />
          <span>[ THE SCALE OF 2^256: LAYER 1 - THE GPU LEVEL ]</span>
        </div>
        <span className="swiss-badge text-[10px] border-2 border-black">
          SLIDE 14 / 28
        </span>
      </div>

      {/* Main Grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 items-center my-auto overflow-hidden">
        <div className="col-span-1 md:col-span-6 flex flex-col justify-center">
          <span className="px-2 py-0.5 text-[10px] font-mono text-black bg-[#FFCC00] border border-black uppercase w-max mb-3">
            KEYSPACE MULTIPLIER: LAYER 1
          </span>
          <h2 className="text-2xl md:text-5xl font-space font-black uppercase text-white leading-none mb-3">
            The GPU <br />
            <span className="px-2 py-0.5 bg-[#FFCC00] text-black border-2 border-black inline-block transform -rotate-1 shadow-[2px_2px_0px_#000] rounded">
              Rig Level
            </span>
          </h2>
          <p className="text-gray-400 font-mono text-xs leading-relaxed mb-4">
            Imagine one high-power custom computer packed with modern graphics cards, specifically configured to guess document key hashes.
          </p>

          {/* Mathematical Multiplier Sequence */}
          <div className="p-3.5 border-2 border-black bg-black rounded-lg mb-4">
            <span className="text-[8px] font-mono text-gray-500 uppercase block mb-1">
              MULTIPLIER SEQUENCE (1x)
            </span>
            <div className="font-mono text-xs md:text-sm text-[#FFCC00] font-black break-all leading-tight">
              4,000,000,000
            </div>
          </div>
        </div>

        {/* Visual Graphic - Interactive Cosmic Zoom */}
        <div className="col-span-1 md:col-span-6 h-full flex flex-col justify-center">
          <KeyspaceZoomSimulator level={1} onLevelChange={(lvl) => goToSlide(lvl + 13)} />
        </div>
      </div>

      {/* Footer bar */}
      <div className="flex justify-between items-center border-t-2 border-black pt-2 mt-2">
        <span className="text-[10px] font-mono text-gray-500">
          Layer 1 loaded. Tap next to multiply the keyspace by another 4 billion (Google level).
        </span>
        <button
          onClick={onNext}
          className="px-6 py-2.5 doodle-btn doodle-btn-magenta text-[10px] font-black uppercase border-2 border-black cursor-pointer"
        >
          Next Layer (Google Level)
        </button>
      </div>
    </div>
  );
}
