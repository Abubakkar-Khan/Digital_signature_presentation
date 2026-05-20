"use client";

import { useState } from "react";
import { Cpu, HelpCircle } from "lucide-react";

export default function Section5IntroDigital({ onNext }) {
  const [hoveredNode, setHoveredNode] = useState(null);

  const nodes = [
    {
      id: "doc",
      title: "1. The Contract Document",
      desc: "Any digital file (like contract.docx). It contains the raw message payload that needs approval.",
      color: "var(--swiss-blue)",
      meme: "The actual words you promise to fulfill. No modifications allowed."
    },
    {
      id: "hash",
      title: "2. The Hash Function",
      desc: "Takes the entire document and condenses it into a single unique mathematical fingerprint (like SHA-256).",
      color: "var(--swiss-red)",
      meme: "If a single character is modified, the fingerprint changes completely."
    },
    {
      id: "privkey",
      title: "3. The Private Key",
      desc: "A secret key owned exclusively by the signer. Used to encrypt/sign the unique document fingerprint.",
      color: "var(--swiss-green)",
      meme: "Keep this safe. If someone steals it, they can legally sign away your assets."
    },
    {
      id: "pubkey",
      title: "4. The Public Key",
      desc: "A shareable public key. Anyone can use it to decrypt/verify the signature and check if the document matches the hash.",
      color: "var(--swiss-yellow)",
      meme: "Bob uses Alice's public key to verify that Alice was indeed the signer."
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-12 swiss-grid relative">
      {/* Slide Header */}
      <div className="flex justify-between items-baseline border-b-[3px] border-black pb-4">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-gray-400">
          <Cpu className="w-4 h-4 text-[#007AFF]" />
          <span>[ CHAPTER 04: INTRODUCING THE DIGITAL PROTOCOL ]</span>
        </div>
        <span className="swiss-badge text-[10px] border-2 border-black">
          SLIDE 06 / 16
        </span>
      </div>

      {/* Main Grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-12 items-center my-6 max-w-5xl mx-auto w-full">
        {/* Explanation */}
        <div className="col-span-1 md:col-span-5 flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl font-space font-black uppercase text-white leading-none mb-6">
            Enter <br />
            <span className="px-3 bg-[#007AFF] text-white border-[3px] border-black inline-block transform rotate-1 shadow-[3px_3px_0px_#000] rounded">
              Digital Signatures
            </span>
          </h2>
          <p className="text-gray-400 font-mono text-xs leading-relaxed mb-4">
            Instead of storing a picture of scribble pixels, digital signatures use mathematical cryptography. They achieve:
          </p>
          <div className="space-y-4">
            <div className="p-3 border border-black bg-[#181922] rounded shadow-[3px_3px_0px_var(--swiss-blue)]">
              <h4 className="text-xs font-space font-black text-[#007AFF] uppercase">
                🛡️ Integrity (Tamper Proof)
              </h4>
              <p className="text-[10px] font-mono text-gray-400 leading-tight">
                If the document text is edited by even a single comma, the signature validation fails instantly.
              </p>
            </div>
            <div className="p-3 border border-black bg-[#181922] rounded shadow-[3px_3px_0px_var(--swiss-green)]">
              <h4 className="text-xs font-space font-black text-[#34C759] uppercase">
                🔑 Authenticity (Non-Repudiation)
              </h4>
              <p className="text-[10px] font-mono text-gray-400 leading-tight">
                Only the person with the private key could generate the signature. You cannot claim "someone else signed this!"
              </p>
            </div>
          </div>
        </div>

        {/* 2D Block Diagram */}
        <div className="col-span-1 md:col-span-7 flex flex-col justify-center">
          <div className="doodle-card p-6 relative">
            <div className="flex items-center justify-between pb-3 border-b-2 border-black mb-4">
              <span className="text-[10px] font-mono text-gray-400 uppercase">
                Cryptographic Pipeline Node Diagram
              </span>
              <span className="text-[9px] font-mono text-[#007AFF]">
                [ HOVER BLOCKS TO EXPLORE ]
              </span>
            </div>

            {/* Flat Flowchart Blocks */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {nodes.map((node, i) => (
                <div
                  key={node.id}
                  onMouseEnter={() => setHoveredNode(node)}
                  onMouseLeave={() => setHoveredNode(null)}
                  className="p-4 border-2 border-black rounded bg-[#0E0F12] transition-all cursor-pointer relative"
                  style={{
                    boxShadow: hoveredNode?.id === node.id ? `4px 4px 0px 0px ${node.color}` : "2px 2px 0px 0px rgba(0,0,0,1)",
                    borderColor: hoveredNode?.id === node.id ? node.color : "#000"
                  }}
                >
                  <span className="text-[9px] font-mono font-bold block mb-1" style={{ color: node.color }}>
                    STAGE 0{i + 1}
                  </span>
                  <h4 className="text-xs font-space font-black uppercase text-gray-200">
                    {node.id === "doc" ? "📃 Document" : node.id === "hash" ? "⚙️ Hash Fn" : node.id === "privkey" ? "🔑 Private Key" : "🔓 Public Key"}
                  </h4>
                </div>
              ))}
            </div>

            {/* Console Readout */}
            <div className="p-4 border-2 border-black bg-[#0E0F12] rounded-lg min-h-[110px] flex flex-col justify-between">
              {hoveredNode ? (
                <div>
                  <h4 className="text-xs font-space font-black uppercase mb-1" style={{ color: hoveredNode.color }}>
                    {hoveredNode.title}
                  </h4>
                  <p className="text-[11px] font-mono text-gray-300 leading-normal mb-2">
                    {hoveredNode.desc}
                  </p>
                  <p className="text-[9px] font-mono text-gray-500 italic">
                    💡 Meme insight: "{hoveredNode.meme}"
                  </p>
                </div>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-center text-xs font-mono text-gray-500 italic">
                  <HelpCircle className="w-5 h-5 mb-2 text-gray-600" />
                  Hover over any node in the pipeline to see what it does.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="flex justify-between items-center border-t-[3px] border-black pt-4">
        <span className="text-xs font-mono text-gray-500">
          Digital concepts pipeline mapped. Tap next to inspect Stage 2: Hash Functions.
        </span>
        <button
          onClick={onNext}
          className="px-6 py-3 doodle-btn doodle-btn-blue text-xs font-black uppercase tracking-wider text-white border-2 border-black cursor-pointer"
        >
          Check out Hashing
        </button>
      </div>
    </div>
  );
}
