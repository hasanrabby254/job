import React from 'react';
import { motion } from 'motion/react';
import { DollarSign, Clock, TrendingUp, Zap } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6 text-brand-primary" />,
      title: "Competitive Pay",
      description: "Discover opportunities with attractive hourly rates and potential bonuses."
    },
    {
      icon: <Clock className="w-6 h-6 text-brand-primary" />,
      title: "Flexible Shifts",
      description: "Find schedules that work around your life, including day, night, and weekend shifts."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-brand-primary" />,
      title: "Career Growth",
      description: "Connect with companies that offer training and pathways to management."
    },
    {
      icon: <Zap className="w-6 h-6 text-brand-primary" />,
      title: "Fast Hiring Process",
      description: "Apply quickly and potentially start your new opportunity within days."
    }
  ];

  return (
    <section className="py-24 bg-transparent relative z-10">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            Why Explore Opportunities Today?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light"
          >
            Unlock your potential in the booming logistics, warehouse, and fulfillment sectors.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-[2rem] p-8 premium-shadow hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.1)] transition-all duration-500 hover:-translate-y-2 border border-gray-100 group"
            >
              <div className="w-16 h-16 bg-blue-50/80 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                {React.cloneElement(benefit.icon as React.ReactElement, { className: 'w-7 h-7 text-brand-primary group-hover:text-white transition-colors duration-500' })}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed font-light">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
