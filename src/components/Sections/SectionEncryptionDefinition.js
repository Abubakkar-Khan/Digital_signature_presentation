"use client";

import { useState } from "react";
import { Key, Lock, Unlock, ArrowRight, ArrowLeft, RefreshCw, CheckCircle, Shield } from "lucide-react";

const STEPS = [
  {
    title: "1. Plaintext Created",
    desc: "The original, readable message (Plaintext) is prepared by the sender.",
    visual: {
      from: "Bob's Doc",
      data: '"Pay Hamza $100"',
      status: "Unsecured",
      color: "#FFCC00",
      badge: "📄 PLAIN",
    },
    detail: "Any eavesdropper or hacker sniffing the network can easily read this message as plain text.",
  },
  {
    title: "2. Scrambled (Encryption)",
    desc: "The encryption algorithm combines the plaintext with a cryptographic key to scramble it.",
    visual: {
      from: "Bob's Doc + 🔑 Key",
      data: "Scrambling...",
      status: "Encrypting",
      color: "#007AFF",
      badge: "⚙️ CRYPT",
    },
    detail: "Without the matching key, the mathematical scrambling makes the data structurally randomized.",
  },
  {
    title: "3. Ciphertext Travel",
    desc: "The resulting unreadable code (Ciphertext) is transmitted over the internet.",
    visual: {
      from: "Scrambled Packets",
      data: "X9kL##@!mN3",
      status: "Secured",
      color: "#AF52DE",
      badge: "🔒 CIPHER",
    },
    detail: "If intercepted by a middleman (Eve), it looks like complete gibberish. Confidentiality is maintained.",
  },
  {
    title: "4. Decryption Unlock",
    desc: "The recipient receives the ciphertext and uses a key to decrypt it back to normal.",
    visual: {
      from: "X9kL##@!mN3 + 🔑 Key",
      data: "Unscrambling...",
      status: "Decrypting",
      color: "#34C759",
      badge: "🔓 DECRYPT",
    },
    detail: "The mathematical process is reversed, reconstructing the exact original binary structure.",
  },
  {
    title: "5. Recovered Message",
    desc: "The recipient successfully reads the original plaintext message.",
    visual: {
      from: "Alice's Screen",
      data: '"Pay Hamza $100"',
      status: "Verified",
      color: "#34C759",
      badge: "📄 PLAIN",
    },
    detail: "The communication round-trip is complete. Only the holders of the keys could read the payload.",
  },
];

