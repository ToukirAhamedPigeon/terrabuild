"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, DollarSign, Home, Building2, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const cities = [
  { name: "Dhaka", nameBn: "ঢাকা", thanas: ["Banani", "Gulshan", "Uttara", "Dhanmondi", "Baridhara", "Mohakhali", "Mirpur"] },
  { name: "Chittagong", nameBn: "চট্টগ্রাম", thanas: ["Khulshi", "Nasirabad", "Halishahar", "Agrabad"] },
  { name: "Gazipur", nameBn: "গাজীপুর", thanas: ["Tongi", "Joydebpur", "Kaliakoir"] },
  { name: "Narayanganj", nameBn: "নারায়ণগঞ্জ", thanas: ["Fatullah", "Siddhirganj", "Bandar"] },
];

const priceOptions = [
  { value: "", label: "Any Price", labelBn: "যেকোনো মূল্য" },
  { value: "0-5000000", label: "Up to 50 Lakh", labelBn: "৫০ লাখ পর্যন্ত" },
  { value: "5000000-10000000", label: "50 Lakh - 1 Crore", labelBn: "৫০ লাখ - ১ কোটি" },
  { value: "10000000-20000000", label: "1 Crore - 2 Crore", labelBn: "১ কোটি - ২ কোটি" },
  { value: "20000000-50000000", label: "2 Crore - 5 Crore", labelBn: "২ কোটি - ৫ কোটি" },
  { value: "50000000+", label: "5 Crore+", labelBn: "৫ কোটি+" },
];

