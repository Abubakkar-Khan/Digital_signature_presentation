"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Terminal } from "lucide-react";

export default function Section1Hero({ onNext }) {
  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-12 swiss-grid relative">
      {/* Slide Index Tag / Swiss Top Bar */}
      <div className="flex justify-between items-baseline border-b-[3px] border-black pb-4">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-gray-400">
          <Terminal className="w-4 h-4 text-[#FF3B30]" />
          <span>[ SWISS_PROT: DIGITAL_SIGNATURES_DECK ]</span>
        </div>
        <span className="swiss-badge text-[10px] border-2 border-black">
          SLIDE 01 / 27
        </span>
      </div>

      {/* Hero Content - Swiss Asymmetry */}
      <div className="flex-1 flex flex-col md:flex-row gap-12 justify-center items-center my-6">
        <div className="max-w-2xl text-left flex flex-col justify-center">
          {/* Swiss minimal badge */}
          <div className="mb-4">
            <span className="px-2 py-0.5 text-xs font-mono font-black text-black bg-[#FFCC00] border-2 border-black uppercase tracking-wider">
              No boring text bulletpoints allowed ✏️
            </span>
          </div>

          {/* Large Swiss Header */}
          <h1 className="text-3xl md:text-5xl font-space font-black tracking-tight leading-[1.0] text-white uppercase mb-6">
            Implementing a <br />
            <span className="px-3 bg-[#FF3B30] text-white border-[3px] border-black inline-block transform -rotate-1 shadow-[4px_4px_0px_#000] rounded">
              Digital Signature
            </span> <br />
            on Word doc
          </h1>

          <p className="text-gray-400 font-mono text-xs leading-relaxed mb-8 max-w-lg border-l-4 border-[#007AFF] pl-4 py-1.5">
            How does math solve the classic developer dilemma: "Trust me bro, this file is safe"? Let's understand cryptographic hashing, asymmetric key signing, and document verification using sketches and memes.
          </p>

          {/* Doodly Dialog Bubble */}
          <div className="p-4 rounded-xl border-3 border-black bg-[#181922] max-w-md shadow-[4px_4px_0px_#007AFF] border-radius-custom relative">
            <div className="absolute -top-3 left-4 px-2 bg-[#007AFF] text-white text-[9px] font-mono border-2 border-black uppercase">
              Developer Joke
            </div>
            <p className="text-xs text-gray-300 font-mono italic mt-1">
              "We don't need digital signatures. I just pasted my scribble.png in Microsoft Word. It's secure because my cursor is glowing."
            </p>
          </div>
        </div>

        {/* Large Flat Visual Image Card */}
        <div className="w-full md:w-[320px] p-4 doodle-card-blue text-center flex flex-col items-center justify-between shrink-0 h-[280px]">
          <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block mb-2">
            [ VERIFICATION CORE ]
          </span>
          <div className="relative w-full h-[180px] rounded-lg border-2 border-black overflow-hidden bg-black flex items-center justify-center">
            <img
              src="/gavel_court.png"
              alt="Gavel Court"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center gap-2 mt-2">
            <Shield className="w-5 h-5 text-[#007AFF]" />
            <span className="text-[9px] font-mono text-gray-300">ESTABLISHED MATHEMATICAL SECURITY</span>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="flex justify-between items-center border-t-[3px] border-black pt-4">
        <span className="text-xs font-mono text-gray-500">
          Press "Right Arrow" key or tap next to advance
        </span>
        <button
          onClick={onNext}
          className="px-6 py-3 doodle-btn doodle-btn-green text-xs font-black uppercase tracking-wider text-black border-2 border-black cursor-pointer"
        >
          Begin Presentation
        </button>
      </div>
    </div>
  );
}
