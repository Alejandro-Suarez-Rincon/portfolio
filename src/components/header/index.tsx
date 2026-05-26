import Link from 'next/link';
import type { NavItem } from '@/types/routes';

const NAV_ITEMS: NavItem[] = [
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects',   href: '/#projects' },
  { label: 'Contact',    href: '/#contact' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="page-container flex h-14 items-center justify-between">
        <Link
          href="/"
          className="font-mono text-sm font-medium tracking-widest text-foreground uppercase transition-colors hover:text-accent"
        >
          Juan Alejandro Suarez Rincon
        </Link>

        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-6 list-none m-0 p-0">
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
          </ul>
        </nav>
      </div>
    </header>
  );
}
