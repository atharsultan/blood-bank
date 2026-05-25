import React from "react";
import PageHero from "../components/PageHero";
import { Layers, Activity } from "lucide-react";

const Stock = () => {
  const stockInventory = [
    { group: "A+", units: 12, status: "Stable" },
    { group: "A-", units: 4, status: "Low Stock" },
    { group: "B+", units: 15, status: "Stable" },
    { group: "B-", units: 2, status: "Critical" },
    { group: "AB+", units: 5, status: "Stable" },
    { group: "AB-", units: 1, status: "Critical" },
    { group: "O+", units: 22, status: "High Stock" },
    { group: "O-", units: 8, status: "Low Stock" },
  ];

  return (
    <div className="font-sans bg-slate-50 min-h-screen">
      <PageHero
        title={
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
            Inventory <span className="text-red-500">Stock</span>
          </h1>
        }
      >
        <p className="mt-4 text-xs sm:text-sm md:text-base text-white/80 leading-relaxed max-w-xl font-medium">
          Live monitoring overview of standard processed blood components currently held in storage vaults.
        </p>
      </PageHero>

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-16 py-12">
        {/* RESPONSIVE LAYOUT COLUMNS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stockInventory.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md transition-all group">
              <div className="flex justify-between items-start">
                <span className="text-2xl font-black text-slate-800 bg-slate-50 w-12 h-12 rounded-xl flex items-center justify-center border border-slate-100 group-hover:bg-red-50 group-hover:text-red-600 group-hover:border-red-100 transition-colors">
                  {item.group}
                </span>
                <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md ${
                  item.status === "Stable" || item.status === "High Stock" 
                    ? "bg-emerald-50 text-emerald-600" 
                    : "bg-amber-50 text-amber-600 animate-pulse"
                }`}>
                  {item.status}
                </span>
              </div>

              <div className="mt-8">
                <p className="text-3xl font-black text-slate-900 tracking-tight">{item.units}</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-0.5 flex items-center gap-1">
                  <Layers size={12} /> Bags Available
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Stock;