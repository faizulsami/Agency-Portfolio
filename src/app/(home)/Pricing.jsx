"use client"

import { IoCheckmarkSharp, IoReloadCircleSharp,IoRocketSharp } from "react-icons/io5"
import { IoIosPause } from "react-icons/io";
import { FaBuilding,FaInfinity } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa6";
import { HiChartBar } from "react-icons/hi";
import { BsGraphUpArrow } from "react-icons/bs";
import { IoLogoFigma,IoCard,IoPersonSharp } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { useEffect } from "react";
import Aos from "aos";

const Pricing = () => {
    useEffect(() => {
        Aos.init({})
    }, [])

    return (
        <section id="price" className="z-10 pt-10 md:pt-32">
            <div className="background-circle"></div>
            <div className="text-center">
                <h2 className="font-semibold text-4xl md:text-5xl py-2">Pricing that fits all</h2>
                <p className="text-lg lg:text-xl pt-3 w-8/12 lg:w-6/12 mx-auto font-light">Web Design & Development Rates are <span className="text-[#4dffb5]">Transparent</span>, Competitive Pricing</p>
            </div>
            <div className='cs-section'>
                <div className="content grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                    <div  data-aos="fade-right" className="basic box scale-100">
                        <h2 className="cs-title text-center py-2 font-semibold text-xl">Standard</h2>
                        <div className="view">
                            <div className="icon">
                                <img src="https://i.postimg.cc/DzrTN72Z/airplane.png" alt="airplane" />
                            </div>
                            <div className="cost">
                                <p className="text-[#123627] text-5xl font-semibold">$800</p>
                            </div>
                        </div>
                        <div className="description">
                            <ul className='cs-ul grid gap-4 text-sm font-semibold'>
                                <li className='cs-li flex items-center text-[#123627]'><IoLogoFigma className="me-2 text-[#123627]" size={20} />Custom Web Design in Figma</li>
                                <li className='cs-li flex items-center text-[#123627]'><FaBuilding className="me-2 text-[#123627]" size={20} />No-Code/Code Development</li>
                                <li className='cs-li flex items-center text-[#123627]'><IoReloadCircleSharp className="me-2 text-[#123627]" size={24} />1 Request at a Time</li>
                                <li className='cs-li flex items-center text-[#123627]'><IoIosPause className="me-2 text-[#123627]" size={24} />Pause or cancel anytime</li>
                                <li className='cs-li flex items-center text-[#123627]'><IoCard className="me-2 text-[#123627]" size={24} />Branding (Logo, Font, Colours<br />& Graphics)</li>
                                <li className='cs-li flex items-center text-[#123627]'><IoPersonSharp className="me-2 text-[#123627]" size={22} />Dedicated Project Manager<br />at your disposal</li>
                            </ul>
                        </div>
                        <button type="button" className="w-10/12 mx-auto text-[#121212] border border-[#4dffb5] hover:bg-[#4dffb5] font-bold rounded-3xl text-sm px-5 py-2.5 text-center mb-5">Lets Talk</button>
                    </div>
                    <div  data-aos="fade-left" className="basic box-2 shadow-custom lg:scale-105">
                        <h2 className="cs-title text-center py-2 font-semibold text-xl">Business</h2>
                        <div className="view-2">
                            <div className="icon">
                                <img src="https://i.postimg.cc/wvFd6FRY/startup.png" alt="startup" />
                            </div>
                            <div className="cost">
                                <p className="text-[#123627] text-5xl font-semibold">$1500</p>
                            </div>
                        </div>
                        <div className="description">
                            <ul className='cs-ul grid gap-4 text-sm font-semibold'>
                                <li className='cs-li flex items-center text-[#123627]'><IoRocketSharp className="me-2 text-[#123627]" size={20} />Everything from Standard Plan</li>
                                <li className='cs-li flex items-center text-[#123627]'><FaCreditCard className="me-2 text-[#123627]" size={20} />Transactional Sites</li>
                                <li className='cs-li flex items-center text-[#123627]'><HiChartBar className="me-2 text-[#123627]" size={20} />High Conversion Landing Pages</li>
                                <li className='cs-li flex items-center text-[#123627]'><FaInfinity className="me-2 text-[#123627]" size={20} />Unlimited Revisions</li>
                                <li className='cs-li flex items-center text-[#123627]'><BsGraphUpArrow className="me-2 text-[#123627]" size={20} />SEO Optimized</li>
                                <li className='cs-li flex items-center text-[#123627]'><AiOutlineMessage className="me-2 text-[#123627]" size={20} />Consultation & Feedback <br /> on your Business</li>
                            </ul>
                        </div>
                        <button type="button" className="w-10/12 mx-auto text-[#121212] hover:text-white border border-[#121212] hover:border-[#123627] hover:bg-[#123627] font-bold rounded-3xl text-sm px-5 py-2.5 text-center mb-5">Lets Talk</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
