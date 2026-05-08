import React, { useEffect, useState } from "react";

const STATUSES = ["pending", "approved", "rejected", "fulfilled"];

export default function AdminRequests() {
  // Static mock data replaces the backend 'load()' call
  const [reqs, setReqs] = useState([
    {
      id: 1,
      patient_name: "Alice Johnson",
      blood_group: "B+",
      units: 2,
      hospital: "City General",
      city: "Chicago",
      status: "pending",
      created_at: new Date().toISOString(),
    },
    {
      id: 2,
      patient_name: "Mark Wilson",
      blood_group: "O-",
      units: 1,
      hospital: "St. Jude",
      city: "Memphis",
      status: "approved",
      created_at: new Date(Date.now() - 86400000).toISOString(),
    },
  ]);

  useEffect(() => {
    document.title = "Blood Requests — BloodLife";
  }, []);

  // Update Status handler
  const updateStatus = (id, newStatus) => {
    setReqs((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: newStatus } : r))
    );
    // Toast replacement
    console.log(`Request ${id} updated to ${newStatus}`);
  };

  // Delete handler
  const del = (id) => {
    if (!window.confirm("Delete this request?")) return;
    setReqs((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen font-sans">
      <header className="mb-6">
        <h2 className="text-2xl font-extrabold text-gray-900">Blood Requests</h2>
        <p className="text-sm text-gray-500">
          {reqs.length} total requests in the system
        </p>
      </header>

      {/* Card Wrapper */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 uppercase text-xs font-semibold">
              <tr>
                <th className="p-4">Patient</th>
                <th className="p-4">Group</th>
                <th className="p-4">Units</th>
                <th className="p-4">Hospital</th>
                <th className="p-4">City</th>
                <th className="p-4">Status</th>
                <th className="p-4">Date</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {reqs.map((r) => (
                <tr key={r.id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-medium text-gray-900">{r.patient_name}</td>
                  <td className="p-4">
                    <span className="font-bold text-red-600">{r.blood_group}</span>
                  </td>
                  <td className="p-4">{r.units}</td>
                  <td className="p-4 text-gray-600">{r.hospital}</td>
                  <td className="p-4 text-gray-600">{r.city || "—"}</td>

                  <td className="p-4">
                    <select
                      value={r.status}
                      onChange={(e) => updateStatus(r.id, e.target.value)}
                      className="block w-32 px-2 py-1 text-xs border border-gray-300 rounded bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none capitalize"
                    >
                      {STATUSES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </td>

                  <td className="p-4 text-gray-400">
                    {new Date(r.created_at).toLocaleDateString()}
                  </td>

                  <td className="p-4 text-center">
                    <button
                      onClick={() => del(r.id)}
                      className="px-3 py-1 text-xs font-semibold text-white bg-red-600 hover:bg-red-700 rounded transition-colors"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {reqs.length === 0 && (
                <tr>
                  <td colSpan={8} className="p-12 text-center text-gray-400 italic">
                    No requests yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}