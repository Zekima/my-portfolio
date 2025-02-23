"use client"

import { useTransition } from "react";
import { usePathname, useRouter } from '@/i18n/routing';
import { useParams } from "next/navigation";


export default function LocaleSwitcherButtons({ currentLocale }: { currentLocale: string }) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();
    const params = useParams();


    const switchLocale = (nextLocale: 'en' | 'no') => {
        if (nextLocale === currentLocale) return;
        startTransition(() => {
            router.replace(
                // @ts-expect-error -- TypeScript will validate that only known `params`
                // are used in combination with a given `pathname`. Since the two will
                // always match for the current route, we can skip runtime checks.
                { pathname, params },
                { locale: nextLocale }
            );
        });
    };

    return (
        <div className="flex space-x-2 items-center ">
            <button
                className={`w-[22px] relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    currentLocale === 'en'
                        ? 'font-semibold'
                        : 'font-extralight'
                }`}
                onClick={() => switchLocale('en')}
            >
                EN
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-foreground transition-all duration-200 ease-in-out group-hover:w-full"></span>
            </button>
            <div className="border-l-4  border-dotted h-[17px] border-black dark:border-white"></div>
            <button
                className={`w-[22px] relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    currentLocale === 'no'
                        ? 'font-semibold'
                        : 'font-extralight'
                }`}
                onClick={() => switchLocale('no')}
            >
                NO
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-foreground transition-all duration-200 ease-in-out group-hover:w-full"></span>
            </button>
        </div>
    );
}
