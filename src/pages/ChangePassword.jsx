import React, { useState } from "react";

export default function ChangePassword({ mode = "admin" }) {
  // Local state management
  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const submit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    // Client-side validation
    if (next.length < 6) {
      setStatus({ type: "error", message: "Password must be at least 6 characters" });
      return;
    }

    if (next !== confirm) {
      setStatus({ type: "error", message: "Passwords don't match" });
      return;
    }

    setLoading(true);

    // Mock API Call
    setTimeout(() => {
      setLoading(false);
      setStatus({ type: "success", message: "Password updated successfully!" });
      
      // Reset form
      setCurrent("");
      setNext("");
      setConfirm("");
    }, 1500);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen font-sans flex items-center justify-center">
      {/* Container simulating the Card component */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8 w-full max-w-md">
        <header className="mb-6">
          <h2 className="text-2xl font-extrabold text-gray-900">
            Change Password
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Choose a strong, unique password to stay secure.
          </p>
        </header>

        {/* Mock Notification/Toast */}
        {status.message && (
          <div className={`mb-4 p-3 rounded-lg text-sm font-medium ${
            status.type === "error" ? "bg-red-50 text-red-700 border border-red-100" : "bg-green-50 text-green-700 border border-green-100"
          }`}>
            {status.message}
          </div>
        )}

        <form onSubmit={submit} className="space-y-5">
          {/* Current Password */}
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-gray-700">
              Current Password
            </label>
            <input
              type="password"
              value={current}
              onChange={(e) => setCurrent(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
              placeholder="••••••••"
              required
            />
          </div>

          {/* New Password */}
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-gray-700">
              New Password
            </label>
            <input
              type="password"
              value={next}
              onChange={(e) => setNext(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
              placeholder="••••••••"
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-gray-700">
              Confirm New Password
            </label>
            <input
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
              placeholder="••••••••"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2.5 px-4 rounded-lg font-bold text-white transition-all shadow-sm flex items-center justify-center ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-red-600 hover:bg-red-700 active:scale-[0.98]"
            }`}
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Updating...
              </>
            ) : (
              "Update password"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}