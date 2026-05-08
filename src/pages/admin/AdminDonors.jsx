import React, { useEffect, useState } from "react";

export default function AdminDonors() {
  // Static mock data since the backend load() is removed
  const [donors, setDonors] = useState([
    { id: 1, full_name: "John Doe", email: "john@example.com", blood_group: "O+", gender: "Male", age: 28, mobile: "555-0101", city: "New York" },
    { id: 2, full_name: "Jane Smith", email: "jane@example.com", blood_group: "A-", gender: "Female", age: 34, mobile: "555-0102", city: "Chicago" },
    { id: 3, full_name: "Robert Brown", email: "robert@example.com", blood_group: "B+", gender: "Male", age: 45, mobile: "555-0103", city: "Los Angeles" },
  ]);
  
  const [q, setQ] = useState("");

  useEffect(() => {
    document.title = "Manage Donors — BloodLife";
  }, []);

  const del = (id) => {
    if (!window.confirm("Delete this donor?")) return;
    setDonors(donors.filter(d => d.id !== id));
  };

  const filtered = donors.filter((d) =>
    !q ||
    d.full_name?.toLowerCase().includes(q.toLowerCase()) ||
    d.email?.toLowerCase().includes(q.toLowerCase()) ||
    d.blood_group?.toLowerCase().includes(q.toLowerCase()) ||
    d.city?.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen font-sans">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-gray-900">Donors</h2>
          <p className="text-sm text-gray-500">
            {donors.length} total donors registered
          </p>
        </div>

        <input
          type="text"
          placeholder="Search by name, email, or group..."
          className="w-full max-w-xs px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>

      {/* Table Card */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 uppercase text-xs font-semibold">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Group</th>
                <th className="p-4">Gender</th>
                <th className="p-4">Age</th>
                <th className="p-4">Mobile</th>
                <th className="p-4">City</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {filtered.map((d) => (
                <tr key={d.id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-medium text-gray-900">
                    {d.full_name || "—"}
                  </td>
                  <td className="p-4 text-gray-600">{d.email}</td>
                  <td className="p-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-100 text-red-700">
                      {d.blood_group || "—"}
                    </span>
                  </td>
                  <td className="p-4 text-gray-600">{d.gender || "—"}</td>
                  <td className="p-4 text-gray-600">{d.age || "—"}</td>
                  <td className="p-4 text-gray-600">{d.mobile || "—"}</td>
                  <td className="p-4 text-gray-600">{d.city || "—"}</td>
                  <td className="p-4 text-center">
                    <button
                      onClick={() => del(d.id)}
                      className="p-2 text-gray-400 hover:text-red-600 transition-colors rounded-full hover:bg-red-50"
                      title="Delete Donor"
                    >
                      {/* Simple SVG Trash Icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 6h18"></path>
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}

              {filtered.length === 0 && (
                <tr>
                  <td colSpan={8} className="p-12 text-center text-gray-400 italic">
                    No donors found matching your search.
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