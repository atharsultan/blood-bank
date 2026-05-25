import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // Added state to track menu toggle

  // Unified navigation route configuration
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Donors List", path: "/stock" },
    { name: "Contact Us", path: "/contact" },
    { name: "Donor Signup", path: "/signup" },
    { name: "Admin", path: "/admin" },
    { name: "Search Donor", path: "/search" },
  ];

  return (
    <nav className="w-full bg-transparent relative z-50">
      {/* This wrapper forces max-width bounds and pushes the brand 
        logo and nav items to opposite edges using justify-between.
      */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 h-20 flex items-center justify-between gap-4">
        
        {/* BRAND IDENTITY (Far Left) */}
        <Link 
          to="/" 
          className="text-white text-xl font-black uppercase tracking-widest hover:opacity-90 transition-opacity shrink-0"
        >
          BBDMS
        </Link>

        {/* NAVIGATION LINKS (Far Right) */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`text-xs uppercase tracking-widest font-bold transition-all duration-200 hover:text-white/100 ${
                  isActive 
                    ? "text-white border-b-2 border-white pb-1" 
                    : "text-white/75"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* MOBILE INTERFACE HAMBURGER INDICATOR */}
        {/* Swapped to a button with an onClick handler toggling state */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white cursor-pointer font-bold text-xs uppercase tracking-widest opacity-80 focus:outline-none"
        >
          {isOpen ? "Close ✕" : "Menu ☰"}
        </button>

      </div>

      {/* MOBILE DROPDOWN LINKS PANEL */}
      {/* Renders beneath the container line without breaking layouts if state flag is active */}
      {isOpen && (
        <div className="lg:hidden w-full bg-slate-900/95 border-b border-white/10 px-6 py-4 flex flex-col space-y-4">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)} // Closes mobile menu on link click
                className={`text-xs uppercase tracking-widest font-bold transition-all duration-200 block ${
                  isActive ? "text-white" : "text-white/75"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Header;