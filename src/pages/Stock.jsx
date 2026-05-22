import React, { useState, useEffect } from "react";
import PageHero from "../components/PageHero";

// Mock data matching real-world blood bank structures
const MOCK_DONORS = [
  { id: 1, name: "Athar Sultan", bloodGroup: "A+", age: 25, status: "Available", lastDonated: "2026-02-14" },
  { id: 2, name: "Maryam Zahid", bloodGroup: "AB+", age: 24, status: "Available", lastDonated: "2026-01-20" },
  { id: 3, name: "Zainab Ahmed", bloodGroup: "B+", age: 31, status: "On Leave", lastDonated: "2026-05-01" },
  { id: 4, name: "Bilal Siddiqui", bloodGroup: "O-", age: 35, status: "Available", lastDonated: "2025-12-10" },
  { id: 5, name: "Hamza Yusuf", bloodGroup: "AB+", age: 29, status: "Available", lastDonated: "2026-03-11" },
];

const Stock = () => {
  const [donors, setDonors] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState("All");

  useEffect(() => {
    document.title = "BBDMS - Donors List";
    // Simulate API fetch
    setDonors(MOCK_DONORS);
  }, []);

  // Filter logic based on Blood Group selection
  const filteredDonors = selectedGroup === "All" 
    ? donors 
    : donors.filter(d => d.bloodGroup === selectedGroup);

  return (
    <div className="font-sans bg-slate-50 min-h-screen">
      
      {/* ================= HERO REUSABLE CONTAINER ================= */}
      <PageHero
        title={
          <h1 className="text-3xl md:text-5xl font-bold leading-tight uppercase max-w-[700px]">
            Registered Donors List
          </h1>
        }
      >
        <p className="mt-6 text-sm md:text-base text-white/80 leading-relaxed max-w-xl">
          Browse our active database of verified volunteer lifesavers. Filter by blood group to check current availability for emergency transfusions.
        </p>
      </PageHero>

      {/* ================= MAIN INTERIOR BODY ================= */}
      <main className="max-w-7xl mx-auto px-6 md:px-16 py-12">
        
        {/* FILTER BAR ACTIONS */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 mb-8 flex flex-wrap items-center justify-between gap-4">
          <span className="text-sm font-bold text-slate-700 uppercase tracking-wider">Filter Blood Group:</span>
          <div className="flex flex-wrap gap-2">
            {["All", "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((group) => (
              <button
                key={group}
                onClick={() => setSelectedGroup(group)}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedGroup === group 
                    ? "bg-[#18c5b5] text-white shadow-sm" 
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {group}
              </button>
            ))}
          </div>
        </div>

        {/* DONORS TABLE RESPONSIVE LAYOUT */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  <th className="py-4 px-6">Donor Name</th>
                  <th className="py-4 px-6 text-center">Blood Group</th>
                  <th className="py-4 px-6">Age</th>
                  <th className="py-4 px-6">Last Donation</th>
                  <th className="py-4 px-6">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
                {filteredDonors.length > 0 ? (
                  filteredDonors.map((donor) => (
                    <tr key={donor.id} className="hover:bg-slate-50/70 transition">
                      <td className="py-4 px-6 font-semibold text-slate-900">{donor.name}</td>
                      <td className="py-4 px-6 text-center">
                        <span className="inline-block px-3 py-1 bg-red-50 text-red-600 font-extrabold text-xs rounded-md border border-red-100">
                          {donor.bloodGroup}
                        </span>
                      </td>
                      <td className="py-4 px-6">{donor.age} yrs</td>
                      <td className="py-4 px-6 text-slate-500">{donor.lastDonated}</td>
                      <td className="py-4 px-6">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                          donor.status === "Available" 
                            ? "bg-emerald-50 text-emerald-700" 
                            : "bg-amber-50 text-amber-700"
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${donor.status === "Available" ? "bg-emerald-500" : "bg-amber-500"}`} />
                          {donor.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="py-12 text-center text-slate-400 font-medium">
                      No matching donors found for blood group "{selectedGroup}".
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
};

export default Stock;