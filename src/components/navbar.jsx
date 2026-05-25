import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/" },
    { name: "Search Donor", path: "/search" },
    { name: "Blood Stock", path: "/stock" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-100 px-6 py-4 sticky top-0 z-[100] shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-red-600 flex items-center justify-center shadow-lg shadow-red-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white">
              <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>
            </svg>
          </div>
          <span className="text-xl font-black text-slate-800 tracking-tight">BloodLife</span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                isActive(link.path) ? "bg-red-50 text-red-600" : "text-slate-500 hover:bg-slate-50"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link to="/login" className="text-sm font-bold text-slate-600 mr-2">Login</Link>
          <Link to="/signup" className="px-5 py-2.5 bg-red-600 text-white text-sm font-black rounded-xl shadow-md hover:bg-red-700 transition-all">
            Become a Donor
          </Link>
        </div>
      </div>
    </nav>
  );
}