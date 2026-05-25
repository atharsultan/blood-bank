import React from "react";
import AtharImg from "../../assets/Athar.jpg";

const donors = [
  {
    name: "Athar Sultan",
    gender: "Male",
    bloodGroup: "A+",
    img: AtharImg 
  },
  { 
    name: "Ghulam Muhammad", 
    gender: "Male", 
    bloodGroup: "B+", 
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80" // Updated to a professional male profile placeholder
  },
  { 
    name: "Zaira Ali", 
    gender: "Female", 
    bloodGroup: "B+", 
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" 
  },
  { 
    name: "Masuma", 
    gender: "Female", 
    bloodGroup: "AB-", 
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80" 
  },
  { 
    name: "Maryam Zahid", 
    gender: "Female", 
    bloodGroup: "O-", 
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80" 
  }
];

export default function Volunteer() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans px-4 py-16 md:py-24">

      {/* Header Section */}
      <div className="text-center mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1.5 rounded-full">
          Lifesavers Directory
        </span>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-800 uppercase mt-4">
          Our Volunteer <span className="text-red-600">Donors</span>
        </h1>
        <p className="text-sm md:text-base mt-3 max-w-xl mx-auto text-slate-500 font-medium leading-relaxed">
          Connect directly with verified, ready-to-help donors in your community. Submit a live request to initiate immediate contact.
        </p>
      </div>

      {/* Donor Grid Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {donors.map((donor, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md hover:border-slate-200 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Top Presentation Banner */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 h-24 flex items-center justify-center relative">
              
              {/* Floating Blood Group Tag */}
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md border border-white/30 px-3 py-1 rounded-full text-white text-xs font-black tracking-wider">
                Group {donor.bloodGroup}
              </div>

              {/* Centered Profile Avatar */}
              <div className="absolute -bottom-10 shadow-lg rounded-full bg-white p-1">
                <img
                  src={donor.img}
                  alt={donor.name}
                  className="w-20 h-20 rounded-full object-cover"
                  onError={(e) => {
                    // Fallback avatar template if any network image breaks
                    e.target.src = `https://api.dicebear.com/7.x/initials/svg?seed=${donor.name}`;
                  }}
                />
              </div>
            </div>

            {/* Profile Content Area */}
            <div className="pt-14 pb-6 px-6 text-center flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-black text-slate-800 tracking-tight">
                  {donor.name}
                </h2>

                <div className="flex items-center justify-center gap-2 mt-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {donor.gender}
                  </span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                  <span className="text-xs font-extrabold text-red-600 bg-red-50 px-2 py-0.5 rounded">
                    Type {donor.bloodGroup}
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <button className="mt-6 w-full py-2.5 bg-slate-900 hover:bg-red-600 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all active:scale-95 shadow-sm hover:shadow-md">
                Request Blood
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}