"use client";

import { useState } from "react";
import { Key } from "lucide-react";

export default function Section10Modern({ onNext }) {
  const [activeTab, setActiveTab] = useState("symmetric");

  const symmDoodle = `     [ Alice ] ➔ 🔑 ➔ [ Bob ]
                 ▲
           ( Eve Steals Key )
           "Hacker intercepted key!
            Easiest hack of my life."
           💻 ASCII Eve: ( ¬‿¬) *smug*`;

  const asymmDoodle = `     Alice: Encrypts with Bob's Public Key 🔓
     Bob:   Decrypts with Bob's Private Key 🔑
                 ▲
           ( Eve Steals Public Key )
           "Can't decrypt the message!
            Math is too strong."
           💻 ASCII Eve: (╥﹏╥) *sad*`;

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-12 swiss-grid relative">
      {/* Slide Header */}
      <div className="flex justify-between items-baseline border-b-[3px] border-black pb-4">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-gray-400">
          <Key className="w-4 h-4 text-[#007AFF]" />
          <span>[ CHAPTER 09: SYMMETRIC VS ASYMMETRIC CRYPTOGRAPHY ]</span>
        </div>
        <span className="swiss-badge text-[10px] border-2 border-black">
          SLIDE 11 / 16
        </span>
      </div>

      {/* Main Content Grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-12 items-center my-6 max-w-5xl mx-auto w-full">
        {/* Left Side: Explanation */}
        <div className="col-span-1 md:col-span-5 flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl font-space font-black uppercase text-white leading-none mb-6">
            Two Keys, <br />
            <span className="px-3 bg-[#007AFF] text-white border-[3px] border-black inline-block transform rotate-1 shadow-[3px_3px_0px_#000] rounded">
              One Secret
            </span>
          </h2>
          
          <p className="text-gray-400 font-mono text-xs leading-relaxed mb-6">
            In traditional systems, cryptography required sharing the key beforehand. This posed a security risk: how do you share the key safely without someone intercepting it?
          </p>

          {/* Toggle Tabs */}
          <div className="flex gap-2.5">
            <button
              onClick={() => setActiveTab("symmetric")}
              className={`flex-1 py-3 text-xs font-space font-black uppercase border-2 border-black cursor-pointer transition-all duration-100 rounded ${
                activeTab === "symmetric"
                  ? "bg-black text-[#FF3B30] shadow-[3px_3px_0px_#FF3B30]"
                  : "bg-[#181922] text-gray-400 hover:text-white"
              }`}
            >
              1. Symmetric (Shared Key)
            </button>
            <button
              onClick={() => setActiveTab("asymmetric")}
              className={`flex-1 py-3 text-xs font-space font-black uppercase border-2 border-black cursor-pointer transition-all duration-100 rounded ${
                activeTab === "asymmetric"
                  ? "bg-black text-[#34C759] shadow-[3px_3px_0px_#34C759]"
                  : "bg-[#181922] text-gray-400 hover:text-white"
              }`}
            >
              2. Asymmetric (Public/Private)
            </button>
          </div>
        </div>

        {/* Right Side: Interactive Comic Node */}
        <div className="col-span-1 md:col-span-7">
          <div className={`doodle-card p-6 ${activeTab === "symmetric" ? "border-[#FF3B30]" : "border-[#34C759]"}`}>
            <div className="flex items-center justify-between pb-3 border-b-2 border-black mb-4">
              <span className="text-[10px] font-mono text-gray-400 uppercase">
                Alice & Bob Key Exchange simulator
              </span>
              <span className={`text-[10px] font-mono font-black uppercase ${activeTab === "symmetric" ? "text-[#FF3B30]" : "text-[#34C759]"}`}>
                {activeTab === "symmetric" ? "[ SECURITY LEVEL: DANGER ]" : "[ SECURITY LEVEL: SECURE ]"}
              </span>
            </div>

            {/* ASCII visualization */}
            <div className="p-4 border-2 border-black bg-[#0E0F12] rounded-lg min-h-[160px] flex items-center justify-center mb-4">
              <pre className="text-[10px] text-gray-300 font-mono leading-tight whitespace-pre bg-transparent border-0 p-0 m-0 w-full overflow-x-auto">
                {activeTab === "symmetric" ? symmDoodle : asymmDoodle}
              </pre>
            </div>

            {/* Text description */}
            <div className="p-3.5 border border-black bg-black/40 rounded text-xs font-mono leading-relaxed text-gray-300">
              {activeTab === "symmetric" ? (
                <p>
                  ❌ <strong>Symmetric:</strong> Fast, but vulnerable. Sharing the single key over email is like tape-recording your safe combination to the front door.
                </p>
              ) : (
                <p>
                  ✅ <strong>Asymmetric:</strong> Bob publishes his public key (safe for everyone to see). Alice encrypts with it. Only Bob's private key (kept safe on Bob's computer) can decrypt it.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="flex justify-between items-center border-t-[3px] border-black pt-4">
        <span className="text-xs font-mono text-gray-500">
          Key architecture comparison complete. Tap next to review the digital signature pipeline.
        </span>
        <button
          onClick={onNext}
          className="px-6 py-3 doodle-btn doodle-btn-magenta text-xs font-black uppercase tracking-wider text-white border-2 border-black cursor-pointer"
        >
          See Sign Pipeline
        </button>
      </div>
    </div>
  );
}
