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
    <div className="font-sans bg-white">
      
      {/* ================= REUSABLE HERO CONTEXT ================= */}
      <PageHero
        title={
          <h1 className="text-3xl md:text-5xl font-bold leading-tight uppercase max-w-[700px]">
            <span className="whitespace-nowrap">BLOOD IS MEANT FOR</span>
            <br />
            <span className="whitespace-nowrap">CIRCULATION. DONATE</span>
            <br />
            BLOOD.
          </h1>
        }
      >
        {/* Subtitle and Button slots injected inside as children */}
        <p className="mt-6 text-sm md:text-base text-white/80 leading-relaxed max-w-xl">
          A blood bank is a center where blood is collected, stored, and used for transfusion.
          It ensures life-saving availability for hospitals and emergencies.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-white text-[#18c5b5] px-8 py-3 rounded-full font-bold hover:scale-105 transition shadow-md">
            Donate Now
          </button>
          <button className="border border-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-[#18c5b5] transition">
            Find Donor
          </button>
        </div>
      </PageHero>

      {/* ================= ABOUT SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-20 flex flex-col md:flex-row gap-16 items-center">
        {/* SVG Graphic column */}
        <div className="w-full md:w-1/3 flex justify-center">
          <svg viewBox="0 0 280 320" className="w-60">
            <text x="140" y="40" textAnchor="middle" className="fill-teal-500 font-bold">GIVE THE GIFT</text>
            <text x="140" y="65" textAnchor="middle" className="fill-teal-500 font-bold">OF LIFE</text>
            <text x="140" y="95" textAnchor="middle" className="fill-red-600 font-black">DONATE BLOOD</text>
            <path d="M140,110 Q180,160 180,200 Q180,250 140,270 Q100,250 100,200 Q100,160 140,110Z" fill="#cc1111" />
          </svg>
        </div>

        {/* Text descriptions column */}
        <div className="w-full md:w-2/3">
          <p className="text-teal-500 uppercase tracking-[3px] font-bold text-sm">Who We Are</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2">About Us</h2>
          <div className="w-12 h-1 bg-teal-500 mt-3 mb-6 rounded-full" />
          <p className="text-gray-600 leading-relaxed mb-4">
            Blood donation ensures hospitals always have a stable and safe supply of blood.
          </p>
          
          <div className="flex gap-10 mt-6">
            <div>
              <h3 className="text-2xl font-bold text-teal-500">{stats.donors}+</h3>
              <p className="text-sm text-gray-500">Donors Registered</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-teal-500">{stats.units}</h3>
              <p className="text-sm text-gray-500">Units Available</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-teal-500">99%</h3>
              <p className="text-sm text-gray-500">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VOLUNTEER SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-20">
        <Volunteer />
      </section>
    </div>
  );
};

export default Index;