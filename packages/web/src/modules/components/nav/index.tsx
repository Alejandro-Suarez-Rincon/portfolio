"use client";
import { AppDispatch, RootState, setLanguage } from "@/store/store";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { useEffect } from "react";
import { fetchTranslations } from "@/utils/fetchTranslations";

interface Translation {
  [key: string]: {
    en: string;
    es: string;
  };
}

type Language = "en" | "es";

export function Nav() {
  const dispatch = useDispatch<AppDispatch>();
  const language = useSelector(
    (state: RootState) => state.translations.language
  ) as Language;

  const translations = useSelector(
    (state: RootState) => state.translations.translations
  ) as Translation;

  useEffect(() => {
    fetchTranslations(dispatch);
  }, [dispatch]);

  const toggleLanguage = () => {
    dispatch(setLanguage(language === "en" ? "es" : "en"));
  };

  return (
    <header className="flex flex-grow justify-between mx-40 mt-16">
      <div></div>
      <div className="flex gap-5 justify-between">
        <Link href="/">{translations["home"]?.[language] || "Inicio"}</Link>
        <Link href="">{translations["aboutme"]?.[language] || ""}</Link>
        <Link href="">{translations["projects"]?.[language] || ""}</Link>
        <Link href="">{translations["experience"]?.[language] || ""}</Link>
        <Link href="">{translations["contact"]?.[language] || ""}</Link>
      </div>
      <div>
        <button onClick={toggleLanguage}>
          {language === "en" ? "Español" : "English"}
        </button>
      </div>
    </header>
  );
}
