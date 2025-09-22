"use client";

import { Star } from "lucide-react";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import SkillsSection from "./SkillsSection";


export default function HeroSection() {
  const t = useTranslations("HomePage.Hero");


  return (
    <div className="pb-12">
      <section
        className="w-full min-h-[80vh] flex items-center  xl:flex-row flex-col space-y-6 z-10 gap-4 pb-8"
        id="hero"
      >
        <div className="w-full space-y-8 text-center xl:text-left px-6 mt-24">
          <div className="flex flex-col gap-4 xl:items-start items-center">
            <span className="text-sm w-fit font-semibold tracking-wider bg-primary-200 dark:bg-[#1d1d1d] dark:text-primary-300 text-primary-900 px-3 py-1 rounded-full">
              {t("Badge")}
            </span>

            <h1 className="text-7xl xl:text-9xl font-black leading-none">
              {t("Title")}
            </h1>
          </div>

          <p className="text-2xl xl:text-4xl  text-gray-800 dark:text-gray-300">
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
          <div className="!mt-16 pt-6 border-t border-black/10 dark:border-white/10 text-left">
            <blockquote className="relative">
              {/* Stars - slightly smaller margin */}
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                  />
                ))}
              </div>

              {/* Quote Text - slightly smaller and lighter */}
              <p className="text-base font-light italic text-gray-600 dark:text-gray-400 leading-relaxed">
                “Christian was amazing. Super knowledgeable with fast
                integration and great communication. Delivered excellent quality
                work exceeding timeline and product delivery expectations. I
                highly recommend working with him.”
              </p>

              {/* Author - smaller font size */}
              <footer className="mt-4 text-sm font-medium text-gray-800 dark:text-gray-300">
                — Freelance client
              </footer>
            </blockquote>
          </div>
        </div>

        <div className="w-3/4 flex justify-end relative">
          <div className="absolute inset-0 bg-linear-to-r from-transparent to-primary rounded-3xl"></div>
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
            className="w-[450px] grayscale h-[600px] object-cover relative z-10 hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      </section>
      <SkillsSection/>
    </div>
  );
}
