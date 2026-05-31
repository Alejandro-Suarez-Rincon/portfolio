'use client';

import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';
import { LanguageToggle } from '@/components/language-toggle';
import { useLanguage } from '@/i18n';

export function Header() {
  const { t } = useLanguage();

  const NAV_ITEMS = [
    { label: t.nav.experience, href: '/#experience' },
    { label: t.nav.projects,   href: '/#projects' },
    { label: t.nav.education,  href: '/#education' },
    { label: t.nav.contact,    href: '/#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md shadow-sm">
      <div className="page-container flex h-14 items-center justify-between">
        <Link
          href="/"
          className="font-mono text-sm font-semibold text-accent tracking-wide transition-colors hover:text-foreground"
        >
          Juan Alejandro Suarez Rincon
        </Link>

        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-5 list-none m-0 p-0">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <LanguageToggle />
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
