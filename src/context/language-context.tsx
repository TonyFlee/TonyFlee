"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Language } from "@/translations";

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "km")) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
