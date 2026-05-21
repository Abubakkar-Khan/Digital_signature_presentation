"use client";

export default function Section7ShaDeep({ onNext }) {
  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-12 swiss-grid relative bg-[#0E0F12]">
      {/* Centered Main Content */}
      <div className="flex-1 flex flex-col justify-center items-center text-center max-w-4xl mx-auto my-auto space-y-6">
        <h2 className="text-3xl md:text-6xl font-space font-black uppercase text-white leading-none tracking-tight">
          How Big is <br />
          <span className="px-4 py-2 bg-[#FF3B30] text-white border-[3px] border-black inline-block transform -rotate-1 shadow-[5px_5px_0px_#000] rounded mt-2">
            SHA-256?
          </span>
        </h2>
        
        <p className="text-gray-400 font-mono text-xs md:text-sm leading-relaxed max-w-xl">
          To grasp the absolute security of digital signatures, we must understand the colossal scale of the SHA-256 key space.
        </p>

        {/* Mathematical Breakdown Card */}
        <div className="w-full max-w-2xl p-6 border-3 border-black bg-[#13141C] rounded-xl shadow-[5px_5px_0px_#007AFF] text-left space-y-4">
          <div className="flex justify-between items-center border-b border-black pb-2">
            <span className="text-[10px] font-mono text-[#007AFF] uppercase font-black">
              📊 THE MATHEMATICAL DECOMPOSITION
            </span>
            <span className="px-2 py-0.5 bg-black border border-gray-800 text-[9px] font-mono text-gray-400 rounded">
              2^256 = (2^32)^8
            </span>
          </div>

          <div className="space-y-3 font-mono">
            <p className="text-xs text-gray-300">
              The keyspace of <strong className="text-white">2<sup>256</sup></strong> breaks down perfectly into <strong className="text-white">2<sup>32</sup></strong> multiplied by itself <strong className="text-[#FFCC00]">8 times</strong>:
            </p>

            <div className="p-3 bg-black border-2 border-black rounded text-center text-xs text-[#34C759] font-black tracking-wide">
              2<sup>256</sup> &nbsp;=&nbsp; ( 2<sup>32</sup> )<sup>8</sup>
            </div>

            <p className="text-[11px] text-gray-400 leading-relaxed">
              Since <strong className="text-white">2<sup>32</sup> is exactly 4,294,967,296 (roughly 4 Billion)</strong>, searching the entire SHA-256 keyspace is equivalent to multiplying:
            </p>

            <div className="p-3 bg-black border-2 border-black rounded text-[10px] text-center text-[#FFCC00] leading-loose break-all font-bold">
              4 Billion &times; 4 Billion &times; 4 Billion &times; 4 Billion &times; 4 Billion &times; 4 Billion &times; 4 Billion &times; 4 Billion
            </div>

            <p className="text-[10px] text-gray-500 italic text-center">
              Each of the next 8 slides zooms out by a factor of 4 Billion to help visualize this cosmic scale!
            </p>
          </div>
        </div>

        <button
          onClick={onNext}
          className="px-8 py-3.5 doodle-btn doodle-btn-magenta text-xs font-black uppercase tracking-wider text-black border-2 border-black cursor-pointer shadow-[3px_3px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#000] active:translate-x-[3px] active:translate-y-[3px] active:shadow-[0px_0px_0px_#000] transition-all animate-pulse"
        >
          Explore the 8 Layers of Scale →
        </button>
      </div>

      {/* Footer bar */}
      <div className="flex justify-between items-center border-t-2 border-black pt-4">
        <span className="text-xs font-mono text-gray-500">
          Scale explanation active. Click button above or next to proceed.
        </span>
        <button
          onClick={onNext}
          className="px-6 py-3 doodle-btn doodle-btn-magenta text-xs font-black uppercase tracking-wider text-black border-2 border-black cursor-pointer"
        >
          Next Slide →
        </button>
      </div>
    </div>
  );
}
