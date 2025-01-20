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
                className={`sm:hidden flex z-30`}
            >
                {isOpen ? <X size={32} color="white" className="z-30" /> : <Menu size={32} />}
            </button>

            {isOpen && (
                <div className="absolute overflow-x-hidden bg-black px-4 text-white flex-grow items-center py-4 justify-center top-[-20px] left-[-16px] w-screen z-20">
                    <div className="flex gap-10 text-3xl mt-12 py-12 flex-col">
                        <Link href="/#projects" onClick={() => toggleMenu()}><p>{t("Projects")}</p></Link>
                        <Link href="/#education" onClick={() => toggleMenu()}><p>{t("Education")}</p></Link>
                        <Link href="/#connect" onClick={() => toggleMenu()}><p>{t("Connect")}</p></Link>
                    </div>
                </div>
            )}
        </div>
    );
}
