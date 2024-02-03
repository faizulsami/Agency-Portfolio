import React, { useEffect, useState } from 'react';

const Frequently = () => {
    useEffect(() => {
        const handleAccordionClick = (e) => {
            const self = e.currentTarget;
            const control = self.querySelector('.accordions__control');
            const content = self.querySelector('.accordions__content');

            self.classList.toggle('open');

            if (self.classList.contains('open')) {
                control.setAttribute('aria-expanded', true);
                content.setAttribute('aria-hidden', false);
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                control.setAttribute('aria-expanded', false);
                content.setAttribute('aria-hidden', true);
                content.style.maxHeight = null;
            }
        };

        const accordions = document.querySelectorAll('.accordions__item');
        accordions.forEach(el => {
            el.addEventListener('click', handleAccordionClick);
        });

        return () => {
            accordions.forEach(el => {
                el.removeEventListener('click', handleAccordionClick);
            });
        };
    }, []); // Empty dependency array ensures this effect runs only once after initial render

    return (
        <section className="process">
            <div className="text-center font-raleway">
                <h2 className="font-semibold text-4xl md:text-5xl pb-10">Frequently asked questions</h2>
            </div>
            <div className="process__container font-raleway text-[#121212]">
                <div className="process__accordions">
                    <ul className="accordions__list">
                        <li className="accordions__item">
                            <button className="accordions__control" aria-expanded="false">
                                <span className="accordions__title text-lg md:text-2xl">Consultation</span>
                                <span className="accordions__icon"></span>
                            </button>
                            <div className="accordions__content text text-sm md:text-lg " aria-hidden="true">
                                <p>During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.</p>
                            </div>
                        </li>
                        <li className="accordions__item">
                            <button className="accordions__control" aria-expanded="false">
                                <span className="accordions__title text-lg md:text-2xl">Research and Strategy Development</span>
                                <span className="accordions__icon"></span>
                            </button>
                            <div className="accordions__content text text-sm md:text-lg " aria-hidden="true">
                                <p>In today's marketplace, R&D strategy helps a business take a leading position and keeps it competitive, agile, adaptable, and profitable. The research and development concept is one of the earliest stages in creating a business strategy, but the commercial success of the entire project depends on its successful introduction.</p>
                            </div>
                        </li>
                        <li className="accordions__item">
                            <button className="accordions__control" aria-expanded="false">
                                <span className="accordions__title text-lg md:text-2xl ">Implementation</span>
                                <span className="accordions__icon"></span>
                            </button>
                            <div className="accordions__content text text-sm md:text-lg " aria-hidden="true">
                                <p>Strategy implementation is the process of turning your strategic plan into action. Whether you're executing a new marketing plan to increase sales or introducing a new work management software to increase efficiency—your plan is only as valuable as the implementation.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Frequently;