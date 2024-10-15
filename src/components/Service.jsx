import Stars from './Stars';
import Feature from './Feature';
import CheckButton from './CheckButton';

const Service = () => {
  return (
    <div className="flex gap-2 py-4 pl-4 pr-2 shadow-lg border border-[#e6e6e6] rounded-md font-arial">
      <img src="./images/image_5.png"></img>
      <div className="border-r-2 px-2 border-[#e6e6e6] w-[60%]">
        <p className="text-18 text-00 font-bold">Camel Ride,Shows,Dinner</p>
        <Stars />
        <ul className="list-disc list-inside text-13 text-2e mt-2">
          <li>
            Get yourself tickets to the award-winning Dubai Frame – the world's
            largest picture frame and admire unbeaten views of the city.
          </li>
          <li>
            On one side, you'll notice iconic landmarks of modern Dubai, and on
            the other, you'll see older parts of the city.
          </li>
          <li>
            On one side, you'll notice iconic landmarks of modern Dubai, and on
            the other, you'll see older parts of the city.
          </li>
        </ul>
      </div>
      <div className="pl-4 flex flex-col gap-2">
        <Feature
          heading="Free cancellation"
          image="./images/calendar_check.png"
        />
        <Feature
          heading="Reserve now & pay later"
          image="./images/calendar.png"
        />
        <Feature heading="Duration 1 - 3 hours" image="./images/clock.png" />
        <Feature heading="Host or greeter" image="./images/profile.png" />
        <div>
          <p className="text-black text-16 mt-2">Starting from</p>
          <p className="text-black text-22 font-bold mb-2">AED 69.00</p>
          <CheckButton />
        </div>
      </div>
    </div>
  );
}

export default Service