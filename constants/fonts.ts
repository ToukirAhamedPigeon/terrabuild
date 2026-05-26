// Font families
export const fonts = {
  heading: "var(--font-playfair)",
  body: "var(--font-inter)",
  accent: "var(--font-montserrat)",
  
  // Fallback fonts
  fallback: {
    heading: "Georgia, 'Times New Roman', serif",
    body: "Arial, Helvetica, sans-serif",
    accent: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
};

// Font sizes (in rem)
export const fontSizes = {
  xs: "0.75rem",     // 12px
  sm: "0.875rem",    // 14px
  base: "1rem",      // 16px
  lg: "1.125rem",    // 18px
  xl: "1.25rem",     // 20px
  "2xl": "1.5rem",   // 24px
  "3xl": "1.875rem", // 30px
  "4xl": "2.25rem",  // 36px
  "5xl": "3rem",     // 48px
  "6xl": "3.75rem",  // 60px
  "7xl": "4.5rem",   // 72px
  "8xl": "6rem",     // 96px
  "9xl": "8rem",     // 128px
};

// Font weights
export const fontWeights = {
  thin: 100,
  extraLight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
};

// Line heights
export const lineHeights = {
  none: 1,
  tight: 1.25,
  snug: 1.375,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2,
};

// Letter spacing
export const letterSpacing = {
  tighter: "-0.05em",
  tight: "-0.025em",
  normal: "0",
  wide: "0.025em",
  wider: "0.05em",
  widest: "0.1em",
};

// Text transformations
export const textTransforms = {
  uppercase: "uppercase",
  lowercase: "lowercase",
  capitalize: "capitalize",
  normalCase: "none",
};

// Heading styles
export const headingStyles = {
  h1: {
    fontSize: fontSizes["5xl"],
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.tight,
    fontFamily: fonts.heading,
  },
  h2: {
    fontSize: fontSizes["4xl"],
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.tight,
    fontFamily: fonts.heading,
  },
  h3: {
    fontSize: fontSizes["3xl"],
    fontWeight: fontWeights.semiBold,
    lineHeight: lineHeights.snug,
    fontFamily: fonts.heading,
  },
  h4: {
    fontSize: fontSizes["2xl"],
    fontWeight: fontWeights.semiBold,
    lineHeight: lineHeights.snug,
    fontFamily: fonts.heading,
  },
  h5: {
    fontSize: fontSizes.xl,
    fontWeight: fontWeights.semiBold,
    lineHeight: lineHeights.normal,
    fontFamily: fonts.heading,
  },
  h6: {
    fontSize: fontSizes.lg,
    fontWeight: fontWeights.semiBold,
    lineHeight: lineHeights.normal,
    fontFamily: fonts.heading,
  },
};

// Body text styles
export const bodyStyles = {
  large: {
    fontSize: fontSizes.lg,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.relaxed,
  },
  base: {
    fontSize: fontSizes.base,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.normal,
  },
  small: {
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.normal,
  },
  xs: {
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.normal,
  },
};

// Helper function to get responsive font size
export const getResponsiveFontSize = (baseSize: keyof typeof fontSizes, scale: number = 1) => {
  const baseValue = parseFloat(fontSizes[baseSize]);
  return {
    base: fontSizes[baseSize],
    sm: `${baseValue * (scale * 0.9)}rem`,
    md: `${baseValue * scale}rem`,
    lg: `${baseValue * (scale * 1.1)}rem`,
    xl: `${baseValue * (scale * 1.2)}rem`,
  };
};