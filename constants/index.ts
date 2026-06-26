// Export all constants from individual files
export * from "./colors";
export * from "./fonts";

// Additional global constants

// App configuration
export const APP_CONFIG = {
  name: "Terrabuild",
  tagline: "Your Trusted Hands in Real Estate",
  description: "Premium real estate solutions in Bangladesh",
  version: "1.0.0",
  email: "terrabuildbd@gmail.com",
  phone: "+880 1329 007766",
  address: "South Banasree, Dhaka, Bangladesh",
};

// Social media links
export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/terrabuild",
  twitter: "https://twitter.com/terrabuild",
  linkedin: "https://linkedin.com/company/terrabuild",
  instagram: "https://instagram.com/terrabuild",
  youtube: "https://youtube.com/terrabuild",
};

// Navigation links
export const NAV_LINKS = [
  { name: "Home", href: "/", key: "home" },
  { name: "About", href: "/about", key: "about" },
  { name: "Services", href: "/services", key: "services" },
  { name: "Properties", href: "/properties", key: "properties" },
  { name: "Team", href: "/team", key: "team" },
  { name: "Contact", href: "/contact", key: "contact" },
];

// Price ranges for search
export const PRICE_RANGES = [
  { label: "Any Price", min: 0, max: Infinity, value: "any" },
  { label: "Up to 50 Lakh", min: 0, max: 5000000, value: "0-5000000" },
  { label: "50 Lakh - 1 Crore", min: 5000000, max: 10000000, value: "5000000-10000000" },
  { label: "1 Crore - 2 Crore", min: 10000000, max: 20000000, value: "10000000-20000000" },
  { label: "2 Crore - 5 Crore", min: 20000000, max: 50000000, value: "20000000-50000000" },
  { label: "5 Crore+", min: 50000000, max: Infinity, value: "50000000+" },
];

// Property types
export const PROPERTY_TYPES = [
  { value: "all", label: "All Properties" },
  { value: "apartment", label: "Apartment" },
  { value: "villa", label: "Villa" },
  { value: "office", label: "Office Space" },
  { value: "retail", label: "Retail Space" },
  { value: "land", label: "Land" },
];

// Property features
export const PROPERTY_FEATURES = [
  "Air Conditioning",
  "Swimming Pool",
  "Gym",
  "Parking",
  "Security System",
  "Balcony",
  "Garden",
  "Elevator",
  "Furnished",
  "Pet Friendly",
];

// Animation variants for Framer Motion
export const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

// Breakpoints for responsive design
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

// Local storage keys
export const STORAGE_KEYS = {
  theme: "terrabuild-theme",
  locale: "terrabuild-locale",
  user: "terrabuild-user",
  favorites: "terrabuild-favorites",
  recentSearches: "terrabuild-recent-searches",
};

// API endpoints (for future use)
export const API_ENDPOINTS = {
  properties: "/api/properties",
  contact: "/api/contact",
  subscribe: "/api/subscribe",
  testimonials: "/api/testimonials",
};

// Image placeholders
export const PLACEHOLDER_IMAGES = {
  property: "https://via.placeholder.com/600x400?text=Property+Image",
  avatar: "https://via.placeholder.com/100x100?text=Avatar",
  logo: "https://via.placeholder.com/200x80?text=Terrabuild",
  hero: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop",
};

// Regex patterns
export const REGEX = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^(?:\+8801|01)[3-9]\d{8}$/,
  url: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
};

// Date formats
export const DATE_FORMATS = {
  full: "MMMM DD, YYYY",
  short: "MMM DD, YYYY",
  numeric: "MM/DD/YYYY",
  time: "hh:mm A",
};

// Currency settings
export const CURRENCY = {
  code: "BDT",
  symbol: "৳",
  locale: "bn-BD",
};