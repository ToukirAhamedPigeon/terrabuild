"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Home, Building2, Handshake, Scale, Truck, PhoneCall, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const services = [
  {
    icon: Home,
    titleKey: "services.buy",
    description: "Find your dream home with our extensive property listings and expert guidance.",
    borderGradient: "from-rose-500 to-pink-500",
    iconGradient: "from-rose-500 to-pink-500",
    bgGradient: "from-rose-500/10 to-pink-500/10",
    features: ["Property Search", "Price Negotiation", "Legal Assistance"],
  },
  {
    icon: Building2,
    titleKey: "services.rent",
    description: "Flexible rental options for residential and commercial spaces with fair pricing.",
    borderGradient: "from-amber-500 to-orange-500",
    iconGradient: "from-amber-500 to-orange-500",
    bgGradient: "from-amber-500/10 to-orange-500/10",
    features: ["Rental Listings", "Lease Agreements", "Property Management"],
  },
  {
    icon: Handshake,
    titleKey: "services.sell",
    description: "Get the best value for your property with professional valuation and marketing.",
    borderGradient: "from-emerald-500 to-teal-500",
    iconGradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-500/10 to-teal-500/10",
    features: ["Property Valuation", "Marketing Strategy", "Closing Support"],
  },
  {
    icon: Scale,
    titleKey: "services.legal",
    description: "Professional legal support for all real estate transactions and documentation.",
    borderGradient: "from-blue-500 to-cyan-500",
    iconGradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
    features: ["Document Verification", "Contract Review", "Registration"],
  },
  {
    icon: Truck,
    titleKey: "services.logistic",
    description: "Seamless logistics and relocation assistance for hassle-free moving.",
    borderGradient: "from-purple-500 to-fuchsia-500",
    iconGradient: "from-purple-500 to-fuchsia-500",
    bgGradient: "from-purple-500/10 to-fuchsia-500/10",
    features: ["Moving Services", "Storage Solutions", "Transportation"],
  },
  {
    icon: PhoneCall,
    titleKey: "services.consultation",
    description: "Free consultation with our real estate experts to guide you through.",
    borderGradient: "from-indigo-500 to-purple-500",
    iconGradient: "from-indigo-500 to-purple-500",
    bgGradient: "from-indigo-500/10 to-purple-500/10",
    features: ["Expert Advice", "Market Analysis", "Investment Planning"],
  },
];

const Services = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects for floating elements - more colorful
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -360]);
  const scale1 = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section 
      ref={sectionRef} 
      className="section-padding relative overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-dark-3 dark:to-dark-2"
    >
      {/* Colorful Parallax Background Objects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large colorful gradient orbs */}
        <motion.div 
          style={{ y: y1, scale: scale1 }}
          className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-r from-rose-500/15 to-pink-500/15 rounded-full blur-3xl"
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 rounded-full blur-3xl"
        />
        <motion.div 
          style={{ y: y3 }}
          className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-r from-amber-500/15 to-orange-500/15 rounded-full blur-3xl"
        />
        <motion.div 
          style={{ y: y4 }}
          className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/15 to-fuchsia-500/15 rounded-full blur-3xl"
        />
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-2/3 left-1/4 w-56 h-56 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl"
        />
        
        {/* Floating geometric shapes - colorful */}
        <motion.div 
          style={{ rotate: rotate1 }}
          className="absolute top-40 right-32 w-20 h-20 bg-gradient-to-r from-rose-500/20 to-pink-500/20 rounded-2xl rotate-12 backdrop-blur-sm"
        />
        <motion.div 
          style={{ rotate: rotate2 }}
          className="absolute bottom-40 left-32 w-16 h-16 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full backdrop-blur-sm"
        />
        <motion.div 
          style={{ y: y2, rotate: rotate1 }}
          className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rotate-45 backdrop-blur-sm"
        />
        <motion.div 
          style={{ y: y3, rotate: rotate2 }}
          className="absolute bottom-1/4 left-1/5 w-14 h-14 bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 rounded-xl backdrop-blur-sm"
        />
        
        {/* Floating colorful diamonds */}
        <motion.div 
          style={{ y: y4, rotate: rotate1 }}
          className="absolute top-60 left-1/3 w-12 h-12 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rotate-45 backdrop-blur-sm"
        />
        <motion.div 
          style={{ y: y1, rotate: rotate2 }}
          className="absolute bottom-60 right-1/3 w-10 h-10 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rotate-12 backdrop-blur-sm"
        />
        
        {/* Twinkling colorful stars/particles */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 5 === 0 ? '#EC4899' : i % 5 === 1 ? '#F59E0B' : i % 5 === 2 ? '#10B981' : i % 5 === 3 ? '#06B6D4' : '#8B5CF6',
              opacity: 0.15,
              animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-gradient-to-r from-secondary/20 to-primary/20 backdrop-blur-sm rounded-full text-secondary text-sm font-semibold mb-4">
            What We Offer
          </span>
          <h2 className="heading-2 mb-4 text-gray-800 dark:text-white">
            Our Services
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive real estate solutions tailored to your needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative"
            >
              {/* Animated gradient border */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.borderGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
              
              {/* Glass morphism card */}
              <div className={`relative bg-gradient-to-br ${service.bgGradient} bg-white/60 dark:bg-dark-2/80 backdrop-blur-md rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/30 dark:border-white/10`}>
                {/* Icon container with gradient */}
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${service.iconGradient} flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg`}
                >
                  <service.icon size={32} className="text-white drop-shadow-md" />
                </div>
                
                {/* Title - Dark text in light mode */}
                <h3 className="text-lg font-playfair font-bold mb-2 text-center text-gray-800 dark:text-white">
                  {t(service.titleKey)}
                </h3>
                
                {/* Description - Dark gray in light mode */}
                <p className="text-gray-600 dark:text-gray-400 text-center text-sm mb-3 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features list */}
                <ul className="space-y-1.5 mb-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-xs text-gray-500 dark:text-gray-500 flex items-center gap-2 justify-center group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${idx * 50}ms` }}>
                      <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.borderGradient} rounded-full`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Learn More button */}
                <button className="w-full mt-3 text-secondary hover:text-primary font-semibold text-xs flex items-center justify-center gap-1 group-hover:gap-2 transition-all duration-300">
                  Learn More <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(5deg); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.05; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.5); }
        }
      `}</style>
    </section>
  );
};

export default Services;