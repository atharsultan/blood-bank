import React, { useEffect, useState } from "react";

// --- Custom Internal Components (Manual UI) ---

// Manual Icon: Users
const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);

// Manual Icon: Droplet
const DropletIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>
);

// Manual Icon: FileHeart
const FileHeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10.29 10.7a2.43 2.43 0 0 0-2.66-.4 2.5 2.5 0 0 0-1.16 3.38l2.53 4.32 2.53-4.32a2.5 2.5 0 0 0-1.24-3.38z"/></svg>
);

// Manual Icon: Inbox
const InboxIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>
);

// Manual Card Component
const CustomCard = ({ children, className = "" }) => (
  <div className={`bg-white border border-gray-200 rounded-2xl shadow-sm ${className}`}>
    {children}
  </div>
);

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    donors: 0,
    units: 0,
    requests: 0,
    queries: 0,
    pending: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated API Fetch
    const loadStats = async () => {
      try {
        // Replace with your actual fetch logic
        setTimeout(() => {
          setStats({
            donors: 1240,
            units: 450,
            requests: 89,
            queries: 12,
            pending: 5,
          });
          setLoading(false);
        }, 500);
      } catch (err) {
        console.error(err);
      }
    };
    loadStats();
  }, []);

  const cards = [
    { icon: UsersIcon, label: "Total Donors", val: stats.donors, color: "text-blue-600" },
    { icon: DropletIcon, label: "Total Units", val: stats.units, color: "text-red-600" },
    { icon: FileHeartIcon, label: "Total Requests", val: stats.requests, color: "text-amber-600" },
    { icon: InboxIcon, label: "Contact Queries", val: stats.queries, color: "text-indigo-600" },
  ];

  if (loading) {
    return <div className="p-8 text-gray-500 font-medium">Loading Overview...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-10">
          <h2 className="text-3xl font-black text-gray-900 tracking-tight">Overview</h2>
          <p className="text-gray-500 font-medium mt-1">
            Real-time stats across the platform.
          </p>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {cards.map((c) => (
            <CustomCard key={c.label} className="p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className={`${c.color} p-2 bg-gray-50 rounded-lg`}>
                  <c.icon />
                </div>
              </div>
              <div className="text-3xl font-black text-gray-900 leading-none">
                {c.val.toLocaleString()}
              </div>
              <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mt-2">
                {c.label}
              </div>
            </CustomCard>
          ))}
        </div>

        {/* Action Needed Card */}
        <CustomCard className="p-8 border-l-4 border-l-amber-500">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="font-black text-xl text-gray-900 mb-1">Pending Requests</h3>
              <p className="text-gray-500 font-medium">
                Action needed for blood requests waiting for approval.
              </p>
            </div>
            <div className="flex items-center gap-4">
               <div className="text-5xl font-black text-amber-600">
                {stats.pending}
              </div>
              <button 
                onClick={() => window.location.href = '/admin/requests'}
                className="bg-gray-900 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-gray-800 transition-colors"
              >
                Review All
              </button>
            </div>
          </div>
        </CustomCard>
      </div>
    </div>
  );
}