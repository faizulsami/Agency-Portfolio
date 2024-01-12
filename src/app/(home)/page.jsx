"use client"
import Frequently from "./Frequently";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Process from "./Process";
import Projects from "./Projects";
import Services from "./Services";


const HomePage = () => {

  return (
    <div className=" bg-gray-700" >
      <div className="container mx-auto p-3">
        <Hero />
        <Services />
        <Projects/>
        <Pricing />
        <Process />
        <Frequently /></div>
    </div>
  );
};

export default HomePage;