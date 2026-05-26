"use client";

import { ReactNode } from "react";
import { motion, MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

const Card = ({ children, className, hover = true, padding = "md", ...props }: CardProps & MotionProps) => {
  const paddings = {
    none: "p-0",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <motion.div
      whileHover={hover ? { y: -8 } : {}}
      transition={{ duration: 0.3 }}
      className={cn(
        "bg-white dark:bg-dark-2 rounded-2xl shadow-lg overflow-hidden",
        hover && "hover:shadow-2xl transition-all duration-300",
        paddings[padding],
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;