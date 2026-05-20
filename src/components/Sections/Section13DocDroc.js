"use client";

import { Terminal, ShieldCheck } from "lucide-react";

export default function Section13DocDroc({ onNext }) {
  return (
    <div className="w-full h-full flex flex-col justify-between p-4 md:p-8 swiss-grid relative overflow-hidden">
      {/* Slide Header */}
      <div className="flex justify-between items-baseline border-b-2 border-black pb-2 mb-2">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-gray-400">
          <Terminal className="w-4 h-4 text-[#007AFF]" />
          <span>[ CHAPTER 12: DOCDROC SYSTEM ARCHITECTURE BLUEPRINT ]</span>
        </div>
        <span className="swiss-badge text-[10px] border-2 border-black">
          SLIDE 26 / 27
        </span>
      </div>

      {/* Main Grid - Strict Viewport Scale */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 items-center my-auto overflow-hidden">
        {/* Left Side: Product Specs & Nerd commentary */}
        <div className="col-span-1 md:col-span-5 flex flex-col justify-center overflow-hidden">
          <h2 className="text-2xl md:text-4xl font-space font-black uppercase text-white leading-none mb-3">
            Introducing <br />
            <span className="px-2 bg-[#007AFF] text-white border-[3px] border-black inline-block transform rotate-1 shadow-[3px_3px_0px_#000] rounded">
              DocDroc
            </span>
          </h2>
          
          <p className="text-gray-400 font-mono text-[10px] leading-relaxed mb-4">
            DocDroc is a standalone secure utility designed specifically for signing Microsoft Word documents. Instead of hashing random text, it parses the document's structure to create cryptographic seals.
          </p>

          <div className="space-y-2 font-mono text-[9px] text-gray-300">
            <div className="flex items-center gap-2">
              <span className="text-[#007AFF] font-bold">➔</span>
              <span><strong>XML Parsing:</strong> Unzips .docx to isolate body XML components.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#007AFF] font-bold">➔</span>
              <span><strong>Key Enclaves:</strong> Utilizes system keychains to avoid leaks.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#007AFF] font-bold">➔</span>
              <span><strong>Verification Audit:</strong> Renders visual alerts if files are tampered.</span>
            </div>
          </div>
        </div>

        {/* Right Side: Architecture UI Schematic Diagram */}
        <div className="col-span-1 md:col-span-7">
          <div className="doodle-card p-4 border-[#007AFF]">
            <div className="flex items-center justify-between pb-2 border-b border-black mb-3">
              <span className="text-[9px] font-mono text-gray-400 uppercase">
                DocDroc flow schematic diagram
              </span>
              <span className="text-[9px] font-mono text-[#007AFF] font-bold">
                [ BLUEPRINT_MODE ]
              </span>
            </div>

            {/* ASCII Schematic block */}
            <div className="p-3 border-2 border-black bg-[#0E0F12] rounded-lg min-h-[160px] flex flex-col justify-between overflow-x-auto">
              <pre className="text-[9px] text-[#FFCC00] font-mono leading-tight whitespace-pre bg-transparent border-0 p-0 m-0 w-full">
                {` +------------------+     +--------------------+
 |  Word Doc (.docx) | ➔   | XML Parser Engine  |
 +------------------+     +--------------------+
                                     ▼
 +------------------+     +--------------------+
 | Digital Signature| ✏️   | SHA-256 + RSA Keys |
 +------------------+     +--------------------+
         │                           ▲
         └─────── Verification ──────┘`}
              </pre>

              <div className="p-2 bg-[#007AFF]/15 border border-[#007AFF] text-[#007AFF] text-[9px] rounded mt-2">
                ℹ️ <strong>System Note:</strong> Slide deck demo. The active DocDroc application runs in a separate secure sandbox partition.
              </div>
            </div>

            {/* System Info readouts */}
            <div className="mt-3 flex items-center gap-2">
              <div className="p-1 border border-black bg-black text-[9px] font-mono text-[#34C759] flex items-center gap-1 rounded">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>INTEGRITY CHECK PASS</span>
              </div>
              <span className="text-[8px] font-mono text-gray-500 italic">
                *Standalone utility logs verified.*
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="flex justify-between items-center border-t-2 border-black pt-2 mt-2">
        <span className="text-[10px] font-mono text-gray-500">
          Architecture overview logged. Tap next to run the live code verification simulation.
        </span>
        <button
          onClick={onNext}
          className="px-6 py-2.5 doodle-btn doodle-btn-magenta text-[10px] font-black uppercase border-2 border-black cursor-pointer"
        >
          Run Code Simulator
        </button>
      </div>
    </div>
  );
}
