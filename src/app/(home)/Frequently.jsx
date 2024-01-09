import React from 'react';

const Frequently = () => {
    return (
        <div className='py-10 pb-20'>
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

        </div>
    );
};

export default Frequently;