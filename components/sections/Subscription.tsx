"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import emailjs from "emailjs-com";
import { useLanguage } from "@/context/LanguageContext";

const Subscription = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        { email, subject: "Newsletter Subscription", message: "New subscriber" },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      );
      toast.custom(() => (
        <div className="bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2">
          <CheckCircle size={20} />
          Subscribed successfully!
        </div>
      ));
      setEmail("");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=600&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-dark-1/95 to-primary/90" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="heading-2 text-white mb-4">{t("subscription.title")}</h2>
          <p className="text-white/80 text-lg mb-8">{t("subscription.subtitle")}</p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder={t("subscription.placeholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-md text-white placeholder:text-white/50 border border-white/20 focus:outline-none focus:border-secondary transition-colors"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="px-8 py-4 bg-secondary text-dark-1 rounded-full font-semibold hover:bg-secondary/90 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-dark-1 border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  {t("subscription.button")} <Send size={18} />
                </>
              )}
            </button>
          </form>

          <p className="text-white/60 text-sm mt-4">
            No spam, unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Subscription;