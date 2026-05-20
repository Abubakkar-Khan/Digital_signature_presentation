"use client";

import { useState } from "react";
import { Settings, Activity } from "lucide-react";

export default function Section7ShaDeep({ onNext }) {
  const [conveyorActive, setConveyorActive] = useState(false);
  const [blockIndex, setBlockIndex] = useState(0);

  const blockStates = [
    {
      title: "Input Chunk (512-bit)",
      desc: "The document is padded with zeros and a length indicator, then split into exact 512-bit data blocks.",
      meme: "If the document is too short, we pad it. If it's too long, we slice it. Equality for all data."
    },
    {
      title: "64 Compression Rounds",
      desc: "Each 512-bit block is mixed with constants (derived from the cube roots of first 64 prime numbers) using XOR, rotate right, and addition.",
      meme: "Taking logical operations (AND, XOR, ROTATE) and putting them in a blender 64 times."
    },
    {
      title: "Result: 256-bit Digest",
      desc: "All computed blocks are concatenated together to form a final 32-byte (256-bit) array representation.",
      meme: "Output: 64 hexadecimal characters. Impossible to reverse-engineer."
    }
  ];

  const triggerNextBlock = () => {
    setConveyorActive(true);
    setTimeout(() => {
      setBlockIndex((prev) => (prev + 1) % blockStates.length);
      setConveyorActive(false);
    }, 800);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-12 swiss-grid relative">
      {/* Slide Header */}
      <div className="flex justify-between items-baseline border-b-[3px] border-black pb-4">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-gray-400">
          <Settings className="w-4 h-4 text-[#FF3B30]" />
          <span>[ CHAPTER 06: THE INTERNAL SHA-256 ENGINE ]</span>
        </div>
        <span className="swiss-badge text-[10px] border-2 border-black">
          SLIDE 09 / 16
        </span>
      </div>

      {/* Main Content Grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-12 items-center my-6 max-w-5xl mx-auto w-full">
        {/* Left Side: Technical Info */}
        <div className="col-span-1 md:col-span-5 flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl font-space font-black uppercase text-white leading-none mb-6">
            Inside the <br />
            <span className="px-3 bg-[#FF3B30] text-white border-[3px] border-black inline-block transform rotate-1 shadow-[3px_3px_0px_#000] rounded">
              SHA Grinder
            </span>
          </h2>
          
          <p className="text-gray-400 font-mono text-xs leading-relaxed mb-6">
            SHA-256 doesn't just scramble letters randomly. It performs high-velocity math on binary messages:
          </p>

          <div className="space-y-4">
            <div className="p-3 border-2 border-black bg-[#181922] rounded shadow-[2px_2px_0px_var(--swiss-red)]">
              <h4 className="text-xs font-space font-black uppercase text-[#FF3B30]">
                🔒 1. No Reverse Gears (One-way)
              </h4>
              <p className="text-[10px] font-mono text-gray-400">
                You can easily turn a cow into hamburger patties, but you cannot reconstruct a live cow from patties. That is hashing.
              </p>
            </div>
            <div className="p-3 border-2 border-black bg-[#181922] rounded shadow-[2px_2px_0px_var(--swiss-blue)]">
              <h4 className="text-xs font-space font-black uppercase text-[#007AFF]">
                ⚡ 2. Collision Resistant
              </h4>
              <p className="text-[10px] font-mono text-gray-400">
                Finding two different documents that yield the exact same SHA-256 hash is practically impossible (requires more energy than boiling the earth's oceans).
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: 2D Conveyor Belt Mockup */}
        <div className="col-span-1 md:col-span-7">
          <div className="doodle-card p-6">
            <div className="flex items-center justify-between pb-3 border-b-2 border-black mb-4">
              <span className="text-[10px] font-mono text-gray-400 uppercase">
                SHA conveyor processor simulator
              </span>
              <span className="text-[9px] font-mono text-[#FF3B30] uppercase">
                [ ENG_RUNNING ]
              </span>
            </div>

            {/* Conveyor Belt Graphics */}
            <div className="relative border-2 border-black rounded-lg bg-[#0E0F12] h-[150px] flex items-center justify-around overflow-hidden mb-6">
              <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:16px_16px]" />

              {/* Document block */}
              <div
                className={`p-3 border-2 border-black rounded font-mono text-[10px] text-center font-bold transition-all duration-500 uppercase bg-[#181922] shadow-[2px_2px_0px_var(--swiss-blue)] ${
                  conveyorActive ? "translate-x-12 opacity-0" : "translate-x-0"
                }`}
              >
                📥 File Block <br />
                [512-bit]
              </div>

              {/* Grinder center box */}
              <div className="w-16 h-16 border-4 border-black bg-[#FF3B30] rounded-lg shadow-[4px_4px_0px_#000] flex items-center justify-center flex-col z-10">
                <Activity className="w-8 h-8 text-white animate-spin duration-3000" />
                <span className="text-[8px] font-mono text-white font-black mt-1">ROUND 64</span>
              </div>

              {/* Scrambled hash output block */}
              <div
                className={`p-3 border-2 border-black rounded font-mono text-[9px] text-center font-bold transition-all duration-500 uppercase bg-[#34C759] text-black shadow-[2px_2px_0px_#000] ${
                  conveyorActive ? "translate-x-0 opacity-100" : "translate-x-0"
                }`}
              >
                SHA-Hash 🔑 <br />
                [e3b0c442...]
              </div>
            </div>

            {/* Interactive explanation box */}
            <div className="p-4 border-2 border-black bg-[#0E0F12] rounded-lg min-h-[120px] flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-mono font-black uppercase text-[#FF3B30] block mb-1">
                  CURRENT STAGE: {blockStates[blockIndex].title}
                </span>
                <p className="text-[11px] font-mono text-gray-300 leading-normal mb-2">
                  {blockStates[blockIndex].desc}
                </p>
                <p className="text-[9px] font-mono text-gray-500 italic">
                  💡 Meme quote: "{blockStates[blockIndex].meme}"
                </p>
              </div>

              <div className="flex justify-end mt-4">
                <button
                  onClick={triggerNextBlock}
                  className="px-4 py-2 border-2 border-black bg-[#FF3B30] text-white rounded font-mono font-black text-[10px] uppercase cursor-pointer hover:shadow-[2px_2px_0px_#000]"
                >
                  Step Next Belt Phase
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="flex justify-between items-center border-t-[3px] border-black pt-4">
        <span className="text-xs font-mono text-gray-500">
          Engine overview complete. Tap next to visualize the astronomical scale of key guessing.
        </span>
        <button
          onClick={onNext}
          className="px-6 py-3 doodle-btn doodle-btn-green text-xs font-black uppercase tracking-wider text-black border-2 border-black cursor-pointer"
        >
          See Keyspace Scale
        </button>
      </div>
    </div>
  );
}
