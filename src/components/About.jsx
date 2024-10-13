import React from 'react'
import Feature from './Feature';
const About = () => {
  return (
    <div className="bg-white p-2 shadow-lg">
      <p className="text-22 font-bold">About this activity</p>
      <Feature
        heading="Free cancellation"
        description="Cancel up to 24 hours in advance for a full refund"
        image="./images/calendar_check.png"
      />
      <Feature
        heading="Reserve now & pay later"
        description="Keep your travel plans flexible — book your spot and pay nothing today."
        image="./images/calendar.png"
      />
      <Feature
        heading="Duration 1 - 3 hours"
        description="Check availability to see starting times."
        image="./images/clock.png"
      />
      <Feature
        heading="Host or greeter"
        description="English"
        image="./images/profile.png"
      />
      <Feature
        heading="Audio guide included"
        description="English"
        image="./images/headphone.png"
      />
    </div>
  );
}

export default About