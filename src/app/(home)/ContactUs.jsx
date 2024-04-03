import React, { useRef, useState } from 'react';

const ContactUs = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    return (
        <section className='mx-5'>
            <h2 className='text-4xl text-yellow-50 text-center mb-10'>Contact us</h2>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
                <div>this is for .......</div>
                <div>
                    <form ref={form}  className='mt-12 flex flex-col gap-8'>
                        <label className='flex flex-col'>
                            <span className='text-white font-medium mb-4'>Your Name</span>
                            <input
                                type='text'
                                name="from_name"
                                id="name"
                                placeholder="What's your good name?"
                                className='bg-[#112136]  py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                                required />
                        </label>
                        <label className='flex flex-col'>
                            <span className='text-white font-medium mb-4'>Your email</span>
                            <input
                                type='email'
                                name="from_email"
                                id="email"
                                placeholder="What's your web address?"
                                className='bg-[#112136] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                                required />
                        </label>
                        <label className='flex flex-col'>
                            <span className='text-white font-medium mb-4'>Your Message</span>
                            <textarea
                                rows={7}
                                name='message'
                                id="message"
                                placeholder='What you want to say?'
                                className='bg-[#112136]  py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
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