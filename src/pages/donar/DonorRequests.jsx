import React, { useEffect, useState } from "react";

// Manual Mock Data
const BLOOD_GROUPS = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const STATUS_COLORS = {
  pending: "bg-yellow-100 text-yellow-700 border-yellow-200",
  approved: "bg-green-100 text-green-700 border-green-200",
  rejected: "bg-red-100 text-red-700 border-red-200",
  fulfilled: "bg-blue-100 text-blue-700 border-blue-200",
};

export default function DonorRequests() {
  const [requests, setRequests] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    patient_name: "",
    blood_group: "",
    units: 1,
    hospital: "",
    city: "",
    reason: "",
  });

  useEffect(() => {
    document.title = "My Requests — BloodLife";
    // Mock initial data load
    setRequests([
      {
        id: 1,
        patient_name: "Alex Smith",
        blood_group: "O+",
        units: 2,
        hospital: "City General",
        status: "pending",
        created_at: new Date().toISOString(),
      },
    ]);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.patient_name || !form.blood_group || !form.hospital) {
      alert("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    // Simulate API Call
    setTimeout(() => {
      const newRequest = {
        ...form,
        id: Date.now(),
        status: "pending",
        created_at: new Date().toISOString(),
      };
      setRequests([newRequest, ...requests]);
      setLoading(false);
      setIsModalOpen(false);
      setForm({ patient_name: "", blood_group: "", units: 1, hospital: "", city: "", reason: "" });
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans text-gray-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-black tracking-tight">Blood Requests</h2>
            <p className="text-gray-500 font-medium mt-1">Submit and track your blood requests in real-time.</p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-lg shadow-red-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            New Request
          </button>
        </div>

        {/* Requests Table Card */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="p-4 text-xs font-black uppercase tracking-wider text-gray-400">Patient</th>
                  <th className="p-4 text-xs font-black uppercase tracking-wider text-gray-400">Group</th>
                  <th className="p-4 text-xs font-black uppercase tracking-wider text-gray-400">Units</th>
                  <th className="p-4 text-xs font-black uppercase tracking-wider text-gray-400">Hospital</th>
                  <th className="p-4 text-xs font-black uppercase tracking-wider text-gray-400">Status</th>
                  <th className="p-4 text-xs font-black uppercase tracking-wider text-gray-400">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {requests.map((r) => (
                  <tr key={r.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="p-4 font-bold text-gray-900">{r.patient_name}</td>
                    <td className="p-4 font-black text-red-600">{r.blood_group}</td>
                    <td className="p-4 font-medium">{r.units} Units</td>
                    <td className="p-4 text-gray-600 font-medium">{r.hospital}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${STATUS_COLORS[r.status]}`}>
                        {r.status}
                      </span>
                    </td>
                    <td className="p-4 text-gray-400 font-medium">
                      {new Date(r.created_at).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
                {requests.length === 0 && (
                  <tr>
                    <td colSpan="6" className="p-12 text-center text-gray-400 font-bold">
                      No blood requests found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Manual Modal (Dialog) */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
              <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                <h3 className="text-xl font-black text-gray-900">Create New Request</h3>
                <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1 ml-1">Patient Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 outline-none transition-all font-medium"
                    value={form.patient_name}
                    onChange={(e) => setForm({ ...form, patient_name: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1 ml-1">Blood Group *</label>
                    <select
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 outline-none transition-all font-medium"
                      value={form.blood_group}
                      onChange={(e) => setForm({ ...form, blood_group: e.target.value })}
                    >
                      <option value="">Select</option>
                      {BLOOD_GROUPS.map(bg => <option key={bg} value={bg}>{bg}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1 ml-1">Units Needed *</label>
                    <input
                      type="number"
                      min="1"
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 outline-none transition-all font-medium"
                      value={form.units}
                      onChange={(e) => setForm({ ...form, units: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1 ml-1">Hospital Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 outline-none transition-all font-medium"
                    value={form.hospital}
                    onChange={(e) => setForm({ ...form, hospital: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1 ml-1">Reason (Optional)</label>
                  <textarea
                    rows="2"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 outline-none transition-all font-medium resize-none"
                    value={form.reason}
                    onChange={(e) => setForm({ ...form, reason: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-4 rounded-2xl font-black text-white transition-all shadow-lg ${
                    loading ? "bg-gray-400" : "bg-red-600 hover:bg-red-700 shadow-red-100"
                  }`}
                >
                  {loading ? "Submitting..." : "Post Request"}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}