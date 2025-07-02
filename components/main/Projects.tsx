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
  SiFigma,
  SiAndroid,
  SiTypescript,
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
            {
              name: "Next.js",
              icon: <SiNextdotjs size={20} color="#878787" />,
            },
            { name: "MUI", icon: <SiMui size={20} color="#00a9f7" /> },
            {
              name: "GraphQl",
              icon: <SiApollographql size={20} color="#ee0097" />,
            },
            {
              name: "SocketIo",
              icon: <SiSocketdotio size={20} color="#fff" />,
            },
            { name: "Chart", icon: <SiChartdotjs size={20} color="#f7c954" /> },
            { name: "Docker", icon: <SiDocker size={20} color="#008bdb" /> },
            { name: "GitLab", icon: <SiGitlab size={20} color="#f56a25" /> },
            { name: "Redux", icon: <SiRedux size={20} color="#7248b5" /> },
          ]}
        />
        <ProjectCard
          src="/projects/nike.png"
          title="Nike Store App"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          techs={[
            {
              name: "TypeScript",
              icon: <SiTypescript size={20} color="#0077c7" />,
            },
            { name: "GitHub", icon: <SiGithub size={20} color="#fff" /> },
            {
              name: "Tailwind",
              icon: <SiTailwindcss size={20} color="#16b9c4" />,
            },
            { name: "Redux", icon: <SiRedux size={20} color="#7248b5" /> },
          ]}
        />
        <ProjectCard
          src="/projects/Maknak.png"
          title="Maknak Mobile Application"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          techs={[
            { name: "Flutter", icon: <SiFlutter size={20} color="#47C5FB" /> },
            { name: "Dart", icon: <SiDart size={20} color="#055596" /> },
            { name: "GitLab", icon: <SiGitlab size={20} color="#f56a25" /> },
            { name: "Figma", icon: <SiFigma size={20} color="#9c57f7" /> },
            { name: "Android", icon: <SiAndroid size={20} color="#79ad40" /> },
            {
              name: "GraphQl",
              icon: <SiApollographql size={20} color="#ee0097" />,
            },

            { name: "Docker", icon: <SiDocker size={20} color="#008bdb" /> },
          ]}
        />
      </div>
    </div>
  );
};

export default Projects;
