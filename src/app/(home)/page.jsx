import Navbar from "@/components/Navbar";
import Frequently from "./Frequently";
import Hero from "./Hero";
import Process from "./Process";
import Services from "./Services";


const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Services/>
      <div className="container mx-auto">
      <Process/>
      </div>
      <Frequently/>
    </div>
  );
};

export default HomePage;