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
    <div className="font-sans bg-slate-100 min-h-screen pb-12 sm:pb-16">
      
      {/* ================= HERO BACKDROP WRAPPER ================= */}
      <PageHero
        title={
          <div className="pt-2 sm:pt-4 md:pt-8 pb-2">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
              {formMode === "signup" ? "Join Our Network" : "Welcome Back"}
            </h1>
            <p className="text-white/80 mt-2 text-xs sm:text-sm max-w-md font-medium leading-relaxed">
              {formMode === "signup" 
                ? "Become a registered lifeline in your community by filling out your profile credentials below."
                : "Access your donor dashboard portal to manage appointments and active requests."}
            </p>
          </div>
        }
      />

      {/* ================= FLOATING CARD CONTAINER ================= */}
      {/* Dynamic responsive horizontal padding and smooth negative margins */}
      <main className="w-full max-w-3xl mx-auto px-4 sm:px-6 relative z-30 -mt-10 sm:-mt-16 md:-mt-24">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-5 sm:p-8 md:p-12">
          
          {/* HEADER BRAND ICON */}
          <div className="flex flex-col items-center justify-center text-center mb-6 sm:mb-10">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-red-50 rounded-2xl flex items-center justify-center shadow-inner mb-3 sm:mb-4">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-red-600 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-800 tracking-tight">
              {formMode === "signup" ? "Become a Donor" : "Sign In to Account"}
            </h2>
            <p className="text-slate-500 font-bold text-xs sm:text-sm mt-1 uppercase tracking-wide">
              {formMode === "signup" ? "Join 5,000+ heroes saving lives daily." : "Manage your lifesaver status profile."}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            
            {/* CONDITIONAL CONDENSED FORM FIELDS */}
            <div className="space-y-4">
              
              {/* Only show Full Name during Signup mode */}
              {formMode === "signup" && (
                <div>
                  <label className="block text-[10px] sm:text-xs font-black text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Fatima"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#18c5b5] focus:ring-4 focus:ring-[#18c5b5]/10 rounded-xl outline-none transition-all text-sm font-medium"
                    required
                  />
                </div>
              )}

              {/* Adjusted to switch layout cleanly at the 'sm' breakpoint for compact mobile screens */}
              <div className={`grid grid-cols-1 ${formMode === "signup" ? "sm:grid-cols-2" : ""} gap-4`}>
                <div>
                  <label className="block text-[10px] sm:text-xs font-black text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="username@example.com"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#18c5b5] focus:ring-4 focus:ring-[#18c5b5]/10 outline-none transition-all text-sm font-medium"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] sm:text-xs font-black text-slate-500 uppercase tracking-wider mb-2">Secure Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#18c5b5] focus:ring-4 focus:ring-[#18c5b5]/10 outline-none transition-all text-sm font-medium"
                    required
                  />
                </div>
              </div>

              {/* Only show Blood Group choice during Signup mode */}
              {formMode === "signup" && (
                <div className="pt-1">
                  <label className="block text-[10px] sm:text-xs font-black text-slate-500 uppercase tracking-wider mb-2">Blood Group Type</label>
                  <div className="relative">
                    <select
                      name="bloodGroup"
                      value={formData.bloodGroup}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-700 focus:bg-white focus:border-[#18c5b5] focus:ring-4 focus:ring-[#18c5b5]/10 rounded-xl outline-none transition-all appearance-none cursor-pointer text-sm font-semibold"
                      required
                    >
                      <option value="" disabled>Select your blood type...</option>
                      {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(group => (
                        <option key={group} value={group}>{group}</option>
                      ))}
                    </select>
                    {/* Native dropdown chevron element indicator arrow override */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                      ▼
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* SUBMISSION SUBMIT TRIGGER */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-lg shadow-red-200 active:scale-[0.99] transition-all tracking-wider text-xs uppercase"
              >
                {formMode === "signup" ? "Complete Registration Profile" : "Sign In to Dashboard"}
              </button>
            </div>

            {/* ================= THE LINK OPTION FOOTER ================= */}
            <div className="text-center pt-4 border-t border-slate-100 text-xs sm:text-sm">
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