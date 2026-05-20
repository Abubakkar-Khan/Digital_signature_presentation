"use client";

import { useState } from "react";
import { Code2, Play, Check, ShieldAlert } from "lucide-react";

export default function SectionCodeSimulation({ onNext }) {
  const [logs, setLogs] = useState([]);
  const [isExecuting, setIsExecuting] = useState(false);
  const [isTampered, setIsTampered] = useState(false);

  const codeSnippet = `// Node.js Cryptography Verification Script
const crypto = require('crypto');

function signDocument(doc, privateKey) {
  const sign = crypto.createSign('SHA256');
  sign.update(doc);
  return sign.sign(privateKey, 'hex');
}

function verifyDocument(doc, signature, publicKey) {
  const verify = crypto.createVerify('SHA256');
  verify.update(doc);
  return verify.verify(publicKey, signature, 'hex');
}`;

  const runSimulation = () => {
    setIsExecuting(true);
    setLogs(["$ node verify_signature.js", "🔑 Generating asymmetric RSA-2048 keypair..."]);
    
    setTimeout(() => {
      setLogs(prev => [...prev, "📄 Document loaded: 'Hamza SRS Contract v1.0'"]);
    }, 600);

    setTimeout(() => {
      setLogs(prev => [...prev, "✍️ Computing SHA-256 hash & signing with private key..."]);
    }, 1200);

    setTimeout(() => {
      const status = isTampered 
        ? "❌ VERIFICATION FAILED: Hash mismatch! Contract edited by third party!"
        : "✅ VERIFICATION SUCCESSFUL: Document matches private key signature.";
      setLogs(prev => [
        ...prev,
        `🔒 Signature generated: 7f8c9b...a12c`,
        isTampered ? "⚠️ Alert: Contract text modified: '$100' -> '$1000'" : "📄 Checking document integrity...",
        status
      ]);
      setIsExecuting(false);
    }, 2000);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 md:p-6 swiss-grid relative overflow-hidden">
      {/* Slide Header */}
      <div className="flex justify-between items-baseline border-b-2 border-black pb-2 mb-2">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-gray-400">
          <Code2 className="w-4 h-4 text-[#34C759]" />
          <span>[ CHAPTER 22: LIVE CODE SIMULATION ]</span>
        </div>
        <span className="swiss-badge text-[10px] border-2 border-black">
          SLIDE 23 / 24
        </span>
      </div>

      {/* Main Grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-4 items-center my-auto overflow-hidden">
        {/* Left Side: Code Block */}
        <div className="col-span-1 md:col-span-6 flex flex-col justify-center">
          <div className="doodle-card p-3 border-[#007AFF]">
            <div className="flex justify-between items-center pb-1.5 border-b border-black mb-2">
              <span className="text-[9px] font-mono text-gray-400">DOCUMENT_SIGN.JS</span>
              <span className="text-[8px] font-mono text-cyan-400">ES6 Javascript / crypto</span>
            </div>
            <pre className="p-2.5 rounded bg-[#0E0F12] border-2 border-black font-mono text-[9px] text-gray-200 overflow-x-auto leading-relaxed">
              {codeSnippet}
            </pre>
          </div>
        </div>

        {/* Right Side: Log console execution */}
        <div className="col-span-1 md:col-span-6 flex flex-col">
          <div className="doodle-card p-3 border-[#34C759] flex-1 flex flex-col justify-between min-h-[220px]">
            <div>
              <div className="flex justify-between items-center pb-1.5 border-b border-black mb-2">
                <span className="text-[9px] font-mono text-gray-400">LIVE SHELL TERMINAL</span>
                <span className="text-[9px] font-mono text-[#34C759] uppercase">[ ACTIVE RUNTIME ]</span>
              </div>

              {/* Console log list */}
              <div className="p-2.5 border-2 border-black bg-black rounded-lg min-h-[120px] font-mono text-[9px] space-y-1 overflow-y-auto">
                {logs.length === 0 ? (
                  <span className="text-gray-600 italic">Click "Run Verification" to test verification logic...</span>
                ) : (
                  logs.map((log, idx) => (
                    <div
                      key={idx}
                      className={
                        log.startsWith("✅")
                          ? "text-[#34C759]"
                          : log.startsWith("❌") || log.startsWith("⚠️")
                          ? "text-[#FF3B30] font-black"
                          : "text-gray-300"
                      }
                    >
                      {log}
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Run settings / Controls */}
            <div className="mt-3 flex items-center justify-between gap-3">
              <label className="flex items-center gap-1.5 cursor-pointer text-[10px] font-mono text-gray-400">
                <input
                  type="checkbox"
                  checked={isTampered}
                  onChange={(e) => setIsTampered(e.target.checked)}
                  className="rounded accent-[#FF3B30] cursor-pointer"
                />
                <span>Simulate Scammer Tamper</span>
              </label>

              <button
                onClick={runSimulation}
                disabled={isExecuting}
                className="px-4 py-2 border-2 border-black bg-black text-[#34C759] hover:bg-[#34C759]/10 disabled:opacity-50 text-[10px] font-mono font-black uppercase rounded cursor-pointer flex items-center gap-1.5"
              >
                <Play className="w-3 h-3" />
                {isExecuting ? "Verifying..." : "Run Verification"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="flex justify-between items-center border-t-2 border-black pt-2 mt-2">
        <span className="text-[10px] font-mono text-gray-500">
          Simulation script verified successfully. Click next to celebrate the presentation completion.
        </span>
        <button
          onClick={onNext}
          className="px-6 py-2.5 doodle-btn doodle-btn-magenta text-[10px] font-black uppercase border-2 border-black cursor-pointer"
        >
          Finish Deck
        </button>
      </div>
    </div>
  );
}
