import { IoCheckmarkSharp } from "react-icons/io5"
const Pricing = () => {
    return (
        <section className="z-10">
            <div className="background-circle"></div>
            <div className="text-center">
                <h2 className="font-semibold text-4xl md:text-5xl py-2">Pricing that fits all</h2>
                <p className="text-lg lg:text-xl py-3 w-8/12 lg:w-6/12 mx-auto font-light">Web Design Rates Transparent, Competitive Pricing</p>
            </div>
            <div className='cs-section'>
                <div className="content grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                    <div className="basic box">
                        <h2 className="cs-title text-center py-2 font-semibold text-xl">Basic</h2>
                        <div className="view">
                            <div className="icon">
                                <img src="https://i.postimg.cc/2jcfMcf4/hot-air-balloon.png" alt="hot-air-balloon" />
                            </div>
                            <div className="cost">
                                <p className="text-[#123627] text-5xl font-semibold">$800</p>
                            </div>
                        </div>
                        <div className="description">
                            <ul className='cs-ul grid gap-4 text-sm font-semibold'>
                                <li className='cs-li flex items-center'><IoCheckmarkSharp className="me-1 text-[#4dffb5]" size={18} />Lorem, ipsum dolor.</li>
                                <li className='cs-li flex items-center'><IoCheckmarkSharp className="me-1 text-[#4dffb5]" size={18} />Harum, beatae laudantium.</li>
                                <li className='cs-li flex items-center'><IoCheckmarkSharp className="me-1 text-[#4dffb5]" size={18} />Odit, fugit saepe.</li>
                                <li className='cs-li flex items-center'><IoCheckmarkSharp className="me-1 text-[#4dffb5]" size={18} />Harum, veniam suscipit!</li>
                                <li className='cs-li flex items-center'><IoCheckmarkSharp className="me-1 text-[#4dffb5]" size={18} />A, aut veritatis!</li>
                                <li className='cs-li flex items-center'><IoCheckmarkSharp className="me-1 text-[#4dffb5]" size={18} />Aliquid, quasi repellat!</li>
                            </ul>
                        </div>
                    </div>
                    <div className="basic box">
                        <h2 className="cs-title text-center py-2 font-semibold text-xl">Standard</h2>
                        <div className="view">
                            <div className="icon">
                                <img src="https://i.postimg.cc/DzrTN72Z/airplane.png" alt="airplane" />
                            </div>
                            <div className="cost">
                                <p className="text-[#123627] text-5xl font-semibold">$1200</p>
                            </div>
                        </div>
                        <div className="description">
                            <ul className='cs-ul grid gap-4 text-sm font-semibold'>
                                <li className='cs-li flex items-center'><IoCheckmarkSharp className="me-1 text-[#4dffb5]" size={18} />Lorem, ipsum dolor.</li>
                                <li className='cs-li flex items-center'><IoCheckmarkSharp className="me-1 text-[#4dffb5]" size={18} />Harum, beatae laudantium.</li>
                                <li className='cs-li flex items-center'><IoCheckmarkSharp className="me-1 text-[#4dffb5]" size={18} />Odit, fugit saepe.</li>
                                <li className='cs-li flex items-center'><IoCheckmarkSharp className="me-1 text-[#4dffb5]" size={18} />Harum, veniam suscipit!</li>
                                <li className='cs-li flex items-center'><IoCheckmarkSharp className="me-1 text-[#4dffb5]" size={18} />A, aut veritatis!</li>
                                <li className='cs-li flex items-center'><IoCheckmarkSharp className="me-1 text-[#4dffb5]" size={18} />Aliquid, quasi repellat!</li>
                            </ul>
                        </div>
                    </div>
                    <div className="basic box">
                        <h2 className="cs-title text-center py-2 font-semibold text-xl">Business</h2>
                        <div className="view">
                            <div className="icon">
                                <img src="https://i.postimg.cc/wvFd6FRY/startup.png" alt="startup" />
                            </div>
                            <div className="cost">
                                <p className="text-[#123627] text-5xl font-semibold">$1500</p>
                            </div>
                        </div>
                        <div className="description">
                            <ul className='cs-ul grid gap-4 text-sm font-semibold'>
                                <li className='cs-li flex items-center'><IoCheckmarkSharp className="me-1 text-[#4dffb5]" size={18} />Lorem, ipsum dolor.</li>
                                <li className='cs-li flex items-center'><IoCheckmarkSharp className="me-1 text-[#4dffb5]" size={18} />Harum, beatae laudantium.</li>
                                <li className='cs-li flex items-center'><IoCheckmarkSharp className="me-1 text-[#4dffb5]" size={18} />Odit, fugit saepe.</li>
                                <li className='cs-li flex items-center'><IoCheckmarkSharp className="me-1 text-[#4dffb5]" size={18} />Harum, veniam suscipit!</li>
                                <li className='cs-li flex items-center'><IoCheckmarkSharp className="me-1 text-[#4dffb5]" size={18} />A, aut veritatis!</li>
                                <li className='cs-li flex items-center'><IoCheckmarkSharp className="me-1 text-[#4dffb5]" size={18} />Aliquid, quasi repellat!</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
