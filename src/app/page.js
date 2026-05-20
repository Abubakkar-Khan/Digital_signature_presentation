"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

// Section Chapter Imports
import Section1Hero from "@/components/Sections/Section1Hero";
import Section3Hamza1 from "@/components/Sections/Section3Hamza1";
import Section3Hamza2 from "@/components/Sections/Section3Hamza2";
import Section3Hamza3 from "@/components/Sections/Section3Hamza3";
import Section3Hamza4 from "@/components/Sections/Section3Hamza4";
import Section3Hamza5 from "@/components/Sections/Section3Hamza5";
import Section4Problems from "@/components/Sections/Section4Problems";
import Section5Pillars from "@/components/Sections/Section5Pillars";
import Section6HashExplain from "@/components/Sections/Section6HashExplain";
import Section8Huge1 from "@/components/Sections/Section8Huge1";
import Section8Huge2 from "@/components/Sections/Section8Huge2";
import Section8Huge3 from "@/components/Sections/Section8Huge3";
import Section8Huge4 from "@/components/Sections/Section8Huge4";
import Section8Huge5 from "@/components/Sections/Section8Huge5";
import Section8Huge6 from "@/components/Sections/Section8Huge6";
import Section8Huge7 from "@/components/Sections/Section8Huge7";
import Section8Huge8 from "@/components/Sections/Section8Huge8";
import Section9History from "@/components/Sections/Section9History";
import Section10Modern from "@/components/Sections/Section10Modern";
import Section11Process from "@/components/Sections/Section11Process";
import Section13NonRepudiation from "@/components/Sections/Section13NonRepudiation";
import Section13DocDroc from "@/components/Sections/Section13DocDroc";
import SectionCodeSimulation from "@/components/Sections/SectionCodeSimulation";
import Section14Closing from "@/components/Sections/Section14Closing";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(1);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        setCurrentSlide((prev) => Math.min(prev + 1, 24));
      } else if (e.key === "ArrowLeft") {
        setCurrentSlide((prev) => Math.max(prev - 1, 1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, 24));
  };

  const restartDeck = () => {
    setCurrentSlide(1);
  };

  // Render active slide
  const renderSlide = () => {
    switch (currentSlide) {
      case 1:
        return <Section1Hero onNext={nextSlide} />;
      case 2:
        return <Section3Hamza1 onNext={nextSlide} />;
      case 3:
        return <Section3Hamza2 onNext={nextSlide} />;
      case 4:
        return <Section3Hamza3 onNext={nextSlide} />;
      case 5:
        return <Section3Hamza4 onNext={nextSlide} />;
      case 6:
        return <Section3Hamza5 onNext={nextSlide} />;
      case 7:
        return <Section4Problems onNext={nextSlide} />;
      case 8:
        return <Section5Pillars onNext={nextSlide} />;
      case 9:
        return <Section6HashExplain onNext={nextSlide} />;
      case 10:
        return <Section8Huge1 onNext={nextSlide} />;
      case 11:
        return <Section8Huge2 onNext={nextSlide} />;
      case 12:
        return <Section8Huge3 onNext={nextSlide} />;
      case 13:
        return <Section8Huge4 onNext={nextSlide} />;
      case 14:
        return <Section8Huge5 onNext={nextSlide} />;
      case 15:
        return <Section8Huge6 onNext={nextSlide} />;
      case 16:
        return <Section8Huge7 onNext={nextSlide} />;
      case 17:
        return <Section8Huge8 onNext={nextSlide} />;
      case 18:
        return <Section9History onNext={nextSlide} />;
      case 19:
        return <Section10Modern onNext={nextSlide} />;
      case 20:
        return <Section11Process onNext={nextSlide} />;
      case 21:
        return <Section13NonRepudiation onNext={nextSlide} />;
      case 22:
        return <Section13DocDroc onNext={nextSlide} />;
      case 23:
        return <SectionCodeSimulation onNext={nextSlide} />;
      case 24:
        return <Section14Closing onRestart={restartDeck} />;
      default:
        return <Section1Hero onNext={nextSlide} />;
    }
  };

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-[#0E0F12] text-[#F1F2F6] flex flex-col justify-between pt-16">
      {/* Floating Head Navbar */}
      <Navbar currentSlide={currentSlide} goToSlide={setCurrentSlide} />

      {/* Main Slide Deck Presenter Container */}
      <div className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-6 overflow-hidden flex flex-col justify-center">
        <div className="w-full h-full max-h-[640px] border-3 border-black bg-[#13141C] rounded-lg shadow-[8px_8px_0px_#000] relative overflow-y-auto">
          {renderSlide()}
        </div>
      </div>
      
      {/* Visual Keyboard navigation helper footer */}
      <div className="w-full text-center pb-2 bg-[#0E0F12] text-[9px] font-mono text-gray-500 flex justify-center gap-4">
        <span>⌨️ [ Use Left / Right Arrow keys to navigate slides ]</span>
        <span>•</span>
        <span>🖥️ [ Designed for desktop presentation viewports ]</span>
      </div>
    </main>
  );
}
