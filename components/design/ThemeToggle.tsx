"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Laptop } from "lucide-react";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-2 bg-gray-200/70 dark:bg-dark-4/70 rounded-full p-1">
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setTheme("light")}
        className={`p-2 rounded-full transition-all duration-300 cursor-pointer ${
          theme === "light"
            ? "bg-white dark:bg-dark-2 shadow-md text-secondary"
            : "text-gray-500 dark:text-gray-400 hover:text-secondary"
        }`}
      >
        <Sun size={16} />
      </motion.button>
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setTheme("dark")}
        className={`p-2 rounded-full transition-all duration-300 cursor-pointer ${
          theme === "dark"
            ? "bg-white dark:bg-dark-2 shadow-md text-secondary"
            : "text-gray-500 dark:text-gray-400 hover:text-secondary"
        }`}
      >
        <Moon size={16} />
      </motion.button>
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setTheme("system")}
        className={`p-2 rounded-full transition-all duration-300 cursor-pointer ${
          theme === "system"
            ? "bg-white dark:bg-dark-2 shadow-md text-secondary"
            : "text-gray-500 dark:text-gray-400 hover:text-secondary"
        }`}
      >
        <Laptop size={16} />
      </motion.button>
    </div>
  );
};

export default ThemeToggle;