export const colors = {
  light: {
    // Primary colors
    primary: "#1a472a",
    primaryLight: "#2d6a4f",
    primaryDark: "#0a3d0f",
    
    // Secondary colors
    secondary: "#c6a43f",
    secondaryLight: "#d4af37",
    secondaryDark: "#b8962d",
    
    // Accent colors
    accent: "#f5e6a3",
    accentLight: "#fff8e7",
    accentDark: "#e6d190",
    
    // Neutral colors
    background: "#ffffff",
    surface: "#f8f8f8",
    surfaceHover: "#f0f0f0",
    
    // Text colors
    text: {
      primary: "#1a1a1a",
      secondary: "#4a4a4a",
      muted: "#757575",
      disabled: "#bdbdbd",
      inverse: "#ffffff",
    },
    
    // Border colors
    border: "#e0e0e0",
    borderLight: "#eeeeee",
    borderDark: "#d0d0d0",
    
    // Status colors
    success: "#4caf50",
    warning: "#ff9800",
    error: "#f44336",
    info: "#2196f3",
    
    // Gradient definitions
    gradients: {
      primary: "linear-gradient(135deg, #1a472a 0%, #2d6a4f 100%)",
      secondary: "linear-gradient(135deg, #c6a43f 0%, #d4af37 50%, #f5e6a3 100%)",
      accent: "linear-gradient(135deg, #f5e6a3 0%, #d4af37 100%)",
      dark: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
    },
  },
  
  dark: {
    // Primary colors
    primary: "#2d6a4f",
    primaryLight: "#40916c",
    primaryDark: "#1b4332",
    
    // Secondary colors
    secondary: "#ffd700",
    secondaryLight: "#ffed4a",
    secondaryDark: "#cca300",
    
    // Accent colors
    accent: "#ffed4a",
    accentLight: "#fff5b3",
    accentDark: "#e6d400",
    
    // Neutral colors
    background: "#0a0a0a",
    surface: "#1a1a1a",
    surfaceHover: "#2a2a2a",
    
    // Text colors
    text: {
      primary: "#ffffff",
      secondary: "#b0b0b0",
      muted: "#808080",
      disabled: "#4a4a4a",
      inverse: "#1a1a1a",
    },
    
    // Border colors
    border: "#2a2a2a",
    borderLight: "#3a3a3a",
    borderDark: "#1a1a1a",
    
    // Status colors
    success: "#66bb6a",
    warning: "#ffb74d",
    error: "#ef5350",
    info: "#42a5f5",
    
    // Gradient definitions
    gradients: {
      primary: "linear-gradient(135deg, #1b4332 0%, #2d6a4f 100%)",
      secondary: "linear-gradient(135deg, #cca300 0%, #ffd700 50%, #ffed4a 100%)",
      accent: "linear-gradient(135deg, #e6d400 0%, #ffd700 100%)",
      dark: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
    },
  },
};

// Theme-specific color accessor
export const getThemeColor = (theme: "light" | "dark", colorPath: string) => {
  const pathParts = colorPath.split(".");
  let current: any = colors[theme];
  
  for (const part of pathParts) {
    if (current[part] === undefined) {
      console.warn(`Color path "${colorPath}" not found for theme ${theme}`);
      return colors[theme].text.primary;
    }
    current = current[part];
  }
  
  return current;
};

// Helper function to get CSS variable name
export const getCssVariable = (colorName: string) => {
  return `var(--color-${colorName})`;
};