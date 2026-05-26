"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "@/context/LanguageContext";

const AboutUs = () => {
  const { t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "1250+", label: "Properties Sold" },
    { value: "3850+", label: "Happy Clients" },
    { value: "45+", label: "Team Members" },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-1/95 to-primary/90" />
      </div>

      <div ref={ref} className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-white text-center md:text-left"
          >
            <span className="text-secondary uppercase tracking-wider text-sm font-semibold">
              About Us
            </span>
            <h2 className="heading-2 text-white mt-2 mb-6">
              {t("about.title")}
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              {t("about.description")}
            </p>
            {!isExpanded && (
              <button
                onClick={() => setIsExpanded(true)}
                className="text-secondary hover:text-secondary/80 font-semibold transition-colors inline-flex items-center gap-2"
              >
                {t("about.showMore")} →
              </button>
            )}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={
                isExpanded ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }
              }
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <p className="text-white/80 text-lg leading-relaxed mt-4">
                {t("about.mission")}
              </p>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-secondary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/70 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop"
                alt="About Terrabuild"
                width={600}
                height={400}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;