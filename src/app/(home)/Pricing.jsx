import React, { useState } from 'react';

const Pricing = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <div className='mt-24 md:my-28'>
            <div className='text-center'>
                <h2 className='text-4xl font-semibold'>
                    Pricing that fits all
                </h2>
                <p>
                    Web Design Rates Transparent, Competitive Pricing
                </p>
            </div>

            <div>
                <div className="mt-12 flex justify-center gap-5">
                    <button
                        className={`py-2 px-4 rounded-lg  ${activeTab === 1 ? ' bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
                            }`}
                        onClick={() => handleTabClick(1)}
                    >
                        Basic
                    </button>
                    <button
                        className={`py-2 px-4 rounded-lg  ${activeTab === 2 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
                            }`}
                        onClick={() => handleTabClick(2)}
                    >
                        Advance
                    </button>
                </div>

                <div className="mt-4">
                    {activeTab === 1 && (
                        <div>
                            <div className='border-4 rounded-lg border-slate-600 lg:ps-20 gap-5 p-5 lg:grid grid-cols-2 '>
                                <div>
                                    <div className='text-center md:pt-10'>
                                        <h3>
                                            Basic
                                        </h3>
                                        <p className='text-6xl  font-semibold py-4'>1500$</p>
                                    </div>
                                    <div>
                                        <p className='md:text-xl text-center'>
                                            a outranging website that shows your brand quality and a super fast and well-designed website
                                        </p>
                                    </div>
                                </div>

                                <div className='pt-10 flex justify-center'>
                                    <table className='grid gap-y-3  md:text-xl'>
                                        <tbody>
                                            <tr>
                                                <td>✔️</td>
                                                <td>Advance and clean layout</td>
                                            </tr>
                                            <tr>
                                                <td>✔️</td>
                                                <td>Up to 15 pages of content</td>
                                            </tr>
                                            <tr>
                                                <td>✔️</td>
                                                <td>Best graphics and images</td>
                                            </tr>
                                            <tr>
                                                <td>✔️</td>
                                                <td>Mobile-responsive design</td>
                                            </tr>
                                            <tr>
                                                <td>✔️</td>
                                                <td>Advance contact form</td>
                                            </tr>
                                            <tr>
                                                <td>✔️</td>
                                                <td>1 Year premium Support</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}
                    {activeTab === 2 && (
                        <div className='border-4 rounded-lg border-slate-600 lg:ps-20 gap-5 p-5 lg:grid grid-cols-2 '>
                            <div>
                                <div className='text-center md:pt-16'>
                                    <h3>
                                        Advance
                                    </h3>
                                    <p className='text-6xl  font-semibold py-4'>5999$</p>
                                </div>
                                <div>
                                    <p className='md:text-xl text-center'>
                                        Create a Next-Level Website with complete customization options, elevating your brand to the next level
                                    </p>
                                </div>
                            </div>

                            <div className='pt-10 flex justify-center'>
                                <table className='grid gap-y-3  md:text-xl'>
                                    <tbody>
                                        <tr>
                                            <td>✔️</td>
                                            <td>E-commerce Integration</td>
                                        </tr>
                                        <tr>
                                            <td>✔️</td>
                                            <td>Up to 50 pages of content</td>
                                        </tr>
                                        <tr>
                                            <td>✔️</td>
                                            <td>Security Features</td>
                                        </tr>
                                        <tr>
                                            <td>✔️</td>
                                            <td>Advance SEO Optimization</td>
                                        </tr>
                                        <tr>
                                            <td>✔️</td>
                                            <td>Advanced UI/UX Design</td>
                                        </tr>
                                        <tr>
                                            <td>✔️</td>
                                            <td>Advance Form System</td>
                                        </tr>
                                        <tr>
                                            <td>✔️</td>
                                            <td>Membership/Subscription</td>
                                        </tr>
                                        <tr>
                                            <td>✔️</td>
                                            <td>Scalability & Performance</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Pricing;
