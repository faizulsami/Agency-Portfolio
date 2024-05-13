import Navbar from "@/components/Navbar";
import Frequently from "./Frequently";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Process from "./Process";
import Projects from "./Projects";
import Services from "./Services";
import Footer from "@/components/Footer";
import AboutPage from "./AboutPage";
import ContactUs from "./ContactUs";

async function sleep(ms) {
  return new Promise(function(resolve) {
    setTimeout(() => {
      resolve();
    }, ms);
  })
}

const HomePage = async () => {

  await sleep(1000)

  return (

    <div className="bg-[#121212] text-white font-raleway">
      <Navbar />
      <Hero />
      
      <div className="container mx-auto" >
      
        <Services />
      </div>
      <Projects />
      <Pricing />
      <div className="container mx-auto" >
      <AboutPage />
        <Process />
        <Frequently />
        <div className='relative z-0'>
          <ContactUs />
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default HomePage;