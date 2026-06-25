import React from 'react';
import { motion, Variants } from 'motion/react';
import { ArrowRight, CheckCircle2, TrendingUp, MapPin } from 'lucide-react';
import { handleRedirect } from '../config';
import heroImg from '../assets/images/diverse_warehouse_workers_1782382606219.jpg';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const floatVariants: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-8, 8, -8],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
  }
};

export function Hero() {
  return (
    <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-20 overflow-hidden bg-white/50">
      {/* Premium Background gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[100px] opacity-80 mix-blend-multiply"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-accent/10 rounded-full blur-[80px] opacity-60 mix-blend-multiply"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 backdrop-blur-sm border border-blue-100 text-brand-primary text-sm font-semibold tracking-wide mb-8 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
              </span>
              Actively Hiring Nationwide
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-[4rem] font-extrabold leading-[1.1] mb-6 tracking-tight text-gray-900">
              Find New Career <br className="hidden md:block" />
              <span className="text-gradient">
                Opportunities Near You
              </span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Connect with employers hiring across the United States. Complete a quick application to discover available opportunities in your area.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <button 
                onClick={handleRedirect}
                className="w-full sm:w-auto px-8 py-4 bg-brand-primary hover:bg-brand-secondary text-white rounded-2xl font-semibold text-lg transition-all duration-500 shadow-[0_8px_30px_rgb(37,99,235,0.3)] hover:shadow-[0_15px_40px_rgb(37,99,235,0.4)] hover:-translate-y-1 flex items-center justify-center gap-2 group"
              >
                CHECK AVAILABLE OPPORTUNITIES
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>
            </motion.div>

            <motion.div variants={containerVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
              {[
                "Fast Application Process",
                "Flexible Schedules",
                "Multiple Opportunities",
                "Nationwide Availability"
              ].map((item, i) => (
                <motion.div 
                  variants={itemVariants}
                  key={i} 
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 w-full max-w-lg lg:max-w-none relative mt-10 lg:mt-0"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/30 to-brand-accent/30 rounded-3xl transform rotate-2 scale-[1.02] filter blur-xl opacity-70"></div>
            <div className="relative z-10 w-full rounded-3xl shadow-2xl overflow-visible ring-1 ring-black/5">
              <img 
                src={heroImg} 
                alt="Logistics warehouse workers" 
                className="w-full h-auto rounded-3xl object-cover aspect-square sm:aspect-[4/3] object-top lg:object-center"
                loading="eager"
              />
              
              {/* Top Left Badge */}
              <motion.div 
                variants={floatVariants}
                initial="initial"
                animate="animate"
                className="absolute top-6 sm:top-10 left-2 sm:-left-8 z-20"
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                  className="bg-white/80 backdrop-blur-xl p-4 pr-6 sm:pr-8 rounded-2xl shadow-xl flex items-center gap-4 border border-white/60 premium-shadow"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-50 rounded-full flex items-center justify-center ring-1 ring-green-100">
                    <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-base font-bold text-gray-900 tracking-tight">+2,400 new roles</div>
                    <div className="text-xs sm:text-sm text-gray-500 font-medium mt-0.5">posted this week</div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Bottom Right Badge */}
              <motion.div 
                variants={floatVariants}
                initial="initial"
                animate="animate"
                style={{ animationDelay: '2s' }}
                className="absolute bottom-6 sm:bottom-10 right-2 sm:-right-8 z-20"
              >
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
                  className="bg-white/80 backdrop-blur-xl p-4 pr-6 sm:pr-8 rounded-2xl shadow-xl flex items-center gap-4 border border-white/60 premium-shadow"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-full flex items-center justify-center ring-1 ring-blue-100">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-brand-primary" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-base font-bold text-gray-900 tracking-tight">Nationwide</div>
                    <div className="text-xs sm:text-sm text-gray-500 font-medium mt-0.5">All 50 states</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
