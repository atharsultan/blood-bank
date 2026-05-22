import React, { useEffect, useState } from "react";

const BLOOD_GROUPS = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

/* ── Inline SVG assets (Optimized & Self-Contained) ── */

const DoctorSVG = () => (
  <svg
    viewBox="0 0 380 520"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full object-cover pointer-events-none"
    aria-hidden="true"
  >
    <rect width="380" height="520" fill="none" />
    <ellipse cx="190" cy="420" rx="130" ry="160" fill="#2eb086" />
    <rect x="100" y="300" width="180" height="220" rx="20" fill="#2eb086" />
    <path d="M155,300 Q190,340 225,300 L220,320 Q190,355 160,320Z" fill="#228062" />
    <rect x="170" y="220" width="40" height="85" rx="8" fill="#f5c5a3" />
    <ellipse cx="190" cy="200" rx="65" ry="75" fill="#f5c5a3" />
    <path d="M125,185 Q130,110 190,110 Q250,110 255,185 Q240,155 190,155 Q140,155 125,185Z" fill="#2d2216" />
    <path d="M125,185 Q122,210 128,230 Q135,195 140,190Z" fill="#2d2216" />
    <path d="M255,185 Q258,210 252,230 Q245,195 240,190Z" fill="#2d2216" />
    <ellipse cx="126" cy="205" rx="12" ry="16" fill="#f0b090" />
    <ellipse cx="254" cy="205" rx="12" ry="16" fill="#f0b090" />
    <ellipse cx="168" cy="198" rx="9" ry="10" fill="#fff" />
    <ellipse cx="212" cy="198" rx="9" ry="10" fill="#fff" />
    <ellipse cx="170" cy="200" rx="5" ry="6" fill="#4a2e22" />
    <ellipse cx="214" cy="200" rx="5" ry="6" fill="#4a2e22" />
    <path d="M158,186 Q168,181 178,185" stroke="#2d2216" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <path d="M202,185 Q212,181 222,186" stroke="#2d2216" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <path d="M188,210 Q185,225 183,230 Q190,234 197,230 Q195,225 192,210" fill="#e0a080" />
    <path d="M174,242 Q190,254 206,242" stroke="#b06040" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <path d="M160,295 Q140,310 135,340 Q133,360 145,370 Q165,385 175,365 Q180,350 170,340" stroke="#444" strokeWidth="5" fill="none" strokeLinecap="round" />
    <circle cx="155" cy="343" r="10" fill="#555" />
    <circle cx="145" cy="370" r="13" fill="#777" />
    <path d="M160,295 Q158,280 150,272" stroke="#444" strokeWidth="4" fill="none" strokeLinecap="round" />
    <path d="M160,295 Q162,280 155,270" stroke="#444" strokeWidth="4" fill="none" strokeLinecap="round" />
    <ellipse cx="285" cy="330" rx="28" ry="90" fill="#2eb086" transform="rotate(-20,285,330)" />
    <ellipse cx="295" cy="260" rx="20" ry="30" fill="#f5c5a3" transform="rotate(-20,295,260)" />
    <rect x="280" y="252" width="30" height="16" rx="4" fill="#b89050" />
    <rect x="284" y="254" width="22" height="12" rx="2" fill="#111122" />
    <ellipse cx="100" cy="370" rx="26" ry="80" fill="#2eb086" transform="rotate(10,100,370)" />
    <ellipse cx="96" cy="435" rx="20" ry="25" fill="#f5c5a3" transform="rotate(10,96,435)" />
    <rect x="65" y="420" width="55" height="70" rx="4" fill="#e0d8c8" transform="rotate(10,90,450)" />
    <rect x="70" y="426" width="45" height="55" rx="2" fill="#ede8df" transform="rotate(10,90,450)" />
    <rect x="178" y="305" width="24" height="32" rx="3" fill="#fff" opacity="0.95" />
    <rect x="181" y="308" width="18" height="8" rx="2" fill="#228062" />
    <ellipse cx="143" cy="520" rx="40" ry="12" fill="#111" />
    <ellipse cx="217" cy="520" rx="40" ry="12" fill="#111" />
  </svg>
);

const BloodDonationSVG = () => (
  <svg viewBox="0 0 260 280" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[240px] pointer-events-none" aria-hidden="true">
    <path
      d="M130,20 Q170,70 185,110 Q200,150 180,180 Q160,215 130,220 Q100,215 80,180 Q60,150 75,110 Q90,70 130,20Z"
      fill="#dc2626"
    />
    <ellipse cx="110" cy="95" rx="18" ry="28" fill="rgba(255,255,255,0.22)" transform="rotate(-20,110,95)" />
    <path d="M30,280 Q25,240 35,220 Q40,210 50,215 Q52,200 62,202 Q64,188 74,192 Q76,178 86,183 L88,230 Q78,232 70,245 Q62,260 55,280Z" fill="#e8b090" />
    <path d="M230,280 Q235,240 225,220 Q220,210 210,215 Q208,200 198,202 Q196,188 186,192 Q184,178 174,183 L172,230 Q182,232 190,245 Q198,260 205,280Z" fill="#e8b090" />
    <path d="M50,150 Q54,140 58,150 Q56,160 50,160Z" fill="#dc2626" opacity="0.8" />
    <path d="M200,145 Q204,135 208,145 Q206,155 200,155Z" fill="#dc2626" opacity="0.8" />
  </svg>
);

