"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export const useLocale = () => {
  const [locale, setLocale] = useState<string>("en");
  const params = useParams();

  useEffect(() => {
    if (params?.locale && typeof params.locale === "string") {
      setLocale(params.locale);
    } else {
      // Get from localStorage or default to 'en'
      const savedLocale = localStorage.getItem("terrabuild-locale");
      if (savedLocale && (savedLocale === "en" || savedLocale === "bn")) {
        setLocale(savedLocale);
      } else {
        setLocale("en");
      }
    }
  }, [params]);

  const setLocaleAndSave = (newLocale: string) => {
    if (newLocale === "en" || newLocale === "bn") {
      setLocale(newLocale);
      localStorage.setItem("terrabuild-locale", newLocale);
      // Reload the page to apply the new locale
      window.location.href = `/${newLocale}`;
    }
  };

  return {
    locale,
    isEnglish: locale === "en",
    isBengali: locale === "bn",
    setLocale: setLocaleAndSave,
  };
};