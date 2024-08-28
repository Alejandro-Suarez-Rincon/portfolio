import { AppDispatch, setTranslations } from "@/store/store";

interface TranslationItem {
  key: string;
  en: string;
  es: string;
}

export const fetchTranslations = async (dispatch: AppDispatch) => {
  try {
    const response = await fetch("http://localhost:8055/items/translations");
    if (!response.ok) {
      throw new Error(`Error fetching translations: ${response.statusText}`);
    }

    const data = await response.json();
    const translations: { [key: string]: { en: string; es: string } } = {};

    data.data.forEach((item: TranslationItem) => {
      translations[item.key] = {
        en: item.en,
        es: item.es,
      };
    });

    dispatch(setTranslations(translations));
  } catch (error) {
    console.error("Failed to fetch translations:", error);
  }
};
