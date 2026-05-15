import React from "react";
import AtharImg from "../../assets/Athar.jpg";
const donors = [
  {
  name: "Athar Sultan",
  gender: "Male",
  bloodGroup: "A+",
  img: AtharImg 
},
  { name: "Ghulam Muhammad", gender: "Male", bloodGroup: "B+", img: "https://i.pravatar.cc/150?img=12" },
  { name: "Jan Ali", gender: "Female", bloodGroup: "B+", img: "https://i.pravatar.cc/150?img=32" },
  { name: "Masuma", gender: "Female", bloodGroup: "AB-", img: "https://i.pravatar.cc/150?img=45" },
  { name: "Fatima Athar", gender: "Female", bloodGroup: "O-", img: "https://i.pravatar.cc/150?img=5" }
];

export default function Volunteer() {
  return (
    <div className="min-h-screen bg-emerald-700 px-4 py-30">

      {/* Header */}
      <div className="text-center text-white mb-10">
        <h1 className="text-3xl font-bold tracking-wide">
          SOME OF THE DONOR
        </h1>
        <p className="text-sm mt-3 max-w-2xl mx-auto text-emerald-100">
          Include expertise like office presentation, leadership, and customer service.
          Simple clean donor listing UI.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {donors.map((donor, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-[1.02] transition"
          >

            {/* Top Banner */}
            <div className="bg-red-500 h-28 flex items-center justify-center relative">

              {/* Profile Image */}
              <img
                src={donor.img}
                alt={donor.name}
                className="w-24 h-24 rounded-full border-4 border-white object-cover absolute -bottom-12"
              />
            </div>

            {/* Content */}
            <div className="pt-16 pb-6 px-4 text-center">

              <h2 className="text-lg font-semibold text-gray-800">
                {donor.name}
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Gender: {donor.gender}
              </p>

              <p className="text-sm font-bold text-red-500 mt-1">
                Blood Group: {donor.bloodGroup}
              </p>

              <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md w-full transition">
                Request
              </button>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}