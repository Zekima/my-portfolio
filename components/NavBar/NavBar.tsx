import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

export default function NavBar() {
    const t = useTranslations('NavBar');

    return (
        <div className="w-full py-5 m-auto flex justify-between items-center">
            <h1 className="text-2xl font-semibold">
                1dev
            </h1>
            <div className="text-lg flex gap-4">
                <p>{t("Projects")}</p>
                <p>{t("Education")}</p>
                <p>{t("Connect")}</p>
            </div>
            <div className="flex gap-4">
                <ThemeSwitcher />
                <LocaleSwitcher />
            </div>
        </div>
    )
}