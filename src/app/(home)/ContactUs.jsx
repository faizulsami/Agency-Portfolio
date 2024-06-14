"use client"

import React, { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import dynamic from 'next/dynamic'


const EarthCanvas = dynamic(() => import('@/components/canvas/Earth'), { ssr: false })

const ContactUs = () => {
    


    const form = useRef();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await emailjs.sendForm('service_i9rcujk', 'template_inngzbk', form.current, 'pk1lndymeKRzd9iP9');
            setLoading(false);
            toast.success("Thank you. we will get back to you as soon as possible.", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } catch (error) {
            setLoading(false);
            console.error(error);
            toast.error("Ahh, something went wrong. Please try again.");
        }
        form.current.reset();
    };

    return (
        <section>
            <h2  className='my-10 text-center font-semibold text-3xl md:text-5xl'>Contact <span className='text-[#4dffb5]'>Us</span></h2>
            <div id='contact' className="xl:mt-12 flex xl:flex-row flex-col gap-5 overflow-hidden pt-4 md:pt-12">
                <ToastContainer />
                <div
                    className='md:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
                    <EarthCanvas />
                </div>
                <div
                    className='flex-[0.75] glass-effect p-8 rounded-2xl mx-auto w-11/12'>
                    <div>
                        <form ref={form} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
                            <div className='grid-cols-1 xl:flex gap-5'>
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
                                <label className='flex  flex-col w-full'>
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
                                    type='text'
                                    name="from_budget"
                                    id="budget"
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
                                    placeholder='Anything you want to say'
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
            </div>
        </section>
    );
};

export default ContactUs;