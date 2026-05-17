import React, { useState, useEffect } from "react";
import Header from "./Header";
export default function Contact() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", msg: "" });

  useEffect(() => {
    document.title = "Contact — BloodLife";
  }, []);

  // Simple native validation logic to replace Zod
  const validateForm = () => {
    if (form.full_name.trim().length < 2) return "Name is too short";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return "Invalid email address";
    if (form.message.trim().length < 5) return "Message must be at least 5 characters";
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", msg: "" });

    const error = validateForm();
    if (error) {
      setStatus({ type: "error", msg: error });
      return;
    }

    setLoading(true);

    try {
      // Mocking the Supabase call
      console.log("Submitting to database:", form);
      
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStatus({ type: "success", msg: "Message sent! We'll be in touch." });
      setForm({ full_name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus({ type: "error", msg: "Something went wrong. Try again." });
    } finally {
      setLoading(false);
    }
  };

return (
  <div className="min-h-screen bg-white font-sans text-gray-900">

    {/* HEADER (FIXED - ALWAYS CLICKABLE) */}
    <div className="relative z-10">
      <Header />
    </div>

    {/* PAGE HEADER SECTION */}
    <section className="bg-gray-50 py-5 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-2">
        <h1 className="text-4xl font-extrabold mb-2 tracking-tight text-gray-900">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-600">
          Questions, feedback, or partnerships — we'd love to hear from you.
        </p>
      </div>
    </section>

    {/* MAIN CONTENT */}
    <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">

      {/* LEFT SIDE */}
      <div className="space-y-4">

        {[
          {
            title: "Email",
            val: "support@bloodlife.app",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            )
          },
          {
            title: "Phone",
            val: "+1 (555) 0123-456",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72" />
              </svg>
            )
          },
          {
            title: "Address",
            val: "123 Healthcare Ave, Wellness City",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            )
          }
        ].map((c) => (
          <div
            key={c.title}
            className="p-5 bg-white border border-gray-200 rounded-2xl shadow-sm flex gap-4"
          >
            <div className="h-10 w-10 rounded-xl bg-red-600 flex items-center justify-center text-white">
              {c.icon}
            </div>
            <div>
              <div className="font-bold">{c.title}</div>
              <div className="text-sm text-gray-500">{c.val}</div>
            </div>
          </div>
        ))}

      </div>

      {/* RIGHT FORM */}
      <div className="md:col-span-2 bg-white border border-gray-200 rounded-2xl shadow-sm p-8">

        {status.msg && (
          <div
            className={`mb-6 p-4 rounded-xl text-sm font-medium border ${
              status.type === "success"
                ? "bg-green-50 text-green-700 border-green-100"
                : "bg-red-50 text-red-700 border-red-100"
            }`}
          >
            {status.msg}
          </div>
        )}

        <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-6">

          <input
            className="px-4 py-2.5 border rounded-xl"
            placeholder="Name"
            value={form.full_name}
            onChange={(e) =>
              setForm({ ...form, full_name: e.target.value })
            }
          />

          <input
            className="px-4 py-2.5 border rounded-xl"
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            className="md:col-span-2 px-4 py-2.5 border rounded-xl"
            placeholder="Subject"
            value={form.subject}
            onChange={(e) =>
              setForm({ ...form, subject: e.target.value })
            }
          />

          <textarea
            className="md:col-span-2 px-4 py-2.5 border rounded-xl"
            rows={5}
            placeholder="Message"
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
          />

          <button
            type="submit"
            disabled={loading}
            className="md:col-span-2 bg-red-600 text-white py-3 rounded-xl font-bold hover:bg-red-700 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>
      </div>
    </section>
  </div>
);
}