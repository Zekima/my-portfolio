'use client'

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function MenuButton() {
    const t = useTranslations("NavBar")
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative sm:hidden flex">
            <button
                onClick={toggleMenu}
                className="sm:hidden flex z-[51] transition-transform duration-200 hover:scale-110"
            >
                {isOpen ? <X size={32} color="white" className="z-30" /> : <Menu size={32} />}
            </button>

            <div className={`fixed inset-0 bg-black/90 z-50 backdrop-blur-sm transition-all duration-300 ease-in-out
                ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className={`flex flex-col items-center justify-center h-full transition-all duration-300
                    ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <nav className="flex flex-col gap-8 text-2xl text-white">
                        <Link 
                            href="/#projects" 
                            onClick={toggleMenu}
                            className="transition-all duration-200 dark:hover:text-primary hover:scale-110"
                        >
                            <p>{t("Projects")}</p>
                        </Link>
                        <Link 
                            href="/#education" 
                            onClick={toggleMenu}
                            className="transition-all duration-200 dark:hover:text-primary hover:scale-110"
                        >
                            <p>{t("Education")}</p>
                        </Link>
                        <Link 
                            href="/#connect" 
                            onClick={toggleMenu}
                            className="transition-all duration-200 dark:hover:text-primary hover:scale-110"
                        >
                            <p>{t("Connect")}</p>
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    );
}
