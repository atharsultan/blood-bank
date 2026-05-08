import React, { useEffect, useState } from "react";

export default function AdminStock() {
  // Mock data to replace the database load()
  const [stock, setStock] = useState([
    { id: 1, blood_group: "A+", units: 10 },
    { id: 2, blood_group: "A-", units: 5 },
    { id: 3, blood_group: "B+", units: 12 },
    { id: 4, blood_group: "B-", units: 3 },
    { id: 5, blood_group: "O+", units: 20 },
    { id: 6, blood_group: "O-", units: 8 },
    { id: 7, blood_group: "AB+", units: 4 },
    { id: 8, blood_group: "AB-", units: 2 },
  ]);

  const [edits, setEdits] = useState({});

  useEffect(() => {
    document.title = "Blood Stock — BloodLife";
    // Initialize edits with current stock values
    const initialEdits = {};
    stock.forEach((s) => {
      initialEdits[s.id] = s.units;
    });
    setEdits(initialEdits);
  }, []);

  const save = (id) => {
    const newValue = edits[id];
    setStock((prev) =>
      prev.map((item) => (item.id === id ? { ...item, units: newValue } : item))
    );
    // Simple alert replacement for toast
    alert(`Stock for Group ID ${id} updated to ${newValue} units.`);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen font-sans">
      <header className="mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
          Blood Stock
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Update available units for each blood group across the repository.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stock.map((s) => (
          <div
            key={s.id}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-5">
              {/* Inline SVG Droplet Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-red-600"
              >
                <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
              </svg>
              <span className="text-3xl font-black text-gray-800">
                {s.blood_group}
              </span>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                Current Units
              </label>
              <input
                type="number"
                min={0}
                value={edits[s.id] || 0}
                onChange={(e) =>
                  setEdits({
                    ...edits,
                    [s.id]: Number(e.target.value),
                  })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all font-semibold"
              />

              <button
                onClick={() => save(s.id)}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors shadow-sm active:transform active:scale-95"
              >
                Save Changes
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}