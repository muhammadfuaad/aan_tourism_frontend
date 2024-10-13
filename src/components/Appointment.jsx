import React from 'react'
import CheckButton from './CheckButton';

const Appointment = () => {
  return (
    <div>
      <p className="text-black text-16">Starting from</p>
      <p className="text-black text-22 font-bold">AED 69.00</p>
      <CheckButton />
      <p>Select Date and Travelers</p>
      <div></div>
      <div></div>
      <div>
        <img src='./images/circle_check.png'></img>
        <span>Free cancellation</span> up to 24 hours before the experience
        starts (local time)
      </div>
    </div>
  );
}

export default Appointment