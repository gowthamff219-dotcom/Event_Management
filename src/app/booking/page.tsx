"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    location: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "", email: "", phone: "", eventType: "", eventDate: "", guestCount: "", location: "", message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-matte-black pt-32">
      <Navbar />
      
      <div className="container mx-auto px-6 md:px-12 py-20 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl mb-6">Let's Create Your Event</h1>
          <p className="text-warm-white/70 font-light max-w-2xl mx-auto">
            Please fill out the form below with as much detail as possible. Our team will review your enquiry and get back to you within 24 hours.
          </p>
        </div>

        {status === "success" ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-charcoal p-12 text-center border border-champagne/20"
          >
            <h2 className="font-serif text-3xl text-champagne mb-4">Thank You</h2>
            <p className="text-warm-white/80 font-light">Your enquiry has been received. We will be in touch shortly to start planning your unforgettable event.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8 bg-charcoal p-8 md:p-12 border border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-warm-white/60">Full Name *</label>
                <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-champagne transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-warm-white/60">Email Address *</label>
                <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-champagne transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-warm-white/60">Phone Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-champagne transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-warm-white/60">Event Type *</label>
                <select required name="eventType" value={formData.eventType} onChange={handleChange} className="w-full bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-champagne transition-colors appearance-none">
                  <option value="" disabled className="bg-charcoal text-white/50">Select Event Type</option>
                  <option value="Wedding" className="bg-charcoal">Wedding</option>
                  <option value="Corporate" className="bg-charcoal">Corporate Event</option>
                  <option value="Private" className="bg-charcoal">Private Celebration</option>
                  <option value="Other" className="bg-charcoal">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-warm-white/60">Estimated Date</label>
                <input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} className="w-full bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-champagne transition-colors text-warm-white" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-warm-white/60">Guest Count</label>
                <input type="number" name="guestCount" value={formData.guestCount} onChange={handleChange} className="w-full bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-champagne transition-colors" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs uppercase tracking-widest text-warm-white/60">Location / Venue</label>
                <input type="text" name="location" value={formData.location} onChange={handleChange} className="w-full bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-champagne transition-colors" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs uppercase tracking-widest text-warm-white/60">Tell us about your vision *</label>
                <textarea required name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-champagne transition-colors resize-none"></textarea>
              </div>
            </div>

            {status === "error" && (
              <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
            )}

            <div className="pt-4 text-center">
              <button 
                type="submit" 
                disabled={status === "submitting"}
                className="bg-champagne text-matte-black px-12 py-4 uppercase tracking-widest text-sm font-medium hover:bg-champagne-light transition-colors disabled:opacity-50"
              >
                {status === "submitting" ? "Submitting..." : "Submit Enquiry"}
              </button>
            </div>
          </form>
        )}
      </div>

      <Footer />
    </main>
  );
}
