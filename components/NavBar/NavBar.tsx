import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
import Link from "next/link";
import MenuButton from "./MenuButton";

export default function NavBar() {
    const t = useTranslations('NavBar');

    return (
        <header role="banner" className="w-full bg-background">
            {/* Skip to main content link - hidden by default, visible on focus */}
            <a 
                href="#main-content" 
                className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-background focus:text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary"
            >
                {t('SkipToMain')}
            </a>

            <nav 
                className="w-full py-5 m-auto flex justify-between items-center"
                role="navigation"
                aria-label={t('MainNavigation')}
            >
                <div className="flex gap-4 items-center ">
                    <MenuButton />
                    <Link href="/" aria-label={t('HomeLink')} className="focus:outline-hidden focus-visible:ring-2 focus-visible:ring-primary">
                        <span className="text-2xl font-semibold hover:text-primary focus:outline-hidden focus-visible:ring-2 focus-visible:ring-primary">
                            &lt;/1dev&gt;
                        </span>
                    </Link>
                </div>

                <div className="text-lg grow justify-center gap-4 hidden sm:flex">
                    {[
                        { href: '/#projects', label: t('Projects') },
                        { href: '/#education', label: t('Education') },
                        { href: '/#connect', label: t('Connect') }
                    ].map(({ href, label }) => (
                        <Link 
                            key={href}
                            href={href}
                            className="relative inline-block group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-primary rounded-xs"
                            aria-label={`${label}Section`}
                        >
                            <span className="relative inline-block">
                                {label}
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-foreground transition-all duration-200 ease-in-out group-hover:w-full group-focus:w-full"></span>
                            </span>
                        </Link>
                    ))}
                </div>

                <div className="flex gap-4" role="group" aria-label={t('SiteControls')}>
                    <ThemeSwitcher />
                    <LocaleSwitcher />
                </div>
            </nav>
        </header>
    );
}