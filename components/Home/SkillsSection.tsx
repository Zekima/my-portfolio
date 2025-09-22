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

export default function SkillsSection() {
      const skills = [
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
      ];
    
  return (
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
  );
}
