import Header from "./Header";
import Hero from "./Hero";
import Stars from "./Stars";
import Service from "./Service";
import About from "./About";
import Appointment from "./Appointment";
import Features from "./Features";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <div className="px-20 py-4 flex flex-col gap-2 pt-20">
        <p className="text-[25.71px] text-black font-bold font-arial">
          Dubai Desert 4x4 Dune Bashing, Self-Ride 60min ATV Quad, Camel
          Ride,Shows,Dinner
        </p>
        <div className="flex gap-2">
          <Stars />
          <span className="text-[19.3px] text-54">45 reviews</span>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col gap-6 w-3/4">
            <Hero />
            <Service />
            <Service />
          </div>
          <div className="w-1/4 flex flex-col gap-4">
            <About />
            <Appointment />
            <Features />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
