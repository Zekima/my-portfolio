import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { Check } from "lucide-react";
import { Server, Database, RefreshCw, Newspaper, Brush } from "lucide-react";

export default function ProjectsSection() {
  const tSection = useTranslations("HomePage.Projects");
  const tDugnadNett = useTranslations("HomePage.Projects.DugnadNett");
  const tGitFrost = useTranslations("HomePage.Projects.GitFrost");
  const tRuptureMc = useTranslations("HomePage.Projects.RuptureMC");

  const ruptureMcFeatures = [
    { icon: <Server size={18} className="text-primary" />, key: "Features.0" },
    {
      icon: <RefreshCw size={18} className="text-primary" />,
      key: "Features.1",
    },
    {
      icon: <Newspaper size={18} className="text-primary" />,
      key: "Features.2",
    },
    { icon: <Brush size={18} className="text-primary" />, key: "Features.3" },
  ];

  return (
    <section className="flex flex-col space-y-24" id="projects">
      <div>
        <h2 className="text-4xl font-medium">{tSection("Title")}</h2>
        <div className="border-b-2 border-primary/50 py-3" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
        <div className="relative flex rounded-lg flex-row col-span-1 lg:col-span-6 overflow-hidden group bg-secondary dark:bg-transparent text-foreground ">
          <img
            src="/images/projects/rupturemc/rupturemc.webp"
            alt="RuptureMC Website"
            className="h-76"
            loading="lazy"
          />

          <img
            src="/images/projects/rupturemc/rupture-leaderboard.png"
            alt="RuptureMC Leaderboard"
            loading="lazy"
            className=" h-64"
          />
          <div className="relative z-10 flex flex-col justify-start  gap-6 p-6">
            <h3 className="text-3xl font-semibold">RuptureMC</h3>
            <p className="text-md font-light flex flex-col gap-2 ">
              {ruptureMcFeatures.map((feature) => (
                <span key={feature.key} className="flex items-center gap-2">
                  {feature.icon} {tRuptureMc(feature.key)}
                </span>
              ))}
            </p>
            <div className="flex gap-2 items-center">
              <Link
                href="/projects/rupturemc"
                className="bg-primary h-11 flex items-center px-4 text-lg font-medium text-background rounded-md hover:bg-primary-700 dark:hover:bg-primary-300 transition-opacity"
              >
                {tRuptureMc("Button")}
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-secondary col-span-1 lg:col-span-3 rounded-lg flex flex-col justify-between p-6 space-y-6 overflow-hidden relative">
          <div>
            <h3 className="text-3xl font-semibold">DugnadNett</h3>
            <p className="text-lg mt-4 w-72 text-foreground font-light">
              {tDugnadNett("Description")}
            </p>
          </div>
          <Image
            src="/images/projects/dugnadnett/dugnadnett-mockup.png"
            alt="DugnadNett Landing Page"
            width={1200}
            height={1200}
            className="w-[550px] h-auto left-80 top-[-20] absolute rounded-md"
          />
          <div className="flex items-center gap-2">
            <Link
              href="/projects/dugnadnett"
              className="bg-primary h-11 flex items-center px-4 text-lg text-background font-medium rounded-md hover:bg-primary-700 dark:hover:bg-primary-300 transition-opacity"
            >
              {tDugnadNett("Button")}
            </Link>
            <a
              href="https://github.com/Zekima/dugnadnett"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-muted h-11 w-11 flex items-center justify-center text-foreground rounded-md hover:opacity-80 transition-opacity"
            >
              <SiGithub size={24} />
            </a>
          </div>
        </div>

        <div className="relative col-span-1 lg:col-span-3 rounded-lg overflow-hidden group h-full bg-foreground min-h-92">
          <Image
            src="/images/projects/gitfrost/gitfrost.png"
            alt="GitFrost Dashboard"
            fill
            className="object-contain bg-black"
          />
          <div
            className="absolute h-full w-full"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, transparent 50%, black 70%, black 100%)",
            }}
          ></div>
          <div className="relative z-10 flex flex-col justify-end h-full gap-2 p-6 text-white">
            <h3 className="text-3xl font-semibold">GitFrost</h3>
            <p className="text-lg text-white font-light">
              {tGitFrost("Description")}
            </p>
            <div className="flex gap-2 items-center">
              <Link
                href="/projects/gitfrost"
                className="bg-primary h-11 flex items-center px-4 text-lg font-medium text-background rounded-md hover:bg-primary-700 dark:hover:bg-primary-300 transition-opacity"
              >
                {tGitFrost("Button")}
              </Link>
              <a
                href="https://www.figma.com/design/phqvMOfCO6ia16UXJlYcDC/GitFrost?t=A7Mh88JlCh19UM3R-0"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800/80 backdrop-blur-sm h-11 w-11 flex items-center justify-center rounded-md hover:opacity-80 transition-opacity"
              >
                <img src="/icons/figma.svg" alt="Figma logo" className="h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
