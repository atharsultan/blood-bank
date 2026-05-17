import React, { useEffect } from "react";
import Header from "./Header";
export default function About() {
  useEffect(() => {
    document.title = "About — BloodLife";
  }, []);

  const features = [
    {
      title: "Verified Donors",
      desc: "Real, vetted profiles",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      )
    },
    {
      title: "Easy Requests",
      desc: "Submit in seconds",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m11 17 2 2 4-4"/><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
      )
    },
    {
      title: "Privacy First",
      desc: "Bank-grade security",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      )
    },
    {
      title: "Live Stock",
      desc: "Always up to date",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>
      )
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
       <div className="relative inset-0 z-0">
        <Header />
      </div>
      {/* Hero Section */}
      <section className="bg-gray-50 py-20 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-red-100 rounded-2xl mb-6 text-red-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            About <span className="text-red-600">BloodLife</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            BloodLife is a modern blood bank & donor management platform 
            connecting donors with patients in need — making blood donation 
            simpler, safer, and faster.
          </p>
        </div>
      </section>

      {/* Mission & Features Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-extrabold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              To eliminate blood shortages by building a transparent, real-time 
              network of donors and recipients. Every unit donated is a life 
              potentially saved.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe access to safe blood should never be a barrier to 
              life-saving care. Our platform empowers blood banks, donors, and 
              patients to act with speed and transparency.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <div 
                key={f.title} 
                className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-red-600 mb-4">
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold mb-1">{f.title}</h3>
                <p className="text-sm text-gray-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer-like CTA */}
      <section className="bg-red-600 py-16 text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Ready to save a life?</h2>
          <p className="mb-8 opacity-90">Join our community of heroes today and help us bridge the gap in blood supply.</p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-red-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
              Register as Donor
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}