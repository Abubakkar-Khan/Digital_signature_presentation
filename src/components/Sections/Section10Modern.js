"use client";

import { useState } from "react";
import { Key, Lock, Unlock } from "lucide-react";

export default function Section10Modern({ onNext }) {
  const [activeTab, setActiveTab] = useState("symmetric");

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 md:p-6 swiss-grid relative overflow-hidden">
      {/* Slide Header */}
      <div className="flex justify-between items-baseline border-b-2 border-black pb-2 mb-2">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-gray-400">
          <Key className="w-4 h-4 text-[#007AFF]" />
          <span>[ CHAPTER 18: DEFINING MODERN ENCRYPTION ]</span>
        </div>
        <span className="swiss-badge text-[10px] border-2 border-black">
          SLIDE 21 / 26
        </span>
      </div>

      {/* Main Content Grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-6 items-center my-auto overflow-hidden">
        {/* Left Side: Explanation */}
        <div className="col-span-1 md:col-span-5 flex flex-col justify-center">
          <h2 className="text-2xl md:text-5xl font-space font-black uppercase text-white leading-none mb-4">
            Defining <br />
            <span className="px-3 py-0.5 bg-[#007AFF] text-white border-2 border-black inline-block transform rotate-1 shadow-[2px_2px_0px_#000] rounded">
              Encryption
            </span>
          </h2>
          
          <p className="text-gray-400 font-mono text-xs leading-relaxed mb-4">
            Encryption converts readable data (plaintext) into scrambled code (ciphertext). Decryption reverses this process using mathematical keys.
          </p>

          {/* Toggle Tabs */}
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab("symmetric")}
              className={`flex-1 py-2 text-[10px] font-space font-black uppercase border-2 border-black cursor-pointer transition-all duration-100 rounded ${
                activeTab === "symmetric"
                  ? "bg-black text-[#FF3B30] shadow-[2px_2px_0px_#FF3B30]"
                  : "bg-[#181922] text-gray-400 hover:text-white"
              }`}
            >
              Symmetric Keys
            </button>
            <button
              onClick={() => setActiveTab("asymmetric")}
              className={`flex-1 py-2 text-[10px] font-space font-black uppercase border-2 border-black cursor-pointer transition-all duration-100 rounded ${
                activeTab === "asymmetric"
                  ? "bg-black text-[#34C759] shadow-[2px_2px_0px_#34C759]"
                  : "bg-[#181922] text-gray-400 hover:text-white"
              }`}
            >
              Asymmetric Keys
            </button>
          </div>
        </div>

        {/* Right Side: Interactive Comic Node */}
        <div className="col-span-1 md:col-span-7">
          <div className={`doodle-card p-4 ${activeTab === "symmetric" ? "border-[#FF3B30]" : "border-[#34C759]"}`}>
            <div className="flex items-center justify-between pb-2 border-b border-black mb-3">
              <span className="text-[9px] font-mono text-gray-400 uppercase">
                ALICE & BOB KEY EXCHANGE SYSTEM
              </span>
              <span className={`text-[9px] font-mono font-black uppercase ${activeTab === "symmetric" ? "text-[#FF3B30]" : "text-[#34C759]"}`}>
                {activeTab === "symmetric" ? "[ SHARED PASSWORD ]" : "[ MATHEMATICAL KEYPAIR ]"}
              </span>
            </div>

            {/* Visual representation */}
            <div className="p-3 border-2 border-black bg-[#0E0F12] rounded-lg min-h-[120px] flex flex-col justify-center items-center mb-3">
              {activeTab === "symmetric" ? (
                <div className="text-center space-y-2">
                  <div className="flex justify-center gap-4 text-xs font-mono">
                    <span className="text-gray-300">🔓 Alice</span>
                    <span className="text-[#FF3B30]">🔑 (Same Key)</span>
                    <span className="text-gray-300">Bob 🔒</span>
                  </div>
                  <p className="text-[9px] font-mono text-red-500 font-bold max-w-[320px] mx-auto">
                    ⚠️ DANGER: If Eve intercepts the single key during exchange, she can read all communication.
                  </p>
                </div>
              ) : (
                <div className="text-center space-y-2">
                  <div className="flex justify-center gap-4 text-xs font-mono">
                    <span className="text-gray-300">🔓 Public Key (Bob)</span>
                    <span className="text-[#34C759]">➔</span>
                    <span className="text-gray-300">Private Key (Bob) 🔑</span>
                  </div>
                  <p className="text-[9px] font-mono text-green-500 font-bold max-w-[320px] mx-auto">
                    🛡️ SECURE: Anyone can encrypt using Bob's public key. But only Bob's secret private key can decrypt.
                  </p>
                </div>
              )}
            </div>

            {/* Text description */}
            <div className="p-3 border border-black bg-black/40 rounded text-[10px] font-mono leading-relaxed text-gray-300">
              {activeTab === "symmetric" ? (
                <p>
                  ❌ <strong>Symmetric:</strong> Single password system. Fast but vulnerable to sniffing. If the key leaks, security fails.
                </p>
              ) : (
                <p>
                  ✅ <strong>Asymmetric:</strong> Public/Private key pair. Essential for signatures. Proves authentication and guarantees absolute integrity.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="flex justify-between items-center border-t-2 border-black pt-2 mt-2">
        <span className="text-[10px] font-mono text-gray-500">
          Key architecture comparison complete. Tap next to review the digital signature pipeline.
        </span>
        <button
          onClick={onNext}
          className="px-6 py-2.5 doodle-btn doodle-btn-magenta text-[10px] font-black uppercase border-2 border-black cursor-pointer"
        >
          See Sign Pipeline
        </button>
      </div>
    </div>
  );
}
