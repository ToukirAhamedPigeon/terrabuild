"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

// Custom SVG Icons
const FacebookIcon = ({ size = 16, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    stroke="none"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const TwitterIcon = ({ size = 16, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    stroke="none"
    className={className}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const LinkedinIcon = ({ size = 16, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    stroke="none"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const InstagramIcon = ({ size = 16, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    stroke="none"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const MailIcon = ({ size = 16, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    stroke="none"
    className={className}
  >
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-10 7L2 7"/>
  </svg>
);

const teamMembers = [
  {
    name: "Md. Rahman",
    nameBn: "মোঃ রহমান",
    role: "CEO & Founder",
    roleBn: "প্রধান নির্বাহী কর্মকর্তা ও প্রতিষ্ঠাতা",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop",
    bio: "20+ years of experience in real estate industry.",
    bioBn: "রিয়েল এস্টেট শিল্পে ২০+ বছরের অভিজ্ঞতা।",
    social: { facebook: "#", twitter: "#", linkedin: "#", instagram: "#", email: "ceo@terrabuild.com" },
  },
  {
    name: "Sadia Khan",
    nameBn: "সাদিয়া খান",
    role: "Head of Sales",
    roleBn: "বিক্রয় প্রধান",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
    bio: "Expert in luxury property sales.",
    bioBn: "বিলাসবহুল সম্পত্তি বিক্রয় বিশেষজ্ঞ।",
    social: { facebook: "#", twitter: "#", linkedin: "#", instagram: "#", email: "sadia@terrabuild.com" },
  },
  {
    name: "Kamal Hossain",
    nameBn: "কামাল হোসেন",
    role: "Senior Agent",
    roleBn: "সিনিয়র এজেন্ট",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
    bio: "Specialized in commercial properties.",
    bioBn: "বাণিজ্যিক সম্পত্তি বিশেষজ্ঞ।",
    social: { facebook: "#", twitter: "#", linkedin: "#", instagram: "#", email: "kamal@terrabuild.com" },
  },
  {
    name: "Farah Ahmed",
    nameBn: "ফারাহ আহমেদ",
    role: "Legal Advisor",
    roleBn: "আইনী উপদেষ্টা",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop",
    bio: "Real estate law expert.",
    bioBn: "রিয়েল এস্টেট আইন বিশেষজ্ঞ।",
    social: { facebook: "#", twitter: "#", linkedin: "#", instagram: "#", email: "farah@terrabuild.com" },
  },
  {
    name: "Rafiqul Islam",
    nameBn: "রফিকুল ইসলাম",
    role: "Property Consultant",
    roleBn: "সম্পত্তি পরামর্শক",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    bio: "Expert in property valuation.",
    bioBn: "সম্পত্তি মূল্যায়ন বিশেষজ্ঞ।",
    social: { facebook: "#", twitter: "#", linkedin: "#", instagram: "#", email: "rafiq@terrabuild.com" },
  },
  {
    name: "Tahmina Begum",
    nameBn: "তাহমিনা বেগম",
    role: "Marketing Manager",
    roleBn: "মার্কেটিং ম্যানেজার",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop",
    bio: "Creative marketing strategist.",
    bioBn: "সৃজনশীল বিপণন কৌশলবিদ।",
    social: { facebook: "#", twitter: "#", linkedin: "#", instagram: "#", email: "tahmina@terrabuild.com" },
  },
];

const TeamSection = () => {
  const { locale } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Multiple parallax speeds for cinematic depth
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const midY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const frontY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const fastY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 1.05]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5]);

  // Vibrant color arrays
  const vibrantColors = [
    "from-pink-500 via-red-500 to-yellow-500",
    "from-green-400 via-emerald-500 to-teal-500",
    "from-blue-500 via-cyan-500 to-indigo-500",
    "from-purple-500 via-pink-500 to-rose-500",
    "from-orange-500 via-amber-500 to-yellow-500",
    "from-indigo-500 via-purple-500 to-fuchsia-500",
  ];

  return (
    <section ref={containerRef} className="relative py-24 overflow-hidden">
      {/* Ultra-Premium Colorful Parallax Background */}
      <div className="absolute inset-0 z-0">
        
        {/* Layer 1: Deep rich gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/50 to-indigo-900/70" />
        
        {/* Layer 2: Vibrant animated gradient orbs with parallax */}
        <motion.div style={{ y: bgY }} className="absolute inset-0">
          {/* Large vibrant color orbs */}
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-pink-500/40 via-rose-500/30 to-red-500/20 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-l from-cyan-500/40 via-blue-500/30 to-indigo-500/20 rounded-full blur-[150px] animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-emerald-500/30 via-teal-500/20 to-green-500/20 rounded-full blur-[200px] animate-pulse delay-2000" />
          
          {/* Additional colorful orbs */}
          <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-gradient-to-r from-purple-500/30 to-fuchsia-500/20 rounded-full blur-[120px] animate-pulse delay-500" />
          <div className="absolute bottom-1/3 left-1/3 w-[350px] h-[350px] bg-gradient-to-r from-amber-500/30 to-orange-500/20 rounded-full blur-[120px] animate-pulse delay-1500" />
        </motion.div>
        
        {/* Layer 3: Floating colorful geometric shapes with parallax */}
        <motion.div style={{ y: midY }} className="absolute inset-0">
          {/* Floating colorful diamonds */}
          {vibrantColors.map((color, i) => (
            <motion.div
              key={`diamond-${i}`}
              className="absolute"
              style={{
                left: `${10 + i * 15}%`,
                top: `${15 + (i * 12)}%`,
                animation: `float ${3 + i}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`,
              }}
            >
              <div className={`w-10 h-10 bg-gradient-to-r ${color} opacity-60 rotate-45 transform hover:rotate-90 transition-all duration-700 hover:scale-150 hover:opacity-100`} />
            </motion.div>
          ))}
          
          {/* Floating colorful circles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`circle-${i}`}
              className="absolute rounded-full bg-gradient-to-r opacity-40"
              style={{
                width: `${30 + Math.random() * 100}px`,
                height: `${30 + Math.random() * 100}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `linear-gradient(135deg, 
                  rgba(${100 + Math.random() * 155}, ${100 + Math.random() * 155}, ${100 + Math.random() * 155}, 0.3),
                  rgba(${100 + Math.random() * 155}, ${100 + Math.random() * 155}, ${100 + Math.random() * 155}, 0.1))`,
                animation: `floatReverse ${4 + Math.random() * 6}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </motion.div>
        
        {/* Layer 4: Rainbow light rays */}
        <motion.div style={{ y: frontY }} className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-3 h-full bg-gradient-to-b from-pink-500/30 via-rose-500/20 to-transparent rotate-12 animate-lightRay" />
          <div className="absolute top-0 right-1/4 w-3 h-full bg-gradient-to-b from-cyan-500/30 via-blue-500/20 to-transparent -rotate-12 animate-lightRay delay-1000" />
          <div className="absolute top-0 left-1/2 w-2 h-full bg-gradient-to-b from-purple-500/30 via-fuchsia-500/20 to-transparent rotate-6 animate-lightRay delay-2000" />
          <div className="absolute top-0 right-1/3 w-2 h-full bg-gradient-to-b from-emerald-500/30 via-teal-500/20 to-transparent -rotate-8 animate-lightRay delay-3000" />
          <div className="absolute top-0 left-1/5 w-1 h-full bg-gradient-to-b from-amber-500/30 via-orange-500/20 to-transparent rotate-4 animate-lightRay delay-1500" />
        </motion.div>
        
        {/* Layer 5: Colorful particle system with parallax */}
        <motion.div style={{ y: fastY }} className="absolute inset-0">
          {[...Array(80)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute rounded-full"
              style={{
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, 
                  ${i % 5 === 0 ? '#EC4899' : i % 5 === 1 ? '#06B6D4' : i % 5 === 2 ? '#F59E0B' : i % 5 === 3 ? '#10B981' : '#8B5CF6'})`,
                animation: `twinkle ${1.5 + Math.random() * 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </motion.div>
        
        {/* Layer 6: Colorful wave pattern */}
        <motion.div style={{ y: midY }} className="absolute inset-0 opacity-30">
          <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#EC4899" />
                <stop offset="25%" stopColor="#F59E0B" />
                <stop offset="50%" stopColor="#10B981" />
                <stop offset="75%" stopColor="#06B6D4" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
            <path 
              fill="url(#waveGradient)" 
              fillOpacity="0.3" 
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </motion.div>
        
        {/* Layer 7: Colorful gradient mesh overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-purple-900/30 to-transparent" />
        
        {/* Layer 8: Subtle colorful noise texture */}
        <div 
          className="absolute inset-0 opacity-10 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px',
          }}
        />
        
        {/* Layer 9: Vibrant vignette */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/70" />
      </div>

      <div className="relative z-10 container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-block px-4 py-1 bg-gradient-to-r from-secondary/30 to-primary/30 backdrop-blur-sm rounded-full text-secondary text-sm font-semibold mb-4"
          >
            {locale === "en" ? "Our Experts" : "আমাদের বিশেষজ্ঞরা"}
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="heading-2 mb-4 bg-gradient-to-r from-white via-secondary to-primary bg-clip-text text-transparent"
          >
            {locale === "en" ? "Meet Our Team" : "আমাদের দলের সাথে দেখা করুন"}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            {locale === "en"
              ? "Dedicated professionals committed to your success"
              : "আপনার সাফল্যের জন্য নিবেদিত পেশাদাররা"}
          </motion.p>
        </motion.div>

        <motion.div 
          style={{ scale, opacity }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-white/10 hover:border-secondary/50 transition-all duration-500"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={member.image}
                  alt={locale === "en" ? member.name : member.nameBn}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={100}
                  priority={index < 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Social Icons Overlay on Hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-playfair font-bold text-white mb-1 text-center">
                    {locale === "en" ? member.name : member.nameBn}
                  </h3>
                  <p className="text-secondary mb-3 text-center">
                    {locale === "en" ? member.role : member.roleBn}
                  </p>
                  <div className="flex gap-3 justify-center">
                    {/* Facebook - Blue */}
                    <a href={member.social.facebook} className="w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110">
                      <FacebookIcon size={16} className="text-white" />
                    </a>
                    {/* Twitter - Light Blue */}
                    <a href={member.social.twitter} className="w-8 h-8 rounded-full bg-[#1DA1F2] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110">
                      <TwitterIcon size={16} className="text-white" />
                    </a>
                    {/* LinkedIn - Blue */}
                    <a href={member.social.linkedin} className="w-8 h-8 rounded-full bg-[#0A66C2] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110">
                      <LinkedinIcon size={16} className="text-white" />
                    </a>
                    {/* Instagram - Gradient */}
                    <a href={member.social.instagram} className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110">
                      <InstagramIcon size={16} className="text-white" />
                    </a>
                    {/* Email - Emerald */}
                    <a href={`mailto:${member.social.email}`} className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110">
                      <MailIcon size={16} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6 text-center bg-gradient-to-t from-black/40 to-transparent">
                <h3 className="text-xl font-playfair font-bold text-white mb-1">
                  {locale === "en" ? member.name : member.nameBn}
                </h3>
                <p className="text-secondary mb-2">
                  {locale === "en" ? member.role : member.roleBn}
                </p>
                <p className="text-gray-300 text-sm">
                  {locale === "en" ? member.bio : member.bioBn}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Floating colorful decorative elements */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute top-10 left-5 w-48 h-48 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div 
        style={{ y: midY }}
        className="absolute bottom-10 right-5 w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div 
        style={{ y: frontY }}
        className="absolute top-1/2 left-1/4 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div 
        style={{ y: fastY }}
        className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl pointer-events-none"
      />
    </section>
  );
};

export default TeamSection;