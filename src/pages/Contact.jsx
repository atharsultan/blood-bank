import React from "react";
import PageHero from "../components/PageHero";
import { Mail, Phone, MapPin, Send } from "lucide-react"; // Optional icons

const Contact = () => {
  return (
    <div className="font-sans bg-slate-50 min-h-screen">
      
      {/* ================= HERO BACKDROP ================= */}
      <PageHero
        title={
          <h1 className="text-3xl md:text-5xl font-bold leading-tight uppercase">
            Get in <span className="text-red-600">Touch</span>
          </h1>
        }
      >
        <p className="mt-6 text-sm md:text-base text-white/80 leading-relaxed max-w-xl">
          Questions, feedback, or partnerships — we'd love to hear from you. 
          Our team typically responds within 24 hours.
        </p>
      </PageHero>

      {/* ================= MAIN CONTENT ================= */}
      <main className="max-w-7xl mx-auto px-6 md:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* LEFT COLUMN: Contact Info Tiles */}
          <div className="space-y-6">
            <div className="flex items-center gap-5 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase">Email</p>
                <p className="text-slate-800 font-semibold">support@bloodlife.app</p>
              </div>
            </div>

            <div className="flex items-center gap-5 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase">Phone</p>
                <p className="text-slate-800 font-semibold">+1 (555) 0123-456</p>
              </div>
            </div>

            <div className="flex items-center gap-5 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase">Address</p>
                <p className="text-slate-800 font-semibold">123 Healthcare Ave, Wellness City</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Contact Form */}
          <div className="md:col-span-2 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-[#18c5b5] focus:ring-2 focus:ring-[#18c5b5]/20 outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="Email Address"
                    className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-[#18c5b5] focus:ring-2 focus:ring-[#18c5b5]/20 outline-none transition"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                <input 
                  type="text" 
                  placeholder="How can we help?"
                  className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-[#18c5b5] focus:ring-2 focus:ring-[#18c5b5]/20 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea 
                  rows="4" 
                  placeholder="Your message here..."
                  className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-[#18c5b5] focus:ring-2 focus:ring-[#18c5b5]/20 outline-none transition resize-none"
                ></textarea>
              </div>

              <button className="w-full md:w-auto px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-2xl shadow-lg shadow-red-200 transition-all active:scale-95 flex items-center justify-center gap-2">
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Contact;