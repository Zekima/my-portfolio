import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Inter } from "next/font/google";
import { Providers as ThemeProvider } from '../providers';
import '../globals.css';
import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ["latin"] });

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: { locale: string }
}) {

    const { locale } = await params;

    if (!routing.locales.includes(locale as 'en' | 'no')) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <html lang={locale} suppressHydrationWarning>
            <body className={`${inter.className} antialiased`}>
                <div className='w-full px-4'>
                    <div className='max-w-[1280px] m-auto'>
                        <NextIntlClientProvider messages={messages}>
                            <ThemeProvider>
                                <NavBar />
                                {children}
                            </ThemeProvider>
                        </NextIntlClientProvider>
                    </div>
                </div>
                <Footer />
            </body>
        </html>
    );
}