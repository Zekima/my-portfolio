import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { SiGithub } from "react-icons/si";

export default function ProjectsSection() {
  const tSection = useTranslations("HomePage.Projects");
  const tDugnadNett = useTranslations("HomePage.Projects.DugnadNett");
  const tGitFrost = useTranslations("HomePage.Projects.GitFrost");

  return (
    <section className="flex flex-col space-y-24" id="projects">
      <div>
        <h2 className="text-4xl font-medium">{tSection("Title")}</h2>
        <div className="border-b-2 border-primary/50 py-3" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
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
              className="bg-primary h-11 flex items-center px-4 text-lg text-background font-medium rounded-md hover:opacity-80 transition-opacity"
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
                className="bg-primary h-11 flex items-center px-4 text-lg font-medium text-background rounded-md hover:opacity-80 transition-opacity"
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

        <div className="bg-secondary col-span-1 lg:col-span-2 p-6 rounded-lg">
          <h3 className="text-2xl font-medium">Project Nordlys</h3>
          <p className="text-base mt-2 text-muted-foreground">Coming soon...</p>
        </div>
        <div className="bg-secondary col-span-1 lg:col-span-2 p-6 rounded-lg">
          <h3 className="text-2xl font-medium">Project Svaberg</h3>
          <p className="text-base mt-2 text-muted-foreground">Coming soon...</p>
        </div>
        <div className="bg-secondary col-span-1 lg:col-span-2 p-6 rounded-lg">
          <h3 className="text-2xl font-medium">Project Fyr</h3>
          <p className="text-base mt-2 text-muted-foreground">Coming soon...</p>
        </div>
      </div>
    </section>
  );
}
