import React, { useEffect, useState } from "react";

export default function AdminContact() {
  // Static mock data replaces the backend 'load()' call
  const [items, setItems] = useState([
    {
      id: 1,
      full_name: "John Doe",
      email: "john@example.com",
      subject: "Blood Donation Inquiry",
      message: "Hello, I would like to know the requirements for the upcoming blood drive.",
      is_read: false,
      created_at: new Date().toISOString(),
    },
    {
      id: 2,
      full_name: "Sarah Smith",
      email: "sarah.s@test.com",
      subject: "Emergency Assistance",
      message: "We are looking for O- donors in the downtown area immediately.",
      is_read: true,
      created_at: new Date(Date.now() - 86400000).toISOString(),
    }
  ]);

  useEffect(() => {
    document.title = "Contact Queries — BloodLife";
  }, []);

  // Handler for deleting an item
  const del = (id) => {
    if (window.confirm("Delete this message?")) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  // Handler for toggling read status
  const toggleRead = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, is_read: !item.is_read } : item
    ));
  };

  return (
    <div className="max-w-5xl mx-auto p-6 font-sans">
      <header className="mb-6">
        <h2 className="text-2xl font-extrabold text-gray-900">Contact Queries</h2>
        <p className="text-sm text-gray-500">
          {items.length} messages received
        </p>
      </header>

      <div className="space-y-4">
        {items.map((m) => (
          <div
            key={m.id}
            className={`bg-white border rounded-lg shadow-sm p-5 transition-all ${
              !m.is_read ? "border-l-4 border-l-red-600" : "border-gray-200"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center flex-wrap gap-2 mb-2">
                  {/* Inline Mail SVG Icon */}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="text-red-600"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                  
                  <span className="font-bold text-gray-800">{m.full_name}</span>
                  <span className="text-xs text-gray-500 font-normal">
                    • {m.email}
                  </span>
                  
                  {!m.is_read && (
                    <span className="text-[10px] font-bold bg-red-600 text-white px-2 py-0.5 rounded-full uppercase tracking-wider">
                      NEW
                    </span>
                  )}
                </div>

                {m.subject && (
                  <div className="text-sm font-semibold text-gray-700 mb-1">
                    {m.subject}
                  </div>
                )}

                <p className="text-sm text-gray-600 leading-relaxed">{m.message}</p>

                <div className="text-[11px] text-gray-400 mt-3 font-medium uppercase">
                  {new Date(m.created_at).toLocaleString()}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 shrink-0">
                <button
                  onClick={() => toggleRead(m.id)}
                  className="text-xs font-semibold px-3 py-1.5 rounded border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 transition-colors"
                >
                  {m.is_read ? "Mark unread" : "Mark read"}
                </button>

                <button
                  onClick={() => del(m.id)}
                  className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                  title="Delete message"
                >
                  {/* Inline Trash SVG Icon */}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="18" height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}

        {items.length === 0 && (
          <div className="p-12 border-2 border-dashed border-gray-200 rounded-xl text-center text-gray-400 font-medium">
            No queries found in the database.
          </div>
        )}
      </div>
    </div>
  );
}