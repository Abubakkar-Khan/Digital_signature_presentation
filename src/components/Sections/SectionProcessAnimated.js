"use client";

import { useState, useEffect } from "react";
import { ShieldCheck, ArrowRight, FileText, Key, Lock, CheckCircle, XCircle } from "lucide-react";

const STEPS = [
  { id: 0, from: "sender", label: "1. Hash Document", icon: FileText, color: "#FFCC00", desc: "Alice feeds the .docx into SHA-256 → unique 256-bit fingerprint" },
  { id: 1, from: "sender", label: "2. Sign Hash", icon: Key, color: "#FF3B30", desc: "Alice encrypts the hash with her Private Key → Digital Signature" },
  { id: 2, from: "both",   label: "3. Transmit Bundle", icon: ArrowRight, color: "#007AFF", desc: "Original doc + Signature sent over the network to Bob" },
  { id: 3, from: "receiver", label: "4. Decrypt Signature", icon: Lock, color: "#AF52DE", desc: "Bob decrypts the signature with Alice's Public Key → recovers Alice's hash" },
  { id: 4, from: "receiver", label: "5. Re-Hash & Compare", icon: CheckCircle, color: "#34C759", desc: "Bob hashes the received doc himself. If hashes match → VERIFIED ✅" },
];

export default function SectionProcessAnimated({ onNext }) {
  const [activeStep, setActiveStep] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [verified, setVerified] = useState(null); // null | true | false

  // Auto-advance through steps when playing
  useEffect(() => {
    if (!animating) return;
    if (activeStep >= STEPS.length - 1) {
      setVerified(true);
      setAnimating(false);
      return;
    }
    const t = setTimeout(() => setActiveStep((s) => s + 1), 1400);
    return () => clearTimeout(t);
  }, [animating, activeStep]);

  const handlePlay = () => {
    setActiveStep(0);
    setVerified(null);
    setAnimating(true);
  };

  const step = STEPS[activeStep];
  const StepIcon = step.icon;

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 md:p-8 swiss-grid relative overflow-hidden">
      {/* Slide Header */}
      <div className="flex justify-between items-baseline border-b-2 border-black pb-2 mb-4">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-gray-400">
          <ShieldCheck className="w-4 h-4 text-[#34C759]" />
          <span>[ CHAPTER 09: HOW DIGITAL SIGNATURES WORK ]</span>
        </div>
        <span className="swiss-badge text-[10px] border-2 border-black">
          SLIDE 09 / 27
        </span>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center gap-6 overflow-hidden">

        {/* Step Progress Bar */}
        <div className="flex gap-2 justify-center">
          {STEPS.map((s, i) => (
            <button
              key={i}
              onClick={() => { setActiveStep(i); setVerified(null); setAnimating(false); }}
              className={`flex-1 max-w-[120px] py-1 text-[8px] font-mono font-black uppercase border-2 border-black rounded transition-all cursor-pointer ${
                i === activeStep
                  ? "bg-white text-black"
                  : i < activeStep
                  ? "bg-[#34C759] text-black"
                  : "bg-[#181922] text-gray-500"
              }`}
            >
              {i + 1}. {s.label.split(" ")[1]}
            </button>
          ))}
        </div>

        {/* Two Entity Animation Panel */}
        <div className="relative flex items-stretch gap-4">

          {/* ALICE — Sender */}
          <div className={`flex flex-col items-center justify-center gap-3 w-44 shrink-0 p-4 border-2 border-black rounded-lg transition-all duration-300 ${
            step.from === "sender" || step.from === "both" ? "bg-[#1a1f2e] border-[#FFCC00]" : "bg-[#0E0F12] border-black"
          }`}>
            <div className="text-4xl">👩‍💻</div>
            <span className="text-xs font-space font-black text-white uppercase">ALICE</span>
            <span className="text-[8px] font-mono text-gray-500 uppercase">Sender / Signer</span>
            {(step.from === "sender" || step.from === "both") && (
              <span className="text-[8px] font-mono text-[#FFCC00] font-black uppercase animate-pulse">● ACTIVE</span>
            )}
          </div>

          {/* Centre: Step Card */}
          <div className="flex-1 flex flex-col items-center justify-center gap-4 px-2">
            {/* Animated Step Card */}
            <div
              key={activeStep}
              className="w-full p-4 border-2 border-black rounded-lg text-center"
              style={{
                backgroundColor: step.color + "18",
                borderColor: step.color,
                boxShadow: `4px 4px 0px 0px ${step.color}`,
                animation: "fadeInUp 0.35s ease-out",
              }}
            >
              <StepIcon className="w-8 h-8 mx-auto mb-2" style={{ color: step.color }} />
              <h3 className="text-sm font-space font-black text-white uppercase mb-1">{step.label}</h3>
              <p className="text-[10px] font-mono text-gray-400 leading-relaxed">{step.desc}</p>
            </div>

            {/* Transmission arrow */}
            {step.from === "both" && (
              <div className="flex items-center gap-2 font-mono text-[10px] text-[#007AFF] animate-pulse">
                <span>ALICE</span>
                <ArrowRight className="w-4 h-4" />
                <span>BOB</span>
              </div>
            )}

            {/* Verified result */}
            {verified !== null && (
              <div className={`flex items-center gap-2 font-mono text-xs font-black px-4 py-2 border-2 border-black rounded ${
                verified ? "bg-[#34C759] text-black" : "bg-[#FF3B30] text-white"
              }`}>
                {verified ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                {verified ? "SIGNATURE VERIFIED ✅" : "VERIFICATION FAILED ❌"}
              </div>
            )}
          </div>

          {/* BOB — Receiver */}
          <div className={`flex flex-col items-center justify-center gap-3 w-44 shrink-0 p-4 border-2 border-black rounded-lg transition-all duration-300 ${
            step.from === "receiver" || step.from === "both" ? "bg-[#1a2a1f] border-[#34C759]" : "bg-[#0E0F12] border-black"
          }`}>
            <div className="text-4xl">👨‍💻</div>
            <span className="text-xs font-space font-black text-white uppercase">BOB</span>
            <span className="text-[8px] font-mono text-gray-500 uppercase">Receiver / Verifier</span>
            {(step.from === "receiver" || step.from === "both") && (
              <span className="text-[8px] font-mono text-[#34C759] font-black uppercase animate-pulse">● ACTIVE</span>
            )}
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-4">
          <button
            onClick={handlePlay}
            disabled={animating}
            className="px-6 py-2 border-2 border-black bg-[#34C759] text-black text-[10px] font-mono font-black uppercase rounded cursor-pointer disabled:opacity-40 hover:shadow-[2px_2px_0px_#000] transition-all"
          >
            {animating ? "▶ Playing..." : "▶ Auto-Play Steps"}
          </button>
          <button
            onClick={() => { setActiveStep((s) => Math.min(s + 1, STEPS.length - 1)); setVerified(null); setAnimating(false); }}
            disabled={animating || activeStep >= STEPS.length - 1}
            className="px-6 py-2 border-2 border-black bg-[#181922] text-white text-[10px] font-mono font-black uppercase rounded cursor-pointer disabled:opacity-40 hover:bg-[#2a2f3e] transition-all"
          >
            Next Step →
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center border-t-2 border-black pt-2 mt-4">
        <span className="text-[10px] font-mono text-gray-500">
          Pipeline simulated. Tap next to explore cryptographic hashing in depth.
        </span>
        <button
          onClick={onNext}
          className="px-6 py-2.5 doodle-btn doodle-btn-green text-[10px] font-black uppercase border-2 border-black cursor-pointer"
        >
          Explore Hashing →
        </button>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
