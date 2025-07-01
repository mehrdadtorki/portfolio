import React from "react";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div
      style={{ backgroundImage: "/me.png", backgroundSize: "cover" }}
      className="flex flex-row relative items-center justify-center min-h-screen w-full h-fit text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 py-16">
        {/* Text Content */}
        <div className="flex-1 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Building Modern Apps
            <br className="hidden md:block" /> with Passion and Impact
          </h1>
          <p className="text-lg md:text-xl max-w-xl mb-8">
            I am a dedicated developer with 3+ years of experience in React,
            Next.js, Node.js, and Flutter. I build secure, high-performance
            applications for exchanges, currency platforms, and Instagram tools.
            I love solving problems and creating meaningful user experiences.
          </p>
          <button className="bg-white text-black font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-200 transition">
            Contact Me
          </button>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl">
            <Image
              src="/me.png" // Replace with your image path
              alt="Your photo"
              layout="fill"
              objectFit="cover"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Optional Stats */}
      <div className="absolute top-10 right-10 text-right">
        <p className="text-3xl font-bold">3+</p>
        <p className="text-lg">Years Experience</p>
      </div>
    </div>
  );
};

export default AboutMe;
