import React, { useEffect, useState } from "react";

const BLOOD_GROUPS = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export default function Stock() {
  const [stock, setStock] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Blood Stock — BloodLife";

    const fetchStock = async () => {
      setLoading(true);
      try {
        // Mocking the Supabase fetch with a small delay
        await new Promise((resolve) => setTimeout(resolve, 800));

        // Simulated data structure
        const mockData = {
          "A+": 12, "A-": 3, "B+": 8, "B-": 0,
          "AB+": 5, "AB-": 1, "O+": 20, "O-": 4,
        };

        setStock(mockData);
      } catch (err) {
        console.error("Error loading stock:", err);
        setStock({});
      } finally {
        setLoading(false);
      }
    };

    fetchStock();
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Header Section */}
      <section className="bg-gray-50 py-16 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            Live Blood Stock
          </h1>
          <p className="text-xl text-gray-500 font-medium max-w-2xl">
            Real-time blood unit availability across all groups in our central repository.
          </p>
        </div>
      </section>

      {/* Stock Grid */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {BLOOD_GROUPS.map((bg) => {
              const units = stock[bg] ?? 0;
              
              // Logic for status badges
              const status = units === 0 ? "out" : units < 5 ? "low" : "ok";

              return (
                <div 
                  key={bg} 
                  className="bg-white border border-gray-200 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all group"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-red-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>
                      </svg>
                    </div>

                    <span
                      className={`text-[10px] uppercase tracking-widest font-black px-3 py-1 rounded-full border ${
                        status === "ok"
                          ? "bg-green-50 text-green-700 border-green-100"
                          : status === "low"
                          ? "bg-amber-50 text-amber-700 border-amber-100"
                          : "bg-red-50 text-red-700 border-red-100"
                      }`}
                    >
                      {status === "ok" ? "Available" : status === "low" ? "Low Stock" : "Out of Stock"}
                    </span>
                  </div>

                  <div className="text-5xl font-black text-gray-900 group-hover:scale-110 transition-transform origin-left">
                    {bg}
                  </div>

                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-3xl font-black text-red-600">{units}</span>
                    <span className="text-sm font-bold text-gray-400 uppercase tracking-wide">Units</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Info Footer */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-red-600 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-2xl font-black mb-2">Can't find your blood group?</h3>
            <p className="text-red-100 font-medium">Register as a recipient or contact our emergency helpline immediately.</p>
          </div>
          <button className="bg-white text-red-600 font-black px-8 py-4 rounded-2xl shadow-lg hover:bg-gray-100 transition-colors whitespace-nowrap">
            Contact Helpline
          </button>
        </div>
      </section>
    </div>
  );
}