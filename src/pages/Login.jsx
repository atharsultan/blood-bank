import React from "react";
import { Link } from "react-router-dom";
import { Lock, Mail, ArrowRight } from "lucide-react";

const Login = () => {
  return (
    <div className="font-sans bg-slate-50 min-h-screen flex items-center justify-center px-4 py-12">
      {/* Container scales automatically based on viewport bounds */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-slate-100 p-6 sm:p-10 space-y-8">
        
        <div className="text-center space-y-2">
          <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center text-xl font-bold mx-auto shadow-inner">
            🩸
          </div>
          <h1 className="text-2xl font-black text-slate-800 uppercase tracking-tight">Welcome Back</h1>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Access your dashboard profile</p>
        </div>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1">
              <Mail size={12} /> Email Address
            </label>
            <input 
              type="email" 
              placeholder="name@example.com"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#18c5b5] focus:ring-4 focus:ring-[#18c5b5]/10 outline-none transition text-sm font-medium"
            />
          </div>

          <div>
            <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1">
              <Lock size={12} /> Account Password
            </label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#18c5b5] focus:ring-4 focus:ring-[#18c5b5]/10 outline-none transition text-sm font-medium"
            />
          </div>

          <button className="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-xl shadow-lg shadow-red-100 transition-all active:scale-95 flex items-center justify-center gap-2">
            Sign In <ArrowRight size={14} />
          </button>
        </form>

        <div className="text-center pt-2">
          <p className="text-sm font-medium text-slate-500">
            Don't have an account?{" "}
            <Link to="/register" className="text-[#12a396] font-bold hover:underline">
              Create One
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;