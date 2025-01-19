import { useTranslations } from "next-intl";

export default function ProjectsSection() {
    const t = useTranslations('HomePage.Projects');

    return (
        <div className="flex flex-col space-y-24" id="projects">
            <div>
                <p className="text-4xl">{t("Title")}</p>
                <div className="border-b-2 py-3" />
            </div>

            <div className="bg-secondary w-full h-96 flex gap-4 ">
                <div className="w-1/2">
                    <img src="/images/dugnadnett.webp" alt="" className="h-full"/>
                </div>
                <div className="w-1/2 pt-16 space-y-6 pr-16">
                    <p className="text-5xl font-medium">DugnadNett</p>
                    <p className="text-xl ">En digital plattform utviklet for å gjøre organisering av dugnader enklere og mer effektiv. Løsningen tilbyr sanntidskommunikasjon, smarte filterfunksjoner og en sentral oversikt over lokale dugnader.</p>
                    <button className="bg-primary py-3 px-4 text-lg font-medium text-black">Les mer -{">"}</button>
                </div>

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