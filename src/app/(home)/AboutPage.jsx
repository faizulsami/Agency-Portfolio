import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const AboutPage = () => {
    const [swiperRef, setSwiperRef] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section>
            <div className='grid grid-cols-1 md:grid-cols-2 my-24'>
                <div className='py-5 md:pb-96'>
                    <h2 className='text-5xl md:text-7xl'>About Us</h2>
                </div>
                <div>
                    <h3 className='text-3xl'>
                        Our team helps businesses succeed on social media
                    </h3>
                    <p>
                        At our company, we believe in the power of social media to drive
                        success. Our team helps businesses succeed on social media. Our team
                        helps businesses succeed on social media. Our team helps businesses
                        succeed on social media.
                    </p>
                    <div className='my-10'>
                        <Swiper
                            onSwiper={setSwiperRef}
                            slidesPerView={isMobile ? 1 : 2} // Adjust slidesPerView based on device size
                            centeredSlides={true}
                            spaceBetween={50}
                            
                            pagination={{
                                type: 'fraction',
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className='mySwiper'
                        >
                            <SwiperSlide>   <div className='my-10 h-96 w-96 relative '
                                style={{
                                    backgroundImage: "url(https://lh3.googleusercontent.com/a/ACg8ocLkmKSoo-uVVRR5LbVA-ymhVzn0gsLsvf0VbXyg5rhicy0=s288-c-no)",
                                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
                                }}
                            >
                                <div className='absolute w-full h-full grid content-end text-center   text-white opacity-0 hover:opacity-100 transition-opacity duration-300'>

                                    <h3 className='text-5xl'>Anik</h3>
                                    <p>Co-founder</p>
                                </div>
                            </div></SwiperSlide>  <SwiperSlide>   <div className='my-10 h-96 w-96 relative '
                                style={{
                                    backgroundImage: "url(https://lh3.googleusercontent.com/a/ACg8ocLkmKSoo-uVVRR5LbVA-ymhVzn0gsLsvf0VbXyg5rhicy0=s288-c-no)",
                                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
                                }}
                            >
                                <div className='absolute w-full h-full grid content-end text-center   text-white opacity-0 hover:opacity-100 transition-opacity duration-300'>

                                    <h3 className='text-5xl'>Anik</h3>
                                    <p>Co-founder</p>
                                </div>
                            </div></SwiperSlide>  <SwiperSlide>   <div className='my-10 h-96 w-96 relative '
                                style={{
                                    backgroundImage: "url(https://lh3.googleusercontent.com/a/ACg8ocLkmKSoo-uVVRR5LbVA-ymhVzn0gsLsvf0VbXyg5rhicy0=s288-c-no)",
                                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
                                }}
                            >
                                <div className='absolute w-full h-full grid content-end text-center   text-white opacity-0 hover:opacity-100 transition-opacity duration-300'>

                                    <h3 className='text-5xl'>Anik</h3>
                                    <p>Co-founder</p>
                                </div>
                            </div></SwiperSlide>  <SwiperSlide>   <div className='my-10 h-96 w-96 relative '
                                style={{
                                    backgroundImage: "url(https://lh3.googleusercontent.com/a/ACg8ocLkmKSoo-uVVRR5LbVA-ymhVzn0gsLsvf0VbXyg5rhicy0=s288-c-no)",
                                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
                                }}
                            >
                                <div className='absolute w-full h-full grid content-end text-center   text-white opacity-0 hover:opacity-100 transition-opacity duration-300'>

                                    <h3 className='text-5xl'>Anik</h3>
                                    <p>Co-founder</p>
                                </div>
                            </div></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;
