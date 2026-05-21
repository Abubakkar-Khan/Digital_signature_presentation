"use client";

import { useState } from "react";
import { History, ShieldAlert, Key } from "lucide-react";

export default function Section9Caesar({ onNext }) {
  const [caesarShift, setCaesarShift] = useState(3);
  const [inputText, setInputText] = useState("HELLO SAJID");

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

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const shiftedAlphabet = alphabet.map((char) => {
    const code = char.charCodeAt(0);
    return String.fromCharCode(((code - 65 + caesarShift) % 26) + 65);
  });

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 md:p-8 swiss-grid relative overflow-hidden bg-[#0A0B0D]">
      {/* Slide Header */}
      <div className="flex justify-between items-baseline border-b-2 border-black pb-2 mb-2">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-gray-400">
          <History className="w-4 h-4 text-[#FFCC00]" />
          <span>[ CHAPTER 09: ANCIENT HISTORY - THE SYMMETRIC SHIFT ]</span>
        </div>
        <span className="swiss-badge text-[10px] border-2 border-black">
          SLIDE 25 / 30
        </span>
      </div>

      {/* Main Grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 items-center my-auto overflow-hidden">
        {/* Left Side: Caesar Shift context */}
        <div className="col-span-1 md:col-span-5 flex flex-col justify-center">
          <span className="px-2 py-0.5 text-[10px] font-mono text-black bg-[#FFCC00] border border-black uppercase w-max mb-3">
            SYMMETRIC KEY CRYPTOGRAPHY
          </span>
          <h2 className="text-2xl md:text-5xl font-space font-black uppercase text-white leading-none mb-3">
            The Caesar <br />
            <span className="px-2 py-0.5 bg-[#FFCC00] text-black border-2 border-black inline-block transform -rotate-1 shadow-[2px_2px_0px_#000] rounded">
              Cipher Shift
            </span>
          </h2>
          <p className="text-gray-400 font-mono text-xs leading-relaxed mb-4">
            Julius Caesar secured his military communications by shifting each letter of the plaintext by a fixed number of positions down the alphabet. His officers knew the shift key, allowing them to decrypt it easily.
          </p>
          <div className="p-3 border-2 border-black bg-[#181922] rounded text-[10px] font-mono text-gray-300">
            🔑 <strong>Symmetric:</strong> Single shared secret key. If the enemy captures the key (or performs a frequency analysis of letters), the entire communication security collapses.
          </div>
        </div>

        {/* Right Side: Interactive Caesar Cipher Tool */}
        <div className="col-span-1 md:col-span-7">
          <div className="doodle-card p-4 border-[#FFCC00]">
            <div className="flex items-center justify-between pb-2 border-b border-black mb-3">
              <span className="text-[9px] font-mono text-gray-400 uppercase font-black">
                Interactive Caesar Shift Tool
              </span>
              <span className="text-[9px] font-mono text-[#FFCC00] font-bold">
                [ KEY SHIFT = {caesarShift} ]
              </span>
            </div>

            <div className="space-y-4">
              {/* Text Inputs */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[8px] font-mono text-gray-500 uppercase block mb-1">
                    Plaintext input (Type here):
                  </label>
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value.toUpperCase())}
                    className="w-full p-2 border-2 border-black rounded bg-[#0E0F12] text-xs text-white font-mono outline-none"
                  />
                </div>
                <div>
                  <label className="text-[8px] font-mono text-gray-500 uppercase block mb-1">
                    Ciphertext output:
                  </label>
                  <div className="p-2 border-2 border-black bg-black rounded text-xs font-mono text-[#FF3B30] font-black tracking-widest min-h-[34px] truncate">
                    {encryptCaesar(inputText, caesarShift) || "EMPTY"}
                  </div>
                </div>
              </div>

              {/* Slider for shift amount */}
              <div>
                <label className="text-[8px] font-mono text-gray-500 uppercase block mb-1 flex justify-between">
                  <span>Shift Key Amount (0 to 25):</span>
                  <span className="text-[#FFCC00] font-bold">POSITIONS: {caesarShift}</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="25"
                  value={caesarShift}
                  onChange={(e) => setCaesarShift(parseInt(e.target.value))}
                  className="w-full accent-[#FFCC00] cursor-pointer"
                />
              </div>

              {/* Visual Shift Alphabet Map */}
              <div className="p-3 border-2 border-black bg-[#0E0F12] rounded-lg">
                <span className="text-[8px] font-mono text-gray-500 uppercase block mb-1.5">
                  Visual Alphabet Key Mapping Map (Alphabet rotation)
                </span>
                
                <div className="flex flex-col gap-1 text-[8px] font-mono select-none overflow-x-auto pb-1">
                  <div className="flex gap-0.5">
                    <span className="w-10 text-gray-600 font-bold uppercase shrink-0">PLAIN:</span>
                    {alphabet.map((char, idx) => (
                      <span key={idx} className="w-4 h-4 border border-gray-800 text-center flex items-center justify-center font-bold text-gray-400 bg-gray-900 rounded-sm">
                        {char}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-0.5">
                    <span className="w-10 text-[#FFCC00] font-bold uppercase shrink-0">SHIFT:</span>
                    {shiftedAlphabet.map((char, idx) => {
                      const isShifted = caesarShift > 0;
                      return (
                        <span key={idx} className={`w-4 h-4 border text-center flex items-center justify-center font-bold rounded-sm ${
                          isShifted ? "border-[#FFCC00] text-black bg-[#FFCC00]" : "border-gray-800 text-gray-500"
                        }`}>
                          {char}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-1.5 p-2 bg-[#FFCC00]/10 border border-[#FFCC00]/30 rounded text-[9px] font-mono text-[#FFCC00]">
                <ShieldAlert className="w-4 h-4 shrink-0" />
                <div>
                  <strong>Modern Vulnerability:</strong> Standard computers can crack this symmetric cipher via frequency analysis or brute-force in less than 1 microsecond. Caesar thought this was absolute security!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="flex justify-between items-center border-t-2 border-black pt-2 mt-2">
        <span className="text-[10px] font-mono text-gray-500">
          Caesar's shift is simple and quick. Let's compare Symmetric keys vs Asymmetric keypairs.
        </span>
        <button
          onClick={onNext}
          className="px-6 py-2.5 doodle-btn doodle-btn-magenta text-[10px] font-black uppercase border-2 border-black cursor-pointer"
        >
          Compare Keysystems →
        </button>
      </div>
    </div>
  );
}
