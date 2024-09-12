"use client"

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
    <section id='services' className='pt-4 md:pt-12'>
      <div data-aos="fade-up"
        data-aos-duration="1000" className='my-10 text-center font-semibold text-3xl md:text-5xl'>
        <h2 className="font-semibold text-4xl md:text-5xl py-2">Our <span className='text-[#4dffb5]'>Services</span></h2>
      </div>
      <motion.div className='w-10/12 md:w-11/12 lg:w-9/12 mx-auto'>

        <motion.section
          className='mb-5 rounded-tl-2xl rounded-tr-2xl md:rounded-2xl  rounded-b-2xl  top-5 md:p-0 md:top-24 sticky bg-white' style={{ scale: scale1, translateY: translateY1 }}>
          <div className='grid grid-cols-1 md:grid-cols-12 text-center lg:text-left'>
            <div className='col-span-8 py-5 lg:py-16  md:pt-8 lg:pt-5 rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none md:rounded-s-2xl cs-bg-services-1'>
              <h2 className='px-10 font-bold'>CMS Development</h2>
              <div className='px-10 pb-10'>
                <p className='py-5 md:py-8 lg:py-10 text-xl md:text-2xl lg:text-4xl font-bold'>CMS Development (WordPress, Webflow, Wix)</p>
                <p className='leading-6 md:leading-8 text-sm md:text-xl lg:text-2xl font-semibold'>Manage content, save time and boost your online presence with a powerful CMS for your business.</p>
              </div>
            </div>
            <div className='col-span-4 mx-auto'>
              <img src="https://i.ibb.co/BVdgt98/qmas-custom-icon-2.png" className='w-8/12 mx-auto' alt="" />
            </div>
          </div>
        </motion.section>
        <motion.section
          className='mb-5 bg-white rounded-tl-2xl  rounded-b-2xl rounded-tr-2xl top-16 md:rounded-2xl md:p-0 md:top-36 sticky' style={{ scale: scale2, translateY: translateY2 }}>
          <div className='grid grid-cols-1 md:grid-cols-12 text-center lg:text-left'>
            <div className='col-span-8 py-5 lg:py-16 md:pt-8 lg:pt-5 rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none md:rounded-s-2xl cs-bg-services-2'>
              <h2 className='px-10 font-bold'>Fully Custom Web Development</h2>
              <div className='px-10 pb-10'>
                <p className='py-5 md:py-8 lg:py-10 text-xl md:text-2xl lg:text-4xl font-bold'>Custom Web Development (MERN Stack)</p>
                <p className='leading-6 md:leading-8 text-sm md:text-xl lg:text-2xl font-semibold'>Build a truly unique website with our MERN stack expertise. Stand out and connect authentically.</p>
              </div>
            </div>
            <div className='col-span-4 mx-auto'>
              <img src="https://i.ibb.co/k9R4HTt/qmas-cms-icon-1.png" className='w-8/12 mx-auto' alt="" />
            </div>
          </div>
        </motion.section>

        <motion.section
          className='mb-5 rounded-tl-2xl rounded-tr-2xl md:rounded-2xl top-28 rounded-b-2xl bg-white  top-50 md:p-0 md:top-48 sticky text-[#1B1456]' style={{ scale: scale3, translateY: translateY3 }}>
          <div className=' grid grid-cols-1 md:grid-cols-12 text-center lg:text-left'>
            <div className='col-span-8 py-5 lg:py-16 md:pt-8 lg:pt-5 rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none md:rounded-s-2xl  cs-bg-services-3'>
              <h2 className='px-10 font-bold'>Web Maintenance</h2>
              <div className='px-10 pb-10'>
                <p className='py-5 md:py-8 lg:py-10 text-xl md:text-2xl lg:text-4xl font-bold'>Web Maintenance </p>
                <p className='leading-6 md:leading-8 text-sm md:text-xl lg:text-2xl font-semibold'>Secure & updated website = success. Get expert maintenance, keep your site thriving</p>
              </div>
            </div>
            <div className='col-span-4 mx-auto'>
              <img src="https://i.ibb.co/bLSksmP/qmas-custom-icon-3.png" className='w-8/12 mx-auto my-4 md:my-0' alt="" />
            </div>
          </div>
        </motion.section>
        <motion.section
          className='mb-5 rounded-tl-2xl rounded-tr-2xl md:rounded-2xl top-40 rounded-b-2xl bg-white  top-50 md:p-0 md:top-60 sticky' style={{ scale: scale4, translateY: translateY4 }}>
          <div className=' grid grid-cols-1 md:grid-cols-12 text-center lg:text-left'>
            <div className='col-span-8 py-5 lg:py-16 md:pt-8 lg:pt-5 rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none md:rounded-s-2xl cs-bg-services-4'>
              <h2 className='px-10 font-bold'>On-Page SEO</h2>
              <div className='px-10 pb-10'>
                <p className='py-5 md:py-8 lg:py-10 text-xl md:text-2xl lg:text-4xl font-bold'>On-Page SEO</p>
                <p className='leading-6 md:leading-8 text-sm md:text-xl lg:text-2xl font-semibold'>SEO & UX magic! We optimize websites for search engines & users, boosting traffic & engagement.</p>
              </div>
            </div>
            <div className='col-span-4 mx-auto'>
              <img src="https://i.ibb.co/qm2PVs2/qmas-custom-icon-6.png" className='w-8/12 mx-auto' alt="" />
            </div>
          </div>
        </motion.section>
        <motion.section
          className='mb-5 bg-white border  rounded-tl-2xl top-60 rounded-b-2xl rounded-tr-2xl md:rounded-2xl md:p-0  md:top-56 sticky text-[#1B1456]' style={{ scale: scale5, translateY: translateY5 }}>
          <div className=' grid grid-cols-1 md:grid-cols-12 text-center lg:text-left'>
            <div className='col-span-8 py-5 lg:py-16 md:pt-8 lg:pt-5 rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none md:rounded-s-2xl cs-bg-services-5'>
              <h2 className='px-10 font-bold'>E-commerce Solutions</h2>
              <div className='px-10 pb-10'>
                <p className='py-5 md:py-8 lg:py-10 text-xl md:text-2xl lg:text-4xl font-bold'>E-commerce Solutions </p>
                <p className='leading-6 md:leading-8 text-sm md:text-xl lg:text-2xl font-semibold'>Boost sales with a flawless online store. Brand-tailored websites. Thrive digitally.</p>
              </div>
            </div>
            <div className='col-span-4 mx-auto'>
              <img src="https://i.ibb.co/fHyDknQ/qmas-custom-icon-5.png" className='w-8/12 mx-auto my-4 md:my-0' alt="qmas-custom-icon-5" />
            </div>
          </div>
        </motion.section>

      </motion.div>
    </section>
  );
};

export default Services;
