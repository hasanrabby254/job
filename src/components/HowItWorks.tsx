import React from 'react';
import { motion } from 'motion/react';
import { ClipboardEdit, Search, ArrowRightCircle, Sparkles } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: <ClipboardEdit className="w-6 h-6 text-white" />,
      title: "Provide Basic Information",
      description: "Start by answering a few simple questions about yourself and your location."
    },
    {
      icon: <Search className="w-6 h-6 text-white" />,
      title: "Review Available Opportunities",
      description: "Our system connects you with matching open roles in your area."
    },
    {
      icon: <ArrowRightCircle className="w-6 h-6 text-white" />,
      title: "Continue Application Process",
      description: "Complete your profile to move forward with employers."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-white" />,
      title: "Explore Matching Positions",
      description: "Finalize your application and discover your next career move."
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="container mx-auto px-4 max-w-7xl relative">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            How It Works
          </motion.h2>
          <div className="h-1 w-20 bg-brand-primary mx-auto rounded-full opacity-80"></div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-10 left-0 w-full h-0.5 bg-gradient-to-r from-blue-50 via-blue-200 to-blue-50 z-0"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center text-center relative group"
              >
                <div className="w-20 h-20 rounded-[1.5rem] bg-white border border-gray-100 shadow-[0_10px_30px_-10px_rgba(37,99,235,0.2)] flex items-center justify-center mb-8 relative group-hover:-translate-y-2 transition-all duration-500 group-hover:border-brand-primary/20">
                  <div className="w-14 h-14 bg-brand-primary rounded-xl flex items-center justify-center shadow-inner">
                    {step.icon}
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white text-brand-primary font-bold border-2 border-brand-primary flex items-center justify-center text-sm shadow-sm group-hover:scale-110 transition-transform duration-500">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed font-light px-2">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
