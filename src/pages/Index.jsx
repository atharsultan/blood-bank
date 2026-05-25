import React, { useEffect, useState } from "react";
import Volunteer from "./donar/Volunteer";
import PageHero from "../components/PageHero";

const Index = () => {
  const [stats, setStats] = useState({ donors: 0, units: 0 });

  useEffect(() => {
    document.title = "BBDMS - Blood Bank & Donor Management";

    const mockStock = {
      "A+": 12, "A-": 4, "B+": 15, "B-": 2,
      "AB+": 5, "AB-": 1, "O+": 22, "O-": 8,
    };

    const units = Object.values(mockStock).reduce((a, b) => a + b, 0);
    setStats({ donors: 142, units });
  }, []);

  return (
    <div className="font-sans bg-slate-50 min-h-screen">
      
      {/* HERO SECTION */}
      <PageHero
        title={
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight uppercase tracking-tight text-white text-center md:text-left">
            BLOOD IS MEANT FOR <span className="text-red-500">CIRCULATION.</span> <br />
            DONATE BLOOD.
          </h1>
        }
      >
        <p className="mt-4 md:mt-6 text-sm md:text-base text-white/80 leading-relaxed max-w-xl text-center md:text-left">
          A blood bank is a center where blood is collected, stored, and used for transfusion. 
          It ensures life-saving availability for hospitals and emergencies.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button className="w-full sm:w-auto bg-white text-[#18c5b5] px-8 py-3.5 rounded-full font-bold hover:scale-105 transition shadow-lg text-sm uppercase tracking-widest">
            Donate Now
          </button>
          <button className="w-full sm:w-auto border-2 border-white text-white px-8 py-3.5 rounded-full font-bold hover:bg-white hover:text-[#18c5b5] transition text-sm uppercase tracking-widest">
            Find Donor
          </button>
        </div>
      </PageHero>

      {/* ABOUT SECTION - REFACTORED TO MATCH CONSISTENT CARD LAYOUT */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-16 py-12 md:py-16">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            
            {/* Visual Graphic */}
            <div className="w-full md:w-1/3 flex justify-center">
              <svg viewBox="0 0 280 320" className="w-48 sm:w-64">
                <text x="140" y="40" textAnchor="middle" className="fill-teal-500 font-bold text-xs uppercase tracking-widest">Give the gift</text>
                <text x="140" y="65" textAnchor="middle" className="fill-teal-500 font-bold text-xs uppercase tracking-widest">Of life</text>
                <text x="140" y="95" textAnchor="middle" className="fill-red-600 font-black text-xl uppercase">Donate Blood</text>
                <path d="M140,110 Q180,160 180,200 Q180,250 140,270 Q100,250 100,200 Q100,160 140,110Z" fill="#cc1111" />
              </svg>
            </div>

            {/* Text Content */}
            <div className="w-full md:w-2/3">
              <p className="text-teal-500 uppercase tracking-[0.2em] font-black text-[10px] sm:text-xs">Who We Are</p>
              <h2 className="text-3xl md:text-5xl font-black mt-2 text-slate-800 tracking-tight">About BloodLife</h2>
              <div className="w-16 h-1.5 bg-teal-500 mt-4 mb-6 rounded-full" />
              <p className="text-gray-600 text-sm md:text-lg leading-relaxed mb-8 font-medium">
                BloodLife is a modern blood bank & donor management platform connecting donors with patients in need — making blood donation simpler, safer, and faster.
              </p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                  <h3 className="text-2xl font-black text-teal-500">{stats.donors}+</h3>
                  <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest mt-1">Donors</p>
                </div>
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                  <h3 className="text-2xl font-black text-teal-500">{stats.units}</h3>
                  <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest mt-1">Units</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VOLUNTEER SECTION */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 py-16 md:py-24">
          <Volunteer />
        </div>
      </section>
    </div>
  );
};

export default Index;