const SearchBar = () => {
  const { t, locale } = useLanguage();
  const [activeTab, setActiveTab] = useState<"buy" | "rent" | "sell">("buy");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedThana, setSelectedThana] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [showThanaDropdown, setShowThanaDropdown] = useState(false);
  const [showPriceDropdown, setShowPriceDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const [cityDropdownPosition, setCityDropdownPosition] = useState<"bottom" | "top">("bottom");
  const [thanaDropdownPosition, setThanaDropdownPosition] = useState<"bottom" | "top">("bottom");
  const [priceDropdownPosition, setPriceDropdownPosition] = useState<"bottom" | "top">("bottom");

  const cityButtonRef = useRef<HTMLButtonElement | null>(null);
  const thanaButtonRef = useRef<HTMLButtonElement | null>(null);
  const priceButtonRef = useRef<HTMLButtonElement | null>(null);

  const selectedCityData = cities.find((c) => c.name === selectedCity);
  const thanas = selectedCityData?.thanas || [];

  const getCityDisplayName = (cityName: string) => {
    const city = cities.find((c) => c.name === cityName);
    if (!city) return t("search.city");
    return locale === "en" ? city.name : city.nameBn;
  };

  const getPriceDisplayLabel = () => {
    const option = priceOptions.find((opt) => opt.value === priceRange);
    if (!option) return t("search.anyPrice");
    return locale === "en" ? option.label : option.labelBn;
  };

  const checkDropdownPosition = (
    buttonRef: React.RefObject<HTMLButtonElement | null>,
    setPosition: (pos: "bottom" | "top") => void
  ) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;
      // If less than 250px below, show above
      setPosition(spaceBelow < 250 && spaceAbove > spaceBelow ? "top" : "bottom");
    }
  };

   useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (showCityDropdown && cityButtonRef.current) {
      checkDropdownPosition(cityButtonRef, setCityDropdownPosition);
      
      const handleScrollResize = () => {
        if (cityButtonRef.current) {
          checkDropdownPosition(cityButtonRef, setCityDropdownPosition);
        }
      };
      
      window.addEventListener("scroll", handleScrollResize);
      window.addEventListener("resize", handleScrollResize);
      return () => {
        window.removeEventListener("scroll", handleScrollResize);
        window.removeEventListener("resize", handleScrollResize);
      };
    }
  }, [showCityDropdown]);

  useEffect(() => {
    if (showThanaDropdown && thanaButtonRef.current) {
      checkDropdownPosition(thanaButtonRef, setThanaDropdownPosition);
      
      const handleScrollResize = () => {
        if (thanaButtonRef.current) {
          checkDropdownPosition(thanaButtonRef, setThanaDropdownPosition);
        }
      };
      
      window.addEventListener("scroll", handleScrollResize);
      window.addEventListener("resize", handleScrollResize);
      return () => {
        window.removeEventListener("scroll", handleScrollResize);
        window.removeEventListener("resize", handleScrollResize);
      };
    }
  }, [showThanaDropdown]);

  useEffect(() => {
    if (showPriceDropdown && priceButtonRef.current) {
      checkDropdownPosition(priceButtonRef, setPriceDropdownPosition);
      
      const handleScrollResize = () => {
        if (priceButtonRef.current) {
          checkDropdownPosition(priceButtonRef, setPriceDropdownPosition);
        }
      };
      
      window.addEventListener("scroll", handleScrollResize);
      window.addEventListener("resize", handleScrollResize);
      return () => {
        window.removeEventListener("scroll", handleScrollResize);
        window.removeEventListener("resize", handleScrollResize);
      };
    }
  }, [showPriceDropdown]);

  const handlePriceSelect = (value: string) => {
    setPriceRange(value);
    setShowPriceDropdown(false);
  };

  const handleSearch = () => {
    console.log("Search:", { activeTab, selectedCity, selectedThana, priceRange });
  };

  return (
    <section className="relative z-30 -mt-47 mb-0 px-4">
      <div className="container-custom max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`backdrop-blur-md rounded-2xl shadow-2xl overflow-visible border 
            ${isMobile 
              ? 'bg-black/90 border-white/20' 
              : 'bg-white/30 dark:bg-black/30 border-white/20 dark:border-white/10'
            }`}
        >
          {/* Tab Buttons */}
          <div className="flex border-b border-white/20 dark:border-white/10 bg-white/15 dark:bg-black/15">
            {[
              { key: "buy", icon: Home, label: t("search.buy") },
              { key: "rent", icon: Building2, label: t("search.rent") },
              { key: "sell", icon: DollarSign, label: t("search.sell") },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`flex-1 flex items-center justify-center gap-2 py-4 font-semibold transition-all duration-300 ${
                  activeTab === tab.key
                    ? "text-secondary border-b-2 border-secondary bg-gradient-to-r from-secondary/10 to-transparent"
                    : "text-gray-600 dark:text-gray-400 hover:text-secondary hover:bg-white/10 dark:hover:bg-white/5"
                }`}
              >
                <tab.icon size={18} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Form */}
          <div className="p-6 relative">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Location Field */}
              <div className="relative md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <MapPin size={16} className="inline mr-1 text-secondary" />
                  {t("search.location")}
                </label>
                <div className="flex gap-2">
                  {/* City Dropdown */}
                  <div className="relative flex-1">
                    <button
                      ref={cityButtonRef}
                      onClick={() => {
                        setShowCityDropdown(!showCityDropdown);
                        setShowThanaDropdown(false);
                        setShowPriceDropdown(false);
                      }}
                      className="w-full px-4 py-3 text-left border border-white/30 dark:border-white/20 rounded-xl bg-white/20 dark:bg-black/20 backdrop-blur-sm hover:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all flex justify-between items-center text-gray-800 dark:text-white"
                    >
                      <span className={!selectedCity ? "text-gray-500 dark:text-gray-400" : "text-gray-800 dark:text-white"}>
                        {selectedCity ? getCityDisplayName(selectedCity) : t("search.city")}
                      </span>
                      <ChevronDown size={16} className={`transition-transform text-gray-500 dark:text-gray-400 ${showCityDropdown ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {showCityDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className={`absolute ${
                            cityDropdownPosition === "top" 
                              ? "bottom-full mb-2" 
                              : "top-full mt-2"
                          } left-0 right-0 backdrop-blur-lg bg-white/95 dark:bg-gray-900/95 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl z-50 max-h-64 overflow-y-auto`}
                        >
                          {cities.map((city) => (
                            <button
                              key={city.name}
                              onClick={() => {
                                setSelectedCity(city.name);
                                setSelectedThana("");
                                setShowCityDropdown(false);
                              }}
                              className="block w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-800 dark:text-white"
                            >
                              {locale === "en" ? city.name : city.nameBn}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Thana Dropdown */}
                  <div className="relative flex-1">
                    <button
                      ref={thanaButtonRef}
                      onClick={() => {
                        setShowThanaDropdown(!showThanaDropdown);
                        setShowCityDropdown(false);
                        setShowPriceDropdown(false);
                      }}
                      disabled={!selectedCity}
                      className={`w-full px-4 py-3 text-left border border-white/30 dark:border-white/20 rounded-xl bg-white/20 dark:bg-black/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all flex justify-between items-center text-gray-800 dark:text-white ${
                        !selectedCity ? "opacity-50 cursor-not-allowed" : "hover:border-secondary"
                      }`}
                    >
                      <span className={!selectedThana ? "text-gray-500 dark:text-gray-400" : "text-gray-800 dark:text-white"}>
                        {selectedThana || t("search.thana")}
                      </span>
                      <ChevronDown size={16} className={`transition-transform text-gray-500 dark:text-gray-400 ${showThanaDropdown ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {showThanaDropdown && selectedCity && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className={`absolute ${
                            thanaDropdownPosition === "top" 
                              ? "bottom-full mb-2" 
                              : "top-full mt-2"
                          } left-0 right-0 backdrop-blur-lg bg-white/95 dark:bg-gray-900/95 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl z-50 max-h-64 overflow-y-auto`}
                        >
                          {thanas.map((thana) => (
                            <button
                              key={thana}
                              onClick={() => {
                                setSelectedThana(thana);
                                setShowThanaDropdown(false);
                              }}
                              className="block w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-800 dark:text-white"
                            >
                              {thana}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Price Range Field - Custom Dropdown */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <DollarSign size={16} className="inline mr-1 text-secondary" />
                  {t("search.priceRange")}
                </label>
                <div className="relative">
                  <button
                    ref={priceButtonRef}
                    onClick={() => {
                      setShowPriceDropdown(!showPriceDropdown);
                      setShowCityDropdown(false);
                      setShowThanaDropdown(false);
                    }}
                    className="w-full px-4 py-3 text-left border border-white/30 dark:border-white/20 rounded-xl bg-white/20 dark:bg-black/20 backdrop-blur-sm hover:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all flex justify-between items-center text-gray-800 dark:text-white"
                  >
                    <span className={!priceRange ? "text-gray-500 dark:text-gray-400" : "text-gray-800 dark:text-white"}>
                      {getPriceDisplayLabel()}
                    </span>
                    <ChevronDown size={16} className={`transition-transform text-gray-500 dark:text-gray-400 ${showPriceDropdown ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {showPriceDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className={`absolute ${
                          priceDropdownPosition === "top" 
                            ? "bottom-full mb-2" 
                            : "top-full mt-2"
                        } left-0 right-0 backdrop-blur-lg bg-white/95 dark:bg-gray-900/95 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl z-50 max-h-64 overflow-y-auto`}
                      >
                        {priceOptions.map((option) => (
                          <button
                            key={option.value}
                            onClick={() => handlePriceSelect(option.value)}
                            className={`block w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-800 dark:text-white ${
                              priceRange === option.value ? "bg-secondary/10 text-secondary" : ""
                            }`}
                          >
                            {locale === "en" ? option.label : option.labelBn}
                            {priceRange === option.value && (
                              <span className="float-right text-secondary">✓</span>
                            )}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <button
                  onClick={handleSearch}
                  className="w-full bg-secondary text-dark-1 font-semibold py-3 px-6 rounded-xl hover:bg-secondary/90 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 shadow-md hover:shadow-xl"
                >
                  <Search size={18} />
                  {t("search.search")}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SearchBar;