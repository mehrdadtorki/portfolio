import React from "react";
import Image from "next/image";

interface Props {
  src: string;
  title: string;
  description: string;
  techs?: { name: string; icon: JSX.Element }[];
}

const ProjectCard = ({ src, title, description, techs = [] }: Props) => {
  return (
    <div className="w-full md:w-2/5 bg-[#1c1c24] rounded-2xl overflow-hidden shadow-xl border border-[#2A0E61] hover:scale-105 transition-transform duration-300">
      <div className="relative h-[270px] w-full">
        <Image src={src} alt={title} fill className="object-cover bg-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      <div className="p-5 space-y-3">
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <p className="text-sm text-gray-300">{description}</p>
        {techs.length > 0 && (
          <div className="flex items-center gap-3 pt-2 flex-wrap">
            {techs.map((tech, index) => (
              <div key={index} className="group relative">
                {tech.icon}
                <div className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
