import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import React from "react";

export default function Contact() {
  
    return (
        <section id="contact" className="relative">
          <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                title="map"
                className="absolute inset-0"
                style={{ filter: "opacity(0.7)" }}
                src="https://www.google.com/maps/embed/v1/place?q=2260+Hayward+Street,+Ann+Arbor,+MI,+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              />
              <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1">
                    Contact if Needed
                  </p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                    EMAIL
                  </h2>
                  <a className="text-indigo-400 leading-relaxed">
                    nwlvrd@umich.edu
                    nwalvoord1@gmail.com
                  </a>
                  <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                    PHONE
                  </h2>
                  <p className="leading-relaxed">773-308-4768</p>
                </div>
              </div>
            </div>
            <div className="flex justify-around items-space w-1/4">
              <a
                href="https://www.linkedin.com/in/nicholas-walvoord/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-1/4"
              >
                <FaLinkedin className="text-green-500 hover:text-blue-700 w-full h-full" />
              </a>
              <a
                href="https://github.com/nwlvrd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-1/4"
                >
                <FaGithub className="text-white-500 hover:text-white w-full h-full"/>
              </a>
            </div>
          </div>
        </section>
      );
    }