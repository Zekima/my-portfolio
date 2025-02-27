import { MessageSquare, Map, Filter, Shield, Upload, UserCog } from "lucide-react"
import { useTranslations } from "next-intl"
import ProjectPage from "@/components/ProjectPage"

export default function Page() {
    const t = useTranslations('Projects.DugnadNett')

    const features = [
        {
            icon: <MessageSquare className="w-8 h-8 text-primary" />,
            title: t('Features.RealTime.Title'),
            description: t('Features.RealTime.Description')
        },
        {
            icon: <Map className="w-8 h-8 text-primary" />,
            title: t('Features.Maps.Title'),
            description: t('Features.Maps.Description')
        },
        {
            icon: <Filter className="w-8 h-8 text-primary" />,
            title: t('Features.Filtering.Title'),
            description: t('Features.Filtering.Description')
        },
        {
            icon: <Shield className="w-8 h-8 text-primary" />,
            title: t('Features.Auth.Title'),
            description: t('Features.Auth.Description')
        },
        {
            icon: <UserCog className="w-8 h-8 text-primary" />,
            title: t('Features.Moderation.Title'),
            description: t('Features.Moderation.Description')
        },
        {
            icon: <Upload className="w-8 h-8 text-primary" />,
            title: t('Features.Content.Title'),
            description: t('Features.Content.Description')
        }
    ]

    return (
        <ProjectPage
            heroImage="/images/projects/dugnadnett/hero-dugnadnett.webp"
            title={t('Title')}
            subtitle={t('Subtitle')}
            description={t('Description')}
            additionalContent={
                <>
                    <blockquote className="p-6 bg-secondary rounded-lg border-l-4 border-primary">
                        <p className="text-lg md:text-xl font-medium">
                            {t('Statement')}
                        </p>
                    </blockquote>
                    <p className="text-lg md:text-xl leading-relaxed">
                        {t('Reflection')}
                    </p>
                </>
            }
            features={features}
            githubUrl="https://github.com/Zekima/dugnadnett"
            githubLinkText={t('SourceCode')}
            galleryTitle={t('ProjectGallery')}
            gallery={{
                images: [
                    {
                        filename: 'Browse.png',
                        title: 'Browse',
                        description: 'Browse',
                        tags: ['Browse']
                    },
                    {
                        filename: 'Create.png',
                        title: 'Create',
                        description: 'Create',
                        tags: ['Create']
                    },
                    {
                        filename: 'Dugnad.png',
                        title: 'Dugnad',
                        description: 'Dugnad',
                        tags: ['Dugnad']
                    },
                    {
                        filename: 'Settings.png',
                        title: 'Settings',
                        description: 'Settings',
                        tags: ['Settings']
                    },
                    {
                        filename: 'Settings2.png',
                        title: 'Profile',
                        description: 'Profile',
                        tags: ['Profile']
                    },
                    {
                        filename: 'Landing.png',
                        title: 'Landing',
                        description: 'Landing',
                        tags: ['Landing']
                    },
                    {
                        filename: 'MyPage.png',
                        title: 'MyPage',
                        description: 'MyPage',
                        tags: ['MyPage']
                    },
                    {
                        filename: 'Groupchat.png',
                        title: 'Groupchat',
                        description: 'Groupchat',
                        tags: ['Groupchat']
                    },
                ],
                projectName: "dugnadnett"
            }}
        />
    )
}