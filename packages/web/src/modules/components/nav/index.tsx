"use client";
import { AppDispatch, RootState, setLanguage } from "@/store/store";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { useEffect } from "react";
import { fetchTranslations } from "@/utils/fetchTranslations";
import { usePathname } from "next/navigation";
import { ROUTES_NAV } from "../types/routes";

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

  const pathname = usePathname();

  useEffect(() => {
    fetchTranslations(dispatch);
  }, [dispatch]);

  const toggleLanguage = () => {
    dispatch(setLanguage(language === "en" ? "es" : "en"));
  };

  const linkClsses = (path: string) => {
    return pathname === path
      ? "py-1 px-2 bg-purple-100 border border-purple-200 rounded-md"
      : "py-1 px-2 hover:bg-purple-50 hover:border border-purple-100 rounded-md";
  };

  return (
    <section className="flex bg-principal">
      <header className="flex flex-grow justify-between mx-40 my-16 ">
        <div></div>
        <div className="flex gap-5 justify-between">
          <Link href={ROUTES_NAV.HOME} className={linkClsses(ROUTES_NAV.HOME)}>
            {translations["home"]?.[language] || "Inicio"}
          </Link>

          <Link
            href={ROUTES_NAV.ABOUT_ME}
            className={linkClsses(ROUTES_NAV.ABOUT_ME)}
          >
            {translations["aboutme"]?.[language] || ""}
          </Link>

          <Link
            href={ROUTES_NAV.PROJECTS}
            className={linkClsses(ROUTES_NAV.PROJECTS)}
          >
            {translations["projects"]?.[language] || ""}
          </Link>

          <Link
            href={ROUTES_NAV.EXPERIENCE}
            className={linkClsses(ROUTES_NAV.EXPERIENCE)}
          >
            {translations["experience"]?.[language] || ""}
          </Link>

          <Link
            href={ROUTES_NAV.CONTACT}
            className={linkClsses(ROUTES_NAV.CONTACT)}
          >
            {translations["contact"]?.[language] || ""}
          </Link>
        </div>
        <div>
          <button
            onClick={toggleLanguage}
            className="py-1 px-2 hover:bg-purple-50"
          >
            {language === "en" ? "Es" : "En"}
          </button>
        </div>
      </header>
    </section>
  );
}
