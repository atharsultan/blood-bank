import React from "react";
import Header from "../pages/Header";

const AdminLayout = ({ title, subtitle, children }) => {
  return (
    <div className="font-sans bg-slate-50 min-h-screen">
      
      {/* ================= COMPACT BRAND HEADER FOR DASHBOARD ================= */}
      <header className="bg-[#18c5b5] bg-gradient-to-r from-[#18c5b5] to-[#12a396] pb-20">
        {/* Universal application navigation */}
        <Header />
        
        {/* Dynamic Admin Title Context */}
        <div className="max-w-7xl mx-auto px-6 md:px-16 pt-6 text-white">
          <h1 className="text-2xl font-black uppercase tracking-wider">{title}</h1>
          {subtitle && <p className="text-white/75 text-xs mt-1">{subtitle}</p>}
        </div>
      </header>

      {/* ================= MAIN INTERFACE WRAPPER ================= */}
      {/* Pulls children content components up smoothly over the banner line */}
      <main className="max-w-7xl mx-auto px-6 md:px-16 -mt-12 relative z-10 pb-16">
        {children}
      </main>

    </div>
  );
};

export default AdminLayout;