"use client";

import { useTranslations } from "next-intl";
import { useMemo } from "react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiFigma,
  SiDocker,
  SiLinux,
  SiGit,
  SiPostgresql,
  SiPrisma,
} from "react-icons/si";

export default function HeroSection() {
  const t = useTranslations("HomePage.Hero");
  const skills = useMemo(
    () => [
      { name: "Figma", icon: <SiFigma size={32} /> },
      { name: "React", icon: <SiReact size={32} /> },
      { name: "Next.js", icon: <SiNextdotjs size={32} /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={32} /> },
      { name: "TypeScript", icon: <SiTypescript size={32} /> },
      { name: "PostgreSQL", icon: <SiPostgresql size={32} /> },
      { name: "Prisma", icon: <SiPrisma size={32} /> },
      { name: "Git", icon: <SiGit size={32} /> },
      { name: "Docker", icon: <SiDocker size={32} /> },
      { name: "Linux", icon: <SiLinux size={32} /> },
    ],
    []
  );

  return (
    <div className="pb-12">
      <section
        className="w-full min-h-[80vh] flex items-center  xl:flex-row flex-col space-y-6 z-10 gap-4"
        id="hero"
      >
        <div className="w-full space-y-8 text-center xl:text-left px-6">
          <div className="space-y-4">
            <span className="text-sm font-semibold tracking-wider bg-primary-200 dark:bg-[#1d1d1d] dark:text-primary-300 text-primary-900 px-3 py-1 rounded-full">
              {t("Badge")}
            </span>

            <h1 className="text-9xl font-black leading-[1.1]">{t("Title")}</h1>
          </div>

          <p className="text-4xl font-light text-gray-800 dark:text-gray-300">
            {t("Subtitle")}
          </p>

          <div className="flex flex-col xl:flex-row gap-4 pt-2">
            <a
              href="#projects"
              aria-label={t("ViewProjectsAriaLabel")}
              className="px-6 py-3 bg-primary text-lg text-background font-medium rounded-md hover:bg-primary-700 dark:hover:bg-primary-300 transition-colors text-center"
            >
              {t("ViewProjects")}
            </a>
            <a
              href="#connect"
              aria-label={t("GetInTouchAriaLabel")}
              className="px-6 py-3  text-lg underline border-gray-400  hover:text-primary-900 dark:border-gray-700 rounded-md  dark:hover:text-primary-400 transition-colors text-center"
            >
              {t("GetInTouch")}
            </a>
          </div>
        </div>

        <div className="w-3/4 flex justify-end relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl"></div>
          <div className="absolute inset-0 opacity-50">
            <div className="grid grid-cols-8 gap-8 h-full">
              {[...Array(32)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-primary rounded-full animate-pulse"
                  style={{
                    animationDelay: `${i * 0.1}s`,
                  }}
                ></div>
              ))}
            </div>
          </div>

          <img
            src="/images/me.webp"
            alt="Christian Ledaal - Developer"
            className="w-[450px] h-[600px] object-cover relative z-10 hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      </section>
      <div className="mt-12">
        <div className="skills-conveyor w-full">
          <div className="skills-conveyor-inner flex w-max items-center gap-12">
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-2xl font-medium text-gray-500 dark:text-gray-600"
              >
                {skill.icon}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
