import React from "react";
import PageHero from "../components/PageHero";
import { Mail, Phone, MapPin, Send } from "lucide-react"; // Optional icons

const Contact = () => {
  return (
    <div className="font-sans bg-slate-50 min-h-screen">
      
      {/* ================= HERO BACKDROP ================= */}
      <PageHero
        title={
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black leading-tight uppercase tracking-tight text-white">
            Get in <span className="text-red-600">Touch</span>
          </h1>
        }
      >
        <p className="mt-4 md:mt-6 text-xs sm:text-sm md:text-base text-white/80 leading-relaxed max-w-xl font-medium">
          Questions, feedback, or partnerships — we'd love to hear from you. 
          Our team typically responds within 24 hours.
        </p>
      </PageHero>

      {/* ================= MAIN CONTENT ================= */}
      {/* Modified to a responsive fluid shell with smart outer spacing */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-16 py-10 md:py-16">
        
        {/* Responsive Grid Shell: Stacks info tiles on top of the form for mobile screen spaces */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          
          {/* LEFT COLUMN: Contact Info Tiles */}
          <div className="space-y-4 md:space-y-6">
            
            <div className="flex items-center gap-4 p-5 md:p-6 bg-white rounded-2xl shadow-sm border border-slate-100/80">
              <div className="w-11 h-11 md:w-12 md:h-12 bg-red-600 rounded-xl flex items-center justify-center text-white shrink-0 shadow-md shadow-red-100">
                <Mail size={20} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-wider">Email</p>
                <p className="text-slate-800 font-bold text-sm md:text-base truncate">support@bloodlife.app</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 md:p-6 bg-white rounded-2xl shadow-sm border border-slate-100/80">
              <div className="w-11 h-11 md:w-12 md:h-12 bg-red-600 rounded-xl flex items-center justify-center text-white shrink-0 shadow-md shadow-red-100">
                <Phone size={20} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-wider">Phone</p>
                <p className="text-slate-800 font-bold text-sm md:text-base truncate">+92-332-3758703</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 md:p-6 bg-white rounded-2xl shadow-sm border border-slate-100/80">
              <div className="w-11 h-11 md:w-12 md:h-12 bg-red-600 rounded-xl flex items-center justify-center text-white shrink-0 shadow-md shadow-red-100">
                <MapPin size={20} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-wider">Address</p>
                <p className="text-slate-800 font-bold text-sm md:text-base leading-tight">Commercial Market Rawalpindi</p>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Contact Form Container */}
          <div className="lg:col-span-2 bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100">
            <form className="space-y-5 md:space-y-6" onSubmit={(e) => e.preventDefault()}>
              
              {/* Dynamic inline scaling inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                <div>
                  <label className="block text-xs md:text-sm font-black text-slate-700 uppercase tracking-wider mb-2">Name</label>
                  <input 
                    type="text" 
                    placeholder="Athar Sultan"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#18c5b5] focus:ring-4 focus:ring-[#18c5b5]/10 outline-none transition text-sm font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-black text-slate-700 uppercase tracking-wider mb-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#18c5b5] focus:ring-4 focus:ring-[#18c5b5]/10 outline-none transition text-sm font-medium"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-xs md:text-sm font-black text-slate-700 uppercase tracking-wider mb-2">Subject</label>
                <input 
                  type="text" 
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#18c5b5] focus:ring-4 focus:ring-[#18c5b5]/10 outline-none transition text-sm font-medium"
                />
              </div>

              <div>
                <label className="block text-xs md:text-sm font-black text-slate-700 uppercase tracking-wider mb-2">Message</label>
                <textarea 
                  rows="4" 
                  placeholder="Your message here..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#18c5b5] focus:ring-4 focus:ring-[#18c5b5]/10 outline-none transition text-sm font-medium resize-none"
                ></textarea>
              </div>

              {/* Action item buttons stretch fluidly across full screen context on mobile frames */}
              <div className="pt-2">
                <button className="w-full sm:w-auto px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-red-200 hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2">
                  <Send size={16} />
                  Send Message
                </button>
              </div>

            </form>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Contact;