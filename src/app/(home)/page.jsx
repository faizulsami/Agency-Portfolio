"use client"
import Navbar from "@/components/Navbar";
import Frequently from "./Frequently";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Process from "./Process";
import Projects from "./Projects";
import Services from "./Services";
import Footer from "@/components/Footer";


const HomePage = () => {

  return (
    <div className="" >
      <div className="background-custom">
        <Navbar/>
        <Hero />
        <Services />
        <Projects/>
        <Pricing />
        <Process />
        <Frequently />
        <Footer/>
        </div>
    </div>
  );
};

export default HomePage;