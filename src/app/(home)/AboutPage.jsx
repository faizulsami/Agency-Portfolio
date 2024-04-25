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
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 px-5 sm:px-10 gap-5 my-10 mt-10'>
            <div className=' ' >
                <h2 className="text-3xl md:text-6xl xl:text-8xl font-semibold">About Us</h2>
                <p>Discovery: We begin by getting to know our clients and their business goals. We conduct a thorough analysis of their target audience, competition, and industry to identify their unique needs.</p>
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
                                    <h2>Kamrul Hasan Anik</h2>
                                    <p>CEO</p>
                                </div>
                            </div>
                            <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores recusandae maxime sapiente sequi unde assumenda ab amet facilis numquam. Aliquam vitae voluptates porro hic, recusandae quis cum itaque? Cumque, soluta.</p>
                        </div>
                    </SwiperSlide>                  <SwiperSlide>
                        <div>
                            <div className='flex gap-5'>
                                <div>
                                    <img className='w-32 h-32 rounded-full' src="./team_img/anik.webp" alt="" />
                                </div>
                                <div>
                                    <h2>Kamrul Hasan Anik</h2>
                                    <p>CEO</p>
                                </div>
                            </div>
                            <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores recusandae maxime sapiente sequi unde assumenda ab amet facilis numquam. Aliquam vitae voluptates porro hic, recusandae quis cum itaque? Cumque, soluta.</p>
                        </div>
                    </SwiperSlide>                  <SwiperSlide>
                        <div>
                            <div className='flex gap-5'>
                                <div>
                                    <img className='w-32 h-32 rounded-full' src="./team_img/rihad.webp" alt="" />
                                </div>
                                <div>
                                    <h2>Kamrul Hasan Anik</h2>
                                    <p>CEO</p>
                                </div>
                            </div>
                            <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores recusandae maxime sapiente sequi unde assumenda ab amet facilis numquam. Aliquam vitae voluptates porro hic, recusandae quis cum itaque? Cumque, soluta.</p>
                        </div>
                    </SwiperSlide>                  <SwiperSlide>
                        <div>
                            <div className='flex gap-5'>
                                <div>
                                    <img className='w-32 h-32 rounded-full' src="./team_img/prince.webp" alt="" />
                                </div>
                                <div>
                                    <h2>Kamrul Hasan Anik</h2>
                                    <p>CEO</p>
                                </div>
                            </div>
                            <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores recusandae maxime sapiente sequi unde assumenda ab amet facilis numquam. Aliquam vitae voluptates porro hic, recusandae quis cum itaque? Cumque, soluta.</p>
                        </div>
                    </SwiperSlide>                  <SwiperSlide>
                        <div>
                            <div className='flex gap-5'>
                                <div>
                                    <img className='w-32 h-32 rounded-full' src="./team_img/ayan.webp" alt="" />
                                </div>
                                <div>
                                    <h2>Kamrul Hasan Anik</h2>
                                    <p>CEO</p>
                                </div>
                            </div>
                            <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores recusandae maxime sapiente sequi unde assumenda ab amet facilis numquam. Aliquam vitae voluptates porro hic, recusandae quis cum itaque? Cumque, soluta.</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default AboutPage;
