import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function DonorDashboard() {
  const [profile] = useState({
    full_name: "John Doe",
    blood_group: "O+",
    available_to_donate: true,
  });

  const [requests] = useState([
    { id: 1, patient_name: "Sarah Connor", blood_group: "O+", units: 2, status: "pending" },
    { id: 2, patient_name: "James Miller", blood_group: "O+", units: 1, status: "approved" },
  ]);

  useEffect(() => {
    document.title = "Dashboard — BloodLife";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8 font-sans text-gray-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Welcome Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-black mb-1">
            Welcome, {profile?.full_name || "Donor"} 👋
          </h2>
          <p className="text-sm sm:text-base text-gray-500 font-medium">
            Thank you for being a part of BloodLife. Your contributions save lives.
          </p>
        </div>

        {/* Stats Grid - Now stack on mobile (1 col), split on tablet (2), full on desktop (3) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
          {/* Blood Group Card */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 text-red-600">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              </div>
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Your Group</span>
            </div>
            <div className="text-3xl sm:text-4xl font-black">{profile?.blood_group || "—"}</div>
          </div>

          {/* Requests Card */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 text-red-600">
                 <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              </div>
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Total Requests</span>
            </div>
            <div className="text-3xl sm:text-4xl font-black">{requests.length}</div>
          </div>

          {/* Availability Card */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${profile?.available_to_donate ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400"}`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </div>
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Status</span>
            </div>
            <div className="text-lg sm:text-xl font-black">
              {profile?.available_to_donate ? "Available" : "Unavailable"}
            </div>
          </div>
        </div>

        {/* Bottom Section - Responsive layout change */}
        <div className="grid lg:grid-cols-2 gap-6">
          
          {/* Quick Actions */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg sm:text-xl font-black mb-6">Quick Actions</h3>
            <div className="space-y-4">
              <Link to="/dashboard/profile" className="flex items-center w-full p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-all">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-4"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg></div>
                <span className="font-bold text-gray-700 text-sm sm:text-base">Update Profile Details</span>
              </Link>
              <Link to="/dashboard/requests" className="flex items-center w-full p-4 rounded-xl bg-red-600 hover:bg-red-700 transition-all shadow-lg shadow-red-200">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4 text-white"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" /></svg></div>
                <span className="font-bold text-white text-sm sm:text-base">Create New Blood Request</span>
              </Link>
            </div>
          </div>

          {/* Recent Requests */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg sm:text-xl font-black mb-6">Recent Activity</h3>
            <div className="space-y-4">
              {requests.length > 0 ? (
                requests.slice(0, 3).map((r) => (
                  <div key={r.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-gray-50 gap-3">
                    <div>
                      <div className="font-bold text-gray-900">{r.patient_name}</div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-tighter">{r.blood_group} • {r.units} Units</div>
                    </div>
                    <span className={`w-fit text-[10px] px-3 py-1 rounded-full font-black uppercase tracking-widest border ${r.status === 'approved' ? 'bg-green-100 text-green-700 border-green-200' : 'bg-yellow-100 text-yellow-700 border-yellow-200'}`}>
                      {r.status}
                    </span>
                  </div>
                ))
              ) : (
                <div className="text-center py-10 text-gray-400 italic font-bold">No requests found.</div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}