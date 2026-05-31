'use client';

import { useLanguage } from '@/i18n';

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <button
      onClick={() => setLocale(locale === 'en' ? 'es' : 'en')}
      aria-label={locale === 'en' ? 'Switch to Spanish' : 'Switch to English'}
      className="w-8 h-8 flex items-center justify-center rounded-lg text-xs font-mono
                 font-semibold text-muted transition-colors hover:text-foreground hover:bg-surface-2"
    >
      {locale === 'en' ? 'ES' : 'EN'}
    </button>
  );
}
