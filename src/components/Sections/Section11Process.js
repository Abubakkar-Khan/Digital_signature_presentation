"use client";

import { useState } from "react";
import { Milestone, ArrowRight } from "lucide-react";

export default function Section11Process({ onNext }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "1. Hash the Document",
      subtitle: "PREPARE FINGERPRINT",
      desc: "Alice takes the document payload (e.g. contract.docx) and passes it through SHA-256. This outputs a 256-bit unique hash. Alice cannot encrypt the entire document directly since it's too big, so hashing first makes it super fast.",
      doodle: `   📃 Doc ➔ [SHA-256] ➔ ⚙️ Hash (e3b0c4...)`
    },
    {
      title: "2. Sign the Hash",
      subtitle: "ENCRYPT WITH PRIVATE KEY",
      desc: "Alice encrypts/signs the 256-bit hash using her Private Key. This outputs a encrypted byte string called the Digital Signature. Alice attaches this signature to the document.",
      doodle: `   ⚙️ Hash + 🔑 Private Key ➔ ✍️ Signature`
    },
    {
      title: "3. Transmit",
      subtitle: "SEND THE BUNDLE",
      desc: "Alice sends the original document and the Digital Signature to Bob over the network. Anyone can read the document, but nobody can alter it without breaking the math.",
      doodle: `   [Alice] ➔ 📦 Bundle (Doc + Sig) ➔ [Bob]`
    },
    {
      title: "4. Decrypt & Verify",
      subtitle: "PUBLIC KEY VALIDATION",
      desc: "Bob receives the bundle. Bob takes Alice's Public Key and decrypts the Digital Signature. This yields the original hash Alice calculated at Step 1.",
      doodle: `   ✍️ Signature + 🔓 Public Key ➔ ⚙️ Alice's Hash`
    },
    {
      title: "5. The Match Test",
      subtitle: "INTEGRITY COMPARISON",
      desc: "Bob calculates the SHA-256 hash of the received document himself. He compares his calculated hash with Alice's decrypted hash. If they match 100%, the document is untampered. If they don't, Bob throws it in the trash.",
      doodle: `   ⚙️ Alice's Hash == ⚙️ Bob's Hash ?
   ✅ MATCH ➔ SAFE   ❌ NO MATCH ➔ FRAUD`
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-12 swiss-grid relative">
      {/* Slide Header */}
      <div className="flex justify-between items-baseline border-b-[3px] border-black pb-4">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-gray-400">
          <Milestone className="w-4 h-4 text-[#FF3B30]" />
          <span>[ CHAPTER 10: THE CRYPTOGRAPHIC PIPELINE WORKFLOW ]</span>
        </div>
        <span className="swiss-badge text-[10px] border-2 border-black">
          SLIDE 20 / 24
        </span>
      </div>

      {/* Main Content Grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-12 items-center my-6 max-w-5xl mx-auto w-full">
        {/* Left Side: Step selector - Swiss vertical list */}
        <div className="col-span-1 md:col-span-4 flex flex-col gap-2.5">
          <h3 className="text-sm font-mono font-bold text-gray-500 uppercase tracking-widest mb-2">
            Verification Steps
          </h3>
          {steps.map((st, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-3 text-left text-xs font-mono font-black border-2 border-black transition-all rounded cursor-pointer ${
                activeStep === idx
                  ? "bg-black text-[#FF3B30] shadow-[3px_3px_0px_#FF3B30]"
                  : "bg-[#181922] text-gray-400 hover:text-gray-200"
              }`}
            >
              0{idx + 1}. {st.title.split(" ").slice(1).join(" ")}
            </button>
          ))}
        </div>

        {/* Right Side: Comic step details */}
        <div className="col-span-1 md:col-span-8">
          <div className="doodle-card p-6">
            <div className="flex items-center justify-between pb-3 border-b-2 border-black mb-4">
              <span className="text-[10px] font-mono text-gray-400 uppercase">
                Step-by-step verification logic
              </span>
              <span className="text-[10px] font-mono text-[#FF3B30] font-black uppercase">
                {steps[activeStep].subtitle}
              </span>
            </div>

            {/* ASCII graphic representation */}
            <div className="p-4 border-2 border-black bg-[#0E0F12] rounded-lg text-center flex items-center justify-center min-h-[100px] mb-4">
              <pre className="text-[11px] text-[#FFCC00] font-mono leading-tight whitespace-pre bg-transparent border-0 p-0 m-0 w-full overflow-x-auto">
                {steps[activeStep].doodle}
              </pre>
            </div>

            {/* Detail explanation */}
            <h3 className="text-base font-space font-black uppercase text-white mb-2">
              {steps[activeStep].title}
            </h3>
            <p className="text-[11px] font-mono text-gray-400 leading-relaxed">
              {steps[activeStep].desc}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center border-t-2 border-black pt-2 mt-2">
        <span className="text-[10px] font-mono text-gray-500">
          Flowchart active. Tap next to review Court Non-Repudiation standards.
        </span>
        <button
          onClick={onNext}
          className="px-6 py-2.5 doodle-btn doodle-btn-blue text-[10px] font-black uppercase border-2 border-black cursor-pointer"
        >
          Court Non-Repudiation
        </button>
      </div>
    </div>
  );
}
