import React from "react";
import Header from "../pages/Header";
import bdimg from "../assets/doctor.PNG";

const PageHero = ({ title, children, hideNav = false }) => {
  return (
    <section className="relative h-[600px] bg-[#18c5b5] overflow-hidden">
      
      {/* 1. BACKGROUND IMAGE */}
      <img
        src={bdimg}
        alt="Doctor"
        className="absolute top-0 right-0 h-full w-[62%] object-cover object-top mix-blend-multiply pointer-events-none z-0"
      />

      {/* 2. GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#18c5b5] via-[#18c5b5] to-transparent z-10" />

      {/* 3. HEADER */}
      {!hideNav && (
        <div className="relative z-20">
          <Header />
        </div>
      )}

      {/* 4. HERO CONTENT: 
          - pt-4: Significantly reduced top padding to shift everything higher.
          - flex flex-col: Ensures content stays grouped towards the top.
      */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 md:px-16 pt-4 flex flex-col justify-start">
        <div className="max-w-2xl text-white">
          <div className="text-4xl md:text-5xl font-black leading-tight mb-4">
            {title}
          </div>
          <div className="text-base md:text-lg opacity-90 mb-8">
            {children}
          </div>
        </div>
      </div>

      {/* 5. WAVE */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg 
          viewBox="0 0 1440 180" 
          preserveAspectRatio="none" 
          className="block w-full h-[120px]"
        >
          <path 
            fill="#ffffff" 
            d="M0,40 C180,120 360,0 540,40 C720,80 900,140 1080,80 C1260,20 1350,60 1440,20 L1440,180 L0,180 Z" 
          />
        </svg>
      </div>
    </section>
  );
};

export default PageHero;