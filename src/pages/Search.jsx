import React, { useEffect, useState } from "react";
import Header from "./Header";

const BLOOD_GROUPS = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export default function Search() {
  const [bg, setBg] = useState("any");
  const [city, setCity] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "Search Donors — BloodLife";
    runSearch();
  }, []);

  const runSearch = async () => {
    setLoading(true);

    try {
      // Mocking the Supabase RPC call
      console.log("Searching for:", { bg, city });
      
      // Simulated delay
      await new Promise(resolve => setTimeout(resolve, 600));

      // Mock Data
      const mockDonors = [
        { full_name: "Athar Sultan", blood_group: "O+", city: "Skardu", available_to_donate: true },
        { full_name: "Aziz Ullah", blood_group: "A-", city: "Chilas", available_to_donate: true },
        { full_name: "Ali Jan", blood_group: "B+", city: "Palandri Kashmir", available_to_donate: false },
      ];

      // Simple mock filter logic
      const filtered = mockDonors.filter(d => {
        const matchesBg = bg === "any" || d.blood_group === bg;
        const matchesCity = !city || d.city.toLowerCase().includes(city.toLowerCase());
        return matchesBg && matchesCity;
      });

      setResults(filtered);
    } catch (err) {
      console.error("Search error:", err);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    runSearch();
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <div className="relative z-10">
        <Header />
      </div>
      {/* Search Header */}
      <section className="bg-gray-50 py-12 border-b border-gray-100 z-10">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-black mb-2 tracking-tight">
            Find Blood Donors
          </h1>
          <p className="text-gray-500 mb-8 font-medium">
            Search verified donors by blood group and city.
          </p>

          <div className="bg-white p-6 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100">
            <form onSubmit={onSubmit} className="grid md:grid-cols-4 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Blood Group</label>
                <select 
                  value={bg} 
                  onChange={(e) => setBg(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 outline-none transition-all appearance-none cursor-pointer font-semibold"
                >
                  <option value="any">Any Group</option>
                  {BLOOD_GROUPS.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">City</label>
                <input
                  type="text"
                  placeholder="e.g. Islamabad"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 outline-none transition-all font-semibold"
                />
              </div>

              <div className="flex items-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 rounded-xl transition-all shadow-lg shadow-red-100 flex items-center justify-center gap-2 active:scale-95 disabled:bg-gray-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                  {loading ? "Searching..." : "Search"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">
          {results.length} donor(s) found
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((d, i) => (
            <div key={i} className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="flex items-start justify-between mb-4">
                <div className="h-12 w-12 rounded-xl bg-red-50 flex items-center justify-center text-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>
                </div>

                <span className="text-sm font-black px-3 py-1 rounded-lg bg-red-600 text-white shadow-sm">
                  {d.blood_group}
                </span>
              </div>

              <h3 className="font-black text-xl text-gray-900 group-hover:text-red-600 transition-colors">{d.full_name}</h3>

              <div className="text-gray-500 flex items-center gap-1.5 mt-2 font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                {d.city || "Not specified"}
              </div>

              {d.available_to_donate && (
                <div className="mt-6 flex items-center gap-2 py-2 px-3 bg-green-50 rounded-lg border border-green-100">
                  <svg className="text-green-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  <span className="text-xs font-bold text-green-700 uppercase tracking-wide">Available to donate</span>
                </div>
              )}
            </div>
          ))}

          {!loading && results.length === 0 && (
            <div className="md:col-span-2 lg:col-span-3 py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200 text-center">
              <div className="text-gray-400 font-bold">No donors match your search</div>
              <p className="text-sm text-gray-400 mt-1">Try widening your filters or checking back later.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}