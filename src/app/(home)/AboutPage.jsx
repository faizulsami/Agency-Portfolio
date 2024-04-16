

const AboutPage = () => {


    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="ps-48 ">
                    <h2 className="text-4xl md:text-9xl font-semibold">About Us</h2>
                    <p>Discovery: We begin by getting to know our clients and their business goals. We conduct a thorough analysis of their target audience, competition, and industry to identify their unique needs.</p>
                </div>
                <div className="flex bg-white ms-10 ps-10 py-10 rounded-xl">
                    <img className="w-56 h-56" src="https://i.ibb.co/rGDHSJn/431363532-921875276141486-53462139753324018-n.jpg" alt="" />
                    <img className="w-56 h-56" src="https://i.ibb.co/rGDHSJn/431363532-921875276141486-53462139753324018-n.jpg" alt="" />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex bg-white align items-end">
                    <img className="w-56 h-56" src="https://i.ibb.co/rGDHSJn/431363532-921875276141486-53462139753324018-n.jpg" alt="" />
                    <img className="w-56 h-56" src="https://i.ibb.co/rGDHSJn/431363532-921875276141486-53462139753324018-n.jpg" alt="" />
                </div>
                <div>logo</div>
            </div>
        </section>
    );
};

export default AboutPage;
