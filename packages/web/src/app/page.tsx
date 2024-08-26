"use client";
import { fetchTranslations } from "@/api";
import { useState, useEffect } from "react";

export default function Home() {
  const [translations, setTranslations] = useState<{ [key: string]: string }>(
    {}
  );
  const [locale, setLocale] = useState("en");

  useEffect(() => {
    async function loadTranslations() {
      const data = await fetchTranslations();
      console.log(locale, data[locale]);
      setTranslations(data[locale]);
    }

    loadTranslations();
  }, [locale]);

  const changeLanguage = () => {
    const newLocale = locale === "en" ? "es" : "en";
    console.log("Changing locale to:", newLocale); // Verificación
    setLocale(newLocale);
  };

  return (
    <div>
      <h1>{translations["home"] || "Home"}</h1> {/* Usa la clave 'home' */}
      <button onClick={changeLanguage}>
        {locale === "en" ? "Switch to Spanish" : "Cambiar a Inglés"}
      </button>
    </div>
  );
}
