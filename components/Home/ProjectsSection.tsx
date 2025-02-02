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
                    <Image src="/images/dugnadnett-1.png" alt="DugnadNett Mockup" height={385} width={632} className="h-full object-contain"/>
                </div>
                <div className="lg:w-1/2 pt-0 lg:pt-16 flex flex-col gap-6 pr-0 lg:pr-16">
                    <p className="text-5xl font-black">DugnadNett</p>
                    <p className="text-xl ">{t('DugnadNett.Description')}</p>
                    <Link href="/projects/dugnadnett" className="bg-primary w-fit py-3 px-4 text-lg font-black text-black transition-all duration-100 hover:opacity-[85%]">{t('DugnadNett.Button')}</Link>
                </div>
            </div>

            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                <div className="bg-secondary h-64 flex justify-center items-center">
                </div>
                <div className="bg-secondary h-64 flex justify-center items-center">
                </div>
                <div className="bg-secondary h-64 flex justify-center items-center">
                </div>
            </div> */}
        </div>
    );
}