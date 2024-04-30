import React, { useRef, useState } from 'react';
import { motion } from "framer-motion";
import EarthCanvas from '@/components/canvas/Earth';

const ContactUs = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    return (
        <section id='contact' className="xl:mt-12 flex xl:flex-row flex-col gap-5overflow-hidden pt-4 md:pt-12">
            <div
                className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
            >
                <EarthCanvas />
            </div>
            <div
                className='flex-[0.75] glass-effect p-8 rounded-2xl mx-auto w-11/12'>
                <div>
                    <form ref={form} className='mt-12 flex flex-col gap-8'>
                        <div className='grid-cols-1 md:flex gap-5'>
                        <label className='flex flex-col mb-8 md:mb-0 w-full'>
                            <span className='text-white font-medium mb-4'>Your Name</span>
                            <input
                                type='text'
                                name="from_name"
                                id="name"
                                placeholder="What's your good name?"
                                className='bg-[#2c3036]  py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                                required 
                            />
                        </label>
                        <label className='flex flex-col w-full'>
                            <span className='text-white font-medium mb-4'>Your Email</span>
                            <input
                                type='email'
                                name="from_email"
                                id="email"
                                placeholder="What's your email address?"
                                className='bg-[#2c3036] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                                required />
                        </label>
                        </div>
                        <label className='flex flex-col'>
                            <span className='text-white font-medium mb-4'>Estimated Budget</span>
                            <input
                                type='email'
                                name="from_email"
                                id="email"
                                placeholder="E.g $800"
                                className='bg-[#2c3036] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                                required />
                        </label>
                        <label className='flex flex-col'>
                            <span className='text-white font-medium mb-4'>Your Message</span>
                            <textarea
                                rows={7}
                                name='message'
                                id="message"
                                placeholder='What you want to say?'
                                className='bg-[#2c3036]  py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                                required />
                        </label>
                        <button
                            type='submit'
                            className='bg-[#4dffb5] hover:bg-[#4dffb5bb] py-3 px-8 rounded-xl outline-none w-fit text-[#121212] font-bold shadow-md shadow-primary'
                        >
                            {loading ? "Sending..." : "Send"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;