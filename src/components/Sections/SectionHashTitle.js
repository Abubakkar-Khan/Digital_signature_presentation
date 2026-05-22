"use client";

import { Hash } from "lucide-react";

export default function SectionHashTitle({ onNext }) {
  return (
    <div className="w-full h-full flex flex-col justify-between p-4 md:p-6 swiss-grid relative overflow-hidden bg-black">
      {/* Main Poster Block */}
      <div className="flex-1 flex flex-col justify-center items-center text-center my-auto">
        <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-4">
          Part II: The Cryptographic Hash (Digital Fingerprints)
        </span>

        <h1 className="text-5xl md:text-8xl font-space font-black uppercase text-white leading-none tracking-tighter mb-4">
          THE{" "}
          <span className="px-4 py-1 bg-[var(--swiss-red)] text-white border-3 border-black inline-block transform -rotate-1 shadow-[4px_4px_0px_#000] rounded">
            HASH
          </span>
        </h1>

        <p className="text-gray-400 font-mono text-xs max-w-md leading-relaxed mt-2">
          Understanding the unique mathematical fingerprint that secures every document. If a single letter changes, the entire fingerprint flips, sounding the alarm!
        </p>
      </div>

      {/* Footer bar */}
      <div className="flex justify-between items-center border-t-2 border-black pt-2 mt-2">
        <span className="text-[10px] font-mono text-gray-500">
          Ready to verify. Press next to test the live SHA-256 Avalanche Matrix.
        </span>
        <button
          onClick={onNext}
          className="px-6 py-2.5 doodle-btn doodle-btn-red text-[10px] font-black uppercase border-2 border-black cursor-pointer"
        >
          Next: Hashing Matrix
        </button>
      </div>
    </div>
  );
}
