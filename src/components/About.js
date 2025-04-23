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
                " interested in AI/ML products, scalable backend systems, and high-preformance computing.", 
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
              Hello! I'm a computer science & math student at the University of Michigan Ann Arbor 
              and the Director and Co-Founder of the CS Program 
              at <a className="text-green-500" href="https://www.mzbtutors.com/michigan-mentors">Michigan Mentors</a>.
              <br></br><br></br>
              This past semester, I worked the startup <a className="text-green-500" href="https://www.withzephyr.com/">Zephyr </a> 
              to build a production data pipeline,
              integrating their <a className="text-green-500" href="https://www.withzephyr.com/#features">computer vision models </a> 
              to create a <a className="text-green-500" href="https://www.figma.com/slides/bnkBfhhhMLsbXavXDzWLHd/Zephyr-x-Atlas-Digital--FINAL-?node-id=11-1202&t=9uaNrLxoc1lL3CN0-0">full-court basketball homorgaphy</a>.
              <br></br>
              <br></br>
              This summer, I'm excited to be working as a software engineering intern at <a className="text-purple-500" href="https://www.datadoghq.com/">Datadog</a> on the integrations developer platform team. 
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