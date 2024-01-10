"use client"
import Frequently from "./Frequently";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Process from "./Process";
import Services from "./Services";


const HomePage = () => {

  return (
    <div className="bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100" >
      <div className="container mx-auto p-3">
        <Hero />
        <Services />
        <Pricing />
        <Process />
        <Frequently /></div>
    </div>
  );
};

export default HomePage;