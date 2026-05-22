import React from "react";
import PageHero from "../components/PageHero";

const About = () => {
  return (
    <div className="font-sans bg-white min-h-screen">
      
      {/* ================= HERO BACKDROP LAYER ================= */}
      <PageHero
        title={
          <h1 className="text-3xl md:text-5xl font-bold leading-tight uppercase max-w-[700px]">
            About <span className="text-red-600">BloodLife</span>
          </h1>
        }
      >
        <p className="mt-6 text-sm md:text-base text-white/80 leading-relaxed max-w-xl">
          BloodLife is a modern blood bank & donor management platform connecting donors 
          with patients in need — making blood donation simpler, safer, and faster.
        </p>
      </PageHero>

      {/* ================= WHITE BODY CONTENT ================= */}
      <main className="max-w-7xl mx-auto px-6 md:px-16 py-16">
        
        <h2 className="text-3xl font-extrabold text-slate-900 mb-8">
          Our Mission
        </h2>

        {/* Your cards or mission grid details go directly down here */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="p-6 border border-slate-100 rounded-2xl shadow-sm">
            <h3 className="font-bold text-lg text-slate-800">Verified Donors</h3>
          </div>
          {/* Card 2 */}
          <div className="p-6 border border-slate-100 rounded-2xl shadow-sm">
            <h3 className="font-bold text-lg text-slate-800">Easy Requests</h3>
          </div>
        </div>

      </main>
    </div>
  );
};

export default About;