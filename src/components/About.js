import React from "react";
import { Typewriter } from "react-simple-typewriter";


export default function About() {
    return (
      <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hello, I'm Nicholas <br></br>
              I'm 
              <Typewriter
                words={[ " a SWE Intern at Datadog",
                " interested in systems, networking, and AI",
                " happy to see you here!",
                " a Michigan Wolverine, Go Blue!"]}
                loop={5}
                cursor
                cursorStyle='|'
                typeSpeed={60}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h1>
            <p className="mb-8 leading-relaxed">
              Hello! I'm an computer science & math student at the University of Michigan Ann Arbor. 
              Currently, I'm an Software Analyst with <a className="text-green-500" href="https://www.withzephyr.com/">Zephyr</a> building a data pipeline
              for their <a className="text-green-500" href="https://www.withzephyr.com/#features">novel computer vision model</a>. 
              I'm also the Director and Co-Founder of the CS Program at <a className="text-green-500" href="https://www.mzbtutors.com/michigan-mentors">Michigan Mentors</a>.
              
              This summer, I'm excited to be working as a software engineering intern at <a className="text-Datadog" href="https://www.datadoghq.com/">Datadog</a>. 
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Contact Me
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
              className="object-cover object-center rounded border-2 border-green-500"
              alt="hero"
              src="./2023-24headshot.jpg.JPG"
            />
          </div>
        </div>
      </section>
    );
}