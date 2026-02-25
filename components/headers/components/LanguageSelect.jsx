"use client";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSelect() {
  const { i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Set initial language from localStorage (or keep current)
  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    if (saved && saved !== i18n.language) {
      i18n.changeLanguage(saved);
    }
  }, [i18n]);

  const toggleDropdown = () => setIsDropdownOpen((v) => !v);

  const handleLanguageSelect = (lang) => {
    i18n.changeLanguage(lang);
    if (typeof window !== "undefined") localStorage.setItem("lang", lang);
    setIsDropdownOpen(false);
  };

  const label = (i18n.language || "en").startsWith("es") ? "Es" : "En";

  return (
    <li className="languageSelect" ref={dropdownRef}>
      <a
        href="#"
        className="mn-has-sub opacity-1"
        onClick={(e) => {
          e.preventDefault();
          toggleDropdown();
        }}
      >
        {label} <i className="mi-chevron-down" />
      </a>

      <ul className={`mn-sub to-left ${isDropdownOpen ? "open" : "closed"}`}>
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleLanguageSelect("en");
            }}
          >
            English
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleLanguageSelect("es");
            }}
          >
            Español
          </a>
        </li>
      </ul>
    </li>
  );
}
