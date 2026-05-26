"use client";

import { ReactNode, ElementType } from "react";
import { cn } from "@/lib/utils";

interface TypographyProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export const Heading1 = ({ children, className, as: Component = "h1" }: TypographyProps) => (
  <Component
    className={cn(
      "text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold",
      className
    )}
  >
    {children}
  </Component>
);

export const Heading2 = ({ children, className, as: Component = "h2" }: TypographyProps) => (
  <Component
    className={cn(
      "text-3xl md:text-4xl lg:text-5xl font-playfair font-bold",
      className
    )}
  >
    {children}
  </Component>
);

export const Heading3 = ({ children, className, as: Component = "h3" }: TypographyProps) => (
  <Component
    className={cn(
      "text-2xl md:text-3xl lg:text-4xl font-playfair font-semibold",
      className
    )}
  >
    {children}
  </Component>
);

export const Heading4 = ({ children, className, as: Component = "h4" }: TypographyProps) => (
  <Component
    className={cn(
      "text-xl md:text-2xl lg:text-3xl font-playfair font-semibold",
      className
    )}
  >
    {children}
  </Component>
);

export const Heading5 = ({ children, className, as: Component = "h5" }: TypographyProps) => (
  <Component
    className={cn(
      "text-lg md:text-xl lg:text-2xl font-playfair font-semibold",
      className
    )}
  >
    {children}
  </Component>
);

export const Heading6 = ({ children, className, as: Component = "h6" }: TypographyProps) => (
  <Component
    className={cn(
      "text-base md:text-lg lg:text-xl font-playfair font-semibold",
      className
    )}
  >
    {children}
  </Component>
);

export const BodyLarge = ({ children, className, as: Component = "p" }: TypographyProps) => (
  <Component
    className={cn(
      "text-lg md:text-xl text-gray-600 dark:text-gray-400",
      className
    )}
  >
    {children}
  </Component>
);

export const BodyText = ({ children, className, as: Component = "p" }: TypographyProps) => (
  <Component
    className={cn(
      "text-base text-gray-600 dark:text-gray-400 leading-relaxed",
      className
    )}
  >
    {children}
  </Component>
);

export const BodySmall = ({ children, className, as: Component = "p" }: TypographyProps) => (
  <Component
    className={cn(
      "text-sm text-gray-500 dark:text-gray-500",
      className
    )}
  >
    {children}
  </Component>
);

export const Caption = ({ children, className, as: Component = "span" }: TypographyProps) => (
  <Component
    className={cn(
      "text-xs text-gray-400 dark:text-gray-600 uppercase tracking-wider",
      className
    )}
  >
    {children}
  </Component>
);

export const GradientText = ({ children, className, as: Component = "span" }: TypographyProps) => (
  <Component
    className={cn(
      "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent",
      className
    )}
  >
    {children}
  </Component>
);