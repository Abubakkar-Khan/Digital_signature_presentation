"use client";

import { useEffect } from "react";
import { Award, RotateCcw, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

export default function Section14Closing({ onRestart }) {
  // Fire initial confetti on slide mount
  useEffect(() => {
    handleConfetti();
  }, []);

  const handleConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.5 },
      colors: ["#FF3B30", "#FFCC00", "#007AFF", "#34C759", "#AF52DE"]
    });
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 md:p-6 swiss-grid relative overflow-hidden">
      {/* Slide Header */}
      <div className="flex justify-between items-baseline border-b-2 border-black pb-2 mb-2">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-gray-400">
          <Award className="w-4 h-4 text-[#34C759]" />
          <span>[ SESSION_CLOSE: CELEBRATION ]</span>
        </div>
        <span className="swiss-badge text-[10px] border-2 border-black">
          SLIDE 26 / 26
        </span>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center items-center text-center my-auto max-w-4xl mx-auto w-full">
        <span className="px-3 py-1 bg-[#34C759] text-black text-[10px] font-mono font-black uppercase tracking-widest border-2 border-black rounded mb-4 transform -rotate-1 shadow-[2px_2px_0px_#000]">
          🎉 SUCCESS! presentation complete 🎉
        </span>

        <h2 className="text-3xl md:text-6xl font-space font-black uppercase text-white leading-none mb-6">
          Implementing a <br />
          <span className="px-4 py-1 bg-[#FF3B30] text-white border-3 border-black inline-block transform rotate-1 shadow-[4px_4px_0px_#000] rounded">
            Digital Signature
          </span> <br />
          on Word doc
        </h2>

        <p className="text-gray-400 font-mono text-xs max-w-xl leading-relaxed mb-6">
          Thank you for following the journey from Hamza's breach of contract to the absolute mathematical certainty of asymmetric keys and cryptographic hash verification!
        </p>

        {/* Large visual card with buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleConfetti}
            className="px-6 py-3 border-3 border-black bg-black text-[#FFCC00] hover:bg-[#FFCC00]/10 text-xs font-mono font-black uppercase rounded shadow-[4px_4px_0px_#FFCC00] cursor-pointer flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" /> Trigger Confetti!
          </button>
          
          <button
            onClick={onRestart}
            className="px-6 py-3 border-3 border-black bg-[#181922] text-white hover:bg-black text-xs font-mono font-black uppercase rounded shadow-[4px_4px_0px_#000] cursor-pointer flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" /> Restart Presentation
          </button>
        </div>
      </div>

      {/* Footer bar */}
      <div className="flex justify-between items-center border-t-2 border-black pt-2 mt-2">
        <span className="text-[10px] font-mono text-gray-500">
          Slide deck complete. Ready to deliver the presentation.
        </span>
        <span className="text-[9px] font-mono text-gray-400">Abubakkar Khan Presentation Series</span>
      </div>
    </div>
  );
}
