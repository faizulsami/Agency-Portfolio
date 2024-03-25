import React, { useEffect, useState } from "react";

const Frequently = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    useEffect(() => {
        const handleAccordionClick = (e) => {
            const self = e.currentTarget;
            const control = self.querySelector(".accordions__control");
            const content = self.querySelector(".accordions__content");

            self.classList.toggle("open");

            if (self.classList.contains("open")) {
                control.setAttribute("aria-expanded", true);
                content.setAttribute("aria-hidden", false);
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                control.setAttribute("aria-expanded", false);
                content.setAttribute("aria-hidden", true);
                content.style.maxHeight = null;
            }
        };

        const addAccordionEventListeners = () => {
            const accordions = document.querySelectorAll(".accordions__item");
            accordions.forEach((el) => {
                el.addEventListener("click", handleAccordionClick);
            });
        };

        addAccordionEventListeners();

        return () => {
            const accordions = document.querySelectorAll(".accordions__item");
            accordions.forEach((el) => {
                el.removeEventListener("click", handleAccordionClick);
            });
        };
    }, [activeTab]); // Add activeTab to the dependency array

    return (
        <section>
            <div className="text-center font-raleway mt-12">
                <h2 className="font-semibold text-4xl md:text-5xl pb-10">
                    Frequently asked questions
                </h2>
                <div className="flex gap-2 md:gap-3 justify-center">
                    <button
                        type="button"
                        className={`rounded-lg font-bold text-xs md:text-sm px-5 py-2.5 text-center mb-5 ${activeTab === 1
                            ? "bg-[#4dffb5] text-[#121212]"
                            : "text-white hover:text-[#121212] border border-[#4dffb5] hover:bg-[#4dffb5]"
                            }`}
                        onClick={() => handleTabClick(1)}
                    >
                        Starting a project
                    </button>
                    <button
                        type="button"
                        className={`rounded-lg font-bold text-xs md:text-sm px-5 py-2.5 text-center mb-5 ${activeTab === 2
                            ? "bg-[#4dffb5] text-[#121212]"
                            : "text-white hover:text-[#121212] border border-[#4dffb5] hover:bg-[#4dffb5]"
                            }`}
                        onClick={() => handleTabClick(2)}
                    >
                        Design
                    </button>
                    <button
                        type="button"
                        className={`rounded-lg font-bold text-xs md:text-sm px-5 py-2.5 text-center mb-5 ${activeTab === 3
                            ? "bg-[#4dffb5] text-[#121212]"
                            : "text-white hover:text-[#121212] border border-[#4dffb5] hover:bg-[#4dffb5]"
                            }`}
                        onClick={() => handleTabClick(3)}
                    >
                        Development
                    </button>
                </div>
            </div>
            {activeTab === 1 && (
                <div className="process">
                    <div className="process__container font-raleway text-[#121212]">
                        <div className="process__accordions">
                            <ul className="accordions__list">
                                <li className="accordions__item">
                                    <button className="accordions__control" aria-expanded="false">
                                        <span className="accordions__title text-lg md:text-2xl">
                                            Who will be working on our project?
                                        </span>
                                        <span className="accordions__icon"></span>
                                    </button>
                                    <div
                                        className="accordions__content text text-sm md:text-lg "
                                        aria-hidden="true"
                                    >
                                        <p>
                                            Your project’s dedicated staff is carefully selected to provide a great match for its particular requirements. Our method entails handpicking individuals with specialized abilities, shared interests, and extraordinary suitability, resulting in unrivaled outcomes and success. We believe in bringing together the right people to realize your vision.
                                            <br />
                                            Our skilled workforce is not confined to a single place. We believe in the power of distributed cooperation and have a varied pool of top talent from the UK, Europe, and the US. We prioritize excellent communication and process management while remaining creative.
                                        </p>
                                    </div>
                                </li>
                                <li className="accordions__item">
                                    <button className="accordions__control" aria-expanded="false">
                                        <span className="accordions__title text-lg md:text-2xl">
                                            What happens in a discovery call?
                                        </span>
                                        <span className="accordions__icon"></span>
                                    </button>
                                    <div
                                        className="accordions__content text text-sm md:text-lg "
                                        aria-hidden="true"
                                    >
                                        <p>
                                            We’ll have a casual and open dialogue to understand your needs during a discovery call. This allows us to provide you with more personalized ideas, suggestions, and a pricing estimate. Consider it an opportunity for friendly guidance and joint exploration of options.
                                        </p>
                                    </div>
                                </li>
                                <li className="accordions__item">
                                    <button className="accordions__control" aria-expanded="false">
                                        <span className="accordions__title text-lg md:text-2xl">
                                            What is your quote or proposal format?
                                        </span>
                                        <span className="accordions__icon"></span>
                                    </button>
                                    <div
                                        className="accordions__content text text-sm md:text-lg "
                                        aria-hidden="true"
                                    >
                                        <p>
                                            Our quote or proposal format is intended to be straightforward, easy, and transparent. Once we have a clear grasp of your needs, we will offer you with a simple pricing breakdown within 24-48 hours. We believe in providing the required information in a succinct and easy-to-understand manner, allowing you to make informed decisions. There will be no long-winded and flowery proposals, simply the necessary facts you require.
                                        </p>
                                    </div>
                                </li>
                                <li className="accordions__item">
                                    <button className="accordions__control" aria-expanded="false">
                                        <span className="accordions__title text-lg md:text-2xl">
                                            What happens if we decide to work with you?
                                        </span>
                                        <span className="accordions__icon"></span>
                                    </button>
                                    <div
                                        className="accordions__content text text-sm md:text-lg "
                                        aria-hidden="true"
                                    >
                                        <p>
                                            You made an excellent decision! We sign the contract and get started! We use Notion and Slack to organize projects and communicate.
                                        </p>
                                    </div>
                                </li>
                                <li className="accordions__item">
                                    <button className="accordions__control" aria-expanded="false">
                                        <span className="accordions__title text-lg md:text-2xl">
                                            How does your project management and communication process work?
                                        </span>
                                        <span className="accordions__icon"></span>
                                    </button>
                                    <div
                                        className="accordions__content text text-sm md:text-lg "
                                        aria-hidden="true"
                                    >
                                        <p>
                                            Our project management method is founded on tried-and-true techniques that prioritize optimum quality and a seamless experience. To enhance efficiency and maintain the greatest level of quality, we use asynchronous communication mechanisms. In addition, we use video calls to improve collaboration and handle any project-specific needs. Rest confident that our project management procedures are designed to produce outstanding results at every stage of the process.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
            {activeTab === 2 && (
                <div className="process">
                    <div className="process__container font-raleway text-[#121212]">
                        <div className="process__accordions">
                            <ul className="accordions__list">
                                <li className="accordions__item">
                                    <button className="accordions__control" aria-expanded="false">
                                        <span className="accordions__title text-lg md:text-2xl">
                                            What design services do you offer?
                                        </span>
                                        <span className="accordions__icon"></span>
                                    </button>
                                    <div
                                        className="accordions__content text text-sm md:text-lg "
                                        aria-hidden="true"
                                    >
                                        <p>
                                            We specialize in branding, web design, and product design.
                                            <br />
                                            <br />
                                            Branding:
                                            <br />
                                            Brand identity and logo design
                                            <br />
                                            Brand guidelines
                                            <br />
                                            Marketing collateral
                                            <br />
                                            Motion design
                                            <br />
                                            Illustration
                                            <br />
                                            <br />
                                            Web design:
                                            <br />
                                            Responsive web design
                                            <br />
                                            Marketing sites
                                            <br />
                                            E-commerce sites
                                            <br />
                                            Web platforms
                                        </p>
                                    </div>
                                </li>
                                <li className="accordions__item">
                                    <button className="accordions__control" aria-expanded="false">
                                        <span className="accordions__title text-lg md:text-2xl">
                                            Which design tools do you use?
                                        </span>
                                        <span className="accordions__icon"></span>
                                    </button>
                                    <div
                                        className="accordions__content text text-sm md:text-lg "
                                        aria-hidden="true"
                                    >
                                        <p>
                                            The main design tools we use are:
                                            <br />
                                            <br />
                                            Figma (UX/UI and brand identity)
                                            <br />
                                            <br />
                                            Adobe Illustrator (Illustrations, Logo)
                                            <br />
                                            <br />
                                            Adobe Photoshop (Graphics and photography editing)
                                            <br />
                                            <br />
                                            Adobe After Effects (Lottie JS Animation Design & Development)
                                        </p>
                                    </div>
                                </li>
                                <li className="accordions__item">
                                    <button className="accordions__control" aria-expanded="false">
                                        <span className="accordions__title text-lg md:text-2xl">
                                            We need to refresh our branding, but don't want a complete overhaul. Can you help?
                                        </span>
                                        <span className="accordions__icon"></span>
                                    </button>
                                    <div
                                        className="accordions__content text text-sm md:text-lg "
                                        aria-hidden="true"
                                    >
                                        <p>
                                            Certainly! We understand the necessity of keeping brand consistency while refreshing your branding. We are adept at working within existing brand rules, utilizing your existing logo and brand identification. Our team may provide changes and improvements to your brand without requiring a major makeover.
                                        </p>
                                    </div>
                                </li>
                                <li className="accordions__item">
                                    <button className="accordions__control" aria-expanded="false">
                                        <span className="accordions__title text-lg md:text-2xl">
                                            What if I'm not sure about the designs your create?
                                        </span>
                                        <span className="accordions__icon"></span>
                                    </button>
                                    <div
                                        className="accordions__content text text-sm md:text-lg "
                                        aria-hidden="true"
                                    >
                                        <p>
                                            We understand that design and strategy might be subjective at times. If you have any questions or complaints about the designs we develop or the method we use, please contact us. We are always happy to talk about the logic behind our design decisions and the strategic approach we have adopted. Our goal is to secure your trust and enthusiasm for the project. If anything doesn’t feel right, we’ll work together to discover a solution that resonates with your vision and objectives.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
            {activeTab === 3 && (
                <div className="process">
                    <div className="process__container font-raleway text-[#121212]">
                        <div className="process__accordions">
                            <ul className="accordions__list">
                                <li className="accordions__item">
                                    <button className="accordions__control" aria-expanded="false">
                                        <span className="accordions__title text-lg md:text-2xl">
                                            What is WordPress?
                                        </span>
                                        <span className="accordions__icon"></span>
                                    </button>
                                    <div
                                        className="accordions__content text text-sm md:text-lg "
                                        aria-hidden="true"
                                    >
                                        <p>

                                            WordPress is a tool that helps you make websites easily, without needing to know any complicated code. It has lots of different designs and features you can choose from to make your website look just how you want it to. You can update your website easily without needing any special technical skills. Using WordPress can help your business grow by making it easy for people to find you online and learn about what you do.
                                        </p>
                                    </div>
                                </li>
                                <li className="accordions__item">
                                    <button className="accordions__control" aria-expanded="false">
                                        <span className="accordions__title text-lg md:text-2xl">
                                            What is MERN Stack's website?
                                        </span>
                                        <span className="accordions__icon"></span>
                                    </button>
                                    <div
                                        className="accordions__content text text-sm md:text-lg "
                                        aria-hidden="true"
                                    >
                                        <p>
                                            A MERN Stack website offers a user-friendly solution for non-technical business owners seeking to bolster their online presence and drive growth. By leveraging MongoDB, Express.js, React.js, and Node.js, these websites are tailored to be easily customizable to suit specific business needs without requiring deep technical expertise. This technology stack facilitates seamless scalability, allowing businesses to effortlessly adapt their online offerings as their operations evolve, all while offering enhanced performance compared to traditional CMS websites. With features such as real-time data updates and personalized user experiences, MERN Stack websites empower businesses to boost customer engagement, increase conversions, and ultimately drive revenue growth. Whether it's optimizing e-commerce platforms for increased sales or developing interactive customer portals for enhanced communication, MERN Stack websites provide a versatile and intuitive platform for businesses to thrive in the competitive digital landscape.
                                        </p>
                                    </div>
                                </li>
                                <li className="accordions__item">
                                    <button className="accordions__control" aria-expanded="false">
                                        <span className="accordions__title text-lg md:text-2xl">
                                            Can we hire you if we already have completed designs and need assistance in developing or rebuilding our site in WordPress or MERN Stack?
                                        </span>
                                        <span className="accordions__icon"></span>
                                    </button>
                                    <div
                                        className="accordions__content text text-sm md:text-lg "
                                        aria-hidden="true"
                                    >
                                        <p>
                                            Certainly! We're here to assist you if you've finalized designs and require assistance in developing or rebuilding your website using WordPress and the MERN stack. To facilitate our understanding of the design complexity, interactions, and content, please share the source files of your designs. Based on our analysis, we'll craft a comprehensive Statement of Work (SoW) proposal tailored to your specific requirements.
                                            <br />
                                            <br />
                                            Alternatively, if you prefer to rebuild your current website using WordPress and the MERN stack, simply provide us with the domain. This will allow us to assess the current setup and provide you with a detailed evaluation along with recommendations for the rebuilding process.
                                            <br />
                                            <br />
                                            Our team comprises highly skilled developers proficient in both WordPress and the MERN stack, ensuring a seamless transition and delivering an exceptional final product. We're committed to creating a website that captivates your audience and aligns perfectly with your vision.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Frequently;
