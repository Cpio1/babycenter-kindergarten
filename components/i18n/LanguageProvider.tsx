"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { defaultLanguage, htmlLang, translations, type Dictionary, type Language } from "@/lib/translations";

const STORAGE_KEY = "babycenter-language";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  /** Тексты для текущего языка: translations[language] */
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function isLanguage(value: unknown): value is Language {
  return value === "ru" || value === "kz";
}

/** Хранит выбранный язык (по умолчанию русский) и запоминает его в localStorage */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(defaultLanguage);

  // Восстанавливаем язык после перезагрузки страницы
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (isLanguage(saved)) setLanguage(saved);
    } catch {
      // localStorage недоступен (приватный режим) — остаёмся на русском
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = htmlLang[language];
    document.title = translations[language].meta.title;
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // не удалось сохранить — язык просто не запомнится
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage должен использоваться внутри LanguageProvider");
  return context;
}
