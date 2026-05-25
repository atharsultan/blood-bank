import React, { useEffect, useState } from "react";

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
    setRequests([
      { id: 1, patient_name: "Alex Smith", blood_group: "O+", units: 2, hospital: "City General", status: "pending", created_at: new Date().toISOString() },
    ]);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.patient_name || !form.blood_group || !form.hospital) return;

    setLoading(true);
    setTimeout(() => {
      const newRequest = { ...form, id: Date.now(), status: "pending", created_at: new Date().toISOString() };
      setRequests([newRequest, ...requests]);
      setLoading(false);
      setIsModalOpen(false);
      setForm({ patient_name: "", blood_group: "", units: 1, hospital: "", city: "", reason: "" });
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8 font-sans text-gray-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">Blood Requests</h2>
            <p className="text-sm sm:text-base text-gray-500 font-medium mt-1">Submit and track your blood requests.</p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-lg"
          >
            New Request
          </button>
        </div>

        {/* Responsive Table Wrapper */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[600px] text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="p-4 text-[10px] sm:text-xs font-black uppercase text-gray-400">Patient</th>
                  <th className="p-4 text-[10px] sm:text-xs font-black uppercase text-gray-400">Group</th>
                  <th className="p-4 text-[10px] sm:text-xs font-black uppercase text-gray-400">Units</th>
                  <th className="p-4 text-[10px] sm:text-xs font-black uppercase text-gray-400">Hospital</th>
                  <th className="p-4 text-[10px] sm:text-xs font-black uppercase text-gray-400">Status</th>
                  <th className="p-4 text-[10px] sm:text-xs font-black uppercase text-gray-400">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {requests.map((r) => (
                  <tr key={r.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="p-4 font-bold text-gray-900 text-sm">{r.patient_name}</td>
                    <td className="p-4 font-black text-red-600">{r.blood_group}</td>
                    <td className="p-4 font-medium text-sm">{r.units} Units</td>
                    <td className="p-4 text-gray-600 font-medium text-sm">{r.hospital}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-[10px] font-black uppercase border ${STATUS_COLORS[r.status]}`}>
                        {r.status}
                      </span>
                    </td>
                    <td className="p-4 text-gray-400 font-medium text-sm">
                      {new Date(r.created_at).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal remains largely the same, optimized for mobile with fixed positioning */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white w-full max-w-lg rounded-t-3xl sm:rounded-3xl shadow-2xl p-6 overflow-hidden">
              <h3 className="text-xl font-black mb-4">Create New Request</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Inputs ... (same structure as original) */}
                <input 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl" 
                    placeholder="Patient Name"
                    value={form.patient_name}
                    onChange={(e) => setForm({...form, patient_name: e.target.value})}
                />
                <button type="submit" className="w-full py-4 rounded-2xl bg-red-600 text-white font-black">
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