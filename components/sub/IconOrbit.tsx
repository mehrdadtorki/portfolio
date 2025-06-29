// components/IconOrbit.tsx
import Image from "next/image";
import React from "react";

const icons = [
  { src: "/hero-icons/flutter.svg", top: "15%", left: "40%" },
  { src: "/hero-icons/dart.svg", top: "20%", left: "75%" },
  { src: "/hero-icons/mysql.svg", top: "40%", left: "30%" },
  { src: "/hero-icons/github.svg", top: "45%", left: "75%" },
  { src: "/hero-icons/gitlab.svg", top: "55%", left: "50%" },
  { src: "/hero-icons/react.svg", top: "75%", left: "65%" },
  { src: "/hero-icons/graphql.svg", top: "60%", left: "20%" },
  { src: "/hero-icons/nextjs.svg", top: "32%", left: "55%" },
  { src: "/hero-icons/nodejs.svg", top: "85%", left: "35%" },
  { src: "/hero-icons/postgresql.svg", top: "30%", left: "10%" },
];

const IconOrbit = () => {
  return (
    <div className="relative w-[650px] h-[650px]">
      {/* Background image with opacity */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/mainIcons.svg"
          alt="background-orbit"
          fill
          style={{ objectFit: "cover", opacity: 0.3 }}
        />
      </div>

      {/* Foreground icons */}
      {icons.map((icon, index) => (
        <div
          key={index}
          className="absolute w-[90px] h-[90px] bg-black bg-opacity-10 rounded-xl flex items-center justify-center backdrop-blur-md shadow-md border-2 border-white/30 z-10"
          style={{
            top: icon.top,
            left: icon.left,
            transform: "translate(-50%, -50%)",
          }}
        >
          <Image
            src={icon.src}
            alt={`icon-${index}`}
            width={55}
            height={55}
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default IconOrbit;
