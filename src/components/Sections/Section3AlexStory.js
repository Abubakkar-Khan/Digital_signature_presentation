"use client";

import { Users, ArrowRight } from "lucide-react";

export default function Section3AlexStory({ onNext }) {
  const steps = [
    {
      title: "1. The Deal",
      desc: "Hamza signs SRS for a database app.",
      memeBox: `    O__  💵
   /|_\\ [SRS]
   / \\`
    },
    {
      title: "2. The Scribble",
      desc: "Inked scribble placed on paper page 24.",
      memeBox: `    ✍️ 📜
  [ Hamza ]
  "Looks secure!"`
    },
    {
      title: "3. The Ghosting",
      desc: "Hamza buys coffee, bugs out, replies 0.",
      memeBox: ` 📱 [Hamza]
 *Offline*
  ☕ ⌨️ ☕`
    },
    {
      title: "4. The Court",
      desc: "Client sues. Hamza gets summons.",
      memeBox: `   .---.
  ( o.o ) *Pika?*
   \\ - /
  [Court]`
    },
    {
      title: "5. The Gavel",
      desc: "Judge orders: PAY UP, HAMZA!",
      image: "/gavel_court.png"
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 md:p-6 swiss-grid relative overflow-hidden">
      {/* Slide Header */}
      <div className="flex justify-between items-baseline border-b-2 border-black pb-2 mb-2">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-gray-400">
          <Users className="w-4 h-4 text-[#FFCC00]" />
          <span>[ COMIC STRIP: THE LITIGATION CASE OF HAMZA ]</span>
        </div>
        <span className="swiss-badge text-[10px] border-2 border-black">
          SLIDE 03 / 16
        </span>
      </div>

      {/* Comic Grid Layout - Heavy Visuals, minimal text */}
      <div className="flex-1 flex flex-col justify-center my-auto overflow-hidden">
        <div className="grid grid-cols-5 gap-3 w-full">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="doodle-card-yellow p-3 flex flex-col justify-between items-center text-center min-h-[220px]"
            >
              <div>
                <span className="px-1.5 py-0.5 bg-black text-[#FFCC00] text-[8px] font-mono uppercase tracking-widest block mb-1">
                  PANEL 0{idx + 1}
                </span>
                <h4 className="text-[11px] font-space font-black uppercase text-white truncate w-full">
                  {step.title}
                </h4>
              </div>

              {/* Central Comic Graphic */}
              <div className="p-1 w-full h-[90px] rounded border border-black bg-[#0E0F12] flex items-center justify-center overflow-hidden">
                {step.image ? (
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover rounded"
                  />
                ) : (
                  <pre className="text-[10px] text-[#FFCC00] font-mono leading-none whitespace-pre bg-transparent border-0 p-0 m-0">
                    {step.memeBox}
                  </pre>
                )}
              </div>

              <p className="text-[9px] font-mono text-gray-400 leading-tight">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Swiss Caption Box */}
        <div className="mt-4 p-2.5 border-2 border-black bg-[#181922] rounded flex justify-between items-center">
          <span className="text-[10px] font-mono text-[#34C759]">
            💡 <strong>Verdict:</strong> Ink signatures are legally binding. But on digital documents, they can be forged without math.
          </span>
        </div>
      </div>

      {/* Footer bar */}
      <div className="flex justify-between items-center border-t-2 border-black pt-2 mt-2">
        <span className="text-[10px] font-mono text-gray-500">
          Comic storyboard loaded. Tap next to analyze traditional security problems.
        </span>
        <button
          onClick={onNext}
          className="px-6 py-2.5 doodle-btn doodle-btn-red text-[10px] font-black uppercase border-2 border-black cursor-pointer"
        >
          Analyze Problems
        </button>
      </div>
    </div>
  );
}
