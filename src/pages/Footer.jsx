import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation();

  // Reset scroll to top automatically when the route path changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Monitor scroll position to show/hide the back-to-top floating button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const quickNavLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Donors List", path: "/search" }, 
    { name: "Search Donor", path: "/search" },
  ];

  const portalsLinks = [
    { name: "Donor Signup", path: "/signup" },
    { name: "Admin Login", path: "/admin" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="relative bg-slate-950 text-slate-400 font-sans border-t border-slate-900">
      
      {/* FLOATING BACK TO TOP BUTTON */}
      {/* Adjusted positioning to prevent clipping browser bars on mobile devices */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 p-3 bg-[#18c5b5] text-white rounded-full shadow-2xl hover:bg-[#14a396] hover:scale-110 active:scale-95 transition-all duration-300 group flex items-center justify-center ${
          isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-75 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3"
          stroke="currentColor"
          className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-200"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </button>

      {/* Main Content Links Grid */}
      {/* Shifted text alignment settings dynamically across responsive breakpoints */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-16 py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 text-center sm:text-left">
        
        {/* Brand Section */}
        <div className="lg:col-span-4 space-y-4">
          <h2 className="text-white text-2xl font-black uppercase tracking-widest">
            BBDMS
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm mx-auto sm:mx-0">
            A specialized platform connecting voluntary blood donors securely with dynamic healthcare distribution frameworks to optimize logistics and save lives.
          </p>
        </div>

        {/* Quick Navigation Links */}
        <div className="lg:col-span-3 lg:col-start-6 space-y-4">
          <h3 className="text-white text-xs font-black uppercase tracking-widest">
            Quick Navigation
          </h3>
          <ul className="space-y-2.5 text-sm font-medium">
            {quickNavLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.path} className="hover:text-[#18c5b5] transition-colors duration-200">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Dynamic Portals Links */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-white text-xs font-black uppercase tracking-widest">
            Portals
          </h3>
          <ul className="space-y-2.5 text-sm font-medium">
            {portalsLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.path} className="hover:text-[#18c5b5] transition-colors duration-200">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Thin Separator Line */}
      <div className="border-t border-slate-900" />

      {/* Copyright Bar */}
      {/* Handled vertical flex stacking for thin phone containers */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[10px] sm:text-xs font-semibold tracking-wider text-slate-500 text-center md:text-left">
        <p>© {new Date().getFullYear()} BBDMS. ALL RIGHTS RESERVED.</p>
        <p className="uppercase">
          Designed with precision for <span className="text-[#18c5b5]">Healthcare Systems</span>
        </p>
      </div>

    </footer>
  );
};

export default Footer;