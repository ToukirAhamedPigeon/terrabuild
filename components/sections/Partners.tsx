"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const partners = [
  { id: 1, name: "Dutch-Bangla Bank", nameBn: "ডাচ-বাংলা ব্যাংক", logo: "/assets/partners/dbbl.png" },
  { id: 2, name: "bKash", nameBn: "বিকাশ", logo: "/assets/partners/bkash.png" },
  { id: 3, name: "Grameenphone", nameBn: "গ্রামীণফোন", logo: "/assets/partners/gp.png" },
  { id: 4, name: "Robi", nameBn: "রবি", logo: "/assets/partners/robi.png" },
  { id: 5, name: "Pran", nameBn: "প্রাণ", logo: "/assets/partners/pran.png" },
  { id: 6, name: "Bashundhara Group", nameBn: "বাশুন্ধরা গ্রুপ", logo: "/assets/partners/bashundhara.png" },
  { id: 7, name: "City Bank", nameBn: "সিটি ব্যাংক", logo: "/assets/partners/city-bank.png" },
  { id: 8, name: "Navana Group", nameBn: "নাভানা গ্রুপ", logo: "/assets/partners/navana.png" },
];

// Triple the array for seamless infinite loop
const infinitePartners = [...partners, ...partners, ...partners];

const Partners = () => {
  const { locale } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef<number | undefined>(undefined);
  const scrollPositionRef = useRef(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 1, 0.4]);

  // Continuous scroll animation using requestAnimationFrame
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (!isHovered && scrollContainer) {
        scrollPositionRef.current += 0.5; // Speed of scrolling
        scrollContainer.scrollLeft = scrollPositionRef.current;
        
        // Reset position when reaching the end for seamless loop
        if (scrollPositionRef.current >= scrollContainer.scrollWidth / 3) {
          scrollPositionRef.current = 0;
          scrollContainer.scrollLeft = 0;
        }
      }
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered]);

  return (
    <section ref={containerRef} className="relative py-20 overflow-hidden bg-white dark:bg-dark-3">
      {/* Simple Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 px-4"
        >
          <span className="inline-block px-4 py-1 bg-secondary/10 rounded-full text-secondary text-sm font-semibold mb-4">
            {locale === "en" ? "Trusted Partners" : "বিশ্বস্ত অংশীদার"}
          </span>
          
          <h2 className="heading-2 mb-4 text-gray-900 dark:text-white">
            {locale === "en" ? "Our Partners" : "আমাদের অংশীদার"}
          </h2>
          
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {locale === "en"
              ? "Collaborating with industry leaders to bring you the best real estate solutions"
              : "আপনার জন্য সেরা রিয়েল এস্টেট সমাধান আনতে শিল্প নেতাদের সাথে সহযোগিতা"}
          </p>
        </motion.div>

        {/* Continuous Smooth Slider - No Blipping */}
        <motion.div style={{ opacity }} className="relative">
          {/* Gradient Overlays for smooth edge fade */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-dark-3 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-dark-3 to-transparent z-10 pointer-events-none" />
          
          {/* Scroll Container */}
          <div
            ref={scrollContainerRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="overflow-x-auto scrollbar-hide cursor-pointer"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            <div className="inline-flex gap-6 px-4 py-4">
              {infinitePartners.map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className="inline-block w-[180px] group cursor-pointer"
                >
                  <div className="bg-white dark:bg-dark-2 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                    {/* Logo Container - Fixed size for all logos */}
                    <div className="h-24 w-full flex items-center justify-center p-3 bg-white dark:bg-dark-2">
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Image
                          src={partner.logo}
                          alt={locale === "en" ? partner.name : partner.nameBn}
                          width={120}
                          height={70}
                          className="object-contain transition-all duration-300 group-hover:scale-105"
                          style={{ 
                            maxWidth: '120px', 
                            maxHeight: '70px',
                            width: 'auto',
                            height: 'auto'
                          }}
                        />
                      </div>
                    </div>
                    
                    {/* Company Name */}
                    <div className="p-2 text-center border-t border-gray-100 dark:border-dark-4 bg-white dark:bg-dark-2">
                      <p className="font-medium text-gray-800 dark:text-white text-xs">
                        {locale === "en" ? partner.name : partner.nameBn}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Partners;