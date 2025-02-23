import { useTranslations } from "next-intl";

export default function HeroSection() {
    const t = useTranslations('HomePage.Hero');
    return (
        <div className="w-full flex items-center py-12 xl:flex-row flex-col space-y-6 z-10" id="hero">
            <div className="md:w-1/2 w-full space-y-6 text-center xl:text-left">
                <h1 className="text-6xl font-black">
                    {t('Title')}
                </h1>
                <p className="text-4xl font-light">
                    {t('Subtitle')}
                </p>
            </div>
            <div className="md:w-1/2 w-full flex justify-end">
                <img src="/images/face3.webp" alt="" className="w-[600px] h-[615px] object-contain" />
            </div>
        </div>
    );
}