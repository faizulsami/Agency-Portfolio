"use client"
import Navbar from "@/components/Navbar";
import Frequently from "./Frequently";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Process from "./Process";
import Projects from "./Projects";
import Services from "./Services";


const HomePage = () => {

  return (

    <div className="bg-gray-400">
      <Navbar />
      <Hero />
      <div className="container mx-auto" >
        <Services />
        <Projects />
        <Pricing />
        <Process />
        <Frequently />
        </div>
    </div>
  );
};

export default HomePage;