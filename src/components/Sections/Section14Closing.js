"use client";

import { useState } from "react";
import { HelpCircle, Star } from "lucide-react";
import confetti from "canvas-confetti";

export default function Section14Closing({ onRestart }) {
  const [openQ, setOpenQ] = useState(null);

  const faqs = [
    {
      q: "Can someone steal my private key?",
      a: "Yes. If an attacker gains access to your computer or smart card, they can sign files on your behalf. Keep private keys guarded in secure enclaves (like HSMs or keychain hardware)."
    },
    {
      q: "Is SHA-256 secure forever?",
      a: "No algorithm is secure forever. However, cracking SHA-256 by brute force is theoretically impossible with current physics. If a mathematical vulnerability is found, the industry will migrate to SHA-3 or post-quantum algorithms."
    },
    {
      q: "Are digital signatures legally binding?",
      a: "Yes. Laws like ESIGN (USA) and eIDAS (EU) grant digital signatures the exact same legal weight as handwritten ink on paper, provided they utilize proper cryptographic standards."
    }
  ];

  const handleConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#FF3B30", "#FFCC00", "#007AFF", "#34C759"]
    });
  };

  const toggleFaq = (index) => {
    setOpenQ(openQ === index ? null : index);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-12 swiss-grid relative">
      {/* Slide Header */}
      <div className="flex justify-between items-baseline border-b-[3px] border-black pb-4">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-gray-400">
          <HelpCircle className="w-4 h-4 text-[#34C759]" />
          <span>[ SESSION_CLOSE: FINAL_SUMMARY ]</span>
        </div>
        <span className="swiss-badge text-[10px] border-2 border-black">
          SLIDE 16 / 16
        </span>
      </div>

      {/* Main Content Grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-12 items-center my-6 max-w-5xl mx-auto w-full">
        {/* Left Side: Summary & Quote */}
        <div className="col-span-1 md:col-span-6 flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl font-space font-black uppercase text-white leading-none mb-6">
            Conclusion & <br />
            <span className="px-3 bg-[#34C759] text-black border-[3px] border-black inline-block transform -rotate-1 shadow-[3px_3px_0px_#000] rounded">
              Wrap Up
            </span>
          </h2>
          
          <blockquote className="border-l-4 border-[#FF3B30] pl-4 py-2 my-4 italic font-mono text-xs text-gray-300">
            "Trust is hard to compile, but extremely easy to segfault. Don't trust screenshots of signatures. Trust the mathematics of prime numbers."
          </blockquote>

          <div className="mt-6">
            <button
              onClick={handleConfetti}
              className="py-3 px-6 doodle-btn doodle-btn-yellow text-xs font-black uppercase border-2 border-black cursor-pointer flex items-center gap-2"
            >
              <Star className="w-4 h-4" /> Celebrate Cryptography! 🎉
            </button>
          </div>
        </div>

        {/* Right Side: Q&A Dropdowns */}
        <div className="col-span-1 md:col-span-6">
          <div className="doodle-card p-6">
            <div className="flex items-center justify-between pb-3 border-b-2 border-black mb-4">
              <span className="text-[10px] font-mono text-gray-400 uppercase">
                Frequently Asked Cryptography Questions
              </span>
              <span className="text-[9px] font-mono text-[#34C759] uppercase">
                [ CLICK TO REVEAL ]
              </span>
            </div>

            {/* FAQs List */}
            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openQ === idx;
                return (
                  <div
                    key={idx}
                    className="border-2 border-black rounded bg-[#0E0F12] overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-3 text-left font-space font-black text-xs uppercase flex justify-between items-center hover:bg-black/40 cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <span className="text-gray-500">{isOpen ? "▲" : "▼"}</span>
                    </button>
                    {isOpen && (
                      <div className="p-3 border-t border-black text-[11px] font-mono text-gray-300 leading-relaxed bg-[#181922]">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="flex justify-between items-center border-t-[3px] border-black pt-4">
        <span className="text-xs font-mono text-gray-500">
          Slide deck complete. You can restart the presentation deck here.
        </span>
        <button
          onClick={onRestart}
          className="px-6 py-3 doodle-btn doodle-btn-blue text-xs font-black uppercase tracking-wider text-white border-2 border-black cursor-pointer"
        >
          Restart Deck ⟲
        </button>
      </div>
    </div>
  );
}
