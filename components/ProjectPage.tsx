import { Github } from "lucide-react"
import Link from "next/link"
import ImageGallery from "@/components/ImageGallery"

interface Feature {
    icon: React.ReactNode
    title: string
    description: string
}

interface ProjectPageProps {
    heroImage: string
    title: string
    subtitle: string
    description: string
    additionalContent?: React.ReactNode
    features: Feature[]
    githubUrl?: string
    githubLinkText?: string
    gallery?: {
        images: Array<{
            filename: string
            title: string
            description: string
            tags: string[]
        }>
        projectName: string
    }
    galleryTitle?: string
}

export default function ProjectPage({
    heroImage,
    title,
    subtitle,
    description,
    additionalContent,
    features,
    githubUrl,
    githubLinkText,
    gallery,
    galleryTitle
}: ProjectPageProps) {
    return (
        <article className="pb-24 md:pb-36 space-y-16 md:space-y-36 mt-12 min-h-screen">
            <img src={heroImage} alt={title} className="w-full h-[300px] sm:h-[592px] object-cover" />

            <div className="space-y-72">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                    <header className="space-y-6 lg:w-1/2">
                        <h1 className="text-4xl md:text-5xl font-black leading-tight">
                            {title}
                        </h1>
                        <p className="text-2xl md:text-3xl text-muted-foreground">
                            {subtitle}
                        </p>
                    </header>

                    <div className="lg:w-1/2 space-y-6">
                        <p className="text-lg md:text-xl leading-relaxed">
                            {description}
                        </p>
                        {additionalContent}
                    </div>
                </div>

                {features.length > 0 && (
                    <div className="flex flex-col gap-12 lg:gap-24">
                        <header className="space-y-6">
                            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
                                Project Highlights
                            </h2>
                        </header>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    {feature.icon}
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-lg font-semibold">{feature.title}</h3>
                                        <p className="text-muted-foreground">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {gallery && (
                    <div className="flex flex-col gap-6 lg:gap-24">
                        <header className="lg:w-1/2">
                            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
                                {galleryTitle || "Project Gallery"}
                            </h2>
                        </header>

                        <ImageGallery
                            images={gallery.images}
                            projectName={gallery.projectName}
                            gridCols={3}
                            enableZoom={true}
                            enableDownload={true}
                            enableSharing={true}
                            showThumbnailsInModal={true}
                        />
                    </div>
                )}

                {githubUrl && (
                    <div className="flex items-center gap-4">
                        <Github className="w-6 h-6" />
                        <Link href={githubUrl} className="text-lg hover:underline">
                            {githubLinkText || "View on GitHub"}
                        </Link>
                    </div>
                )}
            </div>
        </article>
    )
} 