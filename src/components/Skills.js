import { ChipIcon, CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { languages, technologies } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <CodeIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Languages
          </h1>
          <h2>
            Ordered from left to right, top to bottm by most experienced to least. 
          </h2>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {languages.map((language) => (
            <div key={language.name} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <img src={language.icon} className="p-2" alt={language.name}/>
                <span className="title-font font-medium text-white">
                  {language.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Libraries, Frameworks, & Technologies
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {technologies.map((technologie) => (
            <div key={technologie.name} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <img src={technologie.icon} className="p-2" alt={technologie.name}/>
                <span className="title-font font-medium text-white">
                  {technologie.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}