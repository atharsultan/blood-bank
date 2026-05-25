import React, { useState } from "react";
import PageHero from "../components/PageHero";
import { Search as SearchIcon, MapPin, Droplet } from "lucide-react";

const Search = () => {
  const [bloodGroup, setBloodGroup] = useState("");
  const [location, setLocation] = useState("");
  
  // 1. Initial list of donors
  const allDonors = [
    { id: 1, name: "Muhammad Ali", group: "A+", location: "Rawalpindi", status: "Available", contact: "+92 300 1234567" },
    { id: 2, name: "Zainab Bibi", group: "O-", location: "Islamabad", status: "Available", contact: "+92 321 7654321" },
    { id: 3, name: "Hamza Sultan", group: "B+", location: "Lahore", status: "On Break", contact: "+92 333 9876543" },
    { id: 4, name: "Ahmed Khan", group: "A+", location: "Lahore", status: "Available", contact: "+92 312 1112233" },
  ];

  // 2. State for the filtered list
  const [filteredDonors, setFilteredDonors] = useState(allDonors);

  // 3. Search Handler
  const handleSearch = () => {
    const filtered = allDonors.filter((donor) => {
      const matchGroup = bloodGroup ? donor.group === bloodGroup : true;
      const matchLocation = location ? donor.location.toLowerCase().includes(location.toLowerCase()) : true;
      return matchGroup && matchLocation;
    });
    setFilteredDonors(filtered);
  };

  return (
    <div className="font-sans bg-slate-50 min-h-screen">
      <PageHero
        title={
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
            Find A <span className="text-red-500">Donor</span>
          </h1>
        }
      >
        <p className="mt-4 text-xs sm:text-sm md:text-base text-white/80 leading-relaxed max-w-xl font-medium">
          Search our real-time database of verified voluntary lifesavers near your location.
        </p>
      </PageHero>

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-16 py-10">
        {/* FILTER CONTROL BOX */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-100 mb-8 -mt-16 relative z-30">
          <div className="flex flex-col lg:flex-row gap-4 items-end">
            
            <div className="w-full lg:w-1/3">
              <label className="block text-xs font-black text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Droplet size={14} className="text-red-500" /> Blood Group
              </label>
              <select 
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
                className="w-full p-3 bg-slate-50 border border-slate-200 focus:border-red-500 focus:ring-4 focus:ring-red-500/10 rounded-xl outline-none transition font-semibold text-sm text-slate-700"
              >
                <option value="">All Groups</option>
                <option value="A+">A+</option>
                <option value="O-">O-</option>
                <option value="B+">B+</option>
              </select>
            </div>

            <div className="w-full lg:w-2/3">
              <label className="block text-xs font-black text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <MapPin size={14} className="text-red-500" /> Location Area
              </label>
              <input 
                type="text" 
                placeholder="Enter city (e.g. Lahore)..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full p-3 bg-slate-50 border border-slate-200 focus:border-red-500 focus:ring-4 focus:ring-red-500/10 rounded-xl outline-none transition font-medium text-sm"
              />
            </div>

            <button 
              onClick={handleSearch}
              className="w-full lg:w-auto px-8 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-sm uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 shrink-0"
            >
              <SearchIcon size={16} /> Search
            </button>
          </div>
        </div>

        {/* RESULTS INTERACTIVE BLOCK */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[600px] divide-y divide-slate-100 text-left text-sm">
              <thead className="bg-slate-50 text-xs font-black uppercase tracking-wider text-slate-400">
                <tr>
                  <th className="p-5">Donor Name</th>
                  <th className="p-5">Blood Group</th>
                  <th className="p-5">City Location</th>
                  <th className="p-5">Live Status</th>
                  <th className="p-5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {filteredDonors.length > 0 ? (
                  filteredDonors.map((donor) => (
                    <tr key={donor.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-5 font-bold text-slate-800">{donor.name}</td>
                      <td className="p-5">
                        <span className="px-2.5 py-1 bg-red-50 text-red-600 rounded-lg font-black text-xs border border-red-100">
                          {donor.group}
                        </span>
                      </td>
                      <td className="p-5 text-slate-500">{donor.location}</td>
                      <td className="p-5">
                        <span className={`inline-flex items-center gap-1 text-xs font-bold ${donor.status === "Available" ? "text-emerald-500" : "text-amber-500"}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${donor.status === "Available" ? "bg-emerald-500 animate-pulse" : "bg-amber-500"}`} />
                          {donor.status}
                        </span>
                      </td>
                      <td className="p-5 text-right">
                        <a href={`tel:${donor.contact}`} className="inline-block px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all">
                          Call Now
                        </a>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="p-10 text-center text-slate-500 font-bold">
                      No donors found matching your search criteria.
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

export default Search;