const Home = () => {
  const [stock, setStock] = useState({});
  const [stats, setStats] = useState({ donors: 0, units: 0 });

  useEffect(() => {
    document.title = "BBDMS - Blood Bank & Donor Management";

    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      const mockStock = {
        "A+": 12, "A-": 4, "B+": 15, "B-": 2,
        "AB+": 5, "AB-": 1, "O+": 22, "O-": 8,
      };
      const totalUnits = Object.values(mockStock).reduce((a, b) => a + b, 0);
      setStock(mockStock);
      setStats({ donors: 142, units: totalUnits });
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans antialiased overflow-x-hidden">

      {/* ── HERO SECTION ── */}
      <section className="relative min-h-[95vh] lg:min-h-screen bg-gradient-to-br from-[#18c5b5] to-[#40cbc0] overflow-hidden flex flex-col justify-between">
        
        {/* Subtle geometric wash */}
        <div className="absolute inset-0 bg-black/5 pointer-events-none z-0" />

        {/* NAVBAR */}
        <nav className="relative z-30 flex items-center justify-between px-6 md:px-16 py-6 max-w-7xl w-full mx-auto">
          <h1 className="text-white text-xl md:text-2xl font-black uppercase tracking-widest selection:bg-white selection:text-teal-600">
            Bbdms
          </h1>
          <ul className="hidden lg:flex items-center gap-8 text-white text-xs font-bold uppercase tracking-wider">
            {["Home", "About", "Donors List", "Contact Us", "Donor Signup", "Admin", "Search Donor"].map((item) => (
              <li 
                key={item} 
                className="cursor-pointer opacity-90 hover:opacity-100 hover:translate-y-[-1px] transition-all duration-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>

        {/* HERO BODY WRAPPER */}
        <div className="relative z-20 max-w-7xl w-full mx-auto px-6 md:px-16 flex-1 grid grid-cols-1 lg:grid-cols-12 items-center gap-12 pb-16 lg:pb-0">
          
          {/* LEFT: TEXT & CALL TO ACTIONS */}
          <div className="lg:col-span-7 text-white space-y-6 lg:max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-[1.1]">
              Blood is meant <br />
              <span className="text-slate-900/30">for circulation.</span> <br />
              Donate blood.
            </h1>

            <p className="text-sm md:text-base leading-relaxed text-white/90 max-w-xl font-medium">
              A specialized platform where unified healthcare parameters securely connect active, local donors with emergency operational units. Accelerating transfusion logistics securely across public and private hospitals.
            </p>

            {/* INTERACTIVE BUTTONS WITH DYNAMIC TEAL & WHITE ROTATION */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-3.5 bg-white text-[#18c5b5] hover:bg-transparent hover:text-white font-extrabold text-xs uppercase tracking-widest rounded-full border-2 border-white shadow-md hover:shadow-xl hover:translate-y-[-2px] active:translate-y-[0px] transition-all duration-300">
                Donate Now
              </button>
              <button className="px-8 py-3.5 bg-transparent text-white hover:bg-white hover:text-[#18c5b5] font-extrabold text-xs uppercase tracking-widest rounded-full border-2 border-white shadow-md hover:shadow-xl hover:translate-y-[-2px] active:translate-y-[0px] transition-all duration-300">
                Find Donor
              </button>
            </div>

            {/* CAROUSEL PAGINATION INDICATORS */}
            <div className="flex gap-2.5 pt-6">
              <div className="w-3 h-3 rounded-full bg-white transition-all" />
              <div className="w-3 h-3 rounded-full bg-white/40 hover:bg-white/60 cursor-pointer transition-all" />
              <div className="w-3 h-3 rounded-full bg-white/40 hover:bg-white/60 cursor-pointer transition-all" />
            </div>
          </div>

          {/* RIGHT: VECTOR MEDICAL COMPOSITION */}
          <div className="hidden lg:block lg:col-span-5 relative h-full w-full min-h-[500px]">
            {/* Embedded Circular Soft Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/15 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute inset-0 flex items-end justify-center">
              <DoctorSVG />
            </div>
          </div>
        </div>

        {/* CURVED PATH ARCHITECTURE OVERLAY */}
        <div className="w-full overflow-hidden fill-white leading-[0] relative z-25">
          <svg viewBox="0 0 1440 70" className="w-full h-[50px] md:h-[70px]" preserveAspectRatio="none">
            <path d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,70L1320,70C1200,70,960,70,720,70C480,70,240,70,120,70L0,70Z" />
          </svg>
        </div>
      </section>

      {/* ── MISSION & VALUE BRIEFING SECTION ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COMPONENT COLUMN */}
          <div className="lg:col-span-4 flex flex-col items-center text-center p-8 bg-slate-50 rounded-3xl border border-slate-100">
            <span className="text-[10px] font-black uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-md mb-4">
              Urgent Engagement
            </span>
            <h2 className="text-xl md:text-2xl font-black text-slate-800 uppercase tracking-tight leading-tight mb-6">
              Give The Gift Of Life:<br />
              <span className="text-red-600">Donate Blood</span>
            </h2>
            <BloodDonationSVG />
          </div>

          {/* RIGHT INFORMATION CONTAINER */}
          <div className="lg:col-span-8 space-y-6 lg:pt-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-600">
                Core Initiative
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-slate-800 uppercase tracking-tight mt-1">
                About Our Ecosystem
              </h2>
              <div className="w-12 h-1 bg-[#18c5b5] rounded-full mt-3" />
            </div>
            
            <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed">
              BBDMS is developed to bridge the critical infrastructure gaps within local healthcare distribution frameworks. By mapping voluntary donor networks along exact blood group filters and dynamic geographic coordinates, our system reduces standard procurement times dramatically.
            </p>
            <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed">
              Our open platform securely registers profiles, monitors critical recovery intervals between donations, and lets hospitals publish immediate requests. Every line of data is encrypted and distributed dynamically to match donors safely where they are most required.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;