import React from "react";
import AdminLayout from "../../components/AdminLayout";

const AdminRequests = () => {
  return (
    <AdminLayout 
      title="Manage Blood Requests" 
      subtitle="Approve, reject, or track patient emergency blood requisitions."
    >
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
        {/* Your Requests data table goes directly here */}
        <p className="text-slate-500 text-sm">Blood requests matching table panel content placeholder...</p>
      </div>
    </AdminLayout>
  );
};

export default AdminRequests;