"use client";

import { useState, useEffect } from "react";
import { Cpu } from "lucide-react";

export default function Section6HashExplain({ onNext }) {
  const [inputText, setInputText] = useState("We agree to pay Hamza $100");
  const [hashHex, setHashHex] = useState("");
  const [binaryBits, setBinaryBits] = useState([]);

  // Compute SHA-256 in browser
  useEffect(() => {
    async function calculateHash() {
      if (!inputText) {
        setHashHex("0000000000000000000000000000000000000000000000000000000000000000");
        setBinaryBits(new Array(256).fill(0));
        return;
      }
      try {
        const msgUint8 = new TextEncoder().encode(inputText);
        const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHexStr = hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
        setHashHex(hashHexStr);

        const bits = [];
        hashArray.forEach(b => {
          for (let i = 7; i >= 0; i--) {
            bits.push((b >> i) & 1);
          }
        });
        setBinaryBits(bits);
      } catch (err) {
        console.error(err);
      }
    }
    calculateHash();
  }, [inputText]);

  const loadPreset = (text) => {
    setInputText(text);
  };

  const isTampered = inputText.includes("1000");

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 md:p-6 swiss-grid relative overflow-hidden">
      {/* Slide Header */}
      <div className="flex justify-between items-baseline border-b-2 border-black pb-2 mb-2">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-gray-400">
          <Cpu className="w-4 h-4 text-[#34C759]" />
          <span>[ CHAPTER 05: THE SHA-256 AVALANCHE EFFECT ]</span>
        </div>
        <span className="swiss-badge text-[10px] border-2 border-black">
          SLIDE 13 / 30
        </span>
      </div>

      {/* Main Content Grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-6 items-center my-auto overflow-hidden">
        {/* Left Side: Controls & Input */}
        <div className="col-span-1 md:col-span-4 flex flex-col justify-center overflow-hidden">
          <h2 className="text-xl md:text-3xl font-space font-black uppercase text-white leading-none mb-3">
            The Avalanche <br />
            <span className="px-2 py-0.5 bg-[#34C759] text-black border-2 border-black inline-block transform -rotate-1 shadow-[2px_2px_0px_#000] rounded">
              Matrix
            </span>
          </h2>

          <div className="mb-3">
            <label className="text-[9px] font-mono text-gray-400 uppercase block mb-0.5">
              Edit Contract Input text:
            </label>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type here..."
              className="w-full p-2 border-2 border-black rounded bg-[#0E0F12] text-xs text-gray-200 font-mono outline-none focus:border-[#34C759]"
            />
          </div>

          <div className="space-y-2">
            <button
              onClick={() => loadPreset("We agree to pay Hamza $100 for code")}
              className="w-full p-1.5 text-left text-[10px] font-mono border-2 border-black bg-[#181922] hover:bg-black/40 rounded cursor-pointer flex justify-between items-center"
            >
              <span>1. Pay Hamza $100</span>
              <span className="text-[#34C759] font-bold">[ KALM ]</span>
            </button>
            <button
              onClick={() => loadPreset("We agree to pay Hamza $1000 for code")}
              className="w-full p-1.5 text-left text-[10px] font-mono border-2 border-black bg-[#181922] hover:bg-black/40 rounded cursor-pointer flex justify-between items-center"
            >
              <span>2. Pay Hamza $1000 (Added '0')</span>
              <span className="text-[#FF3B30] font-bold">[ PANIK ]</span>
            </button>
          </div>
        </div>

        {/* Right Side: Massive Bit Matrix and reaction card */}
        <div className="col-span-1 md:col-span-8 grid grid-cols-1 sm:grid-cols-12 gap-4">
          
          {/* Binary Grid (takes 7 columns) */}
          <div className="col-span-1 sm:col-span-7 doodle-card p-3">
            <div className="text-[9px] font-mono text-gray-400 uppercase pb-1 border-b border-black mb-2 flex justify-between">
              <span>SHA-256 Bit Matrix (256-bit)</span>
              <span className="text-[#34C759]">[ LIVE ]</span>
            </div>
            <div className="grid grid-cols-16 gap-[2px] p-1.5 border-2 border-black bg-[#0E0F12] rounded">
              {binaryBits.map((bit, idx) => (
                <div
                  key={idx}
                  className="aspect-square rounded-[1px]"
                  style={{
                    backgroundColor: bit === 1 ? "#34C759" : "#22232B"
                  }}
                  title={`Bit ${idx}: ${bit}`}
                />
              ))}
            </div>
            <div className="p-1 border border-black bg-black rounded font-mono text-[8px] text-[#34C759] truncate select-all mt-2 text-center">
              {hashHex}
            </div>
          </div>

          {/* Reaction face (takes 5 columns) */}
          <div className="col-span-1 sm:col-span-5 flex flex-col">
            <div className={`doodle-card p-3 flex-1 flex flex-col justify-between items-center text-center ${isTampered ? "border-[#FF3B30] shadow-[4px_4px_0px_var(--swiss-red)]" : "border-[#34C759] shadow-[4px_4px_0px_var(--swiss-green)]"}`}>
              <span className="text-[9px] font-mono text-gray-500 uppercase tracking-wider">
                REACTION MONITOR
              </span>

              {isTampered ? (
                <div className="my-auto">
                  <pre className="text-sm font-black text-[#FF3B30] font-mono leading-none mb-2">
                    {` 😱😱😱
 ( ⊙_⊙ )
  "PANIK!"`}
                  </pre>
                  <p className="text-[9px] font-mono text-[#FF3B30] leading-tight font-black uppercase">
                    Scammer added a '0'! Fingerprint flipped completely. Fraud caught!
                  </p>
                </div>
              ) : (
                <div className="my-auto">
                  <pre className="text-sm font-black text-[#34C759] font-mono leading-none mb-2">
                    {` 😎😎😎
 ( ^‿^ )
  "KALM"`}
                  </pre>
                  <p className="text-[9px] font-mono text-[#34C759] leading-tight font-black uppercase">
                    Contract matches original seal signature record. All secure.
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

      <div className="flex justify-between items-center border-t-2 border-black pt-2 mt-2">
        <span className="text-[10px] font-mono text-gray-500">
          Avalanche grid calculator running. Tap next to see the keyspace multiplier scaling calculation.
        </span>
        <button
          onClick={onNext}
          className="px-6 py-2.5 doodle-btn doodle-btn-red text-[10px] font-black uppercase border-2 border-black cursor-pointer"
        >
          See Keyspace Scale
        </button>
      </div>
    </div>
  );
}
