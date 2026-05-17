import React, { useState } from "react";
import Header from "./Header";
const BLOOD_GROUPS = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

// Helper for Section Titles
const SectionTitle = ({ children }) => (
  <div className="md:col-span-2 border-b border-gray-100 pb-2 mt-4 mb-2">
    <h3 className="text-xs font-black uppercase tracking-widest text-red-500">{children}</h3>
  </div>
);

export default function Signup() {
 
  const [form, setForm] = useState({
    full_name: "", email: "", password: "",
    blood_group: "", gender: "", age: "",
    mobile: "", city: "", address: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const set = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (form.password.length < 6) return setError("Password must be at least 6 characters");
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    window.location.href = "/dashboard";
  };

  return (
    <>
   
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-4 py-16 font-sans">
       <div className="absolute inset-0 z-0">
        <Header />
      </div>
      <div className="w-full max-w-2xl bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden z-10">
        
        {/* Header - More Professional Space */}
        <div className="bg-white p-8 md:p-12 pb-4 text-center">
          <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center shadow-xl shadow-red-200 mx-auto mb-6">
             <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-white">
               <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>
             </svg>
          </div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Become a Donor</h1>
          <p className="text-slate-500 font-medium mt-2">Join 5,000+ heroes saving lives daily.</p>
        </div>

        <form onSubmit={onSubmit} className="p-8 md:p-12 pt-0 grid md:grid-cols-2 gap-x-6 gap-y-4">
          
          <SectionTitle>Account Security</SectionTitle>
          
          <div className="md:col-span-2 space-y-1.5">
            <label className="text-[13px] font-bold text-slate-600 ml-1">Full Name</label>
            <input type="text" value={form.full_name} onChange={(e) => set("full_name", e.target.value)}
              className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-red-500/10 focus:border-red-500 outline-none transition-all font-semibold text-slate-800"
              placeholder="Fatima" required />
          </div>

          <div className="space-y-1.5">
            <label className="text-[13px] font-bold text-slate-600 ml-1">Email Address</label>
            <input type="email" value={form.email} onChange={(e) => set("email", e.target.value)}
              className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-red-500/10 focus:border-red-500 outline-none transition-all font-semibold"
              placeholder="username@example.com" required />
          </div>

          <div className="space-y-1.5">
            <label className="text-[13px] font-bold text-slate-600 ml-1">Secure Password</label>
            <input type="password" value={form.password} onChange={(e) => set("password", e.target.value)}
              className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-red-500/10 focus:border-red-500 outline-none transition-all font-semibold"
              placeholder="••••••••" required />
          </div>

          <SectionTitle>Donor Details</SectionTitle>

          <div className="space-y-1.5">
            <label className="text-[13px] font-bold text-slate-600 ml-1">Blood Group</label>
            <select value={form.blood_group} onChange={(e) => set("blood_group", e.target.value)}
              className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-red-500/10 focus:border-red-500 outline-none transition-all font-bold text-red-600 cursor-pointer appearance-none" required>
              <option value="">Select</option>
              {BLOOD_GROUPS.map(b => <option key={b} value={b}>{b}</option>)}
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-[13px] font-bold text-slate-600 ml-1">Age (18-65)</label>
            <input type="number" value={form.age} onChange={(e) => set("age", e.target.value)}
              className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-red-500/10 focus:border-red-500 outline-none transition-all font-semibold"
              min="18" max="65" placeholder="25" required />
          </div>

          <SectionTitle>Location & Contact</SectionTitle>

          <div className="space-y-1.5">
            <label className="text-[13px] font-bold text-slate-600 ml-1">Phone Number</label>
            <input type="tel" value={form.mobile} onChange={(e) => set("mobile", e.target.value)}
              className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-red-500/10 focus:border-red-500 outline-none transition-all font-semibold"
              placeholder="+92 3XX XXXXXXX" required />
          </div>

          <div className="space-y-1.5">
            <label className="text-[13px] font-bold text-slate-600 ml-1">Current City</label>
            <input type="text" value={form.city} onChange={(e) => set("city", e.target.value)}
              className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-red-500/10 focus:border-red-500 outline-none transition-all font-semibold"
              placeholder="e.g. Karachi" required />
          </div>

          <button type="submit" disabled={loading}
            className="md:col-span-2 py-5 rounded-[1.25rem] font-black text-lg text-white bg-red-600 hover:bg-red-700 active:scale-[0.98] transition-all shadow-xl shadow-red-200 mt-6 flex items-center justify-center gap-3">
            {loading ? "Verifying..." : "Join the Mission"}
            {!loading && <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>}
          </button>
        </form>

        <div className="bg-slate-50 p-6 text-center border-t border-slate-100">
          <p className="text-sm text-slate-500 font-bold">
            Already have an account?{" "}
            <button onClick={() => window.location.href = "/login"} className="text-red-600 hover:underline">Sign In</button>
          </p>
        </div>
      </div>
    </div>
    </>
  );
}