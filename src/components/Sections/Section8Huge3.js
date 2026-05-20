"use client";

import { Star, Globe } from "lucide-react";

export default function Section8Huge3({ onNext }) {
  return (
    <div className="w-full h-full flex flex-col justify-between p-4 md:p-6 swiss-grid relative overflow-hidden">
      {/* Slide Header */}
      <div className="flex justify-between items-baseline border-b-2 border-black pb-2 mb-2">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-gray-400">
          <Star className="w-4 h-4 text-[#FF3B30]" />
          <span>[ THE SCALE OF 2^256: LAYER 3 - THE PLANETARY LEVEL ]</span>
        </div>
        <span className="swiss-badge text-[10px] border-2 border-black">
          SLIDE 12 / 24
        </span>
      </div>

      {/* Main Grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 items-center my-auto overflow-hidden">
        <div className="col-span-1 md:col-span-6 flex flex-col justify-center">
          <span className="px-2 py-0.5 text-[10px] font-mono text-white bg-[#FF3B30] border border-black uppercase w-max mb-3">
            KEYSPACE MULTIPLIER: 4 BILLION * GOOGLE ARRAY (3 OF 8)
          </span>
          <h2 className="text-2xl md:text-5xl font-space font-black uppercase text-white leading-none mb-3">
            The Planetary <br />
            <span className="px-2 py-0.5 bg-[#FF3B30] text-white border-2 border-black inline-block transform -rotate-1 shadow-[2px_2px_0px_#000] rounded">
              Botnet Level
            </span>
          </h2>
          <p className="text-gray-400 font-mono text-xs leading-relaxed mb-4">
            Imagine giving roughly half of every person on Earth (4 billion people out of 8 billion total population) their own custom "Google-level" network cluster array.
          </p>
          <div className="p-3 border-2 border-black bg-[#181922] rounded font-mono text-lg text-white font-black text-center">
            🌎 64 Septillion Hashes / Second
          </div>
        </div>

        {/* Visual Graphic */}
        <div className="col-span-1 md:col-span-6">
          <div className="doodle-card p-4 border-[#FF3B30] text-center min-h-[220px] flex flex-col justify-between items-center">
            <span className="text-[9px] font-mono text-gray-500 uppercase">PLANET EARTH BOTNET</span>

            <div className="w-full p-4 border-2 border-black bg-black rounded-lg text-center flex flex-col items-center justify-center">
              <Globe className="w-12 h-12 text-[#FF3B30] mb-2 animate-pulse" />
              <div className="text-[10px] font-mono text-gray-300 leading-tight">
                🌎 <strong>4,000,000,000 people</strong> running a total planetary botnet network.
              </div>
            </div>

            <span className="text-[9px] font-mono text-gray-400 italic">
              "Every second house on Earth calculating keys..."
            </span>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="flex justify-between items-center border-t-2 border-black pt-2 mt-2">
        <span className="text-[10px] font-mono text-gray-500">
          Layer 3 loaded. Tap next to multiply the keyspace by another 4 billion (Galactic level).
        </span>
        <button
          onClick={onNext}
          className="px-6 py-2.5 doodle-btn doodle-btn-magenta text-[10px] font-black uppercase border-2 border-black cursor-pointer"
        >
          Next Layer (Galactic Level)
        </button>
      </div>
    </div>
  );
}
