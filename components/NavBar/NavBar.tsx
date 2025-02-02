import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
import Link from "next/link";
import MenuButton from "./MenuButton";

export default function NavBar() {
    const t = useTranslations('NavBar');

    return (
        <div className="w-full py-5 m-auto flex justify-between items-center bg-background">
            <div className="flex gap-4 items-center">
                <MenuButton />
                <Link href={"/"}>
                    <h1 className="text-2xl font-semibold">
                        1dev
                    </h1>
                </Link>
            </div>
            <div className="text-lg flex-grow  justify-center gap-4 hidden sm:flex">
                <Link href="/#projects">
                    <p className="relative inline-block group">
                        {t("Projects")}
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-foreground transition-all duration-200 ease-in-out group-hover:w-full"></span>
                    </p>
                </Link>
                <Link href="/#education">
                    <p className="relative inline-block group">
                        {t("Education")}
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-foreground transition-all duration-200 ease-in-out group-hover:w-full"></span>
                    </p>
                </Link>
                <Link href="/#connect">
                    <p className="relative inline-block group">
                        {t("Connect")}
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-foreground transition-all duration-200 ease-in-out group-hover:w-full"></span>
                    </p>
                </Link>
            </div>
            <div className="flex gap-4">
                <ThemeSwitcher />
                <LocaleSwitcher />
            </div>
        </div>
    )
}