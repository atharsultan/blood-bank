import React, { useEffect, useState } from "react";
import bdimg from "../assets/doctor.PNG"; // Use transparent PNG image

const BLOOD_GROUPS = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const Index = () => {
  const [stock, setStock] = useState({});
  const [stats, setStats] = useState({
    donors: 0,
    units: 0,
  });

  useEffect(() => {
    document.title = "BBDMS - Blood Bank & Donor Management";

    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 700));

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

      const totalUnits = Object.values(mockStock).reduce(
        (a, b) => a + b,
        0
      );

      setStock(mockStock);

      setStats({
        donors: 142,
        units: totalUnits,
      });
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden font-sans">
      {/* HERO SECTION */}
      <section className="relative min-h-screen bg-gradient-to-r from-[#18c5b5] to-[#5ad7cc] overflow-hidden">
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10 z-0"></div>

        {/* NAVBAR */}
        <nav className="relative z-30 flex items-center justify-between px-8 md:px-16 py-6">
          <h1 className="text-white text-2xl font-bold tracking-wide">
            BBDMS
          </h1>

          <ul className="hidden md:flex items-center gap-10 text-white uppercase text-sm font-medium">
            <li className="cursor-pointer hover:text-gray-200 transition">
              Home
            </li>

            <li className="cursor-pointer hover:text-gray-200 transition">
              About
            </li>

            <li className="cursor-pointer hover:text-gray-200 transition">
              Donors List
            </li>

            <li className="cursor-pointer hover:text-gray-200 transition">
              Contact Us
            </li>

            <li className="cursor-pointer hover:text-gray-200 transition">
              Donor Signup
            </li>

            <li className="cursor-pointer hover:text-gray-200 transition">
              Admin
            </li>

            <li className="cursor-pointer hover:text-gray-200 transition">
              Search Donor
            </li>
          </ul>
        </nav>

        {/* HERO CONTENT */}
        <div className="relative z-20 max-w-7xl mx-auto px-8 md:px-16 pt-10 md:pt-16">
          <div className="relative z-20 min-h-[85vh] flex items-center">

            {/* LEFT CONTENT */}
            <div className="text-white">
              <h1 className="text-5xl md:text-7xl font-extrabold uppercase leading-tight">
                Blood Is Meant
                <br />
                For Circulation.
                <br />
                Donate Blood.
              </h1>

              <p className="mt-8 text-white/80 text-sm md:text-base leading-relaxed max-w-xl">
                A blood bank is a center where blood gathered as a result of
                blood donation is stored and preserved for later use in blood
                transfusion. The term blood bank typically refers to a division
                of a hospital where storage of blood products occurs.
              </p>

              {/* BUTTONS */}
              <div className="mt-10 flex flex-wrap gap-5">
                <button className="bg-white text-[#17bcae] px-8 py-3 rounded-full font-semibold shadow-xl hover:scale-105 transition-all duration-300">
                  Donate Now
                </button>

                <button className="border border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#17bcae] transition-all duration-300">
                  Find Donor
                </button>
              </div>

              {/* SLIDER DOTS */}
              <div className="flex items-center gap-3 mt-14">
                <div className="w-3 h-3 rounded-full bg-white"></div>
                <div className="w-3 h-3 rounded-full bg-white/50"></div>
                <div className="w-3 h-3 rounded-full bg-white/50"></div>
                
              </div>
            </div>

           
            {/* RIGHT IMAGE */}
<div className="absolute right-0 top-0 h-full w-[48%] hidden md:flex justify-end overflow-hidden">

  {/* Soft Glow */}
  <div className="absolute right-20 top-20 w-[500px] h-[500px] bg-white/20 blur-3xl rounded-full"></div>

  <img
    src={bdimg}
    alt="Doctor"
    className="
      h-full
      w-auto
      object-cover
      object-right-top
      relative
      z-10
      select-none
      pointer-events-none
    "
  />
</div>
          </div>
        </div>

        {/* CURVED BOTTOM */}
        <div className="absolute bottom-0 left-0 w-full leading-none">
          <svg
            viewBox="0 0 1440 120"
            className="w-full h-[120px]"
            preserveAspectRatio="none"
          >
            <path
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
              fill="#ffffff"
            ></path>
          </svg>
        </div>
      </section>

      {/* BLOOD STOCK SECTION */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 py-24">

        {/* TOP */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-14">

          <div>
            <h2 className="text-4xl font-extrabold text-gray-800">
              Blood Availability
            </h2>

            <p className="text-gray-500 mt-3">
              Real-time blood stock available in our blood bank.
            </p>
          </div>

          {/* STATS */}
          <div className="flex gap-10 mt-8 md:mt-0">

            <div>
              <h3 className="text-4xl font-black text-[#18c5b5]">
                {stats.donors}+
              </h3>

              <p className="text-gray-500 uppercase text-sm tracking-widest">
                Donors
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-[#18c5b5]">
                {stats.units}
              </h3>

              <p className="text-gray-500 uppercase text-sm tracking-widest">
                Units
              </p>
            </div>
          </div>
        </div>

        {/* BLOOD GROUP CARDS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {BLOOD_GROUPS.map((bg) => (
            <div
              key={bg}
              className="
                bg-white
                rounded-3xl
                shadow-lg
                hover:shadow-2xl
                transition-all
                duration-300
                p-8
                text-center
                border
                border-gray-100
                hover:-translate-y-2
              "
            >
              {/* ICON */}
              <div className="flex justify-center mb-5">
                <div className="w-16 h-16 rounded-full bg-[#18c5b5]/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 24 24"
                    fill="#18c5b5"
                  >
                    <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
                  </svg>
                </div>
              </div>

              {/* GROUP */}
              <h3 className="text-3xl font-extrabold text-gray-800">
                {bg}
              </h3>

              {/* UNITS */}
              <p className="text-5xl font-black text-[#18c5b5] mt-3">
                {stock[bg] !== undefined ? stock[bg] : "..."}
              </p>

              <span className="text-xs uppercase tracking-[4px] text-gray-400 block mt-3">
                Units Ready
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;