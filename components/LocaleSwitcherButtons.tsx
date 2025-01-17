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
        <div className="flex space-x-2">
            <button
                className={`w-[22px] ${currentLocale === 'en'
                    ? 'font-semibold hover:underline'
                    : 'font-extralight hover:underline'
                    }`}
                onClick={() => switchLocale('en')}
            >
                EN
            </button>
            <div className="border-l-4   border-dotted h-[30px] border-black dark:border-white"></div>
            <button
                className={`w-[22px] ${currentLocale === 'no'
                    ? 'font-semibold hover:underline'
                    : 'font-extralight hover:underline'
                    }`}
                onClick={() => switchLocale('no')}
            >
                NO
            </button>
        </div>
    );
}
