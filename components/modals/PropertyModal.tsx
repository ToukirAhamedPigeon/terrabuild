"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Bed, Bath, Square, MapPin, Phone, Mail, Heart, Share2 } from "lucide-react";
import { formatPrice } from "@/lib/utils";

interface PropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
  property: any;
}

const PropertyModal = ({ isOpen, onClose, property }: PropertyModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!property) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-x-4 top-1/2 -translate-y-1/2 max-w-4xl mx-auto bg-white dark:bg-dark-2 rounded-2xl shadow-2xl z-50 max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="relative h-80 md:h-96">
              <Image
                src={property.image}
                alt={property.title}
                fill
                className="object-cover rounded-t-2xl"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <button className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors">
                  <Heart size={20} className="text-white" />
                </button>
                <button className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors">
                  <Share2 size={20} className="text-white" />
                </button>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-playfair font-bold text-gray-800 dark:text-white">
                    {property.title}
                  </h2>
                  <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 mt-2">
                    <MapPin size={16} />
                    <span>{property.location}</span>
                  </div>
                </div>
                <div className="text-secondary font-bold text-3xl">
                  {formatPrice(property.price)}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 py-6 border-y border-gray-200 dark:border-dark-4 mb-6">
                <div className="text-center">
                  <Bed size={24} className="mx-auto mb-2 text-primary" />
                  <p className="text-sm text-gray-700 dark:text-gray-400">
                    {property.beds} {property.beds > 0 ? "Bedrooms" : "Office Space"}
                  </p>
                </div>
                <div className="text-center">
                  <Bath size={24} className="mx-auto mb-2 text-primary" />
                  <p className="text-sm text-gray-700 dark:text-gray-400">
                    {property.baths} Bathrooms
                  </p>
                </div>
                <div className="text-center">
                  <Square size={24} className="mx-auto mb-2 text-primary" />
                  <p className="text-sm text-gray-700 dark:text-gray-400">
                    {property.sqft} sqft
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Description</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {property.description}
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-dark-3 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Contact Agent</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 group">
                    <Phone size={18} className="group-hover:scale-110 transition-transform" /> 
                    Call Now
                  </button>
                  <button className="flex-1 bg-secondary text-dark-1 py-3 rounded-lg hover:bg-secondary/90 transition-all duration-300 flex items-center justify-center gap-2 group">
                    <Mail size={18} className="group-hover:scale-110 transition-transform" /> 
                    Email Inquiry
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PropertyModal;