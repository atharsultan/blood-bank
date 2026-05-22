import React, { useState } from "react";
import PageHero from "../components/PageHero";

const Signup = () => {
  // Mode state: 'signup' or 'login'
  const [formMode, setFormMode] = useState("signup");
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    bloodGroup: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formMode === "signup") {
      console.log("Registering Donor Profile:", formData);
    } else {
      console.log("Logging user in with:", { email: formData.email, password: formData.password });
    }
  };

  return (
    <div className="font-sans bg-slate-100 min-h-screen pb-16">
      
      {/* ================= HERO BACKDROP WRAPPER ================= */}
      <PageHero
        title={
          <div className="pt-4 md:pt-8 pb-4">
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-wide text-white">
              {formMode === "signup" ? "Join Our Network" : "Welcome Back"}
            </h1>
            <p className="text-white/80 mt-2 text-sm max-w-md">
              {formMode === "signup" 
                ? "Become a registered lifeline in your community by filling out your profile credentials below."
                : "Access your donor dashboard portal to manage appointments and active requests."}
            </p>
          </div>
        }
      />

      {/* ================= FLOATING CARD CONTAINER ================= */}
      <main className="max-w-3xl mx-auto px-6 relative z-30 -mt-16 md:-mt-24">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12">
          
          {/* HEADER BRAND ICON */}
          <div className="flex flex-col items-center justify-center text-center mb-10">
            <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center shadow-inner mb-4">
              <svg className="w-7 h-7 text-red-600 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-black text-slate-800 tracking-tight">
              {formMode === "signup" ? "Become a Donor" : "Sign In to Account"}
            </h2>
            <p className="text-slate-500 font-medium text-sm mt-1">
              {formMode === "signup" ? "Join 5,000+ heroes saving lives daily." : "Manage your lifesaver status profile."}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* CONDITIONAL CONDENSED FORM FIELDS */}
            <div className="space-y-4">
              
              {/* Only show Full Name during Signup mode */}
              {formMode === "signup" && (
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Fatima"
                    className="w-full px-5 py-3.5 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#18c5b5] focus:ring-4 focus:ring-[#18c5b5]/10 outline-none transition-all"
                    required
                  />
                </div>
              )}

              <div className={`grid grid-cols-1 ${formMode === "signup" ? "md:grid-cols-2" : ""} gap-4`}>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="username@example.com"
                    className="w-full px-5 py-3.5 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#18c5b5] focus:ring-4 focus:ring-[#18c5b5]/10 outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Secure Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full px-5 py-3.5 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#18c5b5] focus:ring-4 focus:ring-[#18c5b5]/10 outline-none transition-all"
                    required
                  />
                </div>
              </div>

              {/* Only show Blood Group choice during Signup mode */}
              {formMode === "signup" && (
                <div className="pt-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Blood Group Type</label>
                  <select
                    name="bloodGroup"
                    value={formData.bloodGroup}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-700 focus:bg-white focus:border-[#18c5b5] focus:ring-4 focus:ring-[#18c5b5]/10 outline-none transition-all appearance-none cursor-pointer"
                    required
                  >
                    <option value="" disabled>Select your blood type...</option>
                    {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(group => (
                      <option key={group} value={group}>{group}</option>
                    ))}
                  </select>
                </div>
              )}

            </div>

            {/* SUBMISSION SUBMIT TRIGGER */}
            <button
              type="submit"
              className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-2xl shadow-xl shadow-red-600/10 active:scale-[0.99] transition-all transform tracking-wide text-sm uppercase mt-4"
            >
              {formMode === "signup" ? "Complete Registration Profile" : "Sign In to Dashboard"}
            </button>

            {/* ================= THE LINK OPTION FOOTER ================= */}
            <div className="text-center pt-4 border-t border-slate-100 text-sm">
              {formMode === "signup" ? (
                <p className="text-slate-500 font-medium">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setFormMode("login")}
                    className="text-red-600 hover:text-red-700 font-bold hover:underline transition-all ml-1"
                  >
                    Sign In
                  </button>
                </p>
              ) : (
                <p className="text-slate-500 font-medium">
                  Don't have a donor profile yet?{" "}
                  <button
                    type="button"
                    onClick={() => setFormMode("signup")}
                    className="text-red-600 hover:text-red-700 font-bold hover:underline transition-all ml-1"
                  >
                    Register Now
                  </button>
                </p>
              )}
            </div>

          </form>
        </div>
      </main>

    </div>
  );
};

export default Signup;