import React, { useState } from "react";
import PageHero from "../components/PageHero";

// Only importing Athar's photo locally since it already exists in your assets folder!
import AtharPhoto from "../assets/Athar.jpg";

const About = () => {
  // State profile selector: 'main', 'athar', or 'ghulam'
  const [activeView, setActiveView] = useState("main");

  // Fallback placeholder images so Vite never crashes due to missing files
  const ghulamPlaceholder = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"; 
  const logoPlaceholder = "https://cdn-icons-png.flaticon.com/512/10433/10433048.png";

  // ================= VIEW 1: ATHAR'S DETAILED INTRO =================
  if (activeView === "athar") {
    return (
      <div className="font-sans bg-slate-50 min-h-screen pb-16">
        <PageHero
          title={
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
              Athar <span className="text-red-500">Ali</span>
            </h1>
          }
        />
        {/* Changed max-w-4xl to a responsive fluid layout shell */}
        <main className="w-full max-w-4xl mx-auto px-4 sm:px-6 relative z-30 -mt-16 md:-mt-24">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 sm:p-8 md:p-12 space-y-8">
            
            {/* Swaps to column stack on mobile, horizontal row layout on desktop screens */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 text-center md:text-left">
              {/* Profile Picture Container */}
              <div className="shrink-0">
                <img
                  src={AtharPhoto}
                  alt="Athar Ali"
                  className="w-32 h-32 sm:w-36 sm:h-36 rounded-3xl border-4 border-[#18c5b5]/40 shadow-xl object-cover"
                />
              </div>

              {/* Bio Block */}
              <div className="flex-1 w-full">
                <h2 className="text-base sm:text-lg font-black text-slate-800 uppercase tracking-wider border-b pb-3 border-slate-100 flex items-center justify-center md:justify-start gap-2">
                  <span>👤</span> Profile Introduction
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mt-4 font-medium">
                  Hello, I am Athar Ali, a passionate Full-Stack Software
                  Developer dedicated to constructing highly scannable,
                  responsive, and state-driven web platforms. My work centers
                  heavily on component architectures, system optimization, and
                  building flawless user layouts with modern tooling like React,
                  Vite, and Tailwind CSS.
                </p>
              </div>
            </div>

            {/* Education Block */}
            <div className="w-full">
              <h2 className="text-base sm:text-lg font-black text-slate-800 uppercase tracking-wider border-b pb-3 border-slate-100 flex items-center justify-center md:justify-start gap-2">
                <span>🎓</span> Academic Background
              </h2>
              <div className="mt-4 bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-100/80 shadow-inner text-center md:text-left">
                <h3 className="font-black text-slate-900 text-base tracking-tight">
                  Bachelor of Software Engineering
                </h3>
                <p className="text-[#12a396] text-xs font-bold mt-1 uppercase tracking-wider">
                  Specialization in Web Engineering & Software Architecture
                </p>
              </div>
            </div>

            {/* Contact Details & Social Handles */}
            <div className="w-full">
              <h2 className="text-base sm:text-lg font-black text-slate-800 uppercase tracking-wider border-b pb-3 border-slate-100 flex items-center justify-center md:justify-start gap-2">
                <span>🌐</span> Connect With Me
              </h2>
              {/* Auto stacks grid column sizes for mobile profiles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col justify-between text-center sm:text-left">
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Email Address
                  </span>
                  <a
                    href="mailto:atharsultan56@gmail.com"
                    className="text-sm font-black text-slate-800 hover:text-red-600 transition-colors break-all"
                  >
                    atharsultan56@gmail.com
                  </a>
                </div>
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col justify-between text-center sm:text-left">
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    GitHub Profile
                  </span>
                  <a
                    href="https://github.com/atharsultan"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-black text-[#12a396] hover:underline flex items-center justify-center sm:justify-start gap-1"
                  >
                    github.com/atharsultan ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Back Button Action */}
            <div className="pt-4 text-center">
              <button
                onClick={() => {
                  setActiveView("main");
                  window.scrollTo(0, 0);
                }}
                className="w-full sm:w-auto px-6 py-3 bg-slate-900 text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-slate-800 transition-all shadow-md hover:shadow-lg active:scale-95"
              >
                &larr; Back
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // ================= VIEW 2: GHULAM'S DETAILED INTRO =================
  if (activeView === "ghulam") {
    return (
      <div className="font-sans bg-slate-50 min-h-screen pb-16">
        <PageHero
          title={
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
              Ghulam <span className="text-red-500">Muhammad</span>
            </h1>
          }
        />
        <main className="w-full max-w-4xl mx-auto px-4 sm:px-6 relative z-30 -mt-16 md:-mt-24">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 sm:p-8 md:p-12 space-y-8">
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 text-center md:text-left">
              {/* Profile Picture */}
              <div className="shrink-0">
                <img
                  src={ghulamPlaceholder}
                  alt="Ghulam Muhammad"
                  className="w-32 h-32 sm:w-36 sm:h-36 rounded-3xl border-4 border-slate-300 shadow-xl object-cover"
                />
              </div>

              {/* Bio Block */}
              <div className="flex-1 w-full">
                <h2 className="text-base sm:text-lg font-black text-slate-800 uppercase tracking-wider border-b pb-3 border-slate-100 flex items-center justify-center md:justify-start gap-2">
                  <span>👤</span> Profile Introduction
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mt-4 font-medium">
                  Hello, I am Ghulam Muhammad. I specialize in designing
                  back-end flow control matrix rules, organizing relational
                  inventory data points, and optimizing database pipeline
                  logic. My target focus for BBDMS is ensuring zero
                  configuration overlap during critical admin request status
                  updates.
                </p>
              </div>
            </div>

            {/* Education Block */}
            <div className="w-full">
              <h2 className="text-base sm:text-lg font-black text-slate-800 uppercase tracking-wider border-b pb-3 border-slate-100 flex items-center justify-center md:justify-start gap-2">
                <span>🎓</span> Academic Background
              </h2>
              <div className="mt-4 bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-100/80 shadow-inner text-center md:text-left">
                <h3 className="font-black text-slate-900 text-base tracking-tight">
                  Bachelor of Computer System Engineering
                </h3>
                <p className="text-slate-700 text-xs font-bold mt-1 uppercase tracking-wider">
                  Specialization in Database Systems & Cloud Metrics
                </p>
              </div>
            </div>

            {/* Contact Details & Social Handles */}
            <div className="w-full">
              <h2 className="text-base sm:text-lg font-black text-slate-800 uppercase tracking-wider border-b pb-3 border-slate-100 flex items-center justify-center md:justify-start gap-2">
                <span>🌐</span> Connect With Me
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col justify-between text-center sm:text-left">
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Email Address
                  </span>
                  <a
                    href="mailto:ghulam@example.com"
                    className="text-sm font-black text-slate-800 hover:text-red-600 transition-colors break-all"
                  >
                    ghulam@example.com
                  </a>
                </div>
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col justify-between text-center sm:text-left">
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    LinkedIn Handle
                  </span>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-black text-slate-800 hover:underline flex items-center justify-center sm:justify-start gap-1"
                  >
                    linkedin.com/in/ghulam ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Back Button Action */}
            <div className="pt-4 text-center">
              <button
                onClick={() => {
                  setActiveView("main");
                  window.scrollTo(0, 0);
                }}
                className="w-full sm:w-auto px-6 py-3 bg-slate-900 text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-slate-800 transition-all shadow-md hover:shadow-lg active:scale-95"
              >
                &larr; Back
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // ================= VIEW 3: MAIN ABOUT PAGE & DEVELOPERS GRID =================
  return (
    <div className="font-sans bg-slate-50 min-h-screen">
      <PageHero
        title={
          <div className="flex items-center gap-3 md:gap-4 flex-wrap">
            <img src={logoPlaceholder} alt="BloodLife Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain invert" />
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black leading-tight uppercase text-white tracking-tight">
              About <span className="text-red-600">BloodLife</span>
            </h1>
          </div>
        }
      >
        <p className="mt-4 md:mt-6 text-xs sm:text-sm md:text-base text-white/80 leading-relaxed max-w-xl font-medium">
          BloodLife is a modern blood bank & donor management platform
          connecting donors with patients in need — making blood donation
          simpler, safer, and faster.
        </p>
      </PageHero>

      {/* Applied the responsive max-width layout container with fluid padding parameters */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-16 py-12 md:py-16">
        
        {/* Our Mission Section Heading */}
        <div className="mb-8 md:mb-12 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight uppercase">
            Our <span className="text-red-600">Mission</span>
          </h2>
          <p className="text-slate-400 text-[10px] sm:text-xs mt-1 font-extrabold uppercase tracking-widest">
            Building a faster, safer lifeline for our communities
          </p>
        </div>

        {/* Mission Feature Grid Blocks (Responsive Columns 1 -> 3) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
          
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-lg mb-4 md:mb-6 shadow-inner">
                👥
              </div>
              <h3 className="text-base md:text-lg font-black text-slate-800 tracking-tight mb-2">
                Verified Donors
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                We verify all donor profiles, location details, and eligibility
                tracking logs to keep you connected with active lifesavers.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-50 text-xs font-bold text-blue-600 uppercase tracking-wider">
              Safe Sourcing &rarr;
            </div>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 bg-red-50 text-red-600 rounded-xl flex items-center justify-center font-bold text-lg mb-4 md:mb-6 shadow-inner">
                📄
              </div>
              <h3 className="text-base md:text-lg font-black text-slate-800 tracking-tight mb-2">
                Easy Requests
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                Hospitals or families can submit live blood requests to our
                digital database in seconds, automating matching alerts.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-50 text-xs font-bold text-red-600 uppercase tracking-wider">
              Simplified Process &rarr;
            </div>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all flex flex-col justify-between sm:col-span-2 lg:col-span-1">
            <div>
              <div className="w-11 h-11 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center font-bold text-lg mb-4 md:mb-6 shadow-inner">
                ⚡
              </div>
              <h3 className="text-base md:text-lg font-black text-slate-800 tracking-tight mb-2">
                Real-time Analytics
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                By tracking storage hubs side-by-side with incoming requirements,
                we help reduce critical delivery bottlenecks.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-50 text-xs font-bold text-emerald-600 uppercase tracking-wider">
              Immediate Response &rarr;
            </div>
          </div>
        </div>

        {/* Centered Meet the Developers Section */}
        <div className="border-t border-slate-200/60 pt-12 md:pt-16 flex flex-col items-center">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight uppercase">
              Meet The <span className="text-red-600">Developers</span>
            </h2>
            <p className="text-slate-400 text-[10px] sm:text-xs mt-1 font-extrabold uppercase tracking-widest">
              The engineering minds behind the BBDMS platform architecture
            </p>
          </div>

          {/* Centered Profile Grid Layout (Swaps columns smoothly across screen profiles) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl w-full justify-center">
            
            {/* Clickable Card: Athar */}
            <div
              onClick={() => {
                setActiveView("athar");
                window.scrollTo(0, 0);
              }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6 hover:shadow-md hover:border-[#18c5b5]/40 transition-all cursor-pointer group text-center sm:text-left"
            >
              <div className="shrink-0 group-hover:scale-105 transition-transform">
                <img
                  src={AtharPhoto}
                  alt="Athar Ali"
                  className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl border-2 border-[#18c5b5]/40 object-cover shadow-md"
                />
              </div>
              <div className="flex flex-col justify-between h-full w-full">
                <div>
                  <h3 className="text-xl font-black text-slate-800 tracking-tight group-hover:text-red-600 transition-colors">
                    Athar Ali
                  </h3>
                  <span className="inline-block text-xs font-bold text-[#12a396] uppercase tracking-wider mt-0.5">
                    Lead Full-Stack Engineer
                  </span>
                  <p className="text-slate-500 text-sm mt-3 leading-relaxed font-medium">
                    Specializes in building high-performance frontend interfaces
                    using React and modern build pipelines.
                  </p>
                </div>
                <span className="inline-block text-xs font-bold text-red-600 uppercase tracking-widest mt-4 sm:group-hover:translate-x-1 transition-transform">
                  View Profile &rarr;
                </span>
              </div>
            </div>

            {/* Clickable Card: Ghulam */}
            <div
              onClick={() => {
                setActiveView("ghulam");
                window.scrollTo(0, 0);
              }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6 hover:shadow-md hover:border-slate-300 transition-all cursor-pointer group text-center sm:text-left"
            >
              <div className="shrink-0 group-hover:scale-105 transition-transform">
                <img
                  src={ghulamPlaceholder}
                  alt="Ghulam Muhammad"
                  className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl border-2 border-slate-300 object-cover shadow-md"
                />
              </div>
              <div className="flex flex-col justify-between h-full w-full">
                <div>
                  <h3 className="text-xl font-black text-slate-800 tracking-tight group-hover:text-red-600 transition-colors">
                    Ghulam Muhammad
                  </h3>
                  <span className="inline-block text-xs font-bold text-slate-700 uppercase tracking-wider mt-0.5">
                    Systems & Database Architect
                  </span>
                  <p className="text-slate-500 text-sm mt-3 leading-relaxed font-medium">
                    Expert in state lifecycle optimization, backend schema
                    processing, and structured data queries.
                  </p>
                </div>
                <span className="inline-block text-xs font-bold text-green-600 uppercase tracking-widest mt-4 sm:group-hover:translate-x-1 transition-transform">
                  View Profile &rarr;
                </span>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default About;