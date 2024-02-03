import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { GiLoveMystery } from "react-icons/gi";

const Projects = () => {
    return (
        <section>
            <div className='my-48 container mx-auto'>
                <div className="text-center font-raleway">
                    <h2 className="font-semibold text-xl md:text-4xl pb-10">Made by <span className='text-[#4dffb5]'>Quantum MAS</span></h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0'>
                    <div className='rounded-xl w-11/12 mx-auto glass-effect'>
                        <div className='p-5'>
                            <img className='rounded-2xl border ' src="https://i.ibb.co/Q6z8W3F/Dummy1.png" alt="" />
                        </div>
                        <div className='ps-5 p-3'>
                            <p className='flex gap-1 items-center'><IoLocationSharp />Kamen, Germany</p>
                            <h3 className='text-3xl font-bold py-2 text-[#4dffb5]'>
                                FSM-Montage
                            </h3>
                            <div className='flex mt-5 gap-2'>
                                <p className='border px-3 py-1 rounded-md font-bold md:text-xs lg:text-sm border-[#123627] bg-[#07140f8f]'>Web Design</p>
                                <p className='border px-3 py-1 rounded-md font-bold md:text-xs lg:text-sm border-[#123627] bg-[#07140f8f]'>Branding</p>
                            </div>
                        </div>
                    </div>
                    <div className='rounded-xl w-11/12 mx-auto glass-effect'>
                        <div className='p-5'>
                            <img className='rounded-2xl border ' src="https://i.ibb.co/qWJ8dt9/Dummy2.png" alt="" />
                        </div>
                        <div className='ps-5 p-3'>
                            <p className='flex gap-1 items-center'><IoLocationSharp />Kamen, Germany</p>
                            <h3 className='text-3xl font-bold py-2 text-[#4dffb5]'>
                                FSM-Montage
                            </h3>
                            <div className='flex mt-5 gap-2'>
                                <p className='border px-3 py-1 rounded-md font-bold text-sm md:text-xs lg:text-sm border-[#123627] bg-[#07140f8f]'>Web Design</p>
                                <p className='border px-3 py-1 rounded-md font-bold text-sm md:text-xs lg:text-sm border-[#123627] bg-[#07140f8f]'>Branding</p>
                            </div>
                        </div>
                    </div>
                    <div className='rounded-xl w-11/12 mx-auto glass-effect'>
                        <div className='p-5'>
                            <img className='rounded-2xl border ' src="https://i.ibb.co/x7jV2Kf/Dummy3.png" alt="" />
                        </div>
                        <div className='ps-5 p-3'>
                            <p className='flex gap-1 items-center'><IoLocationSharp />Kamen, Germany</p>
                            <h3 className='text-3xl font-bold py-2 text-[#4dffb5]'>
                                FSM-Montage
                            </h3>
                            <div className='flex mt-5 gap-2'>
                                <p className='border px-3 py-1 rounded-md font-bold text-sm md:text-xs lg:text-sm border-[#123627] bg-[#07140f8f]'>Web Design</p>
                                <p className='border px-3 py-1 rounded-md font-bold text-sm md:text-xs lg:text-sm border-[#123627] bg-[#07140f8f]'>Branding</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
