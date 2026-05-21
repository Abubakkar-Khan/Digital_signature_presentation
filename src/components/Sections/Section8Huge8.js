"use client";

import { Star } from "lucide-react";
import KeyspaceZoomSimulator from "../KeyspaceZoomSimulator";

export default function Section8Huge8({ onNext, goToSlide }) {
  return (
    <div className="w-full h-full flex flex-col justify-between p-4 md:p-6 swiss-grid relative overflow-hidden">
      {/* Main Grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 items-center my-auto overflow-hidden">
        <div className="col-span-1 md:col-span-6 flex flex-col justify-center">
          <span className="px-2 py-0.5 text-[10px] font-mono text-white bg-[#007AFF] border border-black uppercase w-max mb-3">
            THE MASSIVE KEYS CONCLUSION
          </span>
          <h2 className="text-2xl md:text-5xl font-space font-black uppercase text-white leading-none mb-3">
            The Final <br />
            <span className="px-2 py-0.5 bg-[#007AFF] text-white border-2 border-black inline-block transform rotate-1 shadow-[2px_2px_0px_#000] rounded">
              Odds Verdict
            </span>
          </h2>
          <p className="text-gray-400 font-mono text-xs leading-relaxed mb-3">
            Even after all that time (37x age of the universe), with that giga-galactic botnet computing 2<sup>160</sup> guesses per second... your massive supercomputer would still only have a:
          </p>

          {/* Premium Glowing Cyber Warning Card */}
          <div className="border-[3px] border-[#FF3B30] bg-[#130707] rounded-xl p-4 shadow-[4px_4px_0px_#000] space-y-3 mb-3 relative overflow-hidden">
            {/* Absolute flashing corner alert */}
            <div className="absolute top-0 right-0 px-2 py-0.5 bg-[#FF3B30] text-black font-mono font-black text-[8px] uppercase tracking-wider rounded-bl-lg animate-pulse">
              CRITICAL VERDICT
            </div>

            <div className="space-y-1">
              <span className="text-[9px] font-mono text-[#FF3B30] uppercase font-black tracking-widest block">
                🚨 ULTIMATE PROBABILITY
              </span>
              <div className="font-space font-black text-3xl md:text-4xl text-[#FF3B30] leading-none uppercase">
                1 in 4 Billion Chance
              </div>
              <div className="text-[10px] font-mono font-bold text-[#FFCC00] leading-none">
                (Exactly 1 in 4,294,967,296 to guess the correct hash!)
              </div>
            </div>

            {/* Micro Math Breakdown */}
            <div className="border-t border-red-950/40 pt-2 space-y-1.5 text-[10px] font-mono">
              <div className="text-gray-300">
                <span className="text-[#FFCC00] font-bold">The Math:</span> Testing <strong className="text-white">2<sup>224</sup></strong> hashes over <strong className="text-white">507B years</strong> successfully cracks <strong className="text-[#34C759]">7 of the 8 multiplications</strong> of 4 Billion:
              </div>
              <div className="bg-black/80 px-2 py-1 rounded text-[8px] text-[#34C759] text-center font-bold font-mono">
                4B × 4B × 4B × 4B × 4B × 4B × 4B
              </div>
              <div className="text-gray-400 text-[9px] leading-snug">
                This leaves the <strong className="text-white">8th layer (2<sup>32</sup>)</strong> completely untouched, resulting in a remaining <strong className="text-[#FF3B30] font-bold">1 in 4 Billion chance</strong> to crack the final layer.
              </div>
            </div>
          </div>
        </div>

        {/* Visual Graphic - Interactive Cosmic Zoom */}
        <div className="col-span-1 md:col-span-6 h-full flex flex-col justify-center">
          <KeyspaceZoomSimulator level={8} onLevelChange={(lvl) => goToSlide(lvl + 13)} />
        </div>
      </div>

      {/* Footer bar */}
      <div className="flex justify-between items-center border-t-2 border-black pt-2 mt-2">
        <span className="text-[10px] font-mono text-gray-500">
          Keyspace scale calculations verified. Click next to review ancient histories of cryptography.
        </span>
        <button
          onClick={onNext}
          className="px-6 py-2.5 doodle-btn doodle-btn-magenta text-[10px] font-black uppercase border-2 border-black cursor-pointer"
        >
          Explore History Ciphers
        </button>
      </div>
    </div>
  );
}
