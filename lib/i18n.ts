// Simple custom i18n system without next-intl

export type Locale = "en" | "bn";

export const defaultLocale: Locale = "en";

export const translations = {
  en: {
    common: {
      home: "Home",
      about: "About",
      services: "Services",
      properties: "Properties",
      team: "Team",
      contact: "Contact",
      learnMore: "Learn More",
      viewAll: "View All",
      send: "Send",
      subscribe: "Subscribe",
      email: "Email",
      name: "Name",
      message: "Message",
      phone: "Phone",
      address: "Address"
    },
    nav: {
      buy: "Buy",
      rent: "Rent",
      sell: "Sell",
      luxury: "Luxury",
      commercial: "Commercial"
    },
    hero: {
      title: "Find Your Dream Property",
      subtitle: "Discover luxury homes, premium apartments, and commercial spaces",
      searchPlaceholder: "City, Neighborhood, Address...",
      ctaButton: "Explore Properties"
    },
    search: {
      buy: "Buy",
      rent: "Rent",
      sell: "Sell",
      location: "Location",
      priceRange: "Price Range",
      anyPrice: "Any Price",
      search: "Search",
      city: "City",
      thana: "Thana"
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive real estate solutions",
      buy: "Buy Property",
      rent: "Rent Property",
      sell: "Sell Property",
      legal: "Legal Support",
      logistic: "Logistic Support",
      consultation: "Free Consultation"
    },
    about: {
      title: "About Terrabuild",
      description: "Terrabuild is a leading real estate company dedicated to providing exceptional property solutions. With years of experience, we help clients find their perfect homes and investment properties.",
      mission: "Our mission is to transform the real estate experience through innovation, transparency, and excellence.",
      showMore: "Show More"
    },
    team: {
      title: "Meet Our Team",
      subtitle: "Dedicated professionals ready to help you"
    },
    testimonials: {
      title: "What Our Clients Say",
      subtitle: "Trusted by thousands of happy clients"
    },
    partners: {
      title: "Our Partners",
      subtitle: "Trusted by leading companies"
    },
    footer: {
      description: "Your trusted partner in real estate. We help you find the perfect property that matches your lifestyle and investment goals.",
      quickLinks: "Quick Links",
      contactUs: "Contact Us",
      followUs: "Follow Us",
      newsletter: "Newsletter",
      rights: "All rights reserved."
    },
    subscription: {
      title: "Subscribe to Our Newsletter",
      subtitle: "Get the latest property listings and real estate news",
      placeholder: "Enter your email",
      button: "Subscribe"
    },
    properties: {
      featured: "Featured Properties",
      subtitle: "Hand-picked luxury properties",
      beds: "beds",
      baths: "baths",
      sqft: "sqft",
      viewDetails: "View Details"
    }
  },
  bn: {
    common: {
      home: "হোম",
      about: "আমাদের সম্পর্কে",
      services: "সেবাসমূহ",
      properties: "প্রপার্টিসমূহ",
      team: "আমাদের টিম",
      contact: "যোগাযোগ",
      learnMore: "আরও জানুন",
      viewAll: "সব দেখুন",
      send: "পাঠান",
      subscribe: "সাবস্ক্রাইব",
      email: "ইমেইল",
      name: "নাম",
      message: "বার্তা",
      phone: "ফোন",
      address: "ঠিকানা"
    },
    nav: {
      buy: "কিনুন",
      rent: "ভাড়া নিন",
      sell: "বিক্রি করুন",
      luxury: "লাক্সারি",
      commercial: "বাণিজ্যিক"
    },
    hero: {
      title: "আপনার স্বপ্নের সম্পত্তি খুঁজুন",
      subtitle: "লাক্সারি হোম, প্রিমিয়াম অ্যাপার্টমেন্ট এবং বাণিজ্যিক স্থান আবিষ্কার করুন",
      searchPlaceholder: "শহর, এলাকা, ঠিকানা...",
      ctaButton: "সম্পত্তি অন্বেষণ করুন"
    },
    search: {
      buy: "কিনুন",
      rent: "ভাড়া নিন",
      sell: "বিক্রি করুন",
      location: "অবস্থান",
      priceRange: "মূল্য সীমা",
      anyPrice: "যেকোনো মূল্য",
      search: "খুঁজুন",
      city: "শহর",
      thana: "থানা"
    },
    services: {
      title: "আমাদের সেবাসমূহ",
      subtitle: "ব্যাপক রিয়েল এস্টেট সমাধান",
      buy: "সম্পত্তি কিনুন",
      rent: "সম্পত্তি ভাড়া নিন",
      sell: "সম্পত্তি বিক্রি করুন",
      legal: "আইনি সহায়তা",
      logistic: "লজিস্টিক সহায়তা",
      consultation: "বিনামূল্যে পরামর্শ"
    },
    about: {
      title: "টেরাবিল্ড সম্পর্কে",
      description: "টেরাবিল্ড একটি শীর্ষস্থানীয় রিয়েল এস্টেট কোম্পানি যা অসাধারণ সম্পত্তি সমাধান প্রদানে নিবেদিত। বছরের অভিজ্ঞতা নিয়ে, আমরা ক্লায়েন্টদের তাদের নিখুঁত বাড়ি এবং বিনিয়োগ সম্পত্তি খুঁজে পেতে সহায়তা করি।",
      mission: "আমাদের মিশন হলো উদ্ভাবন, স্বচ্ছতা এবং উৎকর্ষতার মাধ্যমে রিয়েল এস্টেট অভিজ্ঞতা রূপান্তরিত করা।",
      showMore: "আরও দেখুন"
    },
    team: {
      title: "আমাদের টিমের সাথে দেখা করুন",
      subtitle: "আপনাকে সাহায্য করতে প্রস্তুত নিবেদিত পেশাদাররা"
    },
    testimonials: {
      title: "আমাদের ক্লায়েন্টরা যা বলেন",
      subtitle: "হাজারো খুশি ক্লায়েন্টের আস্থাভাজন"
    },
    partners: {
      title: "আমাদের অংশীদার",
      subtitle: "নেতৃস্থানীয় কোম্পানিগুলির দ্বারা বিশ্বস্ত"
    },
    footer: {
      description: "রিয়েল এস্টেটে আপনার বিশ্বস্ত অংশীদার। আমরা আপনাকে আপনার জীবনধারা এবং বিনিয়োগ লক্ষ্যের সাথে মেলে এমন নিখুঁত সম্পত্তি খুঁজে পেতে সহায়তা করি।",
      quickLinks: "দ্রুত লিঙ্ক",
      contactUs: "আমাদের সাথে যোগাযোগ করুন",
      followUs: "আমাদের অনুসরণ করুন",
      newsletter: "নিউজলেটার",
      rights: "সব অধিকার সংরক্ষিত।"
    },
    subscription: {
      title: "আমাদের নিউজলেটারে সাবস্ক্রাইব করুন",
      subtitle: "সর্বশেষ সম্পত্তি তালিকা এবং রিয়েল এস্টেট খবর পান",
      placeholder: "আপনার ইমেইল লিখুন",
      button: "সাবস্ক্রাইব"
    },
    properties: {
      featured: "বৈশিষ্ট্যযুক্ত সম্পত্তি",
      subtitle: "হাতে বাছাই করা লাক্সারি সম্পত্তি",
      beds: "বেডরুম",
      baths: "বাথরুম",
      sqft: "বর্গ ফুট",
      viewDetails: "বিস্তারিত দেখুন"
    }
  }
};

// Get translation
export function t(key: string, locale: Locale = "en"): string {
  const keys = key.split(".");
  let result: any = translations[locale];
  
  for (const k of keys) {
    if (result === undefined) return key;
    result = result[k];
  }
  
  return result || key;
}

// Hook for using translations in components
export function useTranslations(locale?: Locale) {
  const currentLocale = locale || (typeof window !== "undefined" ? 
    (localStorage.getItem("locale") as Locale) || "en" : "en");
  
  return (key: string) => t(key, currentLocale);
}