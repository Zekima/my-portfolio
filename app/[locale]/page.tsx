import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import ThemeSwitcher from '@/components/ThemeSwitcher';

export default function HomePage() {
    const t = useTranslations('HomePage');
    return (
        <div className='w-full flex items-center py-12 xl:flex-row flex-col space-y-6'>
            <div className='md:w-1/2 w-full space-y-6 text-center xl:text-left'>
                <h1 className='text-6xl font-medium'>
                    {t('heroTitle')}
                </h1>
                <p className='text-4xl font-light'>
                    {t('heroSubtitle')}
                </p>
            </div>
            <div className='md:w-1/2 w-full flex justify-center'>
                <img src="/images/abstract-shapes.webp" alt="" className='w-[600px]' />

            </div>
        </div>
    );
}