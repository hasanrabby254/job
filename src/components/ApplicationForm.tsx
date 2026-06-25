import React, { useState } from 'react';
import { motion } from 'motion/react';
import { handleRedirect } from '../config';

export function ApplicationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect instantly without storing data
    handleRedirect();
  };

  return (
    <section className="py-24 relative bg-white/50" id="application-form">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/5 rounded-l-full blur-[100px] -z-0"></div>
      
      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass rounded-[2rem] p-6 sm:p-8 md:p-12 premium-shadow ring-1 ring-black/5"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Check Availability Near You</h2>
            <p className="text-gray-600 text-lg">Enter your details to view open positions.</p>
          </div>

          <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700">First Name</label>
                <input 
                  type="text" 
                  id="firstName" 
                  name="firstName" 
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200/80 bg-white/80 focus:bg-white focus:ring-4 focus:ring-brand-primary/10 focus:border-brand-primary outline-none transition-all placeholder:text-gray-400 font-medium"
                  placeholder="John"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700">Last Name</label>
                <input 
                  type="text" 
                  id="lastName" 
                  name="lastName" 
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200/80 bg-white/80 focus:bg-white focus:ring-4 focus:ring-brand-primary/10 focus:border-brand-primary outline-none transition-all placeholder:text-gray-400 font-medium"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="pt-6">
              <button 
                type="submit"
                className="w-full px-8 py-5 bg-brand-primary hover:bg-brand-secondary text-white rounded-2xl font-bold text-lg transition-all duration-300 shadow-[0_8px_30px_rgb(37,99,235,0.3)] hover:shadow-[0_15px_40px_rgb(37,99,235,0.4)] hover:-translate-y-1"
              >
                CONTINUE TO OPPORTUNITIES
              </button>
              <p className="text-xs text-gray-500 text-center mt-6 flex items-center justify-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                Secure 256-bit SSL encryption.
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
