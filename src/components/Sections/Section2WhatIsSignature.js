"use client";

import { FileText, Feather, ShieldAlert, CheckCircle } from "lucide-react";

export default function Section2WhatIsSignature({ onNext }) {
  return (
    <div className="w-full h-full flex flex-col justify-between p-4 md:p-8 swiss-grid relative overflow-hidden">
      {/* Slide Header */}
      <div className="flex justify-between items-baseline border-b-2 border-black pb-2 mb-4">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-gray-400">
          <Feather className="w-4 h-4 text-[var(--swiss-red)]" />
          <span>[ CHAPTER 01: THE CORE DEFINITION ]</span>
        </div>
        <span className="swiss-badge text-[10px] border-2 border-black">
          SLIDE 02 / 28
        </span>
      </div>

      {/* Main Grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 items-center my-auto overflow-hidden">
        
        {/* Left Side: Context & Weakness of Ink */}
        <div className="col-span-1 md:col-span-5 flex flex-col justify-center h-full">
          <span className="px-2 py-0.5 text-[10px] font-mono text-white bg-[var(--swiss-red)] border border-black uppercase w-max mb-3">
            THE ORIGINAL CONCEPT
          </span>
          <h2 className="text-3xl md:text-5xl font-space font-black uppercase text-white leading-none mb-4">
            What is a <br />
            <span className="px-3 py-0.5 bg-[var(--swiss-red)] text-white border-2 border-black inline-block transform rotate-1 shadow-[3px_3px_0px_#000] rounded">
              Signature?
            </span>
          </h2>
          <p className="text-gray-400 font-mono text-xs leading-relaxed mb-4">
            For thousands of years, a signature has been a personal mark—ink on paper—proving that you read, authorized, and committed to a document.
          </p>

          {/* The Ink Signature Box */}
          <div className="doodle-card p-4 border-[#FF3B30] bg-[#0E0F12] relative overflow-hidden">
            <span className="text-[8px] font-mono text-gray-500 uppercase block mb-1">HANDWRITTEN WET INK (PAPER)</span>
            <div className="py-4 text-center font-space text-3xl italic text-gray-300 border border-dashed border-gray-800 rounded font-normal select-none">
              Hamza Khan
            </div>
            
            <div className="mt-3 flex items-start gap-1.5 text-[9px] font-mono text-red-400">
              <ShieldAlert className="w-4 h-4 shrink-0 text-[#FF3B30]" />
              <div>
                <strong>The Paper Weakness:</strong> A paper signature is bound to the *page*, not the *content*. Swap page 1 of a 5-page document, and the signature on page 5 remains valid! It is trivially easy to forge.
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: The Three Pillars of a Signature */}
        <div className="col-span-1 md:col-span-7 flex flex-col gap-4">
          <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest font-black">
            THE THREE ABSOLUTE REQUIREMENTS OF ANY VALID SIGNATURE:
          </span>

          <div className="grid grid-cols-1 gap-3">
            
            {/* Requirement 1: Authentication */}
            <div className="p-3 border-2 border-black rounded bg-[#181922] shadow-[2px_2px_0px_#000] flex gap-3 items-start">
              <div className="p-1.5 border-2 border-black bg-black rounded text-[var(--swiss-yellow)] font-mono font-black text-xs">
                01
              </div>
              <div>
                <h3 className="text-xs font-space font-black uppercase text-white mb-0.5">
                  1. Authentication (Identity)
                </h3>
                <p className="text-[10px] font-mono text-gray-400 leading-snug">
                  It must mathematically prove exactly *who* signed the document. Impersonation or copying a signature must be physically impossible.
                </p>
              </div>
            </div>

            {/* Requirement 2: Integrity */}
            <div className="p-3 border-2 border-black rounded bg-[#181922] shadow-[2px_2px_0px_#000] flex gap-3 items-start">
              <div className="p-1.5 border-2 border-black bg-black rounded text-[#34C759] font-mono font-black text-xs">
                02
              </div>
              <div>
                <h3 className="text-xs font-space font-black uppercase text-white mb-0.5">
                  2. Integrity (Unchanged Content)
                </h3>
                <p className="text-[10px] font-mono text-gray-400 leading-snug">
                  It must prove the document *has not changed a single character* since it was signed. If someone edits a decimal point, the signature must instantly shatter.
                </p>
              </div>
            </div>

            {/* Requirement 3: Non-Repudiation */}
            <div className="p-3 border-2 border-black rounded bg-[#181922] shadow-[2px_2px_0px_#000] flex gap-3 items-start">
              <div className="p-1.5 border-2 border-black bg-black rounded text-[#007AFF] font-mono font-black text-xs">
                03
              </div>
              <div>
                <h3 className="text-xs font-space font-black uppercase text-white mb-0.5">
                  3. Non-Repudiation (Legal Binding)
                </h3>
                <p className="text-[10px] font-mono text-gray-400 leading-snug">
                  The signer *cannot deny* their signature. Since only they hold their secret cryptographic key, they cannot claim: "Someone else signed this for me."
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Footer bar */}
      <div className="flex justify-between items-center border-t-2 border-black pt-2 mt-4">
        <span className="text-[10px] font-mono text-gray-500">
          Concept established. Click next to follow Hamza's story of signature forgery.
        </span>
        <button
          onClick={onNext}
          className="px-6 py-2.5 doodle-btn doodle-btn-magenta text-[10px] font-black uppercase border-2 border-black cursor-pointer animate-pulse"
        >
          Follow Hamza's Story →
        </button>
      </div>
    </div>
  );
}
