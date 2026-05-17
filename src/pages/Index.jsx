import React, { useEffect, useState } from "react";
import bdimg from "../assets/doctor.PNG";
import Volunteer from "./donar/Volunteer";
import { Link, useLocation } from "react-router-dom";

const NAV_ITEMS = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Donors List", path: "/stock" },
    { name: "Contact Us", path: "/contact" },
    { name: "Donor Signup", path: "/signup" },
    { name: "Admin", path: "/admin" },
    { name: "Search Donor", path: "/search" },
];
const Index = () => {
  const [stats, setStats] = useState({ donors: 0, units: 0 });

  useEffect(() => {
    document.title = "BBDMS - Blood Bank & Donor Management";

    const mockStock = {
      "A+": 12,
      "A-": 4,
      "B+": 15,
      "B-": 2,
      "AB+": 5,
      "AB-": 1,
      "O+": 22,
      "O-": 8,
    };

    const units = Object.values(mockStock).reduce((a, b) => a + b, 0);
    setStats({ donors: 142, units });
  }, []);

  return (
    <div className="font-sans bg-white">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen bg-[#18c5b5] overflow-hidden">

        {/* IMAGE */}
        <img
          src={bdimg}
          alt=""
          className="absolute top-0 right-0 h-full w-[62%] object-cover object-top mix-blend-multiply"
        />

        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#18c5b5] via-[#18c5b5]/80 to-transparent" />

        {/* CONTAINER (alignment fixed) */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">

          {/* NAVBAR */}
          <nav className="flex items-center justify-between py-6 text-white">
            <h1 className="font-bold tracking-[3px] text-lg">
              {/* LOGO */}
                    <Link to="/">
                        <h1 className="font-bold tracking-[3px] text-lg cursor-pointer">
                            BBDMS
                        </h1>
                    </Link>
            </h1>

            <ul className="hidden md:flex gap-6 text-xs font-semibold uppercase tracking-widest">
               <nav className="flex items-center justify-between py-6 text-white">

                    

                    {/* NAV LINKS */}
                    <ul className="hidden md:flex gap-6 text-xs font-semibold uppercase tracking-widest">

                        {NAV_ITEMS.map((item) => (
                            <li key={item.name}>

                                <Link
                                    to={item.path}
                                    className="cursor-pointer hover:opacity-80 transition"
                                >
                                    {item.name}
                                </Link>

                            </li>
                        ))}

                    </ul>
                </nav>
            </ul>
          </nav>

          {/* HERO CONTENT */}
          <div className="flex items-center min-h-[80vh]">

            <div className="max-w-xl text-white">

              {/* ✅ FIXED 3-LINE CONTROLLED HEADING */}
              <h1 className="text-3xl md:text-5xl font-bold leading-tight uppercase max-w-[700px]">
                <span className="whitespace-nowrap">
                  BLOOD IS MEANT FOR
                </span>
                <br />

                <span className="whitespace-nowrap">
                  CIRCULATION. DONATE
                </span>
                <br />

                BLOOD.
              </h1>

              <p className="mt-6 text-sm md:text-base text-white/80 leading-relaxed">
                A blood bank is a center where blood is collected, stored, and used for transfusion.
                It ensures life-saving availability for hospitals and emergencies.
              </p>

              <div className="mt-8 flex gap-4">
                <button className="bg-white text-[#18c5b5] px-8 py-3 rounded-full font-bold hover:scale-105 transition">
                  Donate Now
                </button>

                <button className="border border-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-[#18c5b5] transition">
                  Find Donor
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* WAVE */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 180"
            preserveAspectRatio="none"
            className="block w-full h-[120px]"
          >
            <path
              fill="#ffffff"
              d="
        M0,40
        C180,120 360,0 540,40
        C720,80 900,140 1080,80
        C1260,20 1350,60 1440,20
        L1440,180
        L0,180
        Z
      "
            />
          </svg>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-20 flex flex-col md:flex-row gap-100 items-center">

        {/* LEFT */}
        <div className="w-full md:w-1/3 flex justify-center">
          <svg viewBox="0 0 280 320" className="w-60">
            <text x="140" y="40" textAnchor="middle" className="fill-teal-500 font-bold">
              GIVE THE GIFT
            </text>
            <text x="140" y="65" textAnchor="middle" className="fill-teal-500 font-bold">
              OF LIFE
            </text>
            <text x="140" y="95" textAnchor="middle" className="fill-red-600 font-black">
              DONATE BLOOD
            </text>

            <path
              d="M140,110 Q180,160 180,200 Q180,250 140,270 Q100,250 100,200 Q100,160 140,110Z"
              fill="#cc1111"
            />
          </svg>
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-2/3">

          <p className="text-teal-500 uppercase tracking-[3px] font-bold text-sm">
            Who We Are
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
            About Us
          </h2>

          <div className="w-12 h-1 bg-teal-500 mt-3 mb-6 rounded-full" />

          <p className="text-gray-600 leading-relaxed mb-4">
            Blood donation ensures hospitals always have a stable and safe supply of blood.
          </p>

          <div className="flex gap-10">
            <div>
              <h3 className="text-2xl font-bold text-teal-500">5000+</h3>
              <p className="text-sm text-gray-500">Donors Registered</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-teal-500">120+</h3>
              <p className="text-sm text-gray-500">Hospitals Served</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-teal-500">99%</h3>
              <p className="text-sm text-gray-500">Success Rate</p>
            </div>
          </div>

        </div>
      </section>

      {/* VOLUNTEER */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-20">
        <Volunteer />
      </section>

    </div>
  );
};

export default Index;