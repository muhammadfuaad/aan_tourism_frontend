import React from 'react'
import CheckButton from './CheckButton';

const Appointment = () => {
  return (
    <div className="bg-white p-2 shadow-lg">
      <p className="text-black text-16">Starting from</p>
      <p className="text-black text-22 font-bold">AED 69.00</p>
      <CheckButton />
      <p className="text-18 text-black font-bold">Select Date and Travelers</p>
      <div className="border border-[#e6e6e6] rounded-sm flex items-center gap-2 px-4 py-2">
        <img
          src="./images/calendar_black.png"
          className="w-[16px] h-[16px]"
        ></img>
        <p className="text-14 text-black">Thursday, Dec 7, 2023</p>
      </div>
      <div className="border border-[#e6e6e6] rounded-sm flex items-center gap-2 px-4 py-2">
        <img
          src="./images/profile_black.png"
          className="w-[16px] h-[16px]"
        ></img>
        <p className="text-14 text-black">2 Adults, 0 Child, 0 Infant</p>
      </div>

      <div></div>
      <div className="text-14 flex gap-2">
        <img
          src="./images/circle_check.png"
          className="w-[16px] h-[16px]"
        ></img>
        <p>
          <span className="text-green underline">Free cancellation</span> up to
          24 hours before the experience starts (local time)
        </p>
      </div>
    </div>
  );
}

export default Appointment