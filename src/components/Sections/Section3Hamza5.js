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
          SLIDE 06 / 24
        </span>
      </div>

      {/* Main Content */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 items-center my-auto overflow-hidden">
        <div className="col-span-1 md:col-span-6 flex flex-col justify-center">
          <span className="px-2 py-0.5 text-[10px] font-mono text-white bg-[#FF3B30] border border-black uppercase w-max mb-3">
            HAMZA DEFAULTS SERIES: FINAL CHAPTER
          </span>
          <h2 className="text-2xl md:text-5xl font-space font-black uppercase text-white leading-none mb-3">
            The Judge's <br />
            <span className="px-2 py-0.5 bg-[#FF3B30] text-white border-2 border-black inline-block transform rotate-1 shadow-[2px_2px_0px_#000] rounded">
              Verdict
            </span>
          </h2>
          <p className="text-gray-400 font-mono text-xs leading-relaxed mb-4">
            The judge examines page 24. Since the scribble matches Hamza's license record, the court rules: <strong>THE SIGNATURE IS BINDING. PAY UP, HAMZA!</strong> Hamza is declared liable for damages.
          </p>
          <div className="p-3 border-2 border-black bg-[#181922] rounded text-[10px] font-mono text-gray-300">
            💡 <strong>The Cybersecurity Lesson:</strong> Traditional ink binds you, but if Hamza signed a digital Word doc with a fake PNG image, the proof is easily forgeable. We need math to ensure integrity!
          </div>
        </div>

        {/* Visual Graphic - Gavel Court Image */}
        <div className="col-span-1 md:col-span-6">
          <div className="doodle-card p-4 border-[#FF3B30] text-center min-h-[220px] flex flex-col justify-between items-center">
            <span className="text-[9px] font-mono text-gray-500 uppercase">COURTROOM DECREE</span>

            <div className="relative w-full h-[140px] rounded-lg border-2 border-black overflow-hidden bg-black flex items-center justify-center">
              <img
                src="/gavel_court.png"
                alt="Gavel Court"
                className="w-full h-full object-cover"
              />
            </div>

            <span className="text-[9px] font-mono text-[#FF3B30] font-black uppercase">
              ⚖️ VERDICT: COURT DECLARES HAMZA LIABLE
            </span>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="flex justify-between items-center border-t-2 border-black pt-2 mt-2">
        <span className="text-[10px] font-mono text-gray-500">
          The story has concluded. Tap next to analyze traditional signature vulnerability failures.
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
