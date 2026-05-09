import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// ⚠️ CHECK THIS PATH CAREFULLY ⚠️
// If your folder is named "components", it must be lowercase here.
// If your file is named "Navbar.jsx", use that exact casing.
// Try adding the .jsx extension and matching the casing exactly

// import Navbar from "./components/navbar.jsx";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Search from "./pages/Search";
import Stock from "./pages/Stock";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import ChangePassword from "./pages/ChangePassword";

// Donor & Admin Pages
import DonorDashboard from "./pages/donar/DonorDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";

const queryClient = new QueryClient();

export default function App() {
  return (
    
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {/* We place it here directly to test if it renders at all */}
        
      
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<Search />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* Dashboard Routes */}
          <Route path="/dashboard/*" element={<DonorDashboard />} />
          <Route path="/admin/*" element={<AdminDashboard />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}