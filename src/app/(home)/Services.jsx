import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const Services = () => {
  const { scrollYProgress } = useViewportScroll();

  // First card
  // First card
  const scale1 = useTransform(scrollYProgress, [0, 0.6], [1, 0.9]);
  const translateY1 = useTransform(scrollYProgress, [0, 5], [0, 0]);

  // Second card
  const scale2 = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const translateY2 = useTransform(scrollYProgress, [1, 5], [0, 0]);
  // Third card
  const scale3 = useTransform(scrollYProgress, [0, 2], [1, 0.9]);
  const translateY3 = useTransform(scrollYProgress, [0, 5], [0, 0]);

  const scale4 = useTransform(scrollYProgress, [0, -4], [1, 0.9]);
  const translateY4 = useTransform(scrollYProgress, [0, 5], [0, 0]);

  const scale5 = useTransform(scrollYProgress, [0, -20], [1, 0.9]);
  const translateY5 = useTransform(scrollYProgress, [0, 5], [0, -10]);

  return (
    <motion.div className='w-9/12 mx-auto '>

      <motion.section className='border  rounded-tl-2xl rounded-tr-2xl md:rounded-2xl  rounded-b-2xl  top-5 md:p-0 md:top-24 sticky bg-white' style={{ scale: scale1, translateY: translateY1 }}>
        <div className=' grid grid-cols-1 md:grid-cols-12'>
          <div className='col-span-8 py-16  pt-5  border rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none md:rounded-s-2xl bg-red-300  '>
            <h2 className='px-10 font-semibold'>ZERO TO CAREER</h2>
            <div className='px-10 pb-10'>
              <p className='md:py-5 lg:py-10 text-4xl    lg:text-5xl  font-semibold  '>ZERO TO CAREER</p>
              <p className='md:text-xl lg:text-2xl'>You can Join one to one live support sessions three times a day. It is guaranteed to get answers to every question within 10 hours.</p>
            </div>
          </div>
          <div className='col-span-4  text-center  py-10 md:py-24'>
            <p className='text-7xl'>😴</p>
          </div>
        </div>
      </motion.section>

      <motion.section className='  bg-white border  rounded-tl-2xl  rounded-b-2xl rounded-tr-2xl top-16 md:rounded-2xl md:p-0 md:top-36 sticky' style={{ scale: scale2, translateY: translateY2 }}>
      <div className=' grid grid-cols-1 md:grid-cols-12'>
          <div className='col-span-8 py-16  pt-5  border rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none md:rounded-s-2xl  bg-orange-500  '>
            <h2 className='px-10 font-semibold'>ZERO TO CAREER</h2>
            <div className='px-10 pb-10'>
              <p className='md:py-5 lg:py-10 text-4xl    lg:text-5xl  font-semibold '>ZERO TO CAREER</p>
              <p className='md:text-xl lg:text-2xl'>You can Join one to one live support sessions three times a day. It is guaranteed to get answers to every question within 10 hours.</p>
            </div>
          </div>
          <div className='col-span-4  text-center  py-10 md:py-24'>
            <p className='text-7xl'>😴</p>
          </div>
        </div>
      </motion.section>

      <motion.section className=' border rounded-tl-2xl rounded-tr-2xl md:rounded-2xl top-28 rounded-b-2xl bg-white  top-50 md:p-0 md:top-48 sticky' style={{ scale: scale3, translateY: translateY3 }}>
      <div className=' grid grid-cols-1 md:grid-cols-12'>
          <div className='col-span-8 py-16  pt-5  border rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none md:rounded-s-2xl  bg-lime-500  '>
            <h2 className='px-10 font-semibold'>ZERO TO CAREER</h2>
            <div className='px-10 pb-10'>
              <p className='md:py-5 lg:py-10 text-4xl    lg:text-5xl  font-semibold '>ZERO TO CAREER</p>
              <p className='md:text-xl lg:text-2xl'>You can Join one to one live support sessions three times a day. It is guaranteed to get answers to every question within 10 hours.</p>
            </div>
          </div>
          <div className='col-span-4  text-center  py-10 md:py-24'>
            <p className='text-7xl'>😴</p>
          </div>
        </div>
      </motion.section>
      <motion.section className=' border rounded-tl-2xl rounded-tr-2xl md:rounded-2xl top-40 rounded-b-2xl bg-white  top-50 md:p-0 md:top-60 sticky' style={{ scale: scale4, translateY: translateY4 }}>
      <div className=' grid grid-cols-1 md:grid-cols-12'>
          <div className='col-span-8 py-16  pt-5  border rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none md:rounded-s-2xl bg-orange-500  '>
            <h2 className='px-10 font-semibold'>ZERO TO CAREER</h2>
            <div className='px-10 pb-10'>
              <p className='md:py-5 lg:py-10 text-4xl    lg:text-5xl  font-semibold '>ZERO TO CAREER</p>
              <p className='md:text-xl lg:text-2xl'>You can Join one to one live support sessions three times a day. It is guaranteed to get answers to every question within 10 hours.</p>
            </div>
          </div>
          <div className='col-span-4  text-center  py-10 md:py-24'>
            <p className='text-7xl'>😴</p>
          </div>
        </div>
      </motion.section>
      <motion.section className='  bg-white border  rounded-tl-2xl top-60 rounded-b-2xl rounded-tr-2xl md:rounded-2xl md:p-0  md:top-56 sticky' style={{ scale: scale5, translateY: translateY5 }}>
      <div className=' grid grid-cols-1 md:grid-cols-12'>
          <div className='col-span-8 py-16  pt-5  border rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none md:rounded-s-2xl bg-red-300  '>
            <h2 className='px-10 font-semibold'>ZERO TO CAREER</h2>
            <div className='px-10 pb-10'>
              <p className='md:py-5 lg:py-10 text-4xl    lg:text-5xl  font-semibold '>ZERO TO CAREER</p>
              <p className='md:text-xl lg:text-2xl'>You can Join one to one live support sessions three times a day. It is guaranteed to get answers to every question within 10 hours.</p>
            </div>
          </div>
          <div className='col-span-4  text-center  py-10 md:py-24'>
            <p className='text-7xl'>😴</p>
          </div>
        </div>
      </motion.section>

    </motion.div>
  );
};

export default Services;
