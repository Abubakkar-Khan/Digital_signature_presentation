"use client";

import { Key, Lock, Unlock, ArrowRight, ShieldCheck } from "lucide-react";

export default function SectionEncryptionDefinition({ onNext }) {
  return (
    <div className="w-full h-full flex flex-col justify-between p-4 md:p-8 swiss-grid relative overflow-hidden bg-[#0A0B0D]">
      {/* Main Content */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 items-center my-auto overflow-hidden">
        
        {/* Left Side: General Definition */}
        <div className="col-span-1 md:col-span-5 flex flex-col justify-center">
          <span className="px-2 py-0.5 text-[10px] font-mono text-white bg-[#007AFF] border border-black uppercase w-max mb-3">
            CORE PRINCIPLE
          </span>
          <h2 className="text-3xl md:text-5xl font-space font-black uppercase text-white leading-none mb-4">
            What is <br />
            <span className="px-3 py-0.5 bg-[#007AFF] text-white border-2 border-black inline-block transform rotate-1 shadow-[2px_2px_0px_#000] rounded">
              Encryption?
            </span>
          </h2>
          <p className="text-gray-400 font-mono text-xs leading-relaxed mb-4">
            Encryption is the fundamental practice of converting <strong className="text-white">readable plaintext</strong> into <strong className="text-[#007AFF]">unreadable ciphertext</strong> using a mathematical key. Only parties holding the corresponding key can decrypt it back into plain, readable format.
          </p>

          {/* Vocabulary Box */}
          <div className="p-4 border-2 border-black bg-black rounded-lg text-xs font-mono space-y-2 shadow-[2px_2px_0px_#000]">
            <div className="flex justify-between border-b border-gray-950 pb-1">
              <span className="text-gray-500 font-bold">📄 Plaintext:</span>
              <span className="text-white font-bold">Original Message</span>
            </div>
            <div className="flex justify-between border-b border-gray-950 pb-1">
              <span className="text-gray-500 font-bold">🔒 Ciphertext:</span>
              <span className="text-[#AF52DE] font-bold">Scrambled Payloads</span>
            </div>
            <div className="flex justify-between border-b border-gray-950 pb-1">
              <span className="text-gray-500 font-bold">🔑 Key:</span>
              <span className="text-[#FFCC00] font-bold">Secret Password/Exponent</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 font-bold">⚙️ Algorithm:</span>
              <span className="text-[#007AFF] font-bold">Mathematical Formula</span>
            </div>
          </div>
        </div>

        {/* Right Side: Simple Block Diagram Schematic */}
        <div className="col-span-1 md:col-span-7">
          <div className="doodle-card p-6 border-[#007AFF] min-h-[270px] flex flex-col justify-between">
            <div className="flex items-center justify-between pb-2 border-b border-black mb-4">
              <span className="text-[9px] font-mono text-gray-400 uppercase font-black">
                Encryption Pipeline Schematic
              </span>
              <span className="text-[9px] font-mono text-[#007AFF] font-black uppercase">
                [ GENERAL PIPELINE ]
              </span>
            </div>

            {/* Simple Graphic Blocks Flow */}
            <div className="flex flex-col gap-4">
              
              {/* Row 1: Plaintext to Ciphertext */}
              <div className="flex items-center justify-between bg-black/40 border border-gray-900 p-3 rounded-lg">
                <div className="text-center w-24 shrink-0">
                  <span className="text-[8px] font-mono text-gray-500 block uppercase">PLAINTEXT</span>
                  <span className="font-mono text-[11px] text-white font-bold bg-[#181922] px-2 py-0.5 rounded border border-black">
                    "HELLO"
                  </span>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-[#007AFF] animate-pulse" />
                  <span className="text-[7.5px] font-mono text-[#007AFF] uppercase font-bold mt-1">
                    ⚙️ ENCRYPT [🔑 KEY]
                  </span>
                </div>

                <div className="text-center w-28 shrink-0">
                  <span className="text-[8px] font-mono text-gray-500 block uppercase">CIPHERTEXT</span>
                  <span className="font-mono text-[11px] text-[#AF52DE] font-bold bg-[#181922] px-2 py-0.5 rounded border border-black tracking-widest">
                    "X9kL#"
                  </span>
                </div>
              </div>

              {/* Row 2: Ciphertext to Plaintext */}
              <div className="flex items-center justify-between bg-black/40 border border-gray-900 p-3 rounded-lg">
                <div className="text-center w-24 shrink-0">
                  <span className="text-[8px] font-mono text-gray-500 block uppercase">CIPHERTEXT</span>
                  <span className="font-mono text-[11px] text-[#AF52DE] font-bold bg-[#181922] px-2 py-0.5 rounded border border-black tracking-widest">
                    "X9kL#"
                  </span>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-[#34C759] animate-pulse" />
                  <span className="text-[7.5px] font-mono text-[#34C759] uppercase font-bold mt-1">
                    ⚙️ DECRYPT [🔑 KEY]
                  </span>
                </div>

                <div className="text-center w-28 shrink-0">
                  <span className="text-[8px] font-mono text-gray-500 block uppercase">PLAINTEXT</span>
                  <span className="font-mono text-[11px] text-white font-bold bg-[#181922] px-2 py-0.5 rounded border border-black">
                    "HELLO"
                  </span>
                </div>
              </div>

            </div>

            {/* Bottom status readout */}
            <div className="mt-4 p-2 bg-[#34C759]/10 border border-[#34C759]/30 rounded text-[9px] font-mono text-[#34C759] text-center flex items-center justify-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              <span>Confidentiality Verified: Unauthenticated third-parties cannot read ciphertext without the secret key.</span>
            </div>

          </div>
        </div>

      </div>

      {/* Footer bar */}
      <div className="flex justify-between items-center border-t-2 border-black pt-2 mt-2">
        <span className="text-[10px] font-mono text-gray-500">
          General encryption definition completed. Click next to explore ancient history ciphers.
        </span>
        <button
          onClick={onNext}
          className="px-6 py-2.5 doodle-btn doodle-btn-blue text-[10px] font-black uppercase border-2 border-black cursor-pointer"
        >
          Next: Shaved Head Steganography →
        </button>
      </div>
    </div>
  );
}
