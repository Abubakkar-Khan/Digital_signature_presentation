"use client";

import { Shield } from "lucide-react";

export default function Section5Pillars({ onNext }) {
  const pillars = [
    {
      title: "1. Authentication",
      desc: "Proves WHO signed the file. Only the holder of the private key could have generated the signature. No impersonators.",
      badge: "IDENTITY VERIFIED",
      color: "var(--swiss-red)",
      ascii: `   [ PRIVATE KEY ] ➔ ✍️ Signature
   "Only Hamza has this key."`
    },
    {
      title: "2. Integrity",
      desc: "Proves the file has NOT been edited. If even a single byte changes, the hash verification fails instantly.",
      badge: "ZERO TAMPERING",
      color: "var(--swiss-yellow)",
      ascii: `   Doc ➔ [ SHA-256 ] ➔ Match OK?
   "Not a single bit altered."`
    },
    {
      title: "3. Non-Repudiation",
      desc: "Hamza cannot deny it. Once signed with his private key, Hamza cannot say 'it wasn't me' in court.",
      badge: "LEGAL BINDING",
      color: "var(--swiss-green)",
      ascii: `   [ Signature Check ] ➔ Gavel ⚖️
   "No backtracking in court."`
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 md:p-6 swiss-grid relative overflow-hidden">
      {/* Slide Header */}
      <div className="flex justify-between items-baseline border-b-2 border-black pb-2 mb-2">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-gray-400">
          <Shield className="w-4 h-4 text-[var(--swiss-red)]" />
          <span>[ CHAPTER 08: DIGITAL SIGNATURE EXISTENCE ]</span>
        </div>
        <span className="swiss-badge text-[10px] border-2 border-black">
          SLIDE 09 / 30
        </span>
      </div>

      {/* Main Content Grid */}
      <div className="flex-1 flex flex-col justify-center my-auto overflow-hidden">
        <div className="text-center mb-4">
          <h2 className="text-2xl md:text-4xl font-space font-black uppercase text-white leading-none">
            Digital Signature{" "}
            <span className="px-2 py-0.5 bg-[var(--swiss-red)] text-white border-2 border-black inline-block transform rotate-1 shadow-[2px_2px_0px_#000] rounded">
              Existence
            </span>
          </h2>
          <p className="text-[10px] font-mono text-gray-400 mt-1.5">
            Traditional signature files can be modified by anyone. Cybersecurity signatures exist based on three mathematically absolute foundations.
          </p>
        </div>

        {/* 3 Pillars Grid - Big, visible, flat blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto w-full">
          {pillars.map((pil, idx) => (
            <div
              key={idx}
              className="doodle-card p-4 flex flex-col justify-between min-h-[220px]"
              style={{ boxShadow: `4px 4px 0px 0px ${pil.color}` }}
            >
              <div>
                <div className="flex items-center justify-between pb-1.5 border-b border-black mb-2">
                  <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">
                    {pil.badge}
                  </span>
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: pil.color }} />
                </div>

                <h3 className="text-sm font-space font-black uppercase text-white mb-1.5">
                  {pil.title}
                </h3>
                <p className="text-[10px] font-mono text-gray-400 leading-relaxed mb-3">
                  {pil.desc}
                </p>
              </div>

              {/* Graphic box */}
              <div className="p-2 border border-black bg-black/60 rounded text-center shrink-0">
                <pre className="text-[8px] text-[#FFCC00] font-mono leading-tight whitespace-pre bg-transparent border-0 p-0 m-0">
                  {pil.ascii}
                </pre>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer bar */}
      <div className="flex justify-between items-center border-t-2 border-black pt-2 mt-2">
        <span className="text-[10px] font-mono text-gray-500">
          Cybersecurity pillars verified. Click next to enter the cryptographic hashing section.
        </span>
        <button
          onClick={onNext}
          className="px-6 py-2.5 doodle-btn doodle-btn-magenta text-[10px] font-black uppercase border-2 border-black cursor-pointer"
        >
          See Hash Intro
        </button>
      </div>
    </div>
  );
}
