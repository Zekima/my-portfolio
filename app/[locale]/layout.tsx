import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Inter } from "next/font/google";
import { Providers as ThemeProvider } from '../providers';
import '../globals.css';
import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer';
import Script from "next/script";
import type { Metadata } from 'next'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: '1dev - Portefølje',
    description: 'Velkommen til min portefølje. Jeg er en IT-utdannet utvikler med lidenskap for kreative og tekniske løsninger. Utforsk prosjektene mine og ta kontakt for samarbeid!',
}

export default async function LocaleLayout({
    children,
    params: paramsPromise
}: {
    children: React.ReactNode;
    params: Promise<{ locale: 'en' | 'no' }>;
}) {
    const params = await paramsPromise;
    const { locale } = params;

    if (!routing.locales.includes(locale)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <html lang={locale} suppressHydrationWarning>
            <head>
                <Script
                    defer
                    data-domain="1dev.no"
                    src="https://plausible.io/js/script.js"
                />
            </head>
            <body className={`${inter.className} antialiased`}>
                <div className="w-full px-4">
                    <div className="max-w-[1280px] m-auto">
                        <NextIntlClientProvider messages={messages}>
                            <ThemeProvider>
                                <NavBar />
                                <main id="main-content" tabIndex={-1}>
                                    {children}
                                </main>
                            </ThemeProvider>
                        </NextIntlClientProvider>
                    </div>
                </div>
                <Footer />
            </body>
        </html>
    );
}
