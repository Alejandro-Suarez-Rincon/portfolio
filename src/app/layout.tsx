import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import { ThemeProvider } from '@/components/theme-provider';
import { LanguageProvider } from '@/i18n';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Juan Alejandro Suarez Rincon — Full Stack Engineer',
    template: '%s | Juan Alejandro Suarez Rincon',
  },
  description:
    'Full Stack Engineer building end-to-end products with TypeScript, React, Next.js, Python, Go, and Docker. Based in Colombia.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Juan Alejandro Suarez Rincon',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <LanguageProvider>
          <ThemeProvider>
            <Header />
            <main className="flex-1">{children}</main>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
