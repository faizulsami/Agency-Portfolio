"use client"

import Aos from 'aos';
import React, { useEffect } from 'react';
import { IoLocationSharp } from "react-icons/io5";
import 'aos/dist/aos.css';

const Projects = () => {

    useEffect(() => {
        Aos.init({})
    }, [])

    return (
        <section id='portfolio'>
            <div className='mt-36 container mx-auto '>
                <div className="text-center font-raleway pb-10 md:pb-10 " data-aos="fade-up"
                        data-aos-duration="1000">
                    <h2 className="font-semibold text-4xl md:text-5xl">Made by <span className='text-[#4dffb5]' >Craflex</span></h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0'>
                    <div className='rounded-xl w-11/12 mx-auto glass-effect'>
                        <div className='p-5'>
                            <img className='rounded-2xl border' src="./project_img/Craflex_Portfolio_2.webp" alt="" />
                        </div>
                        <div className='ps-5 p-3'>
                            <p className='flex gap-1 items-center'><IoLocationSharp />Washington, United States</p>
                            <h3 className='text-3xl font-bold py-2 text-[#4dffb5]'>
                                PPC ASSIST
                            </h3>
                            <div className='flex mt-5 gap-2'>
                                <p className='border px-3 py-1 rounded-md font-bold md:text-xs lg:text-sm border-[#123627] bg-[#07140f8f]'>Branding</p>
                                <p className='border px-3 py-1 rounded-md font-bold md:text-xs lg:text-sm border-[#123627] bg-[#07140f8f]'>Web Design & Development</p>
                            </div>
                        </div>
                    </div>
                    <div className='rounded-xl w-11/12 mx-auto glass-effect'>
                        <div className='p-5'>
                            <img className='rounded-2xl border ' src="./project_img/Craflex_Portfolio_1.webp" alt="" />
                        </div>
                        <div className='ps-5 p-3'>
                            <p className='flex gap-1 items-center'><IoLocationSharp />London, United Kingdom</p>
                            <h3 className='text-2xl font-bold py-2 text-[#4dffb5] uppercase'>
                                independent mobility guide
                            </h3>
                            <div className='flex mt-5 gap-2'>
                                <p className='border px-3 py-1 rounded-md font-bold text-sm md:text-xs lg:text-sm border-[#123627] bg-[#07140f8f]'>Web Design & Development</p>
                                <p className='border px-3 py-1 rounded-md font-bold text-sm md:text-xs lg:text-sm border-[#123627] bg-[#07140f8f]'>E-Commerce</p>
                            </div>
                        </div>
                    </div>
                    <div className='rounded-xl w-11/12 mx-auto glass-effect'>
                        <div className='p-5'>
                            <img className='rounded-2xl border ' src="./project_img/upturn.webp" alt="" />
                        </div>
                        <div className='ps-5 p-3'>
                            <p className='flex gap-1 items-center'><IoLocationSharp />Dhaka, Bangladesh</p>
                            <h3 className='text-3xl font-bold py-2 text-[#4dffb5]'>
                                UPTURN
                            </h3>
                            <div className='flex mt-5 gap-2'>
                                <p className='border px-3 py-1 rounded-md font-bold text-sm md:text-xs lg:text-sm border-[#123627] bg-[#07140f8f]'>Branding</p>
                                <p className='border px-3 py-1 rounded-md font-bold text-sm md:text-xs lg:text-sm border-[#123627] bg-[#07140f8f]'>Web Design & Development</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
