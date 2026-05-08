import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", msg: "" });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", msg: "" });

    // Native validation to replace Zod
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus({ type: "error", msg: "Invalid email address" });
      return;
    }
    if (password.length < 6) {
      setStatus({ type: "error", msg: "Password must be at least 6 characters" });
      return;
    }

    setLoading(true);

    try {
      // Mock Authentication Logic
      console.log("Authenticating:", { email });
      
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Mock Role Check
      // For demonstration: emails containing "admin" redirect to /admin
      const isAdmin = email.includes("admin");
      
      setStatus({ type: "success", msg: "Welcome back!" });
      
      // Simulate navigation
      setTimeout(() => {
        window.location.href = isAdmin ? "/admin" : "/dashboard";
      }, 500);

    } catch (err) {
      setStatus({ type: "error", msg: "Login failed. Please check your credentials." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
        
        {/* Logo / Brand */}
        <div className="flex flex-col items-center mb-8">
          <div className="h-12 w-12 rounded-2xl bg-red-600 flex items-center justify-center shadow-lg shadow-red-200 mb-4 cursor-pointer" onClick={() => window.location.href = "/"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white">
              <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>
            </svg>
          </div>
          <h1 className="text-2xl font-black text-gray-900">Welcome Back</h1>
          <p className="text-sm text-gray-500 mt-1">Sign in to your BloodLife account</p>
        </div>

        {/* Local Notification */}
        {status.msg && (
          <div className={`mb-6 p-4 rounded-xl text-sm font-medium border ${
            status.type === "success" ? "bg-green-50 text-green-700 border-green-100" : "bg-red-50 text-red-700 border-red-100"
          }`}>
            {status.msg}
          </div>
        )}

        <form onSubmit={onSubmit} className="space-y-5">
          {/* Email Field */}
          <div className="space-y-1.5">
            <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all placeholder:text-gray-400"
              placeholder="name@example.com"
              required
            />
          </div>

          {/* Password Field */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center ml-1">
              <label className="text-sm font-bold text-gray-700">Password</label>
              <a href="#" className="text-xs font-semibold text-red-600 hover:underline">Forgot?</a>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all placeholder:text-gray-400"
              placeholder="••••••••"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3.5 rounded-xl font-bold text-white transition-all shadow-lg active:scale-[0.98] flex items-center justify-center ${
              loading ? "bg-gray-400 cursor-not-allowed shadow-none" : "bg-red-600 hover:bg-red-700 shadow-red-100"
            }`}
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Signing in...
              </>
            ) : "Sign in"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm mt-8 text-gray-500 font-medium">
          New donor?{" "}
          <span 
            onClick={() => window.location.href = "/signup"} 
            className="text-red-600 font-bold hover:underline cursor-pointer"
          >
            Create account
          </span>
        </p>
      </div>
    </div>
  );
}