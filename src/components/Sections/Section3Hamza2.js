"use client";

import { Users, Edit3 } from "lucide-react";

export default function Section3Hamza2({ onNext }) {
  return (
    <div className="w-full h-full flex flex-col justify-between p-4 md:p-6 swiss-grid relative overflow-hidden">
      {/* Slide Header */}
      <div className="flex justify-between items-baseline border-b-2 border-black pb-2 mb-2">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-gray-400">
          <Users className="w-4 h-4 text-[#007AFF]" />
          <span>[ THE STORY OF HAMZA: PART 2 - THE INK SIGNATURE ]</span>
        </div>
        <span className="swiss-badge text-[10px] border-2 border-black">
          SLIDE 03 / 24
        </span>
      </div>

      {/* Main Content */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 items-center my-auto overflow-hidden">
        <div className="col-span-1 md:col-span-6 flex flex-col justify-center">
          <span className="px-2 py-0.5 text-[10px] font-mono text-white bg-[#007AFF] border border-black uppercase w-max mb-3">
            HAMZA DEFAULTS SERIES: CHAPTER 02
          </span>
          <h2 className="text-2xl md:text-5xl font-space font-black uppercase text-white leading-none mb-3">
            The Inked <br />
            <span className="px-2 py-0.5 bg-[#007AFF] text-white border-2 border-black inline-block transform rotate-1 shadow-[2px_2px_0px_#000] rounded">
              Scribble
            </span>
          </h2>
          <p className="text-gray-400 font-mono text-xs leading-relaxed mb-4">
            Hamza flips to page 24 of the printed SRS paper copy and scribbles a curly ink signature. Both parties sign, feeling completely secure. Hamza smiles and says, <em>"We are locked in!"</em>
          </p>
          <div className="p-3 border-2 border-black bg-[#181922] rounded text-[10px] font-mono text-gray-300">
            ✍️ <strong>The Verification Method:</strong> A human eye matching two scribbles on paper checks the legitimacy.
          </div>
        </div>

        {/* Visual Graphic */}
        <div className="col-span-1 md:col-span-6">
          <div className="doodle-card p-4 border-[#007AFF] text-center min-h-[220px] flex flex-col justify-between items-center">
            <span className="text-[9px] font-mono text-gray-500 uppercase">PAGE 24 SCAN</span>

            {/* Simulated document signature box */}
            <div className="w-full p-4 border-2 border-black bg-[#0E0F12] rounded-lg">
              <div className="text-[10px] font-mono text-gray-400 text-left border-b border-black pb-2 mb-2">
                ...and that completes the software engineering deliverables.
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <span className="text-[8px] font-mono text-gray-600 block">CLIENT SIGN:</span>
                  <span className="text-xs font-mono text-gray-300 italic">John Doe</span>
                </div>
                <div className="text-right">
                  <span className="text-[8px] font-mono text-gray-600 block">HAMZA SIGN:</span>
                  <span className="text-sm font-space font-black text-[#007AFF] tracking-wider block">
                    Hamza~~✍️
                  </span>
                </div>
              </div>
            </div>

            <span className="text-[9px] font-mono text-gray-400 italic">
              "Looks secure! Nobody can copy my special scribble, right?"
            </span>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="flex justify-between items-center border-t-2 border-black pt-2 mt-2">
        <span className="text-[10px] font-mono text-gray-500">
          The scribble is signed. Tap next to see how Hamza starts ghosting.
        </span>
        <button
          onClick={onNext}
          className="px-6 py-2.5 doodle-btn doodle-btn-magenta text-[10px] font-black uppercase border-2 border-black cursor-pointer"
        >
          Next: The Ghosting
        </button>
      </div>
    </div>
  );
}
