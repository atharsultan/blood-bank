import React, { useState, useEffect } from "react";

const BLOOD_GROUPS = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export default function DonorProfile() {
  const [p, setP] = useState({
    full_name: "",
    email: "user@example.com",
    blood_group: "",
    gender: "",
    age: "",
    mobile: "",
    city: "",
    address: "",
    available_to_donate: true,
  });
  
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  useEffect(() => {
    document.title = "My Profile — BloodLife";
  }, []);

  const save = async () => {
    setLoading(true);
    setMessage({ text: "", type: "" });
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setMessage({ text: "Profile updated successfully!", type: "success" });
    } catch (err) {
      setMessage({ text: "Something went wrong.", type: "error" });
    } finally {
      setLoading(false);
      setTimeout(() => setMessage({ text: "", type: "" }), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8 font-sans text-gray-900">
      <div className="max-w-3xl mx-auto">
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 sm:p-8">
            <h2 className="text-2xl font-black mb-1">My Profile</h2>
            <p className="text-sm text-gray-500 mb-8">
              Keep your details up to date so we can match you correctly.
            </p>

            {message.text && (
              <div className={`mb-6 p-4 rounded-xl text-sm font-bold border ${
                message.type === "success" 
                  ? "bg-green-50 text-green-700 border-green-100" 
                  : "bg-red-50 text-red-700 border-red-100"
              }`}>
                {message.text}
              </div>
            )}

            {/* Grid system: 1 column on mobile, 2 on tablet+ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 outline-none font-medium"
                  value={p.full_name || ""}
                  onChange={(e) => setP({ ...p, full_name: e.target.value })}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-xl text-gray-500 font-medium cursor-not-allowed"
                  value={p.email || ""}
                  disabled
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">Blood Group</label>
                <select
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 outline-none font-medium"
                  value={p.blood_group || ""}
                  onChange={(e) => setP({ ...p, blood_group: e.target.value })}
                >
                  <option value="" disabled>Select</option>
                  {BLOOD_GROUPS.map((b) => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>

              {/* Added consistent sizing for inputs */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">Gender</label>
                <select
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 outline-none font-medium"
                  value={p.gender || ""}
                  onChange={(e) => setP({ ...p, gender: e.target.value })}
                >
                  <option value="" disabled>Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">Age</label>
                <input
                  type="number"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 outline-none font-medium"
                  value={p.age || ""}
                  onChange={(e) => setP({ ...p, age: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">Mobile</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 outline-none font-medium"
                  value={p.mobile || ""}
                  onChange={(e) => setP({ ...p, mobile: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">City</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 outline-none font-medium"
                  value={p.city || ""}
                  onChange={(e) => setP({ ...p, city: e.target.value })}
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">Address</label>
                <textarea
                  rows="3"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 outline-none font-medium resize-none"
                  value={p.address || ""}
                  onChange={(e) => setP({ ...p, address: e.target.value })}
                />
              </div>

              <div className="md:col-span-2 flex items-center justify-between p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <div>
                  <div className="font-bold text-gray-900 text-sm">Available to donate</div>
                  <div className="text-xs text-gray-500 font-medium">Show in search results.</div>
                </div>
                <input 
                    type="checkbox" 
                    className="w-11 h-6 cursor-pointer accent-red-600" 
                    checked={!!p.available_to_donate}
                    onChange={(e) => setP({ ...p, available_to_donate: e.target.checked })}
                />
              </div>

              <button
                onClick={save}
                className={`md:col-span-2 py-4 rounded-xl font-black text-white transition-all ${
                  loading ? "bg-gray-400" : "bg-red-600 hover:bg-red-700"
                }`}
                disabled={loading}
              >
                {loading ? "Saving..." : "Save Profile Changes"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}