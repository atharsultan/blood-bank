import React from "react";
import { Link, useLocation } from "react-router-dom";
import bdimg from "../assets/doctor.PNG";
import Signup from "./Signup";

const NAV_ITEMS = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Donors List", path: "/stock" },
    { name: "Contact Us", path: "/contact" },
    { name: "Donor Signup", path: "/signup" },
    { name: "Admin", path: "/admin" },
    { name: "Search Donor", path: "/search" },
];

const Header = () => {
const location = useLocation();
    return (
        
        <section className="relative min-h-screen bg-[#18c5b5] overflow-hidden">

            {/* IMAGE */}
            <img
                src={bdimg}
                alt=""
                className="absolute top-0 right-0 h-full w-[62%] object-cover object-top mix-blend-multiply"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#18c5b5] via-[#18c5b5]/80 to-transparent" />

            {/* CONTENT */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">

                {/* NAVBAR */}
                <nav className="flex items-center justify-between py-6 text-white">

                    {/* LOGO */}
                    <Link to="/">
                        <h1 className="font-bold tracking-[3px] text-lg cursor-pointer">
                            BBDMS
                        </h1>
                    </Link>

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

                {/* HERO */}
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
    );
};

export default Header;