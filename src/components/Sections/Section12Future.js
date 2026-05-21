"use client";

import { Award } from "lucide-react";

export default function Section12Future({ onNext }) {
  const cards = [
    {
      title: "Blockchain Signatures",
      tech: "SMART CONTRACTS",
      desc: "Signatures recorded in decentralized Ledgers. Multi-sig approvals prevent any single employee from stealing the corporate treasury.",
      meme: "If Hamza and Sajid don't both sign, the fund stays locked. No trust needed.",
      color: "var(--swiss-red)",
      ascii: `   [Hamza ✍️] + [Sajid ✍️]
           ▼
     [RELEASE FUNDS]`
    },
    {
      title: "Decentralized ID (DID)",
      tech: "SOVEREIGN DATA",
      desc: "Verifiable credentials stored locally on your device. You sign authentication payloads directly without Google or Facebook login panels tracking you.",
      meme: "Zero-knowledge proofs. Prove you are over 18 without showing your name.",
      color: "var(--swiss-yellow)",
      ascii: `   [DID Wallet] ➔ Proof ➔ App
   "No password database
    to hack! 🔓"`
    },
    {
      title: "Lattice Cryptography",
      tech: "QUANTUM PROOF",
      desc: "Standard RSA algorithms can be broken by quantum computers running Shor's algorithm. Lattice signatures rely on multidimensional geometry hard to crack even for qubits.",
      meme: "Quantum computers try to solve lattice math: *Error, too complex*",
      color: "var(--swiss-green)",
      ascii: `    Quantum Qubits ➔ 🕸️ Lattice
    "Nice try, physicists.
     Math wins again."`
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-12 swiss-grid relative">
      {/* Slide Header */}
      <div className="flex justify-between items-baseline border-b-[3px] border-black pb-4">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-gray-400">
          <Award className="w-4 h-4 text-[#FFCC00]" />
          <span>[ CHAPTER 11: FUTURE HORIZONS OF CRYPTOGRAPHY ]</span>
        </div>
        <span className="swiss-badge text-[10px] border-2 border-black">
          SLIDE 15 / 31
        </span>
      </div>

      {/* Main Content Grid */}
      <div className="flex-1 flex flex-col justify-center my-6 max-w-5xl mx-auto w-full">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-5xl font-space font-black uppercase text-white leading-none mb-2">
            The Next{" "}
            <span className="px-3 bg-[#FFCC00] text-black border-[3px] border-black inline-block transform -rotate-1 shadow-[3px_3px_0px_#000] rounded">
              Crypto Frontiers
            </span>
          </h2>
          <p className="text-xs font-mono text-gray-400 max-w-md mx-auto">
            Standard digital signatures are only the beginning. Modern developers are building the next generation of decentralized trust.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="doodle-card p-5 flex flex-col justify-between hover:-translate-y-1 transition-all duration-100 min-h-[300px]"
              style={{ boxShadow: `5px 5px 0px 0px ${card.color}` }}
            >
              <div>
                {/* Tech tag */}
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-black">
                  <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">
                    {card.tech}
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: card.color }} />
                </div>

                <h3 className="text-base font-space font-black uppercase text-gray-100 mb-2">
                  {card.title}
                </h3>
                <p className="text-[11px] font-mono text-gray-400 leading-relaxed mb-4">
                  {card.desc}
                </p>
              </div>

              {/* ASCII Card Panel */}
              <div className="p-3 rounded bg-black/60 border-2 border-black flex flex-col items-center justify-between text-center shrink-0">
                <pre className="text-[9px] text-[#FFCC00] font-mono leading-tight whitespace-pre bg-transparent border-0 p-0 m-0 mb-2">
                  {card.ascii}
                </pre>
                <span className="text-[8px] font-mono text-gray-500 italic">
                  💡 "{card.meme}"
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer bar */}
      <div className="flex justify-between items-center border-t-[3px] border-black pt-4">
        <span className="text-xs font-mono text-gray-500">
          Future tech cards loaded. Tap next to launch the interactive signature walkthrough.
        </span>
        <button
          onClick={onNext}
          className="px-6 py-3 doodle-btn doodle-btn-magenta text-xs font-black uppercase tracking-wider text-white border-2 border-black cursor-pointer"
        >
          See Signing Demo
        </button>
      </div>
    </div>
  );
}
