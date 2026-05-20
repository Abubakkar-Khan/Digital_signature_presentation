"use client";

import { useRef, useState, useEffect } from "react";
import { Edit3, RefreshCw } from "lucide-react";

export default function Section2Signature({ onNext }) {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasDrawn, setHasDrawn] = useState(false);
  const [isScanned, setIsScanned] = useState(false);
  const [memeIndex, setMemeIndex] = useState(0);

  const funnyMemes = [
    "Doodle complete. This looks like a squiggly worm. A toddler could forge this in Paint. Security Score: 1/10",
    "Great loops! Unfortunately, copy-pasting this image onto another contract takes exactly one Ctrl+C / Ctrl+V. Security Score: 0/10",
    "Splendid cursive scribble. But if someone edits the contract text from $100 to $10,000, your scribble stays exactly the same.",
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = 5;
    ctx.strokeStyle = "#FF3B30";
    ctx.fillStyle = "#181922";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    if (!canvas || isScanned) return;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing || isScanned) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
    setHasDrawn(true);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#181922";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    setHasDrawn(false);
    setIsScanned(false);
  };

  const triggerScan = () => {
    if (!hasDrawn) return;
    setIsScanned(true);
    setMemeIndex((prev) => (prev + 1) % funnyMemes.length);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 md:p-6 swiss-grid relative overflow-hidden">
      {/* Slide Header */}
      <div className="flex justify-between items-baseline border-b-2 border-black pb-2 mb-2">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-gray-400">
          <Edit3 className="w-4 h-4 text-[#FF3B30]" />
          <span>[ CHAPTER 01: TRADITIONAL HANDWRITTEN INK ]</span>
        </div>
        <span className="swiss-badge text-[10px] border-2 border-black">
          SLIDE 02 / 16
        </span>
      </div>

      {/* Heavy Visual Grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 items-center my-auto overflow-hidden">
        {/* Left Side: Drawing Pad (takes up more space) */}
        <div className="col-span-1 md:col-span-7 flex flex-col justify-center">
          <div className="doodle-card p-4 relative">
            <div className="flex items-center justify-between pb-2 border-b-2 border-black mb-3">
              <span className="text-[10px] font-mono text-gray-400 uppercase font-black">
                Draw Scribble Signature Pad
              </span>
              <span className="text-[9px] font-mono text-[#FF3B30] font-black uppercase">
                {isScanned ? "[ SCRIB_MUTATED ]" : "[ DRAW ]"}
              </span>
            </div>

            <div className="relative border-3 border-black rounded-lg overflow-hidden h-[240px] w-full bg-[#181922]">
              <canvas
                ref={canvasRef}
                width={500}
                height={240}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                onTouchStart={(e) => {
                  const touch = e.touches[0];
                  startDrawing(touch);
                }}
                onTouchMove={(e) => {
                  const touch = e.touches[0];
                  draw(touch);
                }}
                onTouchEnd={stopDrawing}
                className={`w-full h-full cursor-crosshair touch-none ${isScanned ? "opacity-60" : ""}`}
              />
              {!hasDrawn && (
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center p-3 bg-black/60">
                  <span className="text-[10px] text-[#FFCC00] font-mono uppercase tracking-widest font-black">
                    ✍️ Scribble signature here using touch/mouse
                  </span>
                </div>
              )}

              {/* Giant Red Stamp Overlay when scanned */}
              {isScanned && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-[#FF3B30] bg-[#0E0F12]/90 text-[#FF3B30] px-4 py-2 rotate-12 font-space font-black uppercase tracking-widest text-lg rounded shadow-[4px_4px_0px_#000] animate-bounce">
                  ❌ POTATO CERTIFIED: 0/10
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Side: Security assessment logs */}
        <div className="col-span-1 md:col-span-5 flex flex-col justify-center overflow-hidden">
          <h3 className="text-xl md:text-2xl font-space font-black uppercase text-white mb-3">
            What is a <span className="px-2 py-0.5 bg-[#FF3B30] text-white border-2 border-black inline-block rounded">Scribble?</span>
          </h3>

          <div className="p-4 border-2 border-black bg-[#181922] rounded flex flex-col justify-between min-h-[140px]">
            {isScanned ? (
              <div className="space-y-2">
                <span className="text-[9px] font-mono text-[#FFCC00] font-bold block uppercase">
                  ⚠️ SECURITY ASSESSMENT LOG:
                </span>
                <p className="text-[11px] font-mono text-gray-300 italic leading-relaxed">
                  "{funnyMemes[memeIndex]}"
                </p>
              </div>
            ) : (
              <p className="text-[11px] font-mono text-gray-400 italic">
                Drawing is ink-only. It has zero cryptographic protection. Try signing above and click Verify.
              </p>
            )}

            <div className="flex gap-2 mt-4 pt-3 border-t border-black">
              <button
                onClick={clearCanvas}
                className="p-2 border-2 border-black bg-[#181922] text-gray-300 rounded font-mono text-[9px] uppercase font-bold flex items-center gap-1 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Reset
              </button>
              <button
                onClick={triggerScan}
                disabled={!hasDrawn || isScanned}
                className={`flex-1 p-2 rounded text-[10px] font-space font-black uppercase border-2 border-black cursor-pointer ${
                  hasDrawn && !isScanned
                    ? "bg-[#FF3B30] text-white"
                    : "bg-gray-800 text-gray-600 cursor-not-allowed"
                }`}
              >
                Scan & Verify Security
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="flex justify-between items-center border-t-2 border-black pt-2 mt-2">
        <span className="text-[10px] font-mono text-gray-500">
          Scribble test pad loaded. Click next to review the story of Hamza.
        </span>
        <button
          onClick={onNext}
          className="px-6 py-2.5 doodle-btn doodle-btn-blue text-[10px] font-black uppercase border-2 border-black cursor-pointer"
        >
          See Hamza's Story
        </button>
      </div>
    </div>
  );
}
