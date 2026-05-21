"use client";

import { Hash, ShieldCheck, Fingerprint, RefreshCw, Zap } from "lucide-react";

const properties = [
  {
    icon: Fingerprint,
    title: "Deterministic",
    color: "#FF3B30",
    desc: "Same input ALWAYS produces the exact same hash. 'Hello' → same 64-char string every single time, on every machine, forever.",
    example: `"Hello" → e49b1be...`,
  },
  {
    icon: Zap,
    title: "One-Way / Irreversible",
    color: "#FFCC00",
    desc: "You can hash data in milliseconds, but you cannot reverse a hash back to the original. The function is a one-way street.",
    example: `a1b2c3... → ??? (impossible)`,
  },
  {
    icon: ShieldCheck,
    title: "Avalanche Effect",
    color: "#34C759",
    desc: "Change a SINGLE character in the input and the ENTIRE output hash flips completely. No two similar inputs share a similar hash.",
    example: `"Hello" vs "hello" → 100% different`,
  },
  {
    icon: RefreshCw,
    title: "Collision Resistant",
    color: "#007AFF",
    desc: "Impossible to find two different inputs that produce the same hash output. SHA-256 has 2^256 possible outputs — essentially infinite.",
    example: `A ≠ B  →  Hash(A) ≠ Hash(B)`,
  },
];

export default function SectionHashDefinition({ onNext }) {
  return (
    <div className="w-full h-full flex flex-col justify-between p-4 md:p-8 swiss-grid relative overflow-hidden">
      {/* Slide Header */}
      <div className="flex justify-between items-baseline border-b-2 border-black pb-2 mb-4">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-gray-400">
          <Hash className="w-4 h-4 text-[#34C759]" />
          <span>[ CHAPTER 10: WHAT IS A CRYPTOGRAPHIC HASH? ]</span>
        </div>
        <span className="swiss-badge text-[10px] border-2 border-black">
          SLIDE 12 / 30
        </span>
      </div>

      {/* Main Content */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-6 items-start overflow-hidden">

        {/* Left: Definition Block */}
        <div className="col-span-1 md:col-span-4 flex flex-col justify-center h-full">
          <span className="px-2 py-0.5 text-[10px] font-mono text-black bg-[#34C759] border border-black uppercase w-max mb-3">
            CORE DEFINITION
          </span>
          <h2 className="text-3xl md:text-4xl font-space font-black uppercase text-white leading-none mb-4">
            What is a{" "}
            <span className="px-2 py-0.5 bg-[#34C759] text-black border-2 border-black inline-block transform -rotate-1 shadow-[3px_3px_0px_#000] rounded">
              Hash?
            </span>
          </h2>
          <p className="text-gray-300 font-mono text-xs leading-relaxed mb-4">
            A <strong className="text-white">hash function</strong> takes any input — a word, a sentence, an entire document — and converts it into a <strong className="text-[#34C759]">fixed-length string</strong> called a <strong className="text-white">digest</strong>. The output size is always exactly the same regardless of input size.
          </p>

          {/* Visual example box */}
          <div className="p-3 border-2 border-black bg-black rounded-lg font-mono text-xs leading-snug space-y-2">
            <div className="text-gray-400">
              <span className="text-[#FFCC00]">INPUT:</span>{" "}
              <span className="text-white">"Pay Hamza $100"</span>
            </div>
            <div className="text-gray-600 text-center">↓ SHA-256 ↓</div>
            <div className="text-[#34C759] break-all text-[9px]">
              3a7bd3e2 360a3d29 eea436fd fb07daed 7b5f5b05 e7c47d51 14c26c2f 58a5a2e7
            </div>
            <div className="border-t border-gray-800 pt-1 text-[8px] text-gray-500">
              Always 256 bits · Always 64 hex chars
            </div>
          </div>
        </div>

        {/* Right: 4 Property Cards */}
        <div className="col-span-1 md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {properties.map((prop, i) => {
            const Icon = prop.icon;
            return (
              <div
                key={i}
                className="doodle-card p-4 flex flex-col gap-2"
                style={{ boxShadow: `4px 4px 0px 0px ${prop.color}` }}
              >
                <div className="flex items-center justify-between border-b border-black pb-2">
                  <span
                    className="text-[9px] font-mono font-black uppercase tracking-widest"
                    style={{ color: prop.color }}
                  >
                    PROPERTY {String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon className="w-4 h-4" style={{ color: prop.color }} />
                </div>

                <h3 className="text-sm font-space font-black uppercase text-white leading-none">
                  {prop.title}
                </h3>
                <p className="text-[10px] font-mono text-gray-400 leading-relaxed flex-1">
                  {prop.desc}
                </p>

                <div
                  className="px-2 py-1 rounded border border-black bg-black text-[9px] font-mono italic"
                  style={{ color: prop.color }}
                >
                  {prop.example}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center border-t-2 border-black pt-2 mt-4">
        <span className="text-[10px] font-mono text-gray-500">
          Hash properties locked in. Tap next to see the Avalanche Effect live in the SHA-256 matrix.
        </span>
        <button
          onClick={onNext}
          className="px-6 py-2.5 doodle-btn doodle-btn-green text-[10px] font-black uppercase border-2 border-black cursor-pointer"
        >
          See Avalanche Effect →
        </button>
      </div>
    </div>
  );
}
