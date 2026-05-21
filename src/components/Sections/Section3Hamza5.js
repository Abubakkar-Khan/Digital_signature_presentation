"use client";

import { Users, AlertTriangle } from "lucide-react";

export default function Section3Hamza5({ onNext }) {
  return (
    <div className="w-full h-full flex flex-col justify-between p-4 md:p-6 swiss-grid relative overflow-hidden">
      {/* Slide Header */}
      <div className="flex justify-between items-baseline border-b-2 border-black pb-2 mb-2">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-gray-400">
          <Users className="w-4 h-4 text-[#FF3B30]" />
          <span>[ THE STORY OF HAMZA: PART 5 - THE COURTROOM VERDICT ]</span>
        </div>
        <span className="swiss-badge text-[10px] border-2 border-black">
          SLIDE 07 / 30
        </span>
      </div>

      {/* Main Content */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 items-center my-auto overflow-hidden">
        <div className="col-span-1 md:col-span-6 flex flex-col justify-center">
          <span className="px-2 py-0.5 text-[10px] font-mono text-white bg-[#FF3B30] border border-black uppercase w-max mb-3">
            HAMZA DEFAULTS SERIES: FINAL CHAPTER
          </span>
          <h2 className="text-2xl md:text-5xl font-space font-black uppercase text-white leading-none mb-3">
            Sajid Wins <br />
            <span className="px-2 py-0.5 bg-[#FF3B30] text-white border-2 border-black inline-block transform rotate-1 shadow-[2px_2px_0px_#000] rounded">
              The Case
            </span>
          </h2>
          <p className="text-gray-400 font-mono text-xs leading-relaxed mb-4">
            The Qazi reviews all contract documentation and matching signatures. The court declares a final judgment: <strong>SAJID WINS!</strong> Hamza is held fully liable for breach of contract and ordered to pay back the deposit and damages.
          </p>
          <div className="p-3 border-2 border-black bg-[#181922] rounded text-[10px] font-mono text-gray-300">
            💡 <strong>The Cybersecurity Lesson:</strong> Wet ink signatures are legally binding, but easily forgeable or repudiable on digital documents. We need mathematical digital signatures to ensure absolute trust.
          </div>
        </div>

        {/* Visual Graphic - Gavel Court Image */}
        <div className="col-span-1 md:col-span-6 flex justify-center">
          <div className="doodle-card p-4 border-[#FF3B30] text-center w-full max-w-[360px] flex flex-col justify-between items-center">
            <span className="text-[9px] font-mono text-gray-500 uppercase mb-2">COURTROOM VICTORY</span>

            <div className="relative w-full aspect-square rounded-lg border-2 border-black overflow-hidden bg-black flex items-center justify-center mb-2 shadow-[2px_2px_0px_#000]">
              <img
                src="/sajids_wins_the_case.png"
                alt="Sajid wins the case and celebrates courtroom victory"
                className="w-full h-full object-cover animate-fade-in"
              />
            </div>

            <span className="text-[9px] font-mono text-[#34C759] font-black uppercase">
              ⚖️ VERDICT: SAJID WINS THE LAWSUIT
            </span>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="flex justify-between items-center border-t-2 border-black pt-2 mt-2">
        <span className="text-[10px] font-mono text-gray-500">
          Sajid has won the case. Tap next to analyze traditional signature vulnerability failures.
        </span>
        <button
          onClick={onNext}
          className="px-6 py-2.5 doodle-btn doodle-btn-red text-[10px] font-black uppercase border-2 border-black cursor-pointer"
        >
          Analyze Security Failures
        </button>
      </div>
    </div>
  );
}
