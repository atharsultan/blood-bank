import React from "react";
import AdminLayout from "../../components/AdminLayout";

const AdminDashboard = () => {
  return (
    <AdminLayout 
      title="Admin Dashboard" 
      subtitle="System Management & Real-time Analytics Portal"
    >
      {/* Real-Time Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 min-h-[140px] flex flex-col justify-between">
          <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-lg">👥</div>
          <div className="mt-4">
            <span className="block text-3xl font-black text-slate-800 tracking-tight">1,240</span>
            <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mt-0.5">Total Donors</span>
          </div>
        </div>
        {/* Copy layout pattern for units, requests, and queries here... */}
      </div>

      {/* Pending Actions Notification Banner */}
      <div className="bg-white rounded-2xl shadow-sm border-l-4 border-amber-500 border-t border-r border-b border-slate-100 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h3 className="font-black text-slate-800 text-lg tracking-tight">Pending Requests</h3>
          <p className="text-slate-400 text-sm font-medium mt-0.5">Action needed for blood requests waiting for approval.</p>
        </div>
        <div className="flex items-center gap-6 justify-between sm:justify-end">
          <span className="text-5xl font-black text-amber-500 tracking-tight">5</span>
          <button className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded-xl shadow-md transition">
            Review All
          </button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;