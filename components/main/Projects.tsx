import React from "react";
import ProjectCard from "../sub/ProjectCard";
import {
  SiFlutter,
  SiFirebase,
  SiNextdotjs,
  SiDart,
  SiMui,
  SiApollographql,
  SiSocketdotio,
  SiChartdotjs,
  SiDocker,
  SiGitlab,
  SiGithub,
  SiTailwindcss,
  SiRedux,
} from "react-icons/si";

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
            { name: "Next.js", icon: <SiNextdotjs size={20} color="#000" /> },
            { name: "MUI", icon: <SiMui size={20} color="#000" /> },
            {
              name: "GraphQl",
              icon: <SiApollographql size={20} color="#000" />,
            },
            {
              name: "SocketIo",
              icon: <SiSocketdotio size={20} color="#000" />,
            },
            {
              name: "SocketIo",
              icon: <SiSocketdotio size={20} color="#000" />,
            },
            { name: "Chart", icon: <SiChartdotjs size={20} color="#000" /> },
            { name: "Docker", icon: <SiDocker size={20} color="#000" /> },
            { name: "GitLab", icon: <SiGitlab size={20} color="#000" /> },
            { name: "Redux", icon: <SiRedux size={20} color="#000" /> },
          ]}
        />
        <ProjectCard
          src="/projects/nike.png"
          title="Nike Store App"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          techs={[
            { name: "GitHub", icon: <SiGithub size={20} color="#47C5FB" /> },
            {
              name: "Tailwind",
              icon: <SiTailwindcss size={20} color="#FFA000" />,
            },
            { name: "Redux", icon: <SiRedux size={20} color="#000" /> },
          ]}
        />
        <ProjectCard
          src="/projects/Maknak.png"
          title="Maknak Mobile Application"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          techs={[
            { name: "Flutter", icon: <SiFlutter size={20} color="#47C5FB" /> },
            { name: "Firebase", icon: <SiDart size={20} color="#47C5FB" /> },
            { name: "GitLab", icon: <SiGitlab size={20} color="#000" /> },
          ]}
        />
      </div>
    </div>
  );
};

export default Projects;
