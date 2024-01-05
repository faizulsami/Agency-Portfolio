import Frequently from "./Frequently";
import Hero from "./Hero";
import Process from "./Process";
import Services from "./Services";


const HomePage = () => {
  return (
    <div className="container mx-auto p-3">
      <Hero />
      <Services/>
      <Process/>
      <Frequently/>
    </div>
  );
};

export default HomePage;