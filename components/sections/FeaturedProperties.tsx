"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Bed, Bath, Square, Eye, Heart, MapPin, ImageOff } from "lucide-react";
import PropertyModal from "../modals/PropertyModal";
import propertiesData from "@/data/en/properties.json";
import { formatPrice } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

const FeaturedProperties = () => {
  const { t } = useLanguage();
  const [selectedProperty, setSelectedProperty] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());

  const properties = propertiesData.properties.filter((p) => p.featured);

  // Fallback image URLs (working Unsplash images)
  const fallbackImages = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
  ];

  const handleImageError = (propertyId: number) => {
    setFailedImages(prev => new Set(prev).add(propertyId));
  };

  const getImageUrl = (property: any) => {
    if (failedImages.has(property.id)) {
      // Return a random fallback image
      return fallbackImages[property.id % fallbackImages.length];
    }
    return property.image;
  };

  const handleViewProperty = (property: any) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const toggleFavorite = (propertyId: number) => {
    setFavorites(prev => 
      prev.includes(propertyId) 
        ? prev.filter(id => id !== propertyId)
        : [...prev, propertyId]
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

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
            Featured Listings
          </span>
          <h2 className="heading-2 mb-4">{t("properties.featured")}</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("properties.subtitle")}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {properties.map((property) => (
            <motion.div
              key={property.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group bg-white dark:bg-dark-2 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden bg-gray-200 dark:bg-gray-800">
                {failedImages.has(property.id) ? (
                  <div className="w-full h-full flex items-center justify-center bg-gray-300 dark:bg-gray-700">
                    <ImageOff className="w-12 h-12 text-gray-500" />
                  </div>
                ) : (
                  <Image
                    src={getImageUrl(property)}
                    alt={property.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={() => handleImageError(property.id)}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <button
                  onClick={() => toggleFavorite(property.id)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/40 transition-colors z-10"
                >
                  <Heart 
                    size={16} 
                    className={favorites.includes(property.id) ? "fill-red-500 text-red-500" : "text-white"}
                  />
                </button>
                <button
                  onClick={() => handleViewProperty(property)}
                  className="absolute bottom-4 right-4 bg-secondary text-dark-1 px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 flex items-center gap-2"
                >
                  <Eye size={16} />
                  {t("properties.viewDetails")}
                </button>
                <div className="absolute top-4 left-4 bg-secondary text-dark-1 px-2 py-1 rounded text-xs font-semibold">
                  {property.type === "buy" ? "For Sale" : property.type === "rent" ? "For Rent" : "Featured"}
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-playfair font-bold text-gray-900 dark:text-white line-clamp-1">
                    {property.title}
                  </h3>
                </div>
                <p className="text-secondary font-bold text-2xl mb-3">
                  {formatPrice(property.price)}
                </p>
                <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-sm mb-4">
                  <MapPin size={14} />
                  <span>{property.location}</span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-dark-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                      <Bed size={16} />
                      <span className="text-sm">{property.beds} {property.beds > 0 ? t("properties.beds") : "Office"}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                      <Bath size={16} />
                      <span className="text-sm">{property.baths} {t("properties.baths")}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                      <Square size={16} />
                      <span className="text-sm">{property.sqft} {t("properties.sqft")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <PropertyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        property={selectedProperty}
      />
    </section>
  );
};

export default FeaturedProperties;