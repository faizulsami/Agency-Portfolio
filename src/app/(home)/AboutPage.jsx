import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const AboutPage = () => {
    const [swiperRef, setSwiperRef] = useState(null);
    const [slidesPerView, setSlidesPerView] = useState(3); // Default to 3 slides

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setSlidesPerView(1); // For mobile, show 1 slider
            } else if (window.innerWidth < 1024) {
                setSlidesPerView(2); // For medium screens, show 2 sliders
            } else if (window.innerWidth < 1280) {
                setSlidesPerView(2); // For large screens, show 3 sliders
            } else {
                setSlidesPerView(2); // For extra-large screens, show 4 sliders
            }
        };

        // Call handleResize on initial load
        handleResize();

        // Add event listener to handle window resize
        window.addEventListener('resize', handleResize);

        // Remove event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div id='about' className='pt-10 md:pt-32'>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 px-5 sm:px-10 gap-5 my-10 mt-10'>
            <div>
                <h2 className="text-3xl md:text-6xl font-semibold"><span className='text-[#4dffb5]'>About</span> Us</h2>
                <p><span className='font-bold'>Discovery:</span> We begin by getting to know our clients and their business goals. We conduct a thorough analysis of their target audience, competition, and industry to identify their unique needs.</p>
            </div>
            <div className='my-10 col-span-2 '>
                <Swiper
                    onSwiper={setSwiperRef}
                    slidesPerView={slidesPerView}
                    watchSlidesProgress={true}
                    spaceBetween={30}
                    autoplay={{ delay: 2000 }}
                    modules={[Autoplay, Pagination, Navigation]}
                >
                    <SwiperSlide>
                        <div>
                            <div className='flex gap-5 '>
                                <div>
                                    <img className='w-32 h-32 rounded-full' src="./team_img/sami.webp" alt="" />
                                </div>
                                <div>
                                    <h2>Faizul Sami</h2>
                                    <p className='text-[#4dffb5]'>Co Founder & CEO</p>
                                </div>
                            </div>
                            <p className='mt-3'>We're a web design agency with a seamless operation, delivering projects on time and within budget. Our clients experience clear communication and transparent development processes.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className='flex gap-5'>
                                <div>
                                    <img className='w-32 h-32 rounded-full' src="./team_img/anik.webp" alt="" />
                                </div>
                                <div>
                                    <h2>Kamrul Hasan Anik</h2>
                                    <p className='text-[#4dffb5]'>Co Founder & COO</p>
                                </div>
                            </div>
                            <p className='mt-3'>We run a smooth operation here, ensuring every project is delivered on time and within budget. Our clients can expect clear communication and a transparent development process.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className='flex gap-5'>
                                <div>
                                    <img className='w-32 h-32 rounded-full' src="./team_img/prince.webp" alt="" />
                                </div>
                                <div>
                                    <h2>Shahriar Prince </h2>
                                    <p className='text-[#4dffb5]'>Co Founder & CTO</p>
                                </div>
                            </div>
                            <p className='mt-3'>Innovation is at the forefront of everything we do. We utilize cutting-edge technologies to build robust and scalable websites that can adapt to the ever-evolving digital landscape.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className='flex gap-5'>
                                <div>
                                    <img className='w-32 h-32 rounded-full' src="./team_img/rihad.webp" alt="" />
                                </div>
                                <div>
                                    <h2>Rahimul Islam Rihad </h2>
                                    <p className='text-[#4dffb5]'>Manager</p>
                                </div>
                            </div>
                            <p className='mt-3'>At our core, we believe in fostering genuine connections between brands and their audiences. We don't just build websites, we craft digital experiences that drive results.At our core, we believe in fostering genuine connections between brands and their audiences.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className='flex gap-5'>
                                <div>
                                    <img className='w-32 h-32 rounded-full' src="./team_img/ayan.webp" alt="" />
                                </div>
                                <div>
                                    <h2>Shahriar Alam Ayan </h2>
                                    <p className='text-[#4dffb5]'>CMO</p>
                                </div>
                            </div>
                            <p className='mt-3'>In today's data-driven world, understanding your target audience is the key. We leverage strategic marketing to ensure your brand resonates with the right people.</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
        </div>
    );
};

export default AboutPage;
