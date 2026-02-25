"use client";

import React, { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n";

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  // Load saved language on first client render
  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved && saved !== i18n.language) i18n.changeLanguage(saved);
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
