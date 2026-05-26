"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const testimonials = [
  {
    name: "Dr. Shahidul Islam",
    role: "Homeowner",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    text: "Terrabuild helped me find my dream home in Banani. Their team was professional, responsive, and made the entire process seamless. I couldn't be happier with my purchase.",
    rating: 5,
    date: "March 2024",
  },
  {
    name: "Nusrat Jahan",
    role: "Investor",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    text: "Excellent service from start to finish. Found a great investment property with amazing returns. The team's market knowledge is outstanding. Highly recommended!",
    rating: 5,
    date: "February 2024",
  },
  {
    name: "Rashed Karim",
    role: "Business Owner",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
    text: "The team at Terrabuild is top-notch. They found the perfect commercial space for my business in Uttara. The negotiation and documentation process was handled professionally.",
    rating: 4,
    date: "January 2024",
  },
  {
    name: "Fatema Akter",
    role: "First-time Buyer",
    image: "https://randomuser.me/api/portraits/women/14.jpg",
    text: "As a first-time home buyer, I was nervous. But Terrabuild guided me every step of the way. They answered all my questions and helped me make informed decisions. Thank you!",
    rating: 5,
    date: "March 2024",
  },
  {
    name: "Hasan Miah",
    role: "Property Owner",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    text: "Sold my property through Terrabuild and got a great price. Their marketing strategy and buyer network are impressive. Highly professional team.",
    rating: 5,
    date: "February 2024",
  },
];

const Testimonials = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-secondary uppercase tracking-wider text-sm font-semibold">
            Client Testimonials
          </span>
          <h2 className="heading-2 mb-4">{t("testimonials.title")}</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          className="pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-dark-2 rounded-2xl p-6 shadow-lg h-full"
              >
                <Quote size={40} className="text-secondary/30 mb-4" />
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed line-clamp-4">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                    <div className="flex gap-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={14} className="fill-secondary text-secondary" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style jsx global>{`
          .swiper-pagination-bullet {
            background: #c6a43f !important;
          }
          .swiper-button-next,
          .swiper-button-prev {
            color: #c6a43f !important;
          }
          .swiper-button-next:after,
          .swiper-button-prev:after {
            font-size: 20px !important;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Testimonials;