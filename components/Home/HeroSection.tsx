'use client'

import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";

export default function HeroSection() {
    const t = useTranslations('HomePage.Hero');
    const [typedText, setTypedText] = useState("");
    const skills = ["Next.js", "React", "UI/UX", "TypeScript", "Full Stack"];
    const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentSkill = skills[currentSkillIndex];
        const typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && typedText === currentSkill) {
            // Pause at complete word
            setTimeout(() => setIsDeleting(true), 1500);
            return;
        } else if (isDeleting && typedText === "") {
            // Move to next skill
            setIsDeleting(false);
            setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
            return;
        }

        const timeout = setTimeout(() => {
            setTypedText(prev =>
                isDeleting
                    ? prev.substring(0, prev.length - 1)
                    : currentSkill.substring(0, prev.length + 1)
            );
        }, typeSpeed);

        return () => clearTimeout(timeout);
    }, [typedText, currentSkillIndex, isDeleting]);

    return (
        <section className="w-full min-h-[80vh] flex items-center py-12 xl:flex-row flex-col space-y-6 z-10" id="hero">
            <div className="w-full space-y-8 text-center xl:text-left px-6">
                <span className="text-sm font-semibold tracking-wider bg-primary-200 dark:bg-[#1d1d1d] dark:text-primary-300 text-primary-900 px-3 py-1 rounded-full">
                    {t('Badge')}
                </span>

                <h1 className="text-6xl font-black leading-tight">
                    {t('Title')}
                </h1>

                <p className="text-4xl font-light">
                    {t('Subtitle')}
                </p>

                <div className="h-16 flex items-center justify-center xl:justify-start">
                    <span className="text-2xl mr-2">{t('SpecializesIn')}</span>
                    <span className="text-2xl font-bold text-primary">{typedText}<span className="animate-pulse">|</span></span>
                </div>



                <div className="flex flex-col xl:flex-row gap-4 pt-2">
                    <a
                        href="#projects"
                        aria-label={t('ViewProjectsAriaLabel')}
                        className="px-6 py-3 bg-primary text-lg text-background font-medium rounded-md hover:bg-primary-700 dark:hover:bg-primary-300 transition-colors text-center"
                    >
                        {t('ViewProjects')}
                    </a>
                    <a
                        href="#connect"
                        aria-label={t('GetInTouchAriaLabel')}
                        className="px-6 py-3  text-lg underline border-gray-400  hover:text-primary-900 dark:border-gray-700 rounded-md  dark:hover:text-primary-400 transition-colors text-center"
                    >
                        {t('GetInTouch')}
                    </a>
                </div>
            </div>

            <div className="w-full flex justify-end relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl"></div>
                <div className="absolute inset-0 opacity-50">
                    <div className="grid grid-cols-8 gap-8 h-full">
                        {[...Array(32)].map((_, i) => (
                            <div key={i} className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{
                                animationDelay: `${i * 0.1}s`
                            }}></div>
                        ))}
                    </div>
                </div>

                <img
                    src="/images/hero-landing.webp"
                    alt="Christian Ledaal - Developer"
                    className="w-[600px] h-[615px] object-contain relative z-10 hover:scale-[1.02] transition-transform duration-300"
                />
            </div>
        </section>
    );
}