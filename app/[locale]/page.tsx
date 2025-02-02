import ConnectSection from "@/components/Home/ConnectSection";
import EducationSection from "@/components/Home/EducationSection";
import HeroSection from "@/components/Home/HeroSection";
import ProjectsSection from "@/components/Home/ProjectsSection";

export default function HomePage() {
    return (
        <div className="relative z-0">
            <div className="w-full flex flex-col space-y-36 relative">
                <HeroSection />
                <div className="space-y-72 z-20">
                    <EducationSection />
                    <ProjectsSection />
                    <ConnectSection />
                </div>
            </div>
            <div className="absolute inset-0 overflow-hidden z-0">
                <div className="absolute w-[200vw] h-28 bg-primary   origin-center -translate-x-1/2 -translate-y-1/2 -rotate-[24deg]"></div>
            </div>
        </div>

    );
}