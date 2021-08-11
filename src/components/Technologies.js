import React from 'react';
import './style/Technologies.css';
import { IconContext } from "react-icons";
import IconsData from './subcomponents/IconsData';

const Technologies = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-24 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400 text-primary">
                Our Expertise In Development
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="7e5e8ff8-1960-4094-a63a-2a0c0f922d69"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#7e5e8ff8-1960-4094-a63a-2a0c0f922d69)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Latest</span>
            </span>{' '}
            <span className="text-primary">Technologies</span> At Your Service
          </h2>
        </div>
            <div className="grid grid-cols-2 gap-5 row-gap-5 sm:grid-cols-3 lg:grid-cols-6">
                {IconsData.map((item, index) => {
                    return (
                        <div className="text-center p-5 duration-300 transform border rounded shadow-sm hover:-translate-y-2 hover:shadow-lg" key={index} id="tech">
                            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full svg-bg sm:w-12 sm:h-12">
                                <IconContext.Provider value={{ style: { color: '#fff' } }}>
                                    {item.icon}
                                </IconContext.Provider>
                            </div>
                            <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
                                {item.title}
                            </h6>
                        </div>
                    );
                })}

            </div>
        </div>
    );
};

export default Technologies;