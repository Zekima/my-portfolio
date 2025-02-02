import { Github } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"

export default function Page() {
    const t = useTranslations('Projects.DugnadNett')

    return (
        <article className="pb-24 md:pb-36 space-y-16 md:space-y-24 mt-24">


            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                <header className="space-y-6 lg:w-1/2">
                    <h1 className="text-4xl md:text-5xl font-black leading-tight">
                        DugnadNett
                    </h1>
                    <p className="text-2xl md:text-3xl text-muted-foreground">
                        {t("Subtitle")}
                    </p>
                </header>

                <div className="lg:w-1/2 space-y-8">

                    <section className="space-y-4">
                        <p className="text-lg md:text-xl leading-relaxed">
                            {t('Description')}
                        </p>
                    </section>

                    <blockquote className="p-6 bg-secondary rounded-lg border-l-4 border-primary">
                        <p className="text-lg md:text-xl font-medium">
                            {t('Statement')}
                        </p>
                    </blockquote>

                    <section className="space-y-4">
                        <p className="text-lg md:text-xl leading-relaxed">
                            {t('Reflection')}
                        </p>
                    </section>

                    <nav className="pt-8">
                        <ul className="flex flex-col gap-4 text-lg">
                            <li>
                                <Link
                                    href="/files/DugnadNett.pdf"
                                    className="flex items-center gap-3 hover:bg-primary/10 p-3 rounded-lg transition-colors"
                                >
                                    <img
                                        src="/icons/pdf-icon.png"
                                        alt=""
                                        aria-hidden="true"
                                        className=" h-6"
                                    />
                                    <span className="hover:underline">DugnadNett</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://github.com/Zekima/dugnadnett"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 hover:bg-primary/10 p-3 rounded-lg transition-colors"
                                >
                                    <Github className="w-6 h-6" />
                                    <span className="hover:underline">{t("SourceCode")}</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="flex flex-col gap-12 lg:gap-24">
                <header className="space-y-6 lg:w-1/2">
                    <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
                        {t("ProjectGallery")}
                    </h2>
                </header>

                <div className="">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            'Browse.png',
                            'Create.png',
                            'Dugnad.png',
                            'Settings.png',
                            'Settings2.png',
                            'Profile.png',
                            'Landing.png',
                            'MyPage.png',
                            'Groupchat.png',
                            'Login.png',
                            'Map.png',
                            'OwnerActions.png',
                            'Participants.png',
                            'Register.png',
                            'Chat.png',

                        ].map((filename) => (
                            <div
                                key={filename}
                                className="relative aspect-video bg-secondary rounded-lg  overflow-hidden hover:shadow-lg transition-all"
                            >
                                <Image
                                    src={`/images/projects/dugnadnett/${filename}`}
                                    alt={`DugnadNett ${filename.replace('.png', '')} screen`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-contain p-2"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    )
}