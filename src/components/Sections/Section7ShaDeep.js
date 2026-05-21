"use client";

export default function Section7ShaDeep({ onNext }) {
  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-12 swiss-grid relative bg-[#0E0F12]">
      {/* Centered Main Content */}
      <div className="flex-1 flex flex-col justify-center items-center text-center max-w-3xl mx-auto my-auto">
        <h2 className="text-4xl md:text-7xl font-space font-black uppercase text-white leading-none tracking-tight mb-8">
          How Big is <br />
          <span className="px-4 py-2 bg-[#FF3B30] text-white border-[3px] border-black inline-block transform -rotate-1 shadow-[5px_5px_0px_#000] rounded">
            SHA-256?
          </span>
        </h2>
        
        <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-lg mb-8">
          To understand the absolute security of digital signatures, we must first grasp the colossal, astronomical scale of the SHA-256 key space.
        </p>

        <button
          onClick={onNext}
          className="px-8 py-3.5 doodle-btn doodle-btn-magenta text-xs font-black uppercase tracking-wider text-black border-2 border-black cursor-pointer shadow-[3px_3px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#000] active:translate-x-[3px] active:translate-y-[3px] active:shadow-[0px_0px_0px_#000] transition-all animate-pulse"
        >
          Explore the Scale →
        </button>
      </div>

      {/* Footer bar */}
      <div className="flex justify-between items-center border-t-2 border-black pt-4">
        <span className="text-xs font-mono text-gray-500">
          Entering scale analysis. Click button above or next to proceed.
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
