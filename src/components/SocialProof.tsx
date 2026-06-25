import React from 'react';
import { motion } from 'motion/react';
import { Users, MapPin, FastForward, Star } from 'lucide-react';

export function SocialProof() {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-brand-primary" />,
      value: "50,000+",
      label: "Applications Viewed"
    },
    {
      icon: <MapPin className="w-8 h-8 text-brand-primary" />,
      value: "Nationwide",
      label: "Coverage Across US"
    },
    {
      icon: <FastForward className="w-8 h-8 text-brand-primary" />,
      value: "2 Minutes",
      label: "Fast Application Experience"
    }
  ];

  return (
    <section className="py-24 bg-white relative z-10">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            Thousands of Job Seekers Explore <br className="hidden md:block"/> New Opportunities Every Month
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-light"
          >
            Join a growing network of individuals taking the next step in their careers.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center text-center p-10 rounded-[2rem] bg-[#FAFAFA] border border-gray-100 hover:border-gray-200 transition-colors"
            >
              <div className="mb-6 p-4 bg-white rounded-2xl shadow-sm border border-gray-50">{stat.icon}</div>
              <div className="text-5xl font-black text-gray-900 mb-3 tracking-tight">{stat.value}</div>
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Michael R.", role: "Warehouse Associate", text: "The process was incredibly smooth. I found options nearby within minutes of completing my profile." },
            { name: "Sarah J.", role: "Delivery Driver", text: "I needed flexible hours, and this platform connected me with employers offering exactly what I was looking for." },
            { name: "David T.", role: "Logistics Coordinator", text: "Premium experience from start to finish. It feels much more professional than other job boards I've used." }
          ].map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white p-8 rounded-[2rem] premium-shadow border border-gray-100 hover:-translate-y-1 transition-transform duration-500"
            >
              <div className="flex gap-1.5 text-brand-accent mb-6">
                {[...Array(5)].map((_, idx) => <Star key={idx} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-gray-700 mb-8 font-light text-lg leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-brand-primary flex items-center justify-center font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{review.name}</div>
                  <div className="text-sm text-gray-500 font-medium">{review.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
