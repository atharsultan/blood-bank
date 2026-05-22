import React from "react";
import Header from "../pages/Header";
import bdimg from "../assets/doctor.PNG";

const PageHero = ({ title, children }) => {
  return (
    <section className="relative min-h-[70vh] bg-[#18c5b5] overflow-hidden flex flex-col justify-between">
      
      {/* 1. MASTER BACKGROUND IMAGERY */}
      <img
        src={bdimg}
        alt="Doctor"
        className="absolute top-0 right-0 h-full w-[62%] object-cover object-top mix-blend-multiply pointer-events-none z-0"
      />

      {/* 2. THE FIX: SEMI-TRANSPARENT SHIELD LAYER FOR TEXT VISIBILITY */}
      {/* This top layer darkens slightly only behind the navbar, guaranteeing perfect text contrast */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/20 to-transparent pointer-events-none z-10" />

      {/* 3. SIDEWAY GRADIENT BLEND (Blends the image smoothly into the teal) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#18c5b5] via-[#18c5b5]/90 to-transparent pointer-events-none z-10" />

      {/* 4. TOP NAVIGATION HEADER (Raised above the shields via z-20) */}
      <div className="relative z-20">
        <Header />
      </div>

      {/* 5. HERO TEXT CONTENTS */}
      <div className="relative z-20 max-w-7xl w-full mx-auto px-6 md:px-16 pt-12 pb-28 my-auto">
        <div className="max-w-3xl text-white drop-shadow-sm">
          {title}
          {children}
        </div>
      </div>

      {/* 6. BOTTOM BASELINE WAVE */}
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