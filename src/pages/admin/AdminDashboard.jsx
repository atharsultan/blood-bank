import React from "react";
import { useNavigate } from "react-router-dom"; // Hook to change pages programmatically
import AdminLayout from "../../components/AdminLayout";

const AdminDashboard = () => {
  const navigate = useNavigate(); // Initialize the router controller

  return (
    <AdminLayout 
      title="Admin Dashboard" 
      subtitle="System Management & Real-time Analytics Portal"
    >
      
      {/* Real-Time Stats Grid Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Card: Total Donors */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between min-h-[140px]">
          <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-lg">👥</div>
          <div className="mt-4">
            <span className="block text-3xl font-black text-slate-800 tracking-tight">1,240</span>
            <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mt-0.5">Total Donors</span>
          </div>
        </div>

        {/* Card: Total Units */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between min-h-[140px]">
          <div className="w-10 h-10 bg-red-50 text-red-600 rounded-xl flex items-center justify-center font-bold text-lg">💧</div>
          <div className="mt-4">
            <span className="block text-3xl font-black text-slate-800 tracking-tight">450</span>
            <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mt-0.5">Total Units</span>
          </div>
        </div>

        {/* Card: Total Requests */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between min-h-[140px]">
          <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center font-bold text-lg">📄</div>
          <div className="mt-4">
            <span className="block text-3xl font-black text-slate-800 tracking-tight">89</span>
            <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mt-0.5">Total Requests</span>
          </div>
        </div>

        {/* Card: Contact Queries */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between min-h-[140px]">
          <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center font-bold text-lg">📥</div>
          <div className="mt-4">
            <span className="block text-3xl font-black text-slate-800 tracking-tight">12</span>
            <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mt-0.5">Contact Queries</span>
          </div>
        </div>
      </div>

      {/* ================= PENDING ACTIONS BANNER ================= */}
      <div className="bg-white rounded-2xl shadow-sm border-l-4 border-amber-500 border-t border-r border-b border-slate-100 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h3 className="font-black text-slate-800 text-lg tracking-tight">Pending Requests</h3>
          <p className="text-slate-400 text-sm font-medium mt-0.5">Action needed for blood requests waiting for approval.</p>
        </div>
        
        <div className="flex items-center gap-6 justify-between sm:justify-end">
          <span className="text-5xl font-black text-amber-500 tracking-tight">5</span>
          
          {/* CRITICAL FIX: Trigger path navigation dynamically when clicked */}
          <button 
            onClick={() => navigate("/admin/requests")} 
            className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded-xl shadow-md transition-all active:scale-95 cursor-pointer"
          >
            Review All
          </button>
        </div>
      </div>

    </AdminLayout>
  );
};

export default AdminDashboard;