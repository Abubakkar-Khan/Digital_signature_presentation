"use client";

import { useState } from "react";
import { History, Shield, ArrowRight } from "lucide-react";

export default function Section9Steganography({ onNext }) {
  const [slaveStage, setSlaveStage] = useState(0);

  const slaveSteps = [
    {
      title: "1. Shave Slave Head",
      caption: "Take a loyal slave messenger and shave off all their head hair completely to expose the bare scalp skin."
    },
    {
      title: "2. Tattoo Message",
      caption: "Tattoo the secret military passcode or message directly onto the bald skin using traditional charcoal inks."
    },
    {
      title: "3. Wait for Regrowth",
      caption: "Wait 2 to 3 months for the slave's hair to grow back naturally, completely hiding the tattoo from visual detection."
    },
    {
      title: "4. Shave & Read",
      caption: "The slave walks past enemy guards carrying no physical notes. The recipient shaves their head again to read the message."
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 md:p-8 swiss-grid relative overflow-hidden bg-[#0A0B0D]">
      {/* Main Grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 items-center my-auto overflow-hidden">
        {/* Left Side: Story & Context */}
        <div className="col-span-1 md:col-span-5 flex flex-col justify-center">
          <span className="px-2 py-0.5 text-[10px] font-mono text-white bg-[#FF3B30] border border-black uppercase w-max mb-3">
            HISTORICAL STEGANOGRAPHY
          </span>
          <h2 className="text-2xl md:text-5xl font-space font-black uppercase text-white leading-none mb-3">
            The Shaved <br />
            <span className="px-2 py-0.5 bg-[#FF3B30] text-white border-2 border-black inline-block transform rotate-1 shadow-[2px_2px_0px_#000] rounded">
              Head Story
            </span>
          </h2>
          <p className="text-gray-400 font-mono text-xs leading-relaxed mb-4">
            In 440 BC, Histiaeus wanted to instigate a revolt against the Persians. To send a secret message, he shaved the head of his most trusted slave, tattooed the message on his scalp, waited for the hair to regrow, and sent him off.
          </p>
          <div className="p-3 border-2 border-black bg-[#181922] rounded text-[10px] font-mono text-gray-300">
            🛡️ <strong>Steganography:</strong> The practice of concealing a message, file, or image *within* another file or medium. There is no mathematical scrambling; the security relies entirely on **secrecy of existence**.
          </div>
        </div>

        {/* Right Side: Interactive Shaved Head illustration */}
        <div className="col-span-1 md:col-span-7">
          <div className="doodle-card p-4 border-[#FF3B30]">
            <div className="flex items-center justify-between pb-2 border-b border-black mb-3">
              <span className="text-[9px] font-mono text-gray-400 uppercase font-black">
                Ancient Steganography Pipeline Simulator
              </span>
              <span className="text-[9px] font-mono text-[#FF3B30] font-black uppercase">
                [ STAGE 0{slaveStage + 1} / 04 ]
              </span>
            </div>

            {/* Slave Visual Graphic */}
            <div className="border-2 border-black bg-black rounded-lg min-h-[190px] flex items-center justify-center text-center mb-3 overflow-hidden relative shadow-[3px_3px_0px_#000]">
              <img
                src="/slave.png"
                alt="Slave Messenger Illustration"
                className="w-full h-full object-contain p-2 max-h-[180px]"
              />
              {/* Dynamic scalp overlay representing tattoo */}
              {slaveStage === 1 && (
                <div className="absolute top-[32%] left-[48%] transform -translate-x-1/2 bg-yellow-500/90 border border-black px-1.5 py-0.5 rounded font-mono text-[8px] text-black font-black rotate-3 animate-pulse">
                  📜 REBEL NOW
                </div>
              )}
              {slaveStage === 2 && (
                <div className="absolute top-[28%] left-[48%] transform -translate-x-1/2 text-gray-500 text-[10px] font-bold">
                  💇‍♂️ *Hair Regrowth Active*
                </div>
              )}
              {slaveStage === 3 && (
                <div className="absolute top-[32%] left-[48%] transform -translate-x-1/2 bg-yellow-500 border border-black px-1.5 py-0.5 rounded font-mono text-[8px] text-black font-black rotate-3">
                  📜 REBEL NOW
                </div>
              )}
              <div className="absolute top-2 right-2 bg-black border border-[#FF3B30] px-2 py-0.5 rounded text-[8px] text-[#FF3B30] font-mono font-black uppercase">
                {slaveSteps[slaveStage].title}
              </div>
            </div>

            <p className="text-[10px] font-mono text-gray-300 min-h-[40px] leading-relaxed mb-3 p-2 bg-black/40 rounded border border-gray-900">
              ℹ️ {slaveSteps[slaveStage].caption}
            </p>

            {/* Steps Selector buttons */}
            <div className="flex gap-2">
              {slaveSteps.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setSlaveStage(idx)}
                  className={`flex-1 py-2 text-[9px] font-mono border-2 border-black rounded transition-all cursor-pointer ${
                    slaveStage === idx
                      ? "bg-black text-[#FF3B30] font-black shadow-[2px_2px_0px_#FF3B30]"
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
          Steganography is about hiding the existence of a message. Click next to see how we scramble it using Caesar's Cipher.
        </span>
        <button
          onClick={onNext}
          className="px-6 py-2.5 doodle-btn doodle-btn-red text-[10px] font-black uppercase border-2 border-black cursor-pointer"
        >
          Next: Caesar Shift Cipher →
        </button>
      </div>
    </div>
  );
}
