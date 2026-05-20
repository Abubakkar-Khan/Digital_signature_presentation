"use client";

import { useState } from "react";
import { History } from "lucide-react";

export default function Section9History({ onNext }) {
  const [caesarShift, setCaesarShift] = useState(3);
  const [inputText, setInputText] = useState("HELLO HAMZA");
  const [slaveStage, setSlaveStage] = useState(0);

  // Caesar encryption logic
  const encryptCaesar = (str, shift) => {
    return str
      .toUpperCase()
      .split("")
      .map((char) => {
        const code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) {
          return String.fromCharCode(((code - 65 + shift) % 26) + 65);
        }
        return char;
      })
      .join("");
  };

  const slaveSteps = [
    {
      title: "1. Shave Slave Head",
      caption: "Take a loyal slave messenger and shave off all their head hair completely."
    },
    {
      title: "2. Tattoo Message",
      caption: "Tattoo the secret passcode directly onto the bald skin of their scalp."
    },
    {
      title: "3. Wait for Regrowth",
      caption: "Wait 2-3 months for the slave's hair to grow back, hiding the tattoo."
    },
    {
      title: "4. Shave & Read",
      caption: "Slave walks past guards. Recipient shaves their head again to read the text."
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 md:p-8 swiss-grid relative overflow-hidden">
      {/* Slide Header */}
      <div className="flex justify-between items-baseline border-b-2 border-black pb-2 mb-2">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-gray-400">
          <History className="w-4 h-4 text-[#FF3B30]" />
          <span>[ CHAPTER 08: ANCIENT HISTORY CIPHERS ]</span>
        </div>
        <span className="swiss-badge text-[10px] border-2 border-black">
          SLIDE 10 / 16
        </span>
      </div>

      {/* Main Grid - Strict Viewport Scale */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-6 items-center my-auto overflow-hidden">
        {/* Left Side: Ancient Greek Shaved Head Slave Illustration */}
        <div className="col-span-1 md:col-span-6 flex flex-col justify-center">
          <div className="doodle-card p-4 border-[#FF3B30]">
            <div className="flex items-center justify-between pb-2 border-b border-black mb-3">
              <span className="text-[9px] font-mono text-gray-400 uppercase">
                Ancient Greek Slave tattoo method
              </span>
              <span className="text-[9px] font-mono text-[#FF3B30] font-black">
                [ STAGE {slaveStage + 1} / 4 ]
              </span>
            </div>

            {/* Slave Comic graphic - Real Image */}
            <div className="border-2 border-black bg-[#0E0F12] rounded h-[150px] flex items-center justify-center text-center mb-3 overflow-hidden relative">
              <img
                src="/slave.png"
                alt="Slave Messenger Illustration"
                className="w-full h-full object-contain"
              />
              <div className="absolute top-2 right-2 bg-black border-2 border-[#FF3B30] px-2 py-0.5 rounded text-[9px] text-[#FF3B30] font-mono font-black uppercase">
                {slaveSteps[slaveStage].title}
              </div>
            </div>

            <p className="text-[9px] font-mono text-gray-400 min-h-[25px] leading-relaxed mb-3">
              {slaveSteps[slaveStage].caption}
            </p>

            {/* Control buttons */}
            <div className="flex gap-2">
              {slaveSteps.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setSlaveStage(idx)}
                  className={`flex-1 py-1.5 text-[9px] font-mono border-2 border-black rounded transition-all cursor-pointer ${
                    slaveStage === idx
                      ? "bg-black text-[#FF3B30] font-black"
                      : "bg-[#181922] text-gray-400"
                  }`}
                >
                  Step {idx + 1}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Caesar Cipher Wheel */}
        <div className="col-span-1 md:col-span-6">
          <div className="doodle-card p-4 border-[#FFCC00]">
            <div className="flex items-center justify-between pb-2 border-b border-black mb-3">
              <span className="text-[9px] font-mono text-gray-400 uppercase">
                Caesar Shift cipher wheel v1
              </span>
              <span className="text-[9px] font-mono text-[#FFCC00] font-bold">
                [ SHIFT: {caesarShift} ]
              </span>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-[9px] font-mono text-gray-400 uppercase block mb-0.5">
                  Plaintext message:
                </label>
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value.toUpperCase())}
                  className="w-full p-1.5 border-2 border-black rounded bg-[#0E0F12] text-xs text-gray-200 font-mono outline-none"
                />
              </div>

              <div>
                <label className="text-[9px] font-mono text-gray-400 uppercase block mb-0.5">
                  Shift Cipher Amount (0 - 25):
                </label>
                <input
                  type="range"
                  min="0"
                  max="25"
                  value={caesarShift}
                  onChange={(e) => setCaesarShift(parseInt(e.target.value))}
                  className="w-full accent-[#FF3B30] cursor-pointer"
                />
              </div>

              <div className="p-2 border-2 border-black bg-[#0E0F12] rounded">
                <span className="text-[8px] font-mono text-gray-500 uppercase block mb-0.5">
                  Ciphertext Output:
                </span>
                <p className="text-xs font-mono text-[#FF3B30] font-black tracking-widest break-all">
                  {encryptCaesar(inputText, caesarShift) || "EMPTY"}
                </p>
              </div>

              <p className="text-[8px] font-mono text-gray-500 italic">
                💡 <strong>Meme logic:</strong> Caesar thought this shift shift Shift was unhackable. Today a raspberry pi cracks this in 2 milliseconds. Caesar is crying in Roman.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="flex justify-between items-center border-t-2 border-black pt-2 mt-2">
        <span className="text-[10px] font-mono text-gray-500">
          Eras overview complete. Tap next to compare Symmetric vs Asymmetric Secrets.
        </span>
        <button
          onClick={onNext}
          className="px-6 py-3 doodle-btn doodle-btn-green text-[10px] font-black uppercase border-2 border-black cursor-pointer"
        >
          Compare Secrets
        </button>
      </div>
    </div>
  );
}
