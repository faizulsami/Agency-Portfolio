const Process = () => {

    const process = [
        {
            "num": "01",
            "text": "Discovery: We begin by getting to know our clients and their business goals. We conduct a thorough analysis of their target audience, competition, and industry to identify their unique needs."
        },
        {
            "num": "02",
            "text": "Planning: Based on our findings from the discovery phase, we create a detailed plan that outlines the project scope, timeline, and budget. We work closely with our clients to ensure that our plan aligns with their goals and expectations."
        },
        {
            "num": "03",
            "text": "Design: Once we have a solid plan in place, we move on to the design phase. We create wireframes and mockups to visualize the layout and functionality of the website. We then refine the design until our clients are satisfied with the final product."
        },
        {
            "num": "04",
            "text": "Development: After the design is approved, we move on to the development phase. We use the latest technologies and coding practices to develop a website that is optimized for speed, security, and user experience."
        },
        {
            "num": "05",
            "text": "Testing: Once the website is developed, we conduct rigorous testing to ensure that it meets our quality standards. We test the website for functionality, performance, and compatibility across different devices and browsers."
        },
        {
            "num": "06",
            "text": "Launch: Once the website passes our testing phase, we launch it and make it live for the public. We provide our clients with support and maintenance to ensure that their website stays up-to-date and running smoothly."
        }
    ];

    return (
        <div className="py-5 md:py-16 text-white w-11/12 mx-auto">
            <div className="md:text-center p-2 md:p-0 py-16 md:py-5">
                <h2 className="font-semibold text-5xl py-2">Our process</h2>
                <p className="text-lg lg:text-xl py-3 md:w-8/12 lg:w-6/12 md:mx-auto font-light">Our process is designed to ensure that we deliver the highest quality work to our clients. Here are the steps we take in our process:</p>
            </div>
            <hr className="border-8 border-[#4dffb5] container mx-auto w-9/12" />
            <div className="py-5 rounded-xl grid gap-y-9 border-2 border-gray-100 lg:p-5 p-3">
                {
                    process.map(pros => (
                        <div className={`md:flex md:p-16 justify-between py-4 ${pros.num === "06" ? 'w-11/12 mx-auto' : 'border-b-4 border-white w-11/12 mx-auto'}`} key={pros.num}>
                            <p className="md:text-center pb-5 text-7xl md:text-8xl lg:text-9xl font-bold">{pros.num}</p>
                            <p className="md:ps-16 text-lg  lg:text-2xl flex justify-center items-center">{pros.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Process;
