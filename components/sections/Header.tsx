"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Menu, X, ChevronDown, Globe, Phone, Mail } from "lucide-react";
import ThemeToggle from "../design/ThemeToggle";
import { useLanguage } from "@/context/LanguageContext";

const Header = () => {
  const { t, locale, setLocale } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { theme } = useTheme();
  const { scrollY } = useScroll();
  const menuRef = useRef<HTMLDivElement>(null);
  
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255,255,255,0.2)", "rgba(255,255,255,0.8)"]
  );
  
  const darkHeaderBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(10,10,10,0.2)", "rgba(10,10,10,0.8)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "unset";
  };

  const navLinks = [
    { name: t("common.home"), sectionId: "hero" },
    { name: t("common.properties"), sectionId: "properties" },
    { name: t("common.services"), sectionId: "services" },
    { name: t("common.about"), sectionId: "about" },
    { name: t("common.team"), sectionId: "team" },
  ];

  const switchLanguage = (newLocale: string) => {
    setLocale(newLocale as "en" | "bn");
    setIsLangOpen(false);
  };

  const currentLocale = locale;

  return (
    <>
      <motion.header
        style={{ backgroundColor: theme === "dark" ? darkHeaderBg : headerBg }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "shadow-lg backdrop-blur-md" : ""
        }`}
      >
        <div className="container-custom">
          {/* Top Bar */}
          <div className="hidden lg:flex justify-between items-center py-2 border-b border-gray-200/10 dark:border-gray-800/10 text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 hover:text-secondary transition-colors cursor-pointer">
                <Phone size={14} className="text-secondary" />
                <span className={theme === "dark" || !isScrolled ? "text-white" : "text-gray-900"}>
                  +880 1329 007766
                </span>
              </div>
              <div className="flex items-center gap-2 hover:text-secondary transition-colors cursor-pointer">
                <Mail size={14} className="text-secondary" />
                <span className={theme === "dark" || !isScrolled ? "text-white" : "text-gray-900"}>
                  terrabuildbd@gmail.com
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className={`flex items-center gap-1 hover:text-secondary transition-colors cursor-pointer ${
                    theme === "dark" || !isScrolled ? "text-white" : "text-gray-900"
                  }`}
                >
                  <Globe size={14} />
                  <span>{currentLocale === "bn" ? "বাংলা" : "English"}</span>
                  <ChevronDown size={12} className={`transition-transform ${isLangOpen ? "rotate-180" : ""}`} />
                </button>
                {isLangOpen && (
                  <div className="absolute right-0 mt-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-1 w-32 z-50">
                    <button
                      onClick={() => switchLanguage("en")}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-900 dark:text-white cursor-pointer"
                    >
                      English
                    </button>
                    <button
                      onClick={() => switchLanguage("bn")}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-900 dark:text-white cursor-pointer"
                    >
                      বাংলা
                    </button>
                  </div>
                )}
              </div>
              <ThemeToggle />
            </div>
          </div>

          {/* Main Navigation */}
          <div className="flex items-center justify-between py-4">
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <Image
                src="/assets/images/logo.png"
                alt="Terrabuild"
                width={40}
                height={40}
                className="w-10 h-10 group-hover:scale-110 transition-transform rounded-full"
              />
              <span className={`font-primary text-xl font-bold ${
                theme === "dark" || !isScrolled ? "text-white" : "text-gray-900"
              }`}>
                Terrabuild Corporation
              </span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.sectionId)}
                  className={`${
                    theme === "dark" || !isScrolled ? "text-white" : "text-gray-900"
                  } hover:text-secondary transition-colors font-medium relative group cursor-pointer`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </nav>

            {/* Desktop Contact Button */}
            <button 
              onClick={() => scrollToSection("contact")}
              className="hidden lg:block bg-gradient-to-r from-[#c6a43f] to-[#b8962d] text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              {t("common.contact")}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 z-50 relative cursor-pointer ${
                theme === "dark" || !isScrolled ? "text-white" : "text-gray-900"
              }`}
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden cursor-pointer"
          />
          
          {/* Menu Panel - 80% transparent background */}
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 lg:hidden shadow-2xl overflow-y-auto"
          >
            {/* Close Button inside menu */}
            <div className="flex justify-end pt-4 pr-4">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-gray-200/50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <X size={24} className="text-gray-900 dark:text-white" />
              </button>
            </div>

            <div className="px-6 pb-8">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.sectionId)}
                    className="text-gray-900 dark:text-white hover:text-secondary transition-colors font-medium py-4 text-left border-b border-gray-200/50 dark:border-gray-800/50 text-lg cursor-pointer"
                  >
                    {link.name}
                  </button>
                ))}
                
                {/* Contact button in mobile menu */}
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-gradient-to-r from-[#c6a43f] to-[#b8962d] text-white px-6 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 mt-6 w-full text-lg cursor-pointer"
                >
                  {t("common.contact")}
                </button>
                
                <div className="flex flex-col gap-4 pt-6 mt-4 border-t border-gray-200/50 dark:border-gray-800/50">
                  <div className="flex items-center gap-3 cursor-pointer hover:text-secondary transition-colors">
                    <Phone size={18} className="text-secondary flex-shrink-0" />
                    <span className="text-gray-900 dark:text-white">+880 1329 007766</span>
                  </div>
                  <div className="flex items-center gap-3 cursor-pointer hover:text-secondary transition-colors">
                    <Mail size={18} className="text-secondary flex-shrink-0" />
                    <span className="text-gray-900 dark:text-white">terrabuildbd@gmail.com</span>
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex gap-4">
                      <button
                        onClick={() => switchLanguage("en")}
                        className={`text-base cursor-pointer ${
                          currentLocale === "en" 
                            ? "text-secondary" 
                            : "text-gray-900 dark:text-white hover:text-secondary"
                        }`}
                      >
                        English
                      </button>
                      <button
                        onClick={() => switchLanguage("bn")}
                        className={`text-base cursor-pointer ${
                          currentLocale === "bn" 
                            ? "text-secondary" 
                            : "text-gray-900 dark:text-white hover:text-secondary"
                        }`}
                      >
                        বাংলা
                      </button>
                    </div>
                    <ThemeToggle />
                  </div>
                </div>
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
};

export default Header;