import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

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
    <nav className="w-full bg-transparent">
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

        {/* MOBILE INTERFACE HUMBURGER INDICATOR (Optional styling anchor) */}
        <div className="lg:hidden text-white cursor-pointer font-bold text-xs uppercase tracking-widest opacity-80">
          Menu ☰
        </div>

      </div>
    </nav>
  );
};

export default Header;