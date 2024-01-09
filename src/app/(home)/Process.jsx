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
        <div className="py-5 md:py-16">
            <div className="text-center py-5">
                <h2 className="font-semibold text-4xl py-2">Our process</h2>
                <p>Our process is designed to ensure that we deliver the highest quality work to our clients. Here are the steps we take in our process:</p>
            </div>
            <hr className="border-4 border-green-700 container mx-auto w-9/12" />

            <div className="py-5 rounded-xl grid gap-y-9 border-8 border-gray-800 md:p-5 p-3">

                {
                    process.map(pros => <div className="md:flex md:p-16 justify-between border-b-4 border-gray-600 py-4" key={pros.num}>
                        <p className="text-center pb-5 text-7xl md:text-7xl font-bold">{pros.num}</p>
                        <p className="md:ps-16 md:text-2xl">{pros.text}</p>
                    </div>)
                }

            </div>
        </div>
    );
};

export default Process;
