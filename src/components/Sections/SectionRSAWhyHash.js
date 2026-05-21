"use client";

import { useState } from "react";
import { ShieldAlert, Zap, Cpu, FileText, CheckCircle2, XCircle } from "lucide-react";

export default function SectionRSAWhyHash({ onNext }) {
  const [docSize, setDocSize] = useState(5); // In Megabytes

  // Calculations for simulator
  const directTimeSec = docSize * 2.4; // 2.4s per MB for asymmetric encryption
  const hashTimeSec = 0.002 + docSize * 0.004; // hashing is incredibly fast
  
  const directSigSize = docSize; // Direct encrypts the whole document, so size doubles
  const hashSigSize = 256; // 256 bytes (constant) for RSA-2048 signature of a 32-byte hash

  const getFeasibilityDirect = (size) => {
    if (size >= 25) return { text: "CPU LOCKUP / CRASH", color: "text-[#FF3B30] bg-[#FF3B30]/10 border-[#FF3B30]" };
    if (size >= 10) return { text: "EXTREMELY SLOW", color: "text-[#FFCC00] bg-[#FFCC00]/10 border-[#FFCC00]" };
    return { text: "HIGH LATENCY", color: "text-[#FFCC00] bg-[#FFCC00]/10 border-[#FFCC00]" };
  };

  const feasibilityDirect = getFeasibilityDirect(docSize);

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 md:p-6 swiss-grid relative overflow-hidden bg-[#0A0B0D]">
      {/* Slide Header */}
      <div className="flex justify-between items-baseline border-b-2 border-black pb-2 mb-2">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-gray-400">
          <ShieldAlert className="w-4 h-4 text-[#FFCC00]" />
          <span>[ CHAPTER 11: KEY RATIONALE - WHY DO WE HASH BEFORE SIGNING? ]</span>
        </div>
        <span className="swiss-badge text-[10px] border-2 border-black">
          SLIDE 28 / 30
        </span>
      </div>

      {/* Main Grid */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-5 items-center my-auto overflow-hidden">
        
        {/* Left Column: Conceptual Reasons */}
        <div className="col-span-1 lg:col-span-5 flex flex-col justify-center gap-3">
          <div>
            <span className="px-2 py-0.5 text-[9px] font-mono text-black bg-[#FFCC00] border border-black uppercase w-max mb-1.5 block">
              THE CORE DESIGN QUESTIONS
            </span>
            <h2 className="text-xl md:text-3xl font-space font-black uppercase text-white leading-none mb-1">
              Why Not Encrypt <br />
              <span className="px-2 py-0.5 bg-[#FF3B30] text-white border-2 border-black inline-block transform rotate-1 shadow-[2px_2px_0px_#000] rounded">
                The Whole Doc?
              </span>
            </h2>
            <p className="text-gray-400 font-mono text-[10px] leading-relaxed">
              If asymmetric encryption provides security, it seems intuitive to encrypt the entire document with our private key to sign it. Here is why doing that is a catastrophic design mistake:
            </p>
          </div>

          {/* Three Core Reasons */}
          <div className="space-y-2 text-[9px] font-mono">
            {/* Reason 1 */}
            <div className="p-2 border border-gray-800 bg-[#13141C] rounded flex gap-2">
              <Cpu className="w-4 h-4 text-[#FF3B30] shrink-0" />
              <div>
                <strong className="text-white uppercase">1. Asymmetric Math is Slow</strong>
                <p className="text-gray-400 text-[8.5px] mt-0.5">
                  RSA uses complex modular exponentiation of huge numbers. Hashing is **1,000x faster**. Encrypting a 10MB document directly would freeze your computer.
                </p>
              </div>
            </div>

            {/* Reason 2 */}
            <div className="p-2 border border-gray-800 bg-[#13141C] rounded flex gap-2">
              <ShieldAlert className="w-4 h-4 text-[#FFCC00] shrink-0" />
              <div>
                <strong className="text-white uppercase">2. Strict Size Limits</strong>
                <p className="text-gray-400 text-[8.5px] mt-0.5">
                  An RSA 2048-bit key can only encrypt a max of **245 bytes** of data at a time! To encrypt a large file, it has to be split into thousands of blocks, compounding the latency.
                </p>
              </div>
            </div>

            {/* Reason 3 */}
            <div className="p-2 border border-gray-800 bg-[#13141C] rounded flex gap-2">
              <FileText className="w-4 h-4 text-[#007AFF] shrink-0" />
              <div>
                <strong className="text-white uppercase">3. Signature Bloat</strong>
                <p className="text-gray-400 text-[8.5px] mt-0.5">
                  Encrypting a whole document creates a ciphertext that is **equal to or larger than** the original document. Your file size doubles! Hashing first makes signature size constant.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Performance Simulator */}
        <div className="col-span-1 lg:col-span-7 flex flex-col justify-center">
          <div className="doodle-card p-4 border-[#FFCC00]">
            <div className="flex items-center justify-between pb-2 border-b border-black mb-3">
              <span className="text-[9px] font-mono text-gray-400 uppercase font-black">
                Performance Simulator: Direct Encrypt vs Hash-and-Sign
              </span>
              <span className="text-[9px] font-mono text-[#FFCC00] font-black uppercase">
                [ SIMULATOR ACTIVE ]
              </span>
            </div>

            {/* Document Size Slider */}
            <div className="mb-4">
              <div className="flex justify-between items-center text-[8px] font-mono text-gray-500 uppercase mb-1 font-bold">
                <span>Adjust Document Size:</span>
                <span className="text-white">{docSize} MB</span>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                value={docSize}
                onChange={(e) => setDocSize(parseInt(e.target.value))}
                className="w-full accent-[#FFCC00] cursor-pointer"
              />
            </div>

            {/* Comparison Grid */}
            <div className="grid grid-cols-2 gap-4">
              
              {/* Method A: Direct Encrypt */}
              <div className="p-3 border-2 border-black bg-[#0E0F12] rounded-lg flex flex-col justify-between min-h-[160px]">
                <div>
                  <div className="flex items-center justify-between font-mono text-[9px] text-[#FF3B30] uppercase font-black border-b border-gray-900 pb-1 mb-2">
                    <span>A: Direct Asymmetric Sign</span>
                    <XCircle className="w-3.5 h-3.5 text-[#FF3B30]" />
                  </div>
                  <div className="font-mono text-[9px] text-gray-300 space-y-1.5">
                    <div>Encrypts the entire document.</div>
                    <div className="p-1.5 bg-black border border-gray-900 rounded font-mono text-[8.5px] leading-tight space-y-1 text-gray-400">
                      <div>⏱️ Time: <span className="text-white font-bold">{directTimeSec.toFixed(1)} seconds</span></div>
                      <div>📦 Sig Size: <span className="text-white font-bold">{directSigSize} MB</span></div>
                    </div>
                  </div>
                </div>
                <div className={`p-1.5 border text-[8px] text-center font-mono rounded mt-2 font-black ${feasibilityDirect.color}`}>
                  {feasibilityDirect.text}
                </div>
              </div>

              {/* Method B: Hash & Sign */}
              <div className="p-3 border-2 border-black bg-[#0E0F12] rounded-lg flex flex-col justify-between min-h-[160px]">
                <div>
                  <div className="flex items-center justify-between font-mono text-[9px] text-[#34C759] uppercase font-black border-b border-gray-900 pb-1 mb-2">
                    <span>B: Hash & Sign (SHA-256)</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#34C759]" />
                  </div>
                  <div className="font-mono text-[9px] text-gray-300 space-y-1.5">
                    <div>Hashes first, then encrypts the hash.</div>
                    <div className="p-1.5 bg-black border border-gray-900 rounded font-mono text-[8.5px] leading-tight space-y-1 text-gray-400">
                      <div>⏱️ Time: <span className="text-[#34C759] font-bold">Instant (&lt; {hashTimeSec < 0.1 ? "0.01" : hashTimeSec.toFixed(2)}s)</span></div>
                      <div>📦 Sig Size: <span className="text-[#34C759] font-bold">{hashSigSize} Bytes</span></div>
                    </div>
                  </div>
                </div>
                <div className="p-1.5 bg-[#34C759]/10 border border-[#34C759] text-[#34C759] text-[8px] text-center font-mono rounded mt-2 font-black">
                  ⚡ PERFECT INTEGRITY SEAL
                </div>
              </div>

            </div>

            {/* Rationale conclusion box */}
            <div className="mt-3 p-2 bg-[#181922] border border-black rounded text-[9px] font-mono text-gray-400">
              💡 <strong>The Cryptographic Standard:</strong> By hashing the document first, we reduce any size file to a small, fixed **32-byte digest (SHA-256)**. Then we only encrypt that tiny digest. The math signature is small, computation is instant, and security is perfect.
            </div>
          </div>
        </div>

      </div>

      {/* Footer bar */}
      <div className="flex justify-between items-center border-t-2 border-black pt-2 mt-2">
        <span className="text-[10px] font-mono text-gray-500">
          The Hash-then-Sign pipeline is the foundation of all modern security. Tap next to review the DocDroc XML document blueprint.
        </span>
        <button
          onClick={onNext}
          className="px-6 py-2.5 doodle-btn doodle-btn-yellow text-[10px] font-black uppercase border-2 border-black cursor-pointer"
        >
          See DocDroc Blueprint →
        </button>
      </div>
    </div>
  );
}
