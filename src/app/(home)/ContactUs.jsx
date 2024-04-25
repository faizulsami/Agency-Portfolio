import React, { useRef, useState } from 'react';
import { motion } from "framer-motion";
import EarthCanvas from '@/components/canvas/Earth';

const ContactUs = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    return (
        <section className={`xl:mt-12 flex xl:flex-row  flex-col gap-5overflow-hidden`}>
            <div
                className=' xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
            >
                <EarthCanvas />
            </div>

            
            <div
                className='flex-[0.75] bg-[#080c11]  border border-[#4dffb5] p-8 rounded-2xl'>
                <div>
                    <form ref={form} className='mt-12 flex flex-col gap-8'>
                        <label className='flex flex-col'>
                            <span className='text-white font-medium mb-4'>Your Name</span>
                            <input
                                type='text'
                                name="from_name"
                                id="name"
                                placeholder="What's your good name?"
                                className='bg-[#2c3036]  py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                                required />
                        </label>
                        <label className='flex flex-col'>
                            <span className='text-white font-medium mb-4'>Your email</span>
                            <input
                                type='email'
                                name="from_email"
                                id="email"
                                placeholder="What's your web address?"
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
                            className='bg-[#112136]  py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
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