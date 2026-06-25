import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { handleRedirect } from '../config';

export function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-gray-900">
      {/* Premium Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/30 rounded-full blur-[120px] opacity-60"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            Start Exploring Opportunities Today
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
            Take the next step and continue to view available opportunities in warehouse, delivery, and logistics.
          </p>
          <button 
            onClick={handleRedirect}
            className="px-8 sm:px-12 py-5 sm:py-6 bg-white text-gray-900 hover:bg-gray-50 rounded-2xl font-bold text-lg sm:text-xl transition-all duration-500 shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)] hover:-translate-y-1 flex items-center justify-center gap-3 mx-auto group w-full sm:w-auto"
          >
            CONTINUE NOW
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 text-brand-primary" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
