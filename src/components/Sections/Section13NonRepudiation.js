"use client";

import { ShieldAlert, Award } from "lucide-react";

export default function Section13NonRepudiation({ onNext }) {
  return (
    <div className="w-full h-full flex flex-col justify-between p-4 md:p-6 swiss-grid relative overflow-hidden">
      {/* Slide Header */}
      <div className="flex justify-between items-baseline border-b-2 border-black pb-2 mb-2">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-gray-400">
          <ShieldAlert className="w-4 h-4 text-[#FF3B30]" />
          <span>[ CHAPTER 12: CRYPTOGRAPHIC NON-REPUDIATION IN ACTION ]</span>
        </div>
        <span className="swiss-badge text-[10px] border-2 border-black">
          SLIDE 25 / 27
        </span>
      </div>

      {/* Main Grid - Strict Viewport Scale */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 items-center my-auto overflow-hidden">
        {/* Left Side: Gavel and explanation */}
        <div className="col-span-1 md:col-span-6 flex flex-col justify-center overflow-hidden">
          <h2 className="text-2xl md:text-4xl font-space font-black uppercase text-white leading-none mb-3">
            No Backtracking: <br />
            <span className="px-2 py-0.5 bg-[#FF3B30] text-white border-2 border-black inline-block transform -rotate-1 shadow-[2px_2px_0px_#000] rounded">
              Non-Repudiation
            </span>
          </h2>

          <p className="text-gray-400 font-mono text-[10px] leading-relaxed mb-4">
            If Hamza signs the database contract with his private key, he cannot say <em>"it was not me"</em> or <em>"someone forged my scribbled ink."</em> The private key belongs strictly to him, and the math proves it.
          </p>

          <div className="p-3 border-2 border-black bg-[#181922] rounded text-[10px] font-mono text-gray-300">
            ⚖️ <strong>Legal Precedent:</strong> Under ESIGN (US) and eIDAS (EU), cryptographic verification serves as legally binding proof of origin. If verification matches, the court accepts it as absolute proof.
          </div>
        </div>

        {/* Right Side: Verification flow schema card */}
        <div className="col-span-1 md:col-span-6">
          <div className="doodle-card p-4 border-[#FF3B30]">
            <div className="flex items-center justify-between pb-2 border-b border-black mb-3">
              <span className="text-[9px] font-mono text-gray-400 uppercase">
                Courtroom audit log verification
              </span>
              <span className="text-[9px] font-mono text-[#FF3B30] font-black uppercase">
                [ SECURE RECORD ]
              </span>
            </div>

            {/* Visual Flow diagram */}
            <div className="p-3 border-2 border-black bg-[#0E0F12] rounded-lg min-h-[140px] flex flex-col justify-between overflow-hidden">
              <pre className="text-[9px] text-[#FFCC00] font-mono leading-tight whitespace-pre bg-transparent border-0 p-0 m-0 w-full text-center">
                {`  [ HAMZA'S KEYCHAIN ] ➔ 🔑 [Private Key]
                                │
                          ✍️ [Signature]
                                │
   ⚖️ [Court] ➔ Verifies with 🔓 [Public Key] ➔ MATCH!`}
              </pre>

              <div className="p-2 border border-black bg-black rounded text-[9px] text-center font-mono text-[#34C759] mt-2">
                🔒 VERDICT: Signature valid. Defendant Hamza is liable.
              </div>
            </div>

            {/* Meme comment bubble */}
            <div className="mt-3 p-2 bg-[#181922] border border-black text-[9px] font-mono text-gray-500 italic rounded">
              💬 <strong>Meme logic:</strong> Hamza: "Someone hacked my cat and signed it!" Judge: "Private key was verified. Pay the client."
            </div>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="flex justify-between items-center border-t-2 border-black pt-2 mt-2">
        <span className="text-[10px] font-mono text-gray-500">
          Non-Repudiation timeline saved. Click next to review the DocDroc visual schematic.
        </span>
        <button
          onClick={onNext}
          className="px-6 py-2.5 doodle-btn doodle-btn-blue text-[10px] font-black uppercase border-2 border-black cursor-pointer"
        >
          See DocDroc Blueprint
        </button>
      </div>
    </div>
  );
}
