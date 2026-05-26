"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  id?: string;
  dark?: boolean;
}

const SectionWrapper = ({
  children,
  title,
  subtitle,
  className,
  id,
  dark = false,
}: SectionWrapperProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id={id}
      className={cn(
        "section-padding",
        dark ? "bg-gray-900 text-white" : "bg-white dark:bg-dark-1",
        className
      )}
    >
      <div className="container-custom">
        {(title || subtitle) && (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            {subtitle && (
              <p className="text-secondary font-semibold mb-2 uppercase tracking-wider">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="heading-2 mb-4">{title}</h2>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;