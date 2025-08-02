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
                    <ProjectsSection />
                    <EducationSection />
                    <ConnectSection />
                </div>
            </div>

        </div>

    );
}