import { Github } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"

export default function Page() {
    const t = useTranslations('Projects.DugnadNett')
    return (
        <div className="pb-72 space-y-24 mt-12">
            <div className="w-full h-[400px] bg-primary clear-start flex justify-center">
                <Image src="/images/dugnadnett-1.png" alt="DugnadNett Mockup" width={690} height={400} className="object-contain" />
            </div>
            <div className="flex flex-col lg:flex-row gap-y-16 ">
                <div className="space-y-4 lg:w-1/2">
                    <p className="text-6xl font-medium">DugnadNett</p>
                    <p className="text-3xl">{t("Subtitle")}</p>
                </div>
                <div className="lg:w-1/2 space-y-12">
                    <div className="space-y-2 font-medium">
                        <p className="text-2xl font-light">
                            {t('Description')}
                        </p>
                    </div>
                    <p className="font-medium  text-xl bg-secondary p-4 text-center">
                        {t('Statement')}
                    </p>
                    <div className="space-y-2 font-medium">
                        <p className="text-2xl font-light">
                            {t('Reflection')}
                        </p>
                    </div>
                    <div className="flex gap-4 pt-4 flex-wrap text-xl">
                        <div className="flex gap-2 underline items-center ">
                            <img src="/icons/pdf-icon.png" alt="PDF icon" width={24} />
                            <Link href={"/files/DugnadNett.pdf"} className="hover:bg-secondary">DugnadNett.pdf</Link>
                        </div>

                        <div className="flex gap-2 items-center underline">
                            <Github width={28} />
                            <Link href={"https://github.com/Zekima/dugnadnett"} className="hover:bg-secondary">{t('SourceCode')}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}