"use client";

import { Key } from "lucide-react";

export default function SectionEncryptionTitle({ onNext }) {
  return (
    <div className="w-full h-full flex flex-col justify-between p-4 md:p-6 swiss-grid relative overflow-hidden bg-black">
      {/* Slide Header */}
      <div className="flex justify-between items-baseline border-b-2 border-black pb-2 mb-2">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-gray-400">
          <Key className="w-4 h-4 text-[#007AFF]" />
          <span>[ CHAPTER 19: ENCRYPTION INTRODUCTION ]</span>
        </div>
        <span className="swiss-badge text-[10px] border-2 border-black">
          SLIDE 21 / 27
        </span>
      </div>

      {/* Main Poster Block */}
      <div className="flex-1 flex flex-col justify-center items-center text-center my-auto">
        <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-4">
          Part III: The Power of Ciphers
        </span>

        <h1 className="text-5xl md:text-8xl font-space font-black uppercase text-white leading-none tracking-tighter mb-4">
          THE{" "}
          <span className="px-4 py-1 bg-[#007AFF] text-white border-3 border-black inline-block transform rotate-1 shadow-[4px_4px_0px_#000] rounded">
            ENCRYPTION
          </span>
        </h1>

        <p className="text-gray-400 font-mono text-xs max-w-md leading-relaxed mt-2">
          From ancient shaved-head slave ciphers to modern mathematical keypairs that lock and unlock secrets.
        </p>
      </div>

      {/* Footer bar */}
      <div className="flex justify-between items-center border-t-2 border-black pt-2 mt-2">
        <span className="text-[10px] font-mono text-gray-500">
          Ready to explore. Click next to define encryption.
        </span>
        <button
          onClick={onNext}
          className="px-6 py-2.5 doodle-btn doodle-btn-blue text-[10px] font-black uppercase border-2 border-black cursor-pointer"
        >
          Next: Define Encryption →
        </button>
      </div>
    </div>
  );
}
