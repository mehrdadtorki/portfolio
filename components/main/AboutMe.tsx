"use client";
import React from "react";
import Image from "next/image";
import GitHubCalendar from "react-github-calendar";
import Lottie from "lottie-react";
import animationData from "@/public/animation2.json";
import ContactMeButton from "../sub/ContactMe";
import Button from "../sub/ContactMe";

const AboutMe = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-fit text-white overflow-hidden">
      <div className="mx-auto flex flex-col md:flex-row items-center px-6 py-16">
        <div className="flex-1 flex justify-center">
          <Lottie
            animationData={animationData}
            className="flex justify-center items-center"
            loop={true}
          />
        </div>
        <div className="flex-1 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Building
            <span className="text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Modern Apps{" "}
            </span>
            <br className="hidden md:block" /> with Passion and Impact
          </h1>
          <p className="text-lg md:text-xl max-w-xl mb-8">
            I am a dedicated developer with 4+ years of experience in React,
            Next.js, Node.js, and Flutter. I build secure, high-performance
            applications for exchanges, currency platforms, and Instagram tools.
            I love solving problems and creating meaningful user experiences.
          </p>
          <Button />
          <div className="mt-8">
            <GitHubCalendar colorScheme="dark" username="mehrdadtorki" />
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
