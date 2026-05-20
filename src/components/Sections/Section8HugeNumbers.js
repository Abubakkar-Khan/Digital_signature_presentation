"use client";

import { useState } from "react";
import { Star, ArrowRight } from "lucide-react";

export default function Section8HugeNumbers({ onNext }) {
  const [activeStep, setActiveStep] = useState(0);

  const expansionSteps = [
    {
      title: "Layer 1: The GPU Level",
      subtitle: "THE BASELINE POWER",
      stat: "4 Billion Hashes/Sec",
      desc: "Imagine one computer packed with high-end GPUs capable of performing 4 billion hashes (guesses) per second.",
      image: "/gpu_hashing_rig.png"
    },
    {
      title: "Layer 2: The Google Level",
      subtitle: "THE MEGA SERVER CLUSTER",
      stat: "16 Quintillion Hashes/Sec",
      desc: "Imagine 4 billion of these high-powered computers running concurrently (similar to a global Google server array).",
      ascii: `    4 Billion * 4 Billion Rig Array
    [ 🖥️ x 4,000,000,000 ]`
    },
    {
      title: "Layer 3: The Planetary Level",
      subtitle: "THE WORLDWIDE BOTNET",
      stat: "64 Septillion Hashes/Sec",
      desc: "Imagine giving roughly half of every person on Earth (4 billion people) their own Google-level cluster setup.",
      ascii: `    🌎 [ Earth: 4 Billion People ]
    Each with [ 🖥️ x 4 Billion ]`
    },
    {
      title: "Layer 4: The Galactic Level",
      subtitle: "THE MILKY WAY MASS SEALS",
      stat: "256 Octillion Hashes/Sec",
      desc: "Imagine 4 billion copies of Earth. Since the Milky Way has 100-400 billion stars, this is about 1% of stars in the galaxy having an Earth, with half the population running one of these setups.",
      image: "/galaxy_stars.png"
    },
    {
      title: "Layer 5: The Universe Level",
      subtitle: "GIGA GALACTIC SUPERCOMPUTER",
      stat: "2^160 Hashes/Sec",
      desc: "Imagine 4 billion copies of the Milky Way. This massive, hypothetical network running in unison is doing 2^160 hashes per second.",
      ascii: `    🌀 🌀 🌀 🌀 (4 Billion Galaxies)
    "Giga Galactic Supercomputer Grid"`
    },
    {
      title: "Layer 6: Time Multiplier 1",
      subtitle: "THE CENTURY RUN",
      stat: "126.8 Years (4B Seconds)",
      desc: "Run this massive Giga Galactic computer network non-stop for 4 billion seconds, which is about 126.8 years.",
      ascii: `    ⏳ [ Run Time: 4 Billion Secs ]
    "126.8 Years of non-stop computing"`
    },
    {
      title: "Layer 7: Time Multiplier 2",
      subtitle: "THE GALAXY AGE SPAN",
      stat: "507 Billion Years",
      desc: "Multiply that running duration by another 4 billion. This yields approximately 507 billion years, which is 37 times the age of the universe.",
      ascii: `    ⏳ [ 507 Billion Years ]
    "37x times the age of the universe"`
    },
    {
      title: "Layer 8: The Conclusion",
      subtitle: "THE MATH PREDICTOR ODDS",
      stat: "1 in 4 Billion Chance",
      desc: "After all that time, running all that planetary and galactic computing power, your massive supercomputer would still only have a 1 in 4 billion chance of successfully guessing the correct 256-bit hash.",
      ascii: `    🎯 ODDS: 1 in 4,000,000,000
    Math is structurally absolute.`
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 md:p-6 swiss-grid relative overflow-hidden">
      {/* Slide Header */}
      <div className="flex justify-between items-baseline border-b-2 border-black pb-2 mb-2">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-gray-400">
          <Star className="w-4 h-4 text-[#FFCC00]" />
          <span>[ CHAPTER 07: THE 8 EXPANSION LAYERS OF 2^256 SCALE ]</span>
        </div>
        <span className="swiss-badge text-[10px] border-2 border-black">
          SLIDE 08 / 16
        </span>
      </div>

      {/* Main Content Grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-6 items-center my-auto overflow-hidden">
        {/* Left Side: Stepper index & current statistics */}
        <div className="col-span-1 md:col-span-4 flex flex-col justify-between h-full py-4">
          <div className="space-y-3">
            <h2 className="text-xl md:text-3xl font-space font-black uppercase text-white leading-none">
              How Big is <br />
              <span className="px-2 py-0.5 bg-[#FFCC00] text-black border-2 border-black inline-block transform -rotate-1 shadow-[2px_2px_0px_#000] rounded">
                2^256 Keyspace?
              </span>
            </h2>
            <p className="text-[10px] font-mono text-gray-400 leading-relaxed">
              To make 2^256 comprehensible, let's break it down as <strong>2^32 (roughly 4 billion) multiplied by itself 8 times</strong>. Click through the 8 layers of calculation.
            </p>
          </div>

          {/* Steps selector buttons */}
          <div className="grid grid-cols-4 gap-1.5 mt-4">
            {expansionSteps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`py-1 rounded text-[9px] font-mono border-2 border-black transition-all cursor-pointer ${
                  activeStep === idx
                    ? "bg-black text-[#FFCC00] font-black shadow-[2px_2px_0px_#FFCC00]"
                    : "bg-[#181922] text-gray-400"
                }`}
              >
                Layer {idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Big Visual Stats Card */}
        <div className="col-span-1 md:col-span-8">
          <div className="doodle-card p-5 border-[#FFCC00] shadow-[5px_5px_0px_#FFCC00]">
            <div className="flex items-center justify-between pb-2 border-b border-black mb-3">
              <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest">
                {expansionSteps[activeStep].subtitle}
              </span>
              <span className="text-[9px] font-mono text-[#FFCC00] font-bold">
                [ LAYER 0{activeStep + 1} / 08 ]
              </span>
            </div>

            {/* Giant Metric Display */}
            <div className="mb-4">
              <span className="text-[8px] font-mono text-gray-500 uppercase block">
                Accumulated Scale / Run Metric:
              </span>
              <h3 className="text-2xl md:text-3xl font-space font-black text-white leading-none tracking-tight">
                {expansionSteps[activeStep].stat}
              </h3>
            </div>

            {/* Visual Panel - Renders Image or ASCII */}
            <div className="p-1 border-2 border-black bg-[#0E0F12] rounded-lg h-[130px] flex items-center justify-center text-center mb-3 overflow-hidden">
              {expansionSteps[activeStep].image ? (
                <img
                  src={expansionSteps[activeStep].image}
                  alt={expansionSteps[activeStep].title}
                  className="w-full h-full object-cover rounded"
                />
              ) : (
                <pre className="text-[10px] text-[#FFCC00] font-mono leading-tight whitespace-pre bg-transparent border-0 p-0 m-0 w-full overflow-x-auto">
                  {expansionSteps[activeStep].ascii}
                </pre>
              )}
            </div>

            {/* Paragraph explain */}
            <p className="text-[10px] font-mono text-gray-300 leading-relaxed">
              {expansionSteps[activeStep].desc}
            </p>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="flex justify-between items-center border-t-2 border-black pt-2 mt-2">
        <span className="text-[10px] font-mono text-gray-500">
          Keyspace multiplier layer {activeStep + 1} selected. Click next to review SHA-256 compression engine.
        </span>
        <div className="flex items-center gap-2">
          {activeStep < 7 ? (
            <button
              onClick={() => setActiveStep((prev) => prev + 1)}
              className="px-3 py-1.5 border-2 border-black bg-black text-[#FFCC00] rounded text-[9px] font-mono font-black uppercase cursor-pointer"
            >
              Multiply Next Layer
            </button>
          ) : (
            <button
              onClick={onNext}
              className="px-4 py-2 doodle-btn doodle-btn-magenta text-[10px] font-black uppercase border-2 border-black cursor-pointer"
            >
              Explore SHA Engine
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
