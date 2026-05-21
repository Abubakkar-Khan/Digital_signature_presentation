"use client";

import { useState, useEffect } from "react";
import { ShieldAlert, Key, HelpCircle, ArrowRight, RefreshCw, Lock, Unlock } from "lucide-react";

export default function SectionEncryptionRSA({ onNext }) {
  const [p, setP] = useState(5);
  const [q, setQ] = useState(11);
  const [e, setE] = useState(3);
  const [message, setMessage] = useState(7);

  // Math Helper Functions
  const getGcd = (a, b) => {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  };

  const getModularInverse = (e, phi) => {
    for (let candidateD = 1; candidateD < phi; candidateD++) {
      if ((candidateD * e) % phi === 1) {
        return candidateD;
      }
    }
    return null;
  };

  const modularExponentiation = (base, exp, mod) => {
    if (mod === 1) return 0;
    let result = 1;
    base = base % mod;
    while (exp > 0) {
      if (exp % 2 === 1) {
        result = (result * base) % mod;
      }
      exp = Math.floor(exp / 2);
      base = (base * base) % mod;
    }
    return result;
  };

  // Prime numbers to choose from
  const pPrimes = [3, 5, 7, 11, 13];
  const qPrimes = [11, 13, 17, 19, 23];

  // Derived RSA parameters
  const n = p * q;
  const phi = (p - 1) * (q - 1);

  // Find valid 'e' choices
  const validEs = [];
  for (let candidate = 3; candidate < phi; candidate++) {
    if (getGcd(candidate, phi) === 1) {
      validEs.push(candidate);
    }
  }
  const displayEs = validEs.slice(0, 5); // limit choices for UI

  // Ensure chosen 'e' is valid for the current phi
  useEffect(() => {
    if (!validEs.includes(e)) {
      if (validEs.length > 0) {
        setE(validEs[0]);
      }
    }
  }, [p, q]);

  // Ensure message is less than n
  useEffect(() => {
    if (message >= n) {
      setMessage(Math.min(7, n - 1));
    }
  }, [n]);

  const d = getModularInverse(e, phi);

  // Cryptographic Operations
  const ciphertext = modularExponentiation(message, e, n);
  const decrypted = d ? modularExponentiation(ciphertext, d, n) : null;

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 md:p-6 swiss-grid relative overflow-hidden bg-[#0A0B0D]">
      {/* Main Grid */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-5 items-center my-auto overflow-hidden">
        {/* Left Column: Interactive Param Selector */}
        <div className="col-span-1 lg:col-span-5 flex flex-col justify-center gap-3">
          <div>
            <span className="px-2 py-0.5 text-[9px] font-mono text-white bg-[#AF52DE] border border-black uppercase w-max mb-1.5 block">
              RSA KEY GENERATOR
            </span>
            <h2 className="text-xl md:text-3xl font-space font-black uppercase text-white leading-none mb-1">
              Asymmetric key <br />
              <span className="px-2 py-0.5 bg-[#AF52DE] text-white border-2 border-black inline-block transform -rotate-1 shadow-[2px_2px_0px_#000] rounded">
                Mathematics
              </span>
            </h2>
            <p className="text-gray-400 font-mono text-[10px] leading-relaxed">
              RSA relies on the fact that while multiplying two large primes is easy, factoring their product back into primes is virtually impossible for standard computers.
            </p>
          </div>

          {/* Prime Picker */}
          <div className="p-3 border-2 border-black bg-[#13141C] rounded-lg space-y-2">
            <span className="text-[8px] font-mono text-gray-400 uppercase font-black block">
              1. Choose Two Secret Prime Numbers
            </span>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[8px] font-mono text-[#FF3B30] uppercase block mb-1">
                  Prime p = {p}
                </label>
                <div className="flex gap-1 flex-wrap">
                  {pPrimes.map((prime) => (
                    <button
                      key={prime}
                      onClick={() => setP(prime)}
                      className={`px-1.5 py-0.5 text-[9px] font-mono border border-black rounded cursor-pointer ${
                        p === prime
                          ? "bg-[#FF3B30] text-white font-bold"
                          : "bg-[#181922] text-gray-400 hover:text-white"
                      }`}
                    >
                      {prime}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-[8px] font-mono text-[#007AFF] uppercase block mb-1">
                  Prime q = {q}
                </label>
                <div className="flex gap-1 flex-wrap">
                  {qPrimes.map((prime) => (
                    <button
                      key={prime}
                      disabled={p === prime}
                      onClick={() => setQ(prime)}
                      className={`px-1.5 py-0.5 text-[9px] font-mono border border-black rounded cursor-pointer disabled:opacity-20 ${
                        q === prime
                          ? "bg-[#007AFF] text-white font-bold"
                          : "bg-[#181922] text-gray-400 hover:text-white"
                      }`}
                    >
                      {prime}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Public Exponent Choice */}
            <div className="pt-1">
              <label className="text-[8px] font-mono text-gray-400 uppercase block mb-1">
                2. Choose Public Exponent e (Coprime to φ = {phi})
              </label>
              <div className="flex gap-1.5 flex-wrap">
                {displayEs.map((exponent) => (
                  <button
                    key={exponent}
                    onClick={() => setE(exponent)}
                    className={`px-2 py-0.5 text-[9px] font-mono border border-black rounded cursor-pointer ${
                      e === exponent
                        ? "bg-[#FFCC00] text-black font-bold border-[#FFCC00]"
                        : "bg-[#181922] text-gray-400 hover:text-white"
                    }`}
                  >
                    {exponent}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Generated Keys Display */}
          <div className="p-3 border-2 border-black bg-black rounded-lg text-[9px] font-mono space-y-1">
            <span className="text-[8px] text-gray-500 uppercase block mb-1">Generated Keys</span>
            <div className="flex justify-between border-b border-gray-900 pb-1">
              <span className="text-gray-400">Modulus (n = p × q):</span>
              <span className="text-white font-bold">{p} × {q} = {n}</span>
            </div>
            <div className="flex justify-between border-b border-gray-900 pb-1">
              <span className="text-gray-400">Totient φ(n) = (p-1)(q-1):</span>
              <span className="text-white">({p}-1)×({q}-1) = {phi}</span>
            </div>
            <div className="flex justify-between border-b border-gray-900 pb-1">
              <span className="text-[#FFCC00]">Public Key (e, n):</span>
              <span className="text-[#FFCC00] font-black">({e}, {n})</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#AF52DE]">Private Key (d, n):</span>
              <span className="text-[#AF52DE] font-black">({d || "?"}, {n})</span>
            </div>
          </div>
        </div>

        {/* Right Column: Live Math Playground */}
        <div className="col-span-1 lg:col-span-7 flex flex-col justify-center">
          <div className="doodle-card p-4 border-[#AF52DE]">
            <div className="flex items-center justify-between pb-2 border-b border-black mb-3">
              <span className="text-[9px] font-mono text-gray-400 uppercase font-black">
                Live Mathematical RSA Calculator Playground
              </span>
              <span className="text-[9px] font-mono text-[#AF52DE] font-black uppercase">
                [ p={p} | q={q} | n={n} ]
              </span>
            </div>

            {/* Slider for Message M */}
            <div className="mb-4">
              <div className="flex justify-between items-center text-[8px] font-mono text-gray-500 uppercase mb-1 font-bold">
                <span>3. Select Numeric Input Message (M &lt; n)</span>
                <span className="text-white">M = {message}</span>
              </div>
              <input
                type="range"
                min="2"
                max={n - 1}
                value={message}
                onChange={(e) => setMessage(parseInt(e.target.value))}
                className="w-full accent-[#AF52DE] cursor-pointer"
              />
            </div>

            {/* Calculations Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Encryption Block */}
              <div className="p-3 border-2 border-black bg-[#0E0F12] rounded-lg flex flex-col justify-between min-h-[140px]">
                <div>
                  <div className="flex items-center gap-1.5 font-mono text-[9px] text-[#FFCC00] uppercase font-black border-b border-gray-900 pb-1 mb-2">
                    <Lock className="w-3.5 h-3.5" />
                    <span>Encryption Flow</span>
                  </div>
                  <div className="font-mono text-[9px] text-gray-300 space-y-1.5">
                    <div><strong>Formula:</strong> C = M<sup>e</sup> mod n</div>
                    <div className="p-1.5 bg-black border border-gray-900 rounded font-mono text-[8.5px] leading-tight break-words text-gray-400">
                      C = {message}<sup>{e}</sup> mod {n} <br />
                      C = {Math.pow(message, e).toLocaleString()} mod {n} <br />
                      <span className="text-[#FF3B30] font-black">C = {ciphertext}</span>
                    </div>
                  </div>
                </div>
                <div className="p-1.5 bg-[#FF3B30]/10 border border-[#FF3B30]/30 text-[#FF3B30] text-[8.5px] text-center font-mono rounded mt-2">
                  🔒 Ciphertext Token = {ciphertext}
                </div>
              </div>

              {/* Decryption Block */}
              <div className="p-3 border-2 border-black bg-[#0E0F12] rounded-lg flex flex-col justify-between min-h-[140px]">
                <div>
                  <div className="flex items-center gap-1.5 font-mono text-[9px] text-[#AF52DE] uppercase font-black border-b border-gray-900 pb-1 mb-2">
                    <Unlock className="w-3.5 h-3.5" />
                    <span>Decryption Flow</span>
                  </div>
                  <div className="font-mono text-[9px] text-gray-300 space-y-1.5">
                    <div><strong>Formula:</strong> M' = C<sup>d</sup> mod n</div>
                    <div className="p-1.5 bg-black border border-gray-900 rounded font-mono text-[8.5px] leading-tight break-words text-gray-400">
                      M' = {ciphertext}<sup>{d || 0}</sup> mod {n} <br />
                      M' = {d ? (modularExponentiation(ciphertext, d, n)).toLocaleString() : "?"} mod {n} <br />
                      <span className="text-[#34C759] font-black">M' = {decrypted}</span>
                    </div>
                  </div>
                </div>
                <div className="p-1.5 bg-[#34C759]/10 border border-[#34C759]/30 text-[#34C759] text-[8.5px] text-center font-mono rounded mt-2">
                  🔓 Recovered Message = {decrypted}
                </div>
              </div>
            </div>

            {/* Verdict */}
            {decrypted === message && (
              <div className="mt-3 p-2 bg-[#34C759]/10 border border-[#34C759] text-[#34C759] font-mono text-[9px] text-center rounded">
                🚀 MATH PERFECT: Message encrypted to {ciphertext} and successfully decrypted back to {decrypted}!
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="flex justify-between items-center border-t-2 border-black pt-2 mt-2">
        <span className="text-[10px] font-mono text-gray-500">
          RSA mathematics verified. Tap next to analyze why we don't encrypt the full document using RSA.
        </span>
        <button
          onClick={onNext}
          className="px-6 py-2.5 doodle-btn doodle-btn-magenta text-[10px] font-black uppercase border-2 border-black cursor-pointer"
        >
          Why Don't We Encrypt Full Doc? →
        </button>
      </div>
    </div>
  );
}
