import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { about } from "../../resources/personal";

function About() {
  return (
    <div>
      <SectionTitle title="About" />

      {about.map((abouts, index) => (
        <div key={""}>
          <div className="flex w-full items-center sm:flex-col lg:gap-8">
            <div className="h-[70vh] w-1/2 sm:w-full">
              <dotlottie-player
                src={abouts.lottieURL}
                background="transparent"
                speed="1"
                autoplay
              ></dotlottie-player>
            </div>
            <div className="flex flex-col gap-5 w-1/2 sm:w-full">
              <p className="text-white">{abouts.description1 || ""}</p>
              <p className="text-white">{""}</p>
            </div>
          </div>

          <div className="py-5">
            <h1 className="text-tertiary text-xl">
              Here are a few technologies I’ve been working with recently:
            </h1>
            <div className="flex flex-wrap gap-10 mt-5">
              {abouts.skills.map((skill, index) => (
                <div className="border border-tertiary py-3 px-10 sm:px-7 lg:px-5">
                  <h1 className="text-tertiary">{skill}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default About;
