import React, { useState, useEffect } from "react";

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
      {/* Header Section */}
      <section className="bg-gray-50 py-16 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-extrabold mb-2 tracking-tight text-gray-900">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600">
            Questions, feedback, or partnerships — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        
        {/* Contact Info Sidebar */}
        <div className="space-y-4">
          {[
            { 
              title: "Email", 
              val: "support@bloodlife.app", 
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            },
            { 
              title: "Phone", 
              val: "+1 (555) 0123-456", 
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            },
            { 
              title: "Address", 
              val: "123 Healthcare Ave, Wellness City", 
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            },
          ].map((c) => (
            <div key={c.title} className="p-5 bg-white border border-gray-200 rounded-2xl shadow-sm flex gap-4 items-start">
              <div className="h-10 w-10 rounded-xl bg-red-600 flex items-center justify-center shrink-0 text-white">
                {c.icon}
              </div>
              <div>
                <div className="font-bold text-gray-900">{c.title}</div>
                <div className="text-sm text-gray-500">{c.val}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2 bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
          {status.msg && (
            <div className={`mb-6 p-4 rounded-xl text-sm font-medium border ${
              status.type === "success" ? "bg-green-50 text-green-700 border-green-100" : "bg-red-50 text-red-700 border-red-100"
            }`}>
              {status.msg}
            </div>
          )}

          <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-bold text-gray-700">Name</label>
              <input
                type="text"
                value={form.full_name}
                onChange={(e) => setForm({ ...form, full_name: e.target.value })}
                className="px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 outline-none transition-all"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-bold text-gray-700">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 outline-none transition-all"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="md:col-span-2 flex flex-col gap-1.5">
              <label className="text-sm font-bold text-gray-700">Subject</label>
              <input
                type="text"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 outline-none transition-all"
                placeholder="What is this regarding?"
              />
            </div>

            <div className="md:col-span-2 flex flex-col gap-1.5">
              <label className="text-sm font-bold text-gray-700">Message</label>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 outline-none transition-all resize-none"
                placeholder="How can we help?"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`md:col-span-2 py-3 px-6 rounded-xl font-bold text-white transition-all shadow-md active:scale-[0.98] ${
                loading ? "bg-gray-400 cursor-not-allowed" : "bg-red-600 hover:bg-red-700"
              }`}
            >
              {loading ? "Sending Message..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}