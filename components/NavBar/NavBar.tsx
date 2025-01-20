import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function NavBar() {
    const t = useTranslations('NavBar');

    return (
        <div className="w-full py-5 m-auto flex justify-between items-center">
            <div className="flex gap-4 items-center">
                <Menu className="flex sm:hidden" size={32} />
                <Link href={"/"}>
                    <h1 className="text-2xl font-semibold">
                        1dev
                    </h1>
                </Link>

            </div>

            <div className="text-lg flex-grow  justify-center gap-4 hidden sm:flex">
                <Link href="/#projects"><p>{t("Projects")}</p></Link>
                <Link href="/#education"><p>{t("Education")}</p></Link>
                <Link href="/#connect"><p>{t("Connect")}</p></Link>
            </div>
            <div className="flex gap-4">
                <ThemeSwitcher />
                <LocaleSwitcher />
            </div>
        </div>
    )
}