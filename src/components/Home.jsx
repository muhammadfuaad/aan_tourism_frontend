import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Feature from "./Feature";
import Stars from "./Stars";
import CheckButton from "./CheckButton";
import Service from "./Service";
import About from "./About";
const Home = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="px-16 py-4 flex flex-col gap-4">
        <p className="text-[25.71px] text-black font-bold">
          Dubai Desert 4x4 Dune Bashing, Self-Ride 60min ATV Quad, Camel
          Ride,Shows,Dinner
        </p>
        <div className="flex">
          <Stars />
          <span>45 reviews</span>
        </div>
        <div className="flex gap-2">
          <Hero />
          <About />
        </div>

        <Service />
      </div>
    </div>
  );
};

export default Home;
