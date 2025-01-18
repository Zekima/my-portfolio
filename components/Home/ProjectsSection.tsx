import { useTranslations } from "next-intl";

export default function ProjectsSection() {
    // const t = useTranslations('HomePage.Projects');

    return (
        <div className="flex flex-col space-y-24">
            <div>
                <p className="text-4xl">Projects</p>
                <div className="border-b-2 py-3" />
            </div>
        </div>
    );
}