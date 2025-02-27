import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";

export default function ProjectsSection() {
    const t = useTranslations('HomePage.Projects');

    return (
        <div className="flex flex-col space-y-24" id="projects">
            <div>
                <p className="text-4xl">{t("Title")}</p>
                <div className="border-b-2 py-3" />
            </div>
            <div className="bg-secondary w-full h-auto lg:h-96 flex gap-4 flex-col lg:flex-row p-4 lg:p-0">
                <div className="lg:w-1/2">
                    <img src="/images/projects/lisenskode/hero-lisenskode.webp" loading="lazy" alt="Lisenskode Landing Page" height={385} width={600} className="h-full object-cover" />
                </div>
                <div className="lg:w-1/2 pt-0 lg:pt-16 flex flex-col gap-6 pr-0 lg:pr-16">
                    <p className="text-4xl font-medium">Lisenskode</p>
                    <p className="text-xl ">{t('Lisenskode.Description')}</p>
                    <Link href="/projects/lisenskode" tabIndex={0} className="bg-primary w-fit py-3 px-4 text-lg font-medium text-background transition-all duration-100 hover:opacity-[85%] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/10">{t('DugnadNett.Button')}</Link>
                </div>

            </div>
            <div className="bg-secondary w-full h-auto lg:h-96 flex gap-4 flex-col lg:flex-row p-4 lg:p-0">
                <div className="lg:w-1/2">
                    <img src="/images/projects/dugnadnett/hero-dugnadnett.webp" loading="lazy" alt="Lisenskode Landing Page" height={385} width={600} className="h-full object-cover" />
                </div>
                <div className="lg:w-1/2 pt-0 lg:pt-16 flex flex-col gap-6 pr-0 lg:pr-16">
                    <p className="text-4xl font-medium">DugnadNett</p>
                    <p className="text-xl ">{t('DugnadNett.Description')}</p>
                    <Link href="/projects/dugnadnett" tabIndex={0} className="bg-primary w-fit py-3 px-4 text-lg font-medium text-background transition-all duration-100 hover:opacity-[85%] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/10">{t('DugnadNett.Button')}</Link>
                </div>

            </div>

        </div>
    );
}