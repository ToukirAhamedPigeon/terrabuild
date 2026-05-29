"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";
import { toast } from "sonner";
// import emailjs from "@emailjs/browser";

export default function Footer() {
  const { locale, t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const quickLinks = [
    { href: "#home", label: "Home", labelBn: "হোম" },
    { href: "#properties", label: "Properties", labelBn: "সম্পত্তি" },
    { href: "#services", label: "Services", labelBn: "সেবাসমূহ" },
    { href: "#team", label: "Team", labelBn: "দল" },
    { href: "#contact", label: "Contact", labelBn: "যোগাযোগ" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook", color: "#1877f2" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter", color: "#1da1f2" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "#0a66c2" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram", color: "#e4405f" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube", color: "#ff0000" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // await emailjs.send(
      //   process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      //   process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID!,
      //   {
      //     from_name: formData.name,
      //     from_email: formData.email,
      //     phone: formData.phone,
      //     message: formData.message,
      //     to_email: "info@terrabuildbd.com",
      //   },
      //   process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      // );
      
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
      toast.success(locale === "en" ? "Message sent successfully!" : "বার্তা সফলভাবে পাঠানো হয়েছে!");
      
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch (error) {
      setSubmitStatus("error");
      toast.error(locale === "en" ? "Failed to send. Please try again." : "পাঠানো ব্যর্থ হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-dark-1 border-t border-white/10">
      {/* Main Footer */}
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/assets/images/logo.png"
                  alt="Terrabuild Corporation"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  <span className="text-secondary">Terrabuild</span>
                  <span className="text-white"> Corporation</span>
                </h3>
                <p className="text-xs text-gray-400">Your Trusted Hands</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              {locale === "en"
                ? "Leading real estate company in Bangladesh providing premium property solutions with transparency and integrity."
                : "বাংলাদেশের শীর্ষস্থানীয় রিয়েল এস্টেট কোম্পানি স্বচ্ছতা এবং সততার সাথে প্রিমিয়াম সম্পত্তি সমাধান প্রদান করছে।"}
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  aria-label={social.label}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = social.color;
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '';
                    e.currentTarget.style.color = '';
                  }}
                >
                  <social.icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">
              {locale === "en" ? "Quick Links" : "দ্রুত লিঙ্ক"}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-secondary transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {locale === "en" ? link.label : link.labelBn}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">
              {locale === "en" ? "Contact Info" : "যোগাযোগের তথ্য"}
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                <span>South Banasree, Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                <a href="tel:+8801234567890" className="hover:text-secondary transition-colors">
                  +880 1234 567890
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                <a href="mailto:info@terrabuildbd.com" className="hover:text-secondary transition-colors">
                  info@terrabuildbd.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Clock className="w-4 h-4 text-secondary flex-shrink-0" />
                <span>{locale === "en" ? "Sun-Thu: 9AM - 6PM" : "রবি-বৃহস্পতি: সকাল ৯টা - সন্ধ্যা ৬টা"}</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4">
              {locale === "en" ? "Send Message" : "বার্তা পাঠান"}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder={locale === "en" ? "Your Name" : "আপনার নাম"}
                required
                className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-secondary focus:outline-none text-sm transition-colors text-white placeholder:text-gray-500 font-sans"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder={locale === "en" ? "Email Address" : "ইমেল ঠিকানা"}
                required
                className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-secondary focus:outline-none text-sm transition-colors text-white placeholder:text-gray-500 font-sans"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder={locale === "en" ? "Phone Number" : "ফোন নম্বর"}
                className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-secondary focus:outline-none text-sm transition-colors text-white placeholder:text-gray-500 font-sans"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder={locale === "en" ? "Your Message" : "আপনার বার্তা"}
                rows={2}
                required
                className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-secondary focus:outline-none text-sm transition-colors text-white placeholder:text-gray-500 font-sans resize-none"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-4 py-2 bg-secondary text-dark-1 rounded-lg font-semibold hover:bg-secondary/80 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-sans"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-dark-1 border-t-transparent rounded-full animate-spin" />
                    <span>{locale === "en" ? "Sending..." : "পাঠানো হচ্ছে..."}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{locale === "en" ? "Send Message" : "বার্তা পাঠান"}</span>
                  </>
                )}
              </button>
              {submitStatus === "success" && (
                <p className="text-green-400 text-xs text-center">
                  {locale === "en" ? "Message sent successfully!" : "বার্তা সফলভাবে পাঠানো হয়েছে!"}
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-400 text-xs text-center">
                  {locale === "en" ? "Failed to send. Please try again." : "পাঠানো ব্যর্থ হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।"}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      {/* Map Section - Fixed Google Maps Embed */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <h4 className="text-sm font-semibold mb-3 font-sans">
            {locale === "en" ? "Our Location" : "আমাদের অবস্থান"}
          </h4>
          <div className="rounded-xl overflow-hidden h-64 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902221432274!2d90.424247!3d23.747736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8c2e5f5e5e5%3A0x5e5e5e5e5e5e5e5e!2sSouth%20Banasree%2C%20Dhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Terrabuild Corporation Location Map"
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-gray-500 text-sm font-sans">
              © {currentYear} Terrabuild Corporation. {locale === "en" ? "All rights reserved." : "সমস্ত অধিকার সংরক্ষিত।"}
            </p>
            <div className="flex gap-6 text-sm font-sans">
              <Link href="/privacy" className="text-gray-500 hover:text-secondary transition-colors">
                {locale === "en" ? "Privacy Policy" : "গোপনীয়তা নীতি"}
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-secondary transition-colors">
                {locale === "en" ? "Terms of Service" : "সেবার শর্তাবলী"}
              </Link>
              <Link href="/sitemap" className="text-gray-500 hover:text-secondary transition-colors">
                {locale === "en" ? "Sitemap" : "সাইটম্যাপ"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}