"use client";

import { useState } from "react";
import { Key, Lock, Unlock, ArrowRight, Shuffle } from "lucide-react";

const SYMMETRIC_STEPS = [
  { label: "Plaintext", value: "Hello Hamza", icon: "📄", color: "#FFCC00" },
  { label: "Shared Key", value: "🔑 key_abc123", icon: "🔑", color: "#FF3B30" },
  { label: "Cipher (AES)", value: "7f4a9c...", icon: "⚙️", color: "#007AFF" },
  { label: "Ciphertext", value: "X9kL##@!mN3", icon: "🔒", color: "#AF52DE" },
  { label: "Decrypt (same key)", value: "Hello Hamza", icon: "🔓", color: "#34C759" },
];

const ASYMMETRIC_PROPS = [
  { key: "Private Key 🔑", desc: "Held ONLY by the owner. Used to SIGN or DECRYPT. Never shared.", color: "#FF3B30" },
  { key: "Public Key 🔓", desc: "Shared with everyone. Used to VERIFY or ENCRYPT. Safe to publish.", color: "#34C759" },
  { key: "RSA / ECC", desc: "Modern algorithms that generate mathematically linked keypairs.", color: "#007AFF" },
];

export default function SectionEncryptionDefinition({ onNext }) {
  const [tab, setTab] = useState("symmetric");

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 md:p-8 swiss-grid relative overflow-hidden">
      {/* Slide Header */}
      <div className="flex justify-between items-baseline border-b-2 border-black pb-2 mb-4">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-gray-400">
          <Key className="w-4 h-4 text-[#007AFF]" />
          <span>[ CHAPTER 21: WHAT IS ENCRYPTION? ]</span>
        </div>
        <span className="swiss-badge text-[10px] border-2 border-black">
          SLIDE 21 / 27
        </span>
      </div>

      {/* Main Content */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-6 items-start overflow-hidden">

        {/* Left: Core Definition */}
        <div className="col-span-1 md:col-span-4 flex flex-col justify-center h-full">
          <span className="px-2 py-0.5 text-[10px] font-mono text-white bg-[#007AFF] border border-black uppercase w-max mb-3">
            CORE DEFINITION
          </span>
          <h2 className="text-3xl md:text-4xl font-space font-black uppercase text-white leading-none mb-4">
            What is{" "}
            <span className="px-2 py-0.5 bg-[#007AFF] text-white border-2 border-black inline-block transform rotate-1 shadow-[3px_3px_0px_#000] rounded">
              Encryption?
            </span>
          </h2>
          <p className="text-gray-300 font-mono text-xs leading-relaxed mb-4">
            Encryption is the process of converting <strong className="text-white">readable plaintext</strong> into <strong className="text-[#007AFF]">unreadable ciphertext</strong> using a mathematical key — so only the intended recipient can decode it.
          </p>

          {/* Simple plaintext → ciphertext graphic */}
          <div className="p-3 border-2 border-black bg-black rounded-lg font-mono text-xs space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[#FFCC00]">📄 Plaintext:</span>
              <span className="text-white">"Pay $100"</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <Key className="w-3 h-3 text-[#FF3B30]" />
              <span className="text-[#FF3B30]">+ Secret Key</span>
              <ArrowRight className="w-3 h-3" />
              <Shuffle className="w-3 h-3 text-[#007AFF]" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#007AFF]">🔒 Ciphertext:</span>
              <span className="text-gray-300">X9kL##@!mN3</span>
            </div>
          </div>
        </div>

        {/* Right: Symmetric vs Asymmetric tabs */}
        <div className="col-span-1 md:col-span-8 flex flex-col gap-4">
          {/* Tab selector */}
          <div className="flex gap-2">
            {["symmetric", "asymmetric"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-4 py-2 text-[10px] font-mono font-black uppercase border-2 border-black rounded cursor-pointer transition-all ${
                  tab === t ? "bg-white text-black shadow-[2px_2px_0px_#000]" : "bg-[#181922] text-gray-400 hover:text-white"
                }`}
              >
                {t === "symmetric" ? "🔑 Symmetric" : "🔓 Asymmetric (RSA)"}
              </button>
            ))}
          </div>

          {tab === "symmetric" ? (
            <div className="flex flex-col gap-3">
              <p className="text-[10px] font-mono text-gray-400">
                <strong className="text-white">Symmetric encryption</strong> uses the <strong className="text-[#FFCC00]">same key</strong> to both encrypt and decrypt. Fast, but both parties must already share the key securely.
              </p>
              {/* Flow */}
              <div className="flex flex-wrap items-center gap-2">
                {SYMMETRIC_STEPS.map((s, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div
                      className="px-3 py-2 border-2 border-black rounded text-center min-w-[80px]"
                      style={{ boxShadow: `2px 2px 0 ${s.color}`, borderColor: s.color }}
                    >
                      <div className="text-xs">{s.icon}</div>
                      <div className="text-[8px] font-mono text-gray-400">{s.label}</div>
                      <div className="text-[9px] font-mono font-black text-white mt-0.5 truncate max-w-[90px]">{s.value}</div>
                    </div>
                    {i < SYMMETRIC_STEPS.length - 1 && <ArrowRight className="w-3 h-3 text-gray-600 shrink-0" />}
                  </div>
                ))}
              </div>
              <div className="p-2 bg-[#181922] border border-black rounded text-[9px] font-mono text-gray-400">
                💡 Used in: AES-256 (file encryption), HTTPS session keys, WhatsApp messages.
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <p className="text-[10px] font-mono text-gray-400">
                <strong className="text-white">Asymmetric encryption</strong> uses a <strong className="text-[#FF3B30]">private key</strong> and a <strong className="text-[#34C759]">public key</strong>. What one encrypts, only the other can decrypt. This is the foundation of digital signatures.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {ASYMMETRIC_PROPS.map((p, i) => (
                  <div
                    key={i}
                    className="p-3 border-2 border-black rounded-lg"
                    style={{ boxShadow: `3px 3px 0 ${p.color}`, borderColor: p.color }}
                  >
                    <div className="text-xs font-space font-black text-white mb-1">{p.key}</div>
                    <p className="text-[9px] font-mono text-gray-400 leading-snug">{p.desc}</p>
                  </div>
                ))}
              </div>
              {/* Keypair diagram */}
              <div className="p-3 bg-black border-2 border-black rounded font-mono text-[9px] text-center">
                <span className="text-[#FF3B30]">Alice's Private Key</span>
                <span className="text-gray-500"> encrypts → </span>
                <span className="text-[#34C759]">Alice's Public Key</span>
                <span className="text-gray-500"> decrypts (and vice versa)</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center border-t-2 border-black pt-2 mt-4">
        <span className="text-[10px] font-mono text-gray-500">
          Encryption defined. Tap next to explore the history of ancient cipher methods.
        </span>
        <button
          onClick={onNext}
          className="px-6 py-2.5 doodle-btn doodle-btn-blue text-[10px] font-black uppercase border-2 border-black cursor-pointer"
        >
          History of Ciphers →
        </button>
      </div>
    </div>
  );
}
