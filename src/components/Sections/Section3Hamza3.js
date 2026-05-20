"use client";

import { Users, Coffee } from "lucide-react";

export default function Section3Hamza3({ onNext }) {
  return (
    <div className="w-full h-full flex flex-col justify-between p-4 md:p-6 swiss-grid relative overflow-hidden">
      {/* Slide Header */}
      <div className="flex justify-between items-baseline border-b-2 border-black pb-2 mb-2">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-gray-400">
          <Users className="w-4 h-4 text-[#FF3B30]" />
          <span>[ THE STORY OF HAMZA: PART 3 - THE GHOSTING ]</span>
        </div>
        <span className="swiss-badge text-[10px] border-2 border-black">
          SLIDE 04 / 26
        </span>
      </div>

      {/* Main Content */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 items-center my-auto overflow-hidden">
        <div className="col-span-1 md:col-span-6 flex flex-col justify-center">
          <span className="px-2 py-0.5 text-[10px] font-mono text-white bg-[#FF3B30] border border-black uppercase w-max mb-3">
            HAMZA DEFAULTS SERIES: CHAPTER 03
          </span>
          <h2 className="text-2xl md:text-5xl font-space font-black uppercase text-white leading-none mb-3">
            The <br />
            <span className="px-2 py-0.5 bg-[#FF3B30] text-white border-2 border-black inline-block transform -rotate-1 shadow-[2px_2px_0px_#000] rounded">
              Ghosting
            </span>
          </h2>
          <p className="text-gray-400 font-mono text-xs leading-relaxed mb-4">
            3 months pass. No database application is built. Hamza buys coffee, shuts down his team Slack, closes his phone lines, and replies <code>0</code> messages. The client is left hanging.
          </p>
          <div className="p-3 border-2 border-black bg-[#181922] rounded text-[10px] font-mono text-gray-300">
            ⚠️ <strong>Current Status:</strong> Hamza is completely offline. The client realizes they need legal actions.
          </div>
        </div>

        {/* Visual Graphic */}
        <div className="col-span-1 md:col-span-6">
          <div className="doodle-card p-4 border-[#FF3B30] text-center min-h-[220px] flex flex-col justify-between items-center">
            <span className="text-[9px] font-mono text-gray-500 uppercase">HAMZA PHONE MONITOR</span>

            {/* Offline status screen */}
            <div className="w-full p-4 border-2 border-black bg-[#0E0F12] rounded-lg">
              <div className="flex justify-between items-center pb-2 border-b border-black mb-2 text-[9px] font-mono text-red-500">
                <span>⚠️ SYSTEM DISCONNECTED</span>
                <span>[ 404 ]</span>
              </div>
              <div className="text-[10px] font-mono text-gray-400 text-left space-y-1">
                <div>📱 Message: "Hey Hamza, where is the code?"</div>
                <div className="text-gray-600 italic">... Delivered (Unread)</div>
                <div className="pt-2 text-red-500 font-black">❌ Last Active: 4 weeks ago</div>
              </div>
            </div>

            <span className="text-[9px] font-mono text-gray-400 italic">
              "Errors? Bug tickets? Sorry, I am out of office indefinitely."
            </span>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="flex justify-between items-center border-t-2 border-black pt-2 mt-2">
        <span className="text-[10px] font-mono text-gray-500">
          Hamza has ghosted. Tap next to see the client taking legal actions.
        </span>
        <button
          onClick={onNext}
          className="px-6 py-2.5 doodle-btn doodle-btn-red text-[10px] font-black uppercase border-2 border-black cursor-pointer"
        >
          Next: The Courtroom
        </button>
      </div>
    </div>
  );
}
