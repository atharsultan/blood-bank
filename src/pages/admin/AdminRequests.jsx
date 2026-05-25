import React, { useState } from "react";
import AdminLayout from "../../components/AdminLayout";

// Updated dummy data containing cities for location-based request filtering
const DUMMY_PATIENT_REQUESTS = [
  { id: 1, name: "Zubair Khan", blood: "O+", units: 2, hospital: "Holy Family Hospital", city: "Rawalpindi", date: "2026-05-24", status: "Pending" },
  { id: 2, name: "Athar Ali", blood: "A+", units: 1, hospital: "CMH Skardu", city: "Skardu", date: "2026-05-25", status: "Pending" },
  { id: 3, name: "Kamran Malik", blood: "B+", units: 3, hospital: "PIMS Islamabad", city: "Islamabad", date: "2026-05-23", status: "Pending" },
  { id: 4, name: "Mariam Zahid", blood: "AB-", units: 1, hospital: "Shifa International", city: "Islamabad", date: "2026-05-27", status: "Pending" },
  { id: 5, name: "Osman Yusuf", blood: "O-", units: 4, hospital: "CMH Rawalpindi", city: "Rawalpindi", date: "2026-05-24", status: "Pending" },
];

const AdminRequests = () => {
  const [data, setData] = useState(DUMMY_PATIENT_REQUESTS);

  const updateStatus = (id, newStatus) => {
    setData(prev => prev.map(item => item.id === id ? { ...item, status: newStatus } : item));
  };

  return (
    <AdminLayout 
      title="Manage Blood Requests" 
      subtitle="Review live hospital applications. Process allocations with immediate system verification updates."
    >
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <h2 className="font-black text-slate-800 text-lg tracking-tight">Incoming Patient Requisitions</h2>
          <span className="px-3 py-1 bg-amber-50 text-amber-600 font-bold text-xs rounded-lg border border-amber-100">
            {data.filter(r => r.status === "Pending").length} Action Required
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-xs font-bold text-slate-500 uppercase tracking-wider">
                <th className="py-4 px-6">Patient / Hospital</th>
                {/* ADDED COLUMN HEADER */}
                <th className="py-4 px-6">City</th>
                <th className="py-4 px-6 text-center">Blood Group</th>
                <th className="py-4 px-6 text-center">Units</th>
                <th className="py-4 px-6">Needed By</th>
                <th className="py-4 px-6 text-center">Status</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
              {data.map((request) => (
                <tr key={request.id} className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6">
                    <div className="font-bold text-slate-900">{request.name}</div>
                    <div className="text-slate-400 text-xs mt-0.5">📍 {request.hospital}</div>
                  </td>
                  
                  {/* NEW COLUMN: Renders a distinctive localized location badge */}
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200/60">
                      🏢 {request.city}
                    </span>
                  </td>

                  <td className="py-4 px-6 text-center">
                    <span className="inline-block px-3 py-1 bg-red-50 text-red-600 font-black text-xs rounded-md border border-red-100">
                      {request.blood}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center font-extrabold text-slate-800">{request.units} Bags</td>
                  <td className="py-4 px-6 text-slate-500 font-medium">{request.date}</td>
                  <td className="py-4 px-6 text-center">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${
                      request.status === "Pending" ? "bg-amber-50 text-amber-700 border border-amber-100" :
                      request.status === "Accepted" ? "bg-blue-50 text-blue-700 border border-blue-100" :
                      request.status === "Completed" ? "bg-emerald-50 text-emerald-700 border border-emerald-100" :
                      "bg-rose-50 text-rose-700 border border-rose-100"
                    }`}>
                      {request.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      {request.status === "Pending" && (
                        <>
                          <button
                            onClick={() => updateStatus(request.id, "Accepted")}
                            className="px-3 py-1.5 font-bold text-xs bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                          >
                            Accept
                          </button>
                          <button
                            onClick={() => updateStatus(request.id, "Rejected")}
                            className="px-3 py-1.5 font-bold text-xs bg-rose-50 text-rose-600 rounded-lg hover:bg-rose-600 hover:text-white transition-all shadow-sm"
                          >
                            Reject
                          </button>
                        </>
                      )}

                      {request.status === "Accepted" && (
                        <button
                          onClick={() => updateStatus(request.id, "Completed")}
                          className="px-4 py-1.5 font-bold text-xs bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 shadow-md shadow-emerald-100 transition-all"
                        >
                          ✓ Dispatch & Complete
                        </button>
                      )}

                      {(request.status === "Completed" || request.status === "Rejected") && (
                        <span className="text-xs font-semibold text-slate-400 italic pr-2">
                          No actions remaining
                        </span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminRequests;