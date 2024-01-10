import React, { useState } from 'react';

const Frequently = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <div className='py-10 pb-20'>
            <div className="mt-12 flex justify-center gap-5 pb-10">
                <button
                    className={`py-2 px-4 rounded-lg  ${activeTab === 1 ? ' bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
                        }`}
                    onClick={() => handleTabClick(1)}
                >
                    Pricing
                </button>
                <button
                    className={`py-2 px-4 rounded-lg  ${activeTab === 2 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
                        }`}
                    onClick={() => handleTabClick(2)}
                >
                    Adv
                </button>
                <button
                    className={`py-2 px-4 rounded-lg  ${activeTab === 3 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
                        }`}
                    onClick={() => handleTabClick(3)}
                >
                    ce
                </button>  <button
                    className={`py-2 px-4 rounded-lg  ${activeTab === 4 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
                        }`}
                    onClick={() => handleTabClick(4)}
                >
                    nce
                </button>
            </div>

            {activeTab === 1 && (
                <div className="border bg-red-200 text-white">
                    <details>
                        <summary className="border question py-3 px-4 cursor-pointer select-none w-full outline-none text-3xl">What tools do you work with?</summary>
                        <p className="border pt-1 pb-3 px-4 text-xl">With the HTML5“I work primarily with WordPress and Elementor Pro. These tools allow me to create highly customizable and visually appealing websites with ease. I also use other design and development tools such as Adobe Photoshop,
                            Figma, and HTML/CSS. Let me know if you have any specific requirements, and I’ll do my best to accommodate them.”</p>
                    </details>
                    <details>
                        <summary className="question py-3 px-4 cursor-pointer select-none w-full">Can I use it?</summary>
                        <p className="pt-1 pb-3 px-4">Of course. Its yours to use wherever and whenever you like.</p>
                    </details>

                </div>
            )}
            {activeTab === 2 && (
                <div className="border bg-red-200 text-white">
                    <details>
                        <summary className="border question py-3 px-4 cursor-pointer select-none w-full outline-none text-3xl">What tools ?</summary>
                        <p className="border pt-1 pb-3 px-4 text-xl">With the HTML5“I work primarily with WordPress and Elementor Pro. These tools allow me to create highly customizable and visually appealing websites with ease. I also use other design and development tools such as Adobe Photoshop,
                        </p>
                    </details>
                    <details>
                        <summary className="question py-3 px-4 cursor-pointer select-none w-full">Can I use it?</summary>
                        <p className="pt-1 pb-3 px-4">Of course. Its yours to use wherever and whenever you like.</p>
                    </details>

                </div>
            )}
            {activeTab === 3 && (
                <div className="border bg-red-200 text-white">
                    <details>
                        <summary className="border question py-3 px-4 cursor-pointer select-none w-full outline-none text-3xl">What tools ?</summary>
                        <p className="border pt-1 pb-3 px-4 text-xl">With the HTML5“I work primarily with WordPress and Elementor Pro. These tools allow me to create highly customizable and visually appealing websites with ease. I also use other design and development tools such as Adobe Photoshop,
                        </p>
                    </details>
                    <details>
                        <summary className="question py-3 px-4 cursor-pointer select-none w-full">Can I use it?</summary>
                        <p className="pt-1 pb-3 px-4">Of course. Its yours to use wherever and whenever you like.</p>
                    </details>

                </div>
            )}
            {activeTab === 4 && (
                <div className="border bg-red-200 text-white">
                    <details>
                        <summary className="border question py-3 px-4 cursor-pointer select-none w-full outline-none text-3xl">What tools ?</summary>
                        <p className="border pt-1 pb-3 px-4 text-xl">With the HTML5“I work primarily with WordPress and Elementor Pro. These tools allow me to create highly customizable and visually appealing websites with ease. I also use other design and development tools such as Adobe Photoshop,
                        </p>
                    </details>
                    <details>
                        <summary className="question py-3 px-4 cursor-pointer select-none w-full">Can I use it?</summary>
                        <p className="pt-1 pb-3 px-4">Of course. Its yours to use wherever and whenever you like.</p>
                    </details>

                </div>
            )}

        </div>
    );
};

export default Frequently;