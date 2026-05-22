"use client";

import { Copy, PenTool, ShieldAlert } from "lucide-react";

export default function Section4Problems({ onNext }) {
  const problems = [
    {
      title: "1. Tracing & Forgery",
      icon: PenTool,
      accent: "var(--swiss-red)",
      desc: "Ink on paper is physical, not mathematical. A bad actor with a steady hand can copy or trace a handwritten scribble on a screen, signing a fake agreement on your behalf.",
      meme: "Hacker practicing your signature: *Squinting eyes, copying curves*",
      ascii: `     ✍️ (._. ) 
    [練習] [練習]
    "Looks close enough!"`
    },
    {
      title: "2. The Copy-Paste Trick",
      icon: Copy,
      accent: "var(--swiss-yellow)",
      desc: "On a computer, your signature is just a collection of pixels. Anyone can crop your signature.png from a PDF and paste it onto a $10,000 promissory note.",
      meme: "Scammer copies signature: 'Ctrl+C, Ctrl+V, now I own your house'",
      ascii: `   [Ctrl+C] ➔ 💾 ➔ [Ctrl+V]
   "Infinite wealth glitch
    unlocked! 🚀"`
    },
    {
      title: "3. The Text Swap",
      icon: ShieldAlert,
      accent: "var(--swiss-blue)",
      desc: "If you paste a signature image into a Word document, anyone can edit the text afterwards (like changing a price from $100 to $1,000,000). The image will still sit there, completely unaware.",
      meme: "Contract values: changing $100 to $1,000,000 silently.",
      ascii: `  [ Before ]: Pay $100 📜✍️
  [ After  ]: Pay $100,000 📜✍️
  "Wait, that's illegal!"`
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-12 swiss-grid relative">
      {/* Main Grid */}
      <div className="flex-1 flex flex-col justify-center my-6 max-w-5xl mx-auto w-full">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-space font-black uppercase text-white leading-none mb-3">
            Why Scanned Signature Images Are a{" "}
            <span className="px-3 bg-[#FF3B30] text-white border-[3px] border-black inline-block transform -rotate-1 shadow-[3px_3px_0px_#000] rounded">
              Security Illusion
            </span>
          </h2>
          <p className="text-xs font-mono text-gray-400 max-w-md mx-auto">
            A screenshot of a scribble pasted into a document is NOT a digital signature. It's just a digital sticker.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((prob, i) => {
            const IconComp = prob.icon;
            return (
              <div
                key={i}
                className="doodle-card p-5 flex flex-col justify-between hover:-translate-y-1 transition-all duration-100 min-h-[300px]"
                style={{ boxShadow: `5px 5px 0px 0px ${prob.accent}` }}
              >
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-black">
                    <span className="text-[10px] font-mono text-gray-400 font-bold uppercase">
                      THREAT VECTOR 0{i + 1}
                    </span>
                    <IconComp className="w-4 h-4" style={{ color: prob.accent }} />
                  </div>

                  <h3 className="text-base font-space font-black uppercase text-gray-100 mb-2">
                    {prob.title}
                  </h3>
                  <p className="text-[11px] font-mono text-gray-400 leading-relaxed mb-4">
                    {prob.desc}
                  </p>
                </div>

                {/* ASCII Meme Panel */}
                <div className="p-3 rounded bg-black/60 border-2 border-black flex flex-col items-center justify-between text-center shrink-0">
                  <pre className="text-[9px] text-[#FFCC00] font-mono leading-tight whitespace-pre bg-transparent border-0 p-0 m-0 mb-2">
                    {prob.ascii}
                  </pre>
                  <span className="text-[8px] font-mono text-gray-500 italic">
                    {prob.meme}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer bar */}
      <div className="flex justify-between items-center border-t-[3px] border-black pt-4">
        <span className="text-xs font-mono text-gray-500">
          Vulnerability report logged. Tap next to enter the world of cryptography.
        </span>
        <button
          onClick={onNext}
          className="px-6 py-3 doodle-btn doodle-btn-green text-xs font-black uppercase tracking-wider text-black border-2 border-black cursor-pointer"
        >
          Upgrade to Digital
        </button>
      </div>
    </div>
  );
}
