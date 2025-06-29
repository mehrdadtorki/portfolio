import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { SiFlutter, SiFirebase, SiNextdotjs, SiDart } from "react-icons/si";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/projects/moneyx.png"
          title="Moneyx Exchange Dashboard"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            techs={[
    { name: "Flutter", icon: <SiFlutter size={20} color="#47C5FB" /> },
    { name: "Firebase", icon: <SiFirebase size={20} color="#FFA000" /> },
    { name: "Next.js", icon: <SiNextdotjs size={20} color="#000" /> },
  ]}
        />
        <ProjectCard
          src="/projects/nike.png"
          title="Nike Store App"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            techs={[
    { name: "Flutter", icon: <SiFlutter size={20} color="#47C5FB" /> },
    { name: "Firebase", icon: <SiFirebase size={20} color="#FFA000" /> },
    { name: "Next.js", icon: <SiNextdotjs size={20} color="#000" /> },
  ]}
        />
        <ProjectCard
          src="/projects/Maknak.png"
          title="Maknak Mobile Application"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            techs={[
    { name: "Flutter", icon: <SiFlutter size={20} color="#47C5FB" /> },
    { name: "Firebase", icon: <SiDart size={20} color="#47C5FB" /> },
    { name: "Next.js", icon: <SiNextdotjs size={20} color="#000" /> },
  ]}
        />
      </div>
    </div>
  );
};

export default Projects;
