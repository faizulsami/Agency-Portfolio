'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import sami from "../../../public/team_img/Sami.webp";
import prince from "../../../public/team_img/Prince.webp";
import rihad from "../../../public/team_img/Rihad.webp";
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa6';

const about = [
    {
        name: "Faizul Sami",
        place: "Founder & CEO",
        linkedin: "https://www.linkedin.com/in/faizul-1slam/",
        twitter: "https://x.com/faizul_sami",
        img: sami,
        desc: "We're a web design agency with a seamless operation, delivering projects on time and within budget. Our clients experience clear communication and transparent development processes."
    },
    {
        name: "Shahriar Prince",
        place: "Co-Founder & COO",
        linkedin: "https://www.linkedin.com/in/shahriarprince/",
        twitter: "https://x.com/shahriarprinc",
        img: prince,
        desc: "Innovation is at the forefront of everything we do. We utilize cutting-edge technologies to build robust and scalable websites that can adapt to the ever-evolving digital landscape."
    },
    {
        name: "Rahimul Islam Rihad",
        place: "CMO",
        linkedin: "https://www.linkedin.com/in/rahimul-islam-rihad-617a52265/",
        twitter: "",
        img: rihad,
        desc: "At our core, we believe in fostering genuine connections between brands and their audiences. We don't just build websites, we craft digital experiences that drive results."
    },
]

const AboutPage = () => {
    return (
        <div id='about' className='pt-10 md:pt-32'>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 px-5 sm:px-10 gap-5 my-10 mt-10'>
                <div>
                    <h2 className="text-3xl md:text-6xl my-10 font-semibold"><span className='text-[#4dffb5]'>About</span> Us</h2>
                    <p><span className='font-bold'>Discovery:</span> We begin by getting to know our clients and their business goals. We conduct a thorough analysis of their target audience, competition, and industry to identify their unique needs.</p>
                </div>
                <div className='my-10 col-span-2'>
                    <Swiper
                        spaceBetween={30}
                        autoplay={{ delay: 3000 }}
                        modules={[Autoplay, Pagination, Navigation]}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                        }}
                    >
                        {about.map((member, index) => (
                            <SwiperSlide key={index}>
                                <div>
                                    <div className='flex gap-5'>
                                        <div>
                                            <Image
                                                className='rounded-full'
                                                src={member.img}
                                                alt={member.name}
                                                width={100}
                                                height={100}
                                            />
                                        </div>
                                        <div>
                                            <h2>{member.name}</h2>
                                            <p className='text-[#4dffb5]'>{member.place}</p>
                                            <div className='flex gap-6 pt-2'>
                                                <a
                                                    className="text-[#4dffb5] hover:text-white"
                                                    href={member.linkedin}
                                                    rel="linkedin"
                                                    target="_blank"
                                                >
                                                    <FaLinkedinIn size={18} className="transition-transform hover:scale-150 hover:-translate-y-1" />
                                                </a>
                                                <a
                                                    className="text-[#4dffb5] hover:text-white"
                                                    href={member.twitter}
                                                    rel="twitter"
                                                    target="_blank"
                                                >
                                                    <FaTwitter size={20} className="transition-transform hover:scale-150 hover:-translate-y-1" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <p className='mt-3'>{member.desc}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
