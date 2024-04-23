

const AboutPage = () => {


    return (
        <section>
            <div className="lg:grid grid-cols-3 gap-4 ">
                <div className=" mx-10 ">
                    <h2 className="text-4xl md:text-9xl font-semibold">About <span className='text-[#4dffb5]'>Us</span></h2>
                    <p>Discovery: We begin by getting to know our clients and their business goals. We conduct a thorough analysis of their target audience, competition, and industry to identify their unique needs.</p>
                </div>
                <div className="col-span-2 md:flex lg:bg-white gap-5  ps-10 py-10 rounded-xl md:mb-10">
                    <div className="md:flex gap-4">
                        <div className="text-black">
                            <h3>
                                Faizul Sami
                            </h3>
                            <p className="border-t-4 border-black">Co-founder</p>
                        </div>
                        <div>
                            <img className="w-72 h-72 rounded-xl" src="./team_img/Sami.webp" alt="" />
                        </div>
                    </div>
                    <img className="w-72 h-72 rounded-xl" src="./team_img/Anik.webp" alt="" />
                    <img className="w-72 h-72 rounded-xl" src="./team_img/Rihad.webp" alt="" />
                </div>

                <div className="col-span-2 md:flex gap-5 lg:bg-white md:justify-end  md:pr-10 py-10 rounded-xl">
                    <div className="md:flex gap-4">
                        <div className="text-black">
                            <h3>
                                Faizul Sami
                            </h3>
                            <p className="border-t-4 border-black">Co-founder</p>
                        </div>
                        <div>
                            <img className="w-72 h-72 rounded-xl" src="./team_img/Ayan.webp" alt="" />
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <div>
                            <img className="w-72 h-72 rounded-xl" src="./team_img/Prince.webp" alt="" />
                        </div>
                        
                        <div className=" text-black">
                            <h3>
                                Faizul Sami
                            </h3>
                            <p className="border-t-4 border-black">Co-founder</p>
                        </div>
                    </div>
                </div>
                <div><img src="./About_Us-_1.webp" alt="" /></div>
            </div>
        </section>
    );
};

export default AboutPage;
