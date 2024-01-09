"use client"
import Frequently from "./Frequently";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Process from "./Process";
import Services from "./Services";


const HomePage = () => {

  return (
    <div className="container mx-auto p-3">
      <Hero />
      <Services/>
      <Pricing/>
      <Process/>
      <Frequently/>
    </div>
  );
};

export default HomePage;