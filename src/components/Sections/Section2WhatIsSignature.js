"use client";

import { FileText, Feather, ShieldAlert, CheckCircle2 } from "lucide-react";

export default function Section2WhatIsSignature({ onNext }) {
  return (
    <div className="w-full h-full flex flex-col justify-between p-4 md:p-8 swiss-grid relative overflow-hidden bg-[#0A0B0D]">
      {/* Slide Header */}
      <div className="flex justify-between items-baseline border-b-2 border-black pb-2 mb-4">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-gray-400">
          <Feather className="w-4 h-4 text-[var(--swiss-red)]" />
          <span>[ CHAPTER 01: THE CORE DEFINITION ]</span>
        </div>
        <span className="swiss-badge text-[10px] border-2 border-black">
          SLIDE 02 / 30
        </span>
      </div>

      {/* Main Grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 items-center my-auto overflow-hidden">
        
        {/* Left Column: Context & Core Definition */}
        <div className="col-span-1 md:col-span-6 flex flex-col justify-center h-full">
          <span className="px-2 py-0.5 text-[10px] font-mono text-white bg-[var(--swiss-red)] border border-black uppercase w-max mb-3">
            THE ORIGINAL CONCEPT
          </span>
          <h2 className="text-3xl md:text-5xl font-space font-black uppercase text-white leading-none mb-4">
            What is a <br />
            <span className="px-3 py-0.5 bg-[var(--swiss-red)] text-white border-2 border-black inline-block transform rotate-1 shadow-[3px_3px_0px_#000] rounded">
              Signature?
            </span>
          </h2>
          <p className="text-gray-400 font-mono text-xs leading-relaxed mb-4">
            For thousands of years, a signature has been the ultimate legal instrument of assent. It is a deliberate physical act representing a person's identity, intent, and binding consent to a document's contents.
          </p>

          {/* The Ink Signature Box */}
          <div className="doodle-card p-4 border-[#FF3B30] bg-[#0E0F12] relative overflow-hidden min-h-[140px] flex flex-col justify-between">
            <div>
              <span className="text-[8px] font-mono text-gray-500 uppercase block mb-1">TRADITIONAL BIOMECHANICAL WET INK</span>
              <div className="py-3 text-center font-space text-3xl italic text-gray-300 border border-dashed border-gray-800 rounded font-normal select-none">
                Hamza Khan
              </div>
            </div>
            
            <div className="mt-3 flex items-center gap-2 text-[9px] font-mono text-gray-400">
              <CheckCircle2 className="w-4 h-4 text-[#34C759] shrink-0" />
              <span>Historically validated by comparing handwriting biomechanics.</span>
            </div>
          </div>
        </div>

        {/* Right Column: Parchment Document Mock & The Analog Vulnerability */}
        <div className="col-span-1 md:col-span-6 h-full flex flex-col justify-center">
          <div className="doodle-card p-4 border-[#FFCC00] bg-[#13141C] flex flex-col justify-between min-h-[270px]">
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-black mb-3">
                <span className="text-[9px] font-mono text-gray-400 uppercase font-black">
                  Analog Contract Blueprint
                </span>
                <span className="text-[8px] font-mono text-[#FFCC00] font-black uppercase">
                  [ PHYSICAL PAGE ]
                </span>
              </div>

              {/* Scroll Document Graphic */}
              <div className="p-3 border-2 border-black bg-[#FAF0D7] text-black rounded-lg min-h-[120px] font-mono text-[9px] leading-relaxed shadow-[3px_3px_0px_#000] relative overflow-hidden">
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-[#FF3B30] border-2 border-black rotate-45 flex items-center justify-center text-white font-black pt-5 text-[8px]">
                  SEAL
                </div>
                <div className="font-bold border-b border-black/20 pb-1 mb-2 text-center text-[10px] uppercase">
                  📄 AGREEMENT OF SERVICES
                </div>
                <p className="text-black/75 italic">
                  "This document certifies that the undersigned party agrees to deliver all software services as specified. Any changes to this document must be written in ink."
                </p>
                <div className="mt-4 pt-2 border-t border-black/20 flex justify-between items-baseline">
                  <span>Authorized Signature:</span>
                  <span className="font-space italic border-b border-black w-24 text-center font-bold text-[#007AFF] text-xs">
                    Hamza Khan
                  </span>
                </div>
              </div>
            </div>

            {/* Crucial Vulnerability Explainer */}
            <div className="mt-4 p-3 bg-black border-2 border-black rounded-lg flex gap-2">
              <ShieldAlert className="w-5 h-5 text-[#FF3B30] shrink-0" />
              <div className="font-mono text-[9px] text-gray-300 leading-snug">
                <strong className="text-[#FF3B30] uppercase block mb-0.5">The Analog Vulnerability:</strong>
                A traditional ink signature is only physically bound to the <span className="text-white font-bold">paper sheet</span>, not the actual text. If a bad actor swaps the pages above the signature line, the signature remains physically unchanged. It has no mathematical awareness of the words it authorizes.
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Footer bar */}
      <div className="flex justify-between items-center border-t-2 border-black pt-2 mt-4">
        <span className="text-[10px] font-mono text-gray-500">
          Concept established. Click next to follow Hamza's story of signature forgery.
        </span>
        <button
          onClick={onNext}
          className="px-6 py-2.5 doodle-btn doodle-btn-magenta text-[10px] font-black uppercase border-2 border-black cursor-pointer animate-pulse"
        >
          Follow Hamza's Story →
        </button>
      </div>
    </div>
  );
}
