import React from "react";
import Header from "./Header";
import Hero from "./Hero";
const Home = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="px-16 py-4">
        <p className="text-[25.71px] text-black font-bold">
          Dubai Desert 4x4 Dune Bashing, Self-Ride 60min ATV Quad, Camel
          Ride,Shows,Dinner
        </p>
        <div className="flex">
          <div className="flex gap-2 items-center">
            <img src="./images/star.png" className="w-[20px] h-[20px]"></img>
            <img src="./images/star.png" className="w-[20px] h-[20px]"></img>
            <img src="./images/star.png" className="w-[20px] h-[20px]"></img>
            <img src="./images/star.png" className="w-[20px] h-[20px]"></img>
            <img src="./images/star.png" className="w-[20px] h-[20px]"></img>
          </div>
          <span>45 reviews</span>
        </div>
        <div className="flex gap-2">
          <Hero />
          <div className="bg-white p-2 shadow-lg">
            <p className="text-22 font-bold">About this activity</p>
            <div className="flex gap-2">
              <img
                src="./images/calendar_check.png"
                className="w-[20px] h-[20px]"
              ></img>
              <div>
                <p className="text-14 text-dark-blue">Free cancellation</p>
                <p className="text-13 text-gray">Cancel up to 24 hours in advance for a full refund</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
