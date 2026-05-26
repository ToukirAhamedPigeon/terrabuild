"use client";

import { useEffect, useState } from "react";
import { useTheme as useNextTheme } from "next-themes";

export const useTheme = () => {
  const { theme, setTheme, systemTheme } = useNextTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";
  const isLight = currentTheme === "light";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  const setDark = () => setTheme("dark");
  const setLight = () => setTheme("light");
  const setSystem = () => setTheme("system");

  return {
    theme: currentTheme as "light" | "dark" | undefined,
    isDark,
    isLight,
    mounted,
    toggleTheme,
    setDark,
    setLight,
    setSystem,
  };
};