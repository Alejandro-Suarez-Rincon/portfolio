import type { Locale } from './types';

interface WithTranslations<T> {
  translations?: {
    es?: Partial<T>;
  };
}

export function getLocalizedField<T extends object, K extends keyof T>(
  item: T & WithTranslations<T>,
  field: K,
  locale: Locale,
): T[K] {
  if (locale === 'es') {
    const esValue = item.translations?.es?.[field];
    if (esValue !== undefined) return esValue as T[K];
  }
  return item[field];
}
