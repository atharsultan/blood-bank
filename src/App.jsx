import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Global Layout Components
// Removed import Header as it was causing the duplicate top bar
import Footer from "./pages/Footer"; 
import ScrollToTop from "./pages/ScrollToTop";

// Public Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Search from "./pages/Search";
import Stock from "./pages/Stock";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ChangePassword from "./pages/ChangePassword";
import NotFound from "./pages/NotFound";

// Donor Pages
import DonorDashboard from "./pages/donar/DonorDashboard";

// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminRequests from "./pages/admin/AdminRequests";
import AdminDonors from "./pages/admin/AdminDonors";
import AdminStock from "./pages/admin/AdminStock";
import AdminContact from "./pages/admin/AdminContact";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTop />
        
        <div className="flex flex-col min-h-screen">
          {/* Header removed from here to eliminate the top red navigation bar */}
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/search" element={<Search />} />
              <Route path="/stock" element={<Stock />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/change-password" element={<ChangePassword />} />
              
              <Route path="/dashboard/*" element={<DonorDashboard />} />
              
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/requests" element={<AdminRequests />} />
              <Route path="/admin/donors" element={<AdminDonors />} />
              <Route path="/admin/stock" element={<AdminStock />} />
              <Route path="/admin/contact" element={<AdminContact />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}