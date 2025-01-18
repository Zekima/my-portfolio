import { useTranslations } from "next-intl";

export default function ProjectsSection() {
    const t = useTranslations('HomePage.Projects');

    return (
        <div className="flex flex-col space-y-24" id="projects">
            <div>
                <p className="text-4xl">{t("Title")}</p>
                <div className="border-b-2 py-3" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                <div className="bg-secondary h-64 flex justify-center items-center">
                </div>
                <div className="bg-secondary h-64 flex justify-center items-center">
                </div>
                <div className="bg-secondary h-64 flex justify-center items-center">
                </div>
            </div>
        </div>
    );
}