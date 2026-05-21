"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

// Slides
import Section1Hero from "@/components/Sections/Section1Hero";
import Section2WhatIsSignature from "@/components/Sections/Section2WhatIsSignature";
import Section3Hamza1 from "@/components/Sections/Section3Hamza1";
import Section3Hamza2 from "@/components/Sections/Section3Hamza2";
import Section3Hamza3 from "@/components/Sections/Section3Hamza3";
import Section3Hamza4 from "@/components/Sections/Section3Hamza4";
import Section3Hamza5 from "@/components/Sections/Section3Hamza5";
import Section4Problems from "@/components/Sections/Section4Problems";
import Section5Pillars from "@/components/Sections/Section5Pillars";

// Process (animated sender/receiver) — moved before hash
import SectionProcessAnimated from "@/components/Sections/SectionProcessAnimated";

// Hashing
import SectionHashTitle from "@/components/Sections/SectionHashTitle";
import SectionHashDefinition from "@/components/Sections/SectionHashDefinition";
import Section6HashExplain from "@/components/Sections/Section6HashExplain";

// 2^256 Scale
import Section8Huge1 from "@/components/Sections/Section8Huge1";
import Section8Huge2 from "@/components/Sections/Section8Huge2";
import Section8Huge3 from "@/components/Sections/Section8Huge3";
import Section8Huge4 from "@/components/Sections/Section8Huge4";
import Section8Huge5 from "@/components/Sections/Section8Huge5";
import Section8Huge6 from "@/components/Sections/Section8Huge6";
import Section8Huge7 from "@/components/Sections/Section8Huge7";
import Section8Huge8 from "@/components/Sections/Section8Huge8";

// Encryption
import SectionEncryptionTitle from "@/components/Sections/SectionEncryptionTitle";
import SectionEncryptionDefinition from "@/components/Sections/SectionEncryptionDefinition";
import Section9Steganography from "@/components/Sections/Section9Steganography";
import Section9Caesar from "@/components/Sections/Section9Caesar";
import Section10Modern from "@/components/Sections/Section10Modern";

// Asymmetric Math & Rationale
import SectionEncryptionRSA from "@/components/Sections/SectionEncryptionRSA";
import SectionRSAWhyHash from "@/components/Sections/SectionRSAWhyHash";

// End game
import Section13DocDroc from "@/components/Sections/Section13DocDroc";
import Section14Closing from "@/components/Sections/Section14Closing";

export default function Home() {
  const TOTAL = 30;
  const [currentSlide, setCurrentSlide] = useState(1);

  // Blur focused elements when slide changes to prevent keyboard hijacking
  useEffect(() => {
    if (typeof document !== "undefined" && document.activeElement) {
      document.activeElement.blur();
    }
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Only block navigation if focused on actual text entry fields
      const activeElement = document.activeElement;
      const isTextInput = activeElement && (
        activeElement.tagName === "TEXTAREA" ||
        (activeElement.tagName === "INPUT" && 
         ["text", "email", "password", "number", "search", "tel", "url"].includes(activeElement.type)) ||
        activeElement.isContentEditable
      );
      if (isTextInput) {
        return;
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        setCurrentSlide((p) => Math.min(p + 1, TOTAL));
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setCurrentSlide((p) => Math.max(p - 1, 1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const next    = () => setCurrentSlide((p) => Math.min(p + 1, TOTAL));
  const restart = () => setCurrentSlide(1);

  const renderSlide = () => {
    switch (currentSlide) {
      // ── Intro + Story ──────────────────────────────────────────────
      case  1: return <Section1Hero              onNext={next} />;
      case  2: return <Section2WhatIsSignature   onNext={next} />;
      case  3: return <Section3Hamza1            onNext={next} />;
      case  4: return <Section3Hamza2            onNext={next} />;
      case  5: return <Section3Hamza3            onNext={next} />;
      case  6: return <Section3Hamza4            onNext={next} />;
      case  7: return <Section3Hamza5            onNext={next} />;
      case  8: return <Section4Problems          onNext={next} />;
      case  9: return <Section5Pillars           onNext={next} />;

      // ── Digital Signature Process (animated) ──────────────────────
      case 10: return <SectionProcessAnimated    onNext={next} />;

      // ── Hashing ───────────────────────────────────────────────────
      case 11: return <SectionHashTitle          onNext={next} />;
      case 12: return <SectionHashDefinition     onNext={next} />;
      case 13: return <Section6HashExplain       onNext={next} />;

      // ── 2^256 Scale (Interactive Zoom Simulator) ──────────────────
      case 14: return <Section8Huge1             onNext={next} goToSlide={setCurrentSlide} />;
      case 15: return <Section8Huge2             onNext={next} goToSlide={setCurrentSlide} />;
      case 16: return <Section8Huge3             onNext={next} goToSlide={setCurrentSlide} />;
      case 17: return <Section8Huge4             onNext={next} goToSlide={setCurrentSlide} />;
      case 18: return <Section8Huge5             onNext={next} goToSlide={setCurrentSlide} />;
      case 19: return <Section8Huge6             onNext={next} goToSlide={setCurrentSlide} />;
      case 20: return <Section8Huge7             onNext={next} goToSlide={setCurrentSlide} />;
      case 21: return <Section8Huge8             onNext={next} goToSlide={setCurrentSlide} />;

      // ── Encryption ────────────────────────────────────────────────
      case 22: return <SectionEncryptionTitle      onNext={next} />;
      case 23: return <SectionEncryptionDefinition onNext={next} />;
      case 24: return <Section9Steganography       onNext={next} />;
      case 25: return <Section9Caesar              onNext={next} />;
      case 26: return <Section10Modern             onNext={next} />;

      // ── Asymmetric Math & Rationale ───────────────────────────────
      case 27: return <SectionEncryptionRSA        onNext={next} />;
      case 28: return <SectionRSAWhyHash           onNext={next} />;

      // ── Endgame ───────────────────────────────────────────────────
      case 29: return <Section13DocDroc            onNext={next} />;
      case 30: return <Section14Closing            onRestart={restart} />;

      default: return <Section1Hero onNext={next} />;
    }
  };

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-[#0E0F12] text-[#F1F2F6] flex flex-col pt-16">
      <Navbar currentSlide={currentSlide} goToSlide={setCurrentSlide} total={TOTAL} />

      {/* Full-screen slide area */}
      <div className="flex-1 w-full h-full relative bg-[#13141C] overflow-hidden">
        {renderSlide()}
      </div>

      {/* Keyboard hint footer */}
      <div className="w-full text-center py-2 bg-[#0E0F12] text-[9px] font-mono text-gray-500 flex justify-center gap-4 border-t-2 border-black">
        <span>⌨️ [ Use Left / Right Arrow keys to navigate ]</span>
        <span>•</span>
        <span>🖥️ [ Full-Screen Presentation Mode · {currentSlide} / {TOTAL} ]</span>
      </div>
    </main>
  );
}
