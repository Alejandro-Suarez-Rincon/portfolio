interface TranslationItem {
  key: string;
  en: string;
  es: string;
}

interface Translations {
  en: { [key: string]: string };
  es: { [key: string]: string };
}

export const fetchTranslations = async (): Promise<Translations> => {
  const response = await fetch(`http://localhost:8055/items/translations`);

  if (!response.ok) {
    throw new Error(`Error fetching translations: ${response.statusText}`);
  }

  const data = await response.json();

  const translations: Translations = {
    en: {},
    es: {},
  };

  data.data.forEach((item: TranslationItem) => {
    translations.en[item.key] = item.en;
    translations.es[item.key] = item.es;
  });

  return translations;
};
