import React from 'react';

const Services = () => {
    return (
        <div >
            <div className='text-center py-5 md:py-10'>
                <h2 className='text-4xl font-semibold'>Services</h2>
                <p >Empowering Your Digital Journey with Our Expert Web Services</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>

                <div className='p-5 text-center bg-slate-600 rounded-2xl'>
                    <h2 className='text-xl font-semibold py-4 '>Website Design</h2>
                    <p>Crafting visually stunning and user-friendly websites that effectively communicate your brand and engage your audience.</p>
                </div>


                <div className='p-5 text-center bg-slate-600 rounded-2xl'>
                    <h2 className='text-xl font-semibold py-4 '>Web Development</h2>
                    <p>Building robust, scalable, and efficient websites with cutting-edge technology for an optimal online presence.</p>
                </div>
                <div className='p-5 text-center bg-slate-600 rounded-2xl'>
                    <h2 className='text-xl font-semibold py-4 '>Logo Design</h2>
                    <p>Creating unique, memorable logos that encapsulate your brand's identity, making a lasting impression on your audience.</p>
                </div>
                <div className='p-5 text-center bg-slate-600 rounded-2xl'>
                    <h2 className='text-xl font-semibold py-4 '>Search Engine Optimization</h2>
                    <p>Enhancing your website's visibility on search engines through strategic SEO practices, driving organic traffic and growth.</p>
                </div>
                <div className='p-5 text-center bg-slate-600 rounded-2xl'>
                    <h2 className='text-xl font-semibold py-4 '>Web Hosting</h2>
                    <p>Providing reliable, secure web hosting solutions with high uptime, ensuring your website is always accessible and performing optimally.</p>
                </div>
                <div className='p-5 text-center bg-slate-600 rounded-2xl'>
                    <h2 className='text-xl font-semibold py-4 '>E-Commerce Sites</h2>
                    <p>Developing comprehensive e-commerce platforms with user-friendly interfaces and secure payment systems to boost your online sales.</p>
                </div>


            </div>
        </div>
    );
};

export default Services;