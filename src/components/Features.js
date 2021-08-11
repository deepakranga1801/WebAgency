import React from 'react';
import '../components/style/Features.css';
import Button from './subcomponents/Button';
import { IconContext } from "react-icons";
import { AiFillAndroid, SiGooglemybusiness, RiTwitterLine, CgDesktop, FaSearchengin, MdGraphicEq } from 'react-icons/all';

export const Features = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400 text-primary">
                        EXPERTISE
                    </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="#c52b32"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="d9d7687a-355f-4502-8ec4-7945db034688"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#d9d7687a-355f-4502-8ec4-7945db034688)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative">Explore</span>
                    </span>{' '}
                    our <span className="text-primary">Featured</span> capabilities
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    We're the top-rated Mumbai based website development company providing solutions for corporate website development, digital marketing, mobile app development, ecommerce website development and seo services. From wireframe to website, concept to solution, targets to reality, we are here to help.
                </p>
            </div>
            <div className="grid gap-5 px-10 mb-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="p-5 duration-300 transform bg-gray-800 hover:bg-white border rounded shadow-sm hover:-translate-y-2 hover:shadow-lg" id="featurecard">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg">
                        <IconContext.Provider value={{ style: { color: '#fff' } }}>
                            <CgDesktop />
                        </IconContext.Provider>
                    </div>
                    <h6 className="mb-2 font-semibold leading-5 text-white">Website Development</h6>
                    <p className="text-sm text-white">
                        We craft functional, appealing, user-centric, high-performing websites reflecting business identity.
                    </p>
                </div>
                <div className="p-5 duration-300 transform bg-gray-800 hover:bg-white border rounded shadow-sm hover:-translate-y-2 hover:shadow-lg" id="featurecard">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg">
                        <IconContext.Provider value={{ style: { color: '#fff' } }}>
                            <AiFillAndroid />
                        </IconContext.Provider>
                    </div>
                        <h6 className="mb-2 font-semibold leading-5 text-white">Mobile App Development</h6>
                        <p className="text-sm text-white">
                            Intuitive, innovating and customer-engaging mobile apps for all domains, industries and major OS.
                        </p>
                    </div>
                    <div className="p-5 duration-300 transform bg-gray-800 hover:bg-white border rounded shadow-sm hover:-translate-y-2 hover:shadow-lg"  id="featurecard">
                        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg">
                        <IconContext.Provider value={{ style: { color: '#fff' } }}>
                            <MdGraphicEq />
                        </IconContext.Provider>
                        </div>
                        <h6 className="mb-2 font-semibold leading-5 text-white">Graphic Designing</h6>
                        <p className="text-sm text-white">
                            We establish a clear design process, enhancing digital product’s user interface with influential visual aspects.
                        </p>
                    </div>
                    <div className="p-5 duration-300 transform bg-gray-800 hover:bg-white border rounded shadow-sm hover:-translate-y-2 hover:shadow-lg" id="featurecard">
                        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg">
                        <IconContext.Provider value={{ style: { color: '#fff' } }}>
                            <RiTwitterLine />
                        </IconContext.Provider>
                        </div>
                        <h6 className="mb-2 font-semibold leading-5 text-white">Social Media Marketing</h6>
                        <p className="text-sm text-white">
                            Besides web design, we also help brands manage social media, helping you target the right audience in your community.
                        </p>
                    </div>
                    <div className="p-5 duration-300 transform bg-gray-800 hover:bg-white border rounded shadow-sm hover:-translate-y-2 hover:shadow-lg" id="featurecard">
                        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg">
                        <IconContext.Provider value={{ style: { color: '#fff' } }}>
                            <SiGooglemybusiness />
                        </IconContext.Provider>
                        </div>
                        <h6 className="mb-2 font-semibold leading-5 text-white">Digital Marketing</h6>
                        <p className="text-sm text-white">
                            Sponsored marketing solution with keyword-research-based, low-cost bidding process to drive results.
                        </p>
                    </div>
                    <div className="p-5 duration-300 transform bg-gray-800 hover:bg-white border rounded shadow-sm hover:-translate-y-2 hover:shadow-lg" id="featurecard">
                        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg">
                        <IconContext.Provider value={{ style: { color: '#fff' } }}>
                            <FaSearchengin />
                        </IconContext.Provider>
                        </div>
                        <h6 className="mb-2 font-semibold leading-5 text-white">SEO Stratagy</h6>
                        <p className="text-sm text-white">
                            Website structure optimisation coupled with strategized and well-planned marketing for business growth.
                        </p>
                    </div>
                </div>
                <div className="text-center">
                    <Button>Learn More</Button>
                </div>
            </div>
            );
  };
