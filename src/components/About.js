import React from "react";
import { Typewriter } from "react-simple-typewriter";


export default function About() {
    return (
      <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hello I'm Nicholas
              <br></br>
              I'm 
              <Typewriter
                words={[ 
                " a CS & Math student at the University of Michigan",
                " interested in AI/ML products, scalable backend systems, and high-preformance computing.",
                " a former Datadog SWE Intern", 
                " happy to see you here!",
                " a Michigan Wolverine, Go Blue!"]}
                loop={5}
                cursor
                cursorStyle='/'
                typeSpeed={60}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h1>
            <p className="mb-8 leading-relaxed">
              Currently, I'm
              the Co-Founder of the CS Program 
              at <a className="text-yellow-500" href="https://www.mzbtutors.com/michigan-mentors">Michigan Mentors</a> and
              an incoming Software Engineer Intern at <a className="text-blue-400" href="https://fiverings.com/">Five Rings</a>.
              This past semester, I led an <a className="text-blue-500" href="https://www.atlasdigital.org/clients#services">Atlas Digital </a> 
              project to build a custom GTM platform for our client <a className="text-green-500" href="https://www.neptune.rent/">Neptune</a>.
              This past summer, I was a software engineering intern at <a className="text-purple-500" href="https://www.datadoghq.com/">Datadog</a> on the Integrations Developer Platform team.
              <br></br><br></br>
              This winter, I'm studying abroad in Prague, Czech Republic; I'm always open to tips or recommendations :)
            </p>
            <div className="flex justify-center">
              <a
                href="./Nicholas_Walvoord_resume.pdf"
                className="inline-flex text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Resume
              </a>
              <a
                href="#projects"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                See My Past Work
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded border-2 border-gray-500"
              alt="hero"
              src="./2023-24headshot.jpg.JPG"
            />
          </div>
        </div>
      </section>
    );
}