export default function SectionEncryptionDefinition({ onNext }) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 md:p-6 swiss-grid relative overflow-hidden">
      {/* Slide Header */}
      <div className="flex justify-between items-baseline border-b-2 border-black pb-2 mb-2">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-gray-400">
          <Key className="w-4 h-4 text-[#007AFF]" />
          <span>[ CHAPTER 20: DEFINING ENCRYPTION ]</span>
        </div>
        <span className="swiss-badge text-[10px] border-2 border-black">
          SLIDE 22 / 27
        </span>
      </div>

      {/* Main Content */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-6 items-center my-auto overflow-hidden">
        
        {/* Left Side: General Definition */}
        <div className="col-span-1 md:col-span-4 flex flex-col justify-center">
          <span className="px-2 py-0.5 text-[10px] font-mono text-white bg-[#007AFF] border border-black uppercase w-max mb-3">
            CORE PRINCIPLE
          </span>
          <h2 className="text-2xl md:text-4xl font-space font-black uppercase text-white leading-none mb-3">
            What is <br />
            <span className="px-3 py-0.5 bg-[#007AFF] text-white border-2 border-black inline-block transform rotate-1 shadow-[2px_2px_0px_#000] rounded">
              Encryption?
            </span>
          </h2>
          <p className="text-gray-400 font-mono text-xs leading-relaxed mb-4">
            Encryption is the fundamental practice of converting <strong className="text-white">readable plaintext</strong> into <strong className="text-[#007AFF]">unreadable ciphertext</strong> using a mathematical key. Only parties holding the corresponding key can decrypt it back into plain, readable format.
          </p>

          {/* Vocabulary Box */}
          <div className="p-3 border-2 border-black bg-black rounded-lg text-[10px] font-mono space-y-1.5">
            <div className="flex justify-between">
              <span className="text-gray-500 font-bold">📄 Plaintext:</span>
              <span className="text-white font-bold">Original Message</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 font-bold">🔒 Ciphertext:</span>
              <span className="text-[#AF52DE] font-bold">Scrambled Data</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 font-bold">🔑 Key:</span>
              <span className="text-[#FFCC00] font-bold">Mathematical Secret</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 font-bold">⚙️ Algorithm:</span>
              <span className="text-[#007AFF] font-bold">Cipher Formula (AES)</span>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Flow Visualizer */}
        <div className="col-span-1 md:col-span-8 flex flex-col gap-3">
          <div className="doodle-card p-4 border-[#007AFF] flex flex-col gap-3">
            
            {/* Stage Selector Header */}
            <div className="flex items-center justify-between pb-2 border-b border-black">
              <span className="text-[9px] font-mono text-gray-500 uppercase font-bold">
                COMMUNICATION ROUND-TRIP SIMULATION
              </span>
              <span className="text-[10px] font-mono font-black text-[#007AFF] uppercase">
                {STEPS[activeStep].title}
              </span>
            </div>

            {/* Main Interactive Diagram Panel */}
            <div className="p-4 border-2 border-black bg-[#0E0F12] rounded-lg min-h-[140px] flex flex-col justify-center">
              
              {/* Dynamic visualization block */}
              <div className="flex flex-col md:flex-row items-center justify-around gap-4 mb-3">
                
                {/* Source details */}
                <div className="text-center font-mono text-[9px]">
                  <span className="text-gray-500 block">SOURCE STATE</span>
                  <span className="px-2 py-0.5 bg-black border border-gray-700 text-gray-300 font-bold rounded">
                    {STEPS[activeStep].visual.from}
                  </span>
                </div>

                {/* Arrow indicator */}
                <ArrowRight className="hidden md:block w-4 h-4 text-gray-600 animate-pulse" />

                {/* Scrambled Payload Box */}
                <div 
                  className="px-4 py-3 border-2 border-black rounded-lg text-center min-w-[150px] shadow-[3px_3px_0px_#000] transition-colors duration-300"
                  style={{ backgroundColor: `${STEPS[activeStep].visual.color}15`, borderColor: STEPS[activeStep].visual.color }}
                >
                  <span 
                    className="inline-block px-1.5 py-0.2 text-[8px] font-mono font-bold text-black uppercase border border-black rounded mb-2"
                    style={{ backgroundColor: STEPS[activeStep].visual.color }}
                  >
                    {STEPS[activeStep].visual.badge}
                  </span>
                  <div className="font-mono text-xs font-black text-white truncate max-w-[180px]">
                    {STEPS[activeStep].visual.data}
                  </div>
                  <span className="text-[7px] font-mono text-gray-500 uppercase block mt-1">
                    STATUS: {STEPS[activeStep].visual.status}
                  </span>
                </div>

                {/* Arrow indicator */}
                <ArrowRight className="hidden md:block w-4 h-4 text-gray-600 animate-pulse" />

                {/* State result icon */}
                <div className="flex items-center gap-1.5 font-mono text-[9px] text-gray-400">
                  {activeStep === 4 ? (
                    <div className="flex flex-col items-center">
                      <CheckCircle className="w-8 h-8 text-[#34C759]" />
                      <span className="text-[#34C759] font-black uppercase mt-1">SUCCESS</span>
                    </div>
                  ) : activeStep >= 2 ? (
                    <div className="flex flex-col items-center">
                      <Shield className="w-8 h-8 text-[#AF52DE]" />
                      <span className="text-[#AF52DE] font-black uppercase mt-1">SECURED</span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <Lock className="w-8 h-8 text-gray-600" />
                      <span className="text-gray-500 font-black uppercase mt-1">UNSECURED</span>
                    </div>
                  )}
                </div>

              </div>

              {/* Step Explanatory text */}
              <p className="text-[10px] font-mono text-gray-300 border-t border-gray-800 pt-2 leading-relaxed">
                <strong>{STEPS[activeStep].desc}</strong> {STEPS[activeStep].detail}
              </p>

            </div>

            {/* Quick stage indicators */}
            <div className="flex gap-1.5">
              {STEPS.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`flex-1 py-2 text-[9px] font-mono border-2 border-black rounded transition-all cursor-pointer ${
                    activeStep === idx
                      ? "bg-black text-[#007AFF] font-black shadow-[2px_2px_0px_#007AFF]"
                      : "bg-[#181922] text-gray-400 hover:text-white"
                  }`}
                >
                  Step {idx + 1}
                </button>
              ))}
            </div>

          </div>
        </div>

      </div>

      {/* Footer bar */}
      <div className="flex justify-between items-center border-t-2 border-black pt-2 mt-2">
        <span className="text-[10px] font-mono text-gray-500">
          General encryption round-trip complete. Tap next to review the history of ancient cipher methods.
        </span>
        <button
          onClick={onNext}
          className="px-6 py-2.5 doodle-btn doodle-btn-blue text-[10px] font-black uppercase border-2 border-black cursor-pointer"
        >
          History of Ciphers →
        </button>
      </div>
    </div>
  );
}
