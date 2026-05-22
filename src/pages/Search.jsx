import React, { useState } from "react";
import PageHero from "../components/PageHero";

// Sample donor database for mock search results
const MOCK_DONORS = [
  { id: 1, name: "Muhammad Ali", bloodGroup: "O+", city: "Rawalpindi", phone: "+92 300 1234567", status: "Available" },
  { id: 2, name: "Ayesha Khan", bloodGroup: "A-", city: "Islamabad", phone: "+92 312 9876543", status: "Available" },
  { id: 3, name: "Bilal Siddiqui", bloodGroup: "O-", city: "Rawalpindi", phone: "+92 333 4567890", status: "Available" },
  { id: 4, name: "Fatima Zainab", bloodGroup: "B+", city: "Lahore", phone: "+92 321 5554321", status: "On Leave" },
  { id: 5, name: "Hamza Yusuf", bloodGroup: "O+", city: "Islamabad", phone: "+92 345 6789012", status: "Available" },
];

const Search = () => {
  const [bloodGroup, setBloodGroup] = useState("");
  const [city, setCity] = useState("");
  const [results, setResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    
    // Filter mock data based on user input criteria
    const filtered = MOCK_DONORS.filter((donor) => {
      const matchesBlood = bloodGroup ? donor.bloodGroup === bloodGroup : true;
      const matchesCity = city ? donor.city.toLowerCase().includes(city.toLowerCase()) : true;
      return matchesBlood && matchesCity;
    });

    setResults(filtered);
    setHasSearched(true);
  };

  return (
    <div className="font-sans bg-slate-50 min-h-screen">
      
      {/* ================= HERO REUSABLE BACKDROP ================= */}
      <PageHero
        title={
          <h1 className="text-3xl md:text-5xl font-bold leading-tight uppercase">
            Find a <span className="text-red-600">Donor</span>
          </h1>
        }
      >
        <p className="mt-6 text-sm md:text-base text-white/80 leading-relaxed max-w-xl">
          In an emergency, every second counts. Use our real-time search engine to locate nearby blood donors matching the specific blood type group required.
        </p>
      </PageHero>

      {/* ================= MAIN INTERIOR BODY ================= */}
      <main className="max-w-7xl mx-auto px-6 md:px-16 py-12">
        
        {/* SEARCH FORM PANEL CONTAINER CARD */}
        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100 mb-10">
          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            
            {/* Input 1: Blood Group Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Blood Group Needed
              </label>
              <select
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
                className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 focus:bg-white focus:border-[#18c5b5] focus:ring-4 focus:ring-[#18c5b5]/10 outline-none transition-all appearance-none cursor-pointer"
                required
              >
                <option value="">Choose blood type...</option>
                {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((group) => (
                  <option key={group} value={group}>{group}</option>
                ))}
              </select>
            </div>

            {/* Input 2: City / Location Text Input */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                City / Location
              </label>
              <input
                type="text"
                placeholder="e.g. Rawalpindi"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#18c5b5] focus:ring-4 focus:ring-[#18c5b5]/10 outline-none transition-all"
              />
            </div>

            {/* Form Action Button */}
            <button
              type="submit"
              className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-lg shadow-red-600/10 active:scale-[0.98] transition-all tracking-wide text-sm uppercase flex items-center justify-center gap-2"
            >
              🔍 Search Database
            </button>
          </form>
        </div>

        {/* ================= SEARCH RESULTS PANEL ================= */}
        {hasSearched && (
          <div className="space-y-4">
            <h2 className="text-xl font-extrabold text-slate-800 mb-4 tracking-tight">
              Search Results ({results.length})
            </h2>

            {results.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map((donor) => (
                  <div 
                    key={donor.id} 
                    className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-bold text-lg text-slate-900">{donor.name}</h3>
                          <p className="text-slate-400 text-xs font-medium mt-0.5">📍 {donor.city}</p>
                        </div>
                        <span className="inline-block px-3 py-1 bg-red-50 text-red-600 font-black text-sm rounded-lg border border-red-100">
                          {donor.bloodGroup}
                        </span>
                      </div>

                      <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Status</span>
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                          donor.status === "Available" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${donor.status === "Available" ? "bg-emerald-500" : "bg-amber-500"}`} />
                          {donor.status}
                        </span>
                      </div>
                    </div>

                    <div className="mt-6">
                      <a 
                        href={`tel:${donor.phone}`}
                        className="w-full py-2.5 bg-slate-50 hover:bg-[#18c5b5]/10 hover:text-[#18c5b5] text-slate-700 font-bold text-xs rounded-xl transition flex items-center justify-center gap-2 border border-slate-100"
                      >
                        📞 Contact: {donor.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-slate-200">
                <span className="text-4xl">📭</span>
                <p className="mt-4 text-slate-500 font-bold">No active donors found matching your exact criteria.</p>
                <p className="text-slate-400 text-xs mt-1">Try broadening your search or choosing a different city area.</p>
              </div>
            )}
          </div>
        )}

      </main>
    </div>
  );
};

export default Search;