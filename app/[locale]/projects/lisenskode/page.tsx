import { Mail, CreditCard, Shield, LayoutDashboard, Rocket, Scale, FileText } from "lucide-react"
import { useTranslations } from "next-intl"
import ProjectPage from "@/components/ProjectPage"

export default function Page() {
    const t = useTranslations('Projects.Lisenskode')

    const features = [
        {
            icon: <Mail className="w-8 h-8 text-primary" />,
            title: t('Features.Email.Title'),
            description: t('Features.Email.Description')
        },
        {
            icon: <CreditCard className="w-8 h-8 text-primary" />,
            title: t('Features.Payment.Title'),
            description: t('Features.Payment.Description')
        },
        {
            icon: <Scale className="w-8 h-8 text-primary" />,
            title: t('Features.Compliance.Title'),
            description: t('Features.Compliance.Description')
        },
        {
            icon: <LayoutDashboard className="w-8 h-8 text-primary" />,
            title: t('Features.Admin.Title'),
            description: t('Features.Admin.Description')
        },
        {
            icon: <Rocket className="w-8 h-8 text-primary" />,
            title: t('Features.Deployment.Title'),
            description: t('Features.Deployment.Description')
        },
        {
            icon: <FileText className="w-8 h-8 text-primary" />,
            title: t('Features.RichContent.Title'),
            description: t('Features.RichContent.Description')
        }
    ]

    return (
        <ProjectPage
            heroImage="/images/projects/lisenskode/hero-lisenskode.webp"
            title={t('Title')}
            subtitle={t('Subtitle')}
            description={t('Description')}
            additionalContent={
                <p className="text-lg md:text-xl leading-relaxed">
                    {t('AdditionalInfo')}
                </p>
            }
            features={features}
            githubLinkText={t('ViewOnGithub')}
            galleryTitle={t('ProjectGallery')}
            gallery={{
                images: [
                    {
                        "filename": "AdminCategories.png",
                        "title": "Admin Categories",
                        "description": "Manage product categories in the admin panel.",
                        "tags": ["Admin"]
                    },
                    {
                        "filename": "AdminDashboard.png",
                        "title": "Admin Dashboard",
                        "description": "Overview of the admin panel with key metrics.",
                        "tags": ["Admin"]
                    },
                    {
                        "filename": "AdminEditProduct.png",
                        "title": "Edit Product",
                        "description": "Modify product details in the admin panel.",
                        "tags": ["Admin"]
                    },
                    {
                        "filename": "AdminKeys.png",
                        "title": "Admin Keys",
                        "description": "Add License Keys to the products.",
                        "tags": ["Admin"]
                    },
                    {
                        "filename": "AdminOrders.png",
                        "title": "Admin Orders",
                        "description": "View and manage customer orders.",
                        "tags": ["Admin"]
                    },
                    {
                        "filename": "AdminProducts.png",
                        "title": "Admin Products",
                        "description": "Manage the list of products available in the store.",
                        "tags": ["Admin"]
                    },
                    {
                        "filename": "CategoryPage.png",
                        "title": "Category Page",
                        "description": "Display products categorized for easy browsing.",
                        "tags": ["Category"]
                    },
                    {
                        "filename": "LandingPage.png",
                        "title": "Landing Page",
                        "description": "The main entry point of the website.",
                        "tags": ["Landing"]
                    },
                    {
                        "filename": "PrivacyPolicy.png",
                        "title": "Privacy Policy",
                        "description": "Details about user data privacy and policies.",
                        "tags": ["Legal"]
                    },
                    {
                        "filename": "ProductInStock.png",
                        "title": "Product In Stock",
                        "description": "Indicates that a product is available for purchase.",
                        "tags": ["Product"]
                    },
                    {
                        "filename": "ProductOutOfStock.png",
                        "title": "Product Out of Stock",
                        "description": "Indicates that a product is currently unavailable.",
                        "tags": ["Product"]
                    },
                    {
                        "filename": "TermsOfService.png",
                        "title": "Terms of Service",
                        "description": "Legal terms and conditions for using the platform.",
                        "tags": ["Legal"]
                    }
                ],
                projectName: "lisenskode"
            }}
        />
    )
}