import EducationSection from "@/components/Home/EducationSection";
import HeroSection from "@/components/Home/HeroSection";
import ProjectsSection from "@/components/Home/ProjectsSection";

export default function HomePage() {
    return (
        <div className="w-full flex flex-col space-y-36">
            <HeroSection />
            <div className="space-y-60">
                <EducationSection />
                <ProjectsSection />
            </div>
        </div>
    );
}