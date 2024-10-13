import React from 'react'

const Hero = () => {
  return (
    <div className='flex gap-2'>
      <div className='flex flex-col gap-2 w-1/5'>
        <img src="./images/image_2.png"></img>
        <img src="./images/image_3.png"></img>
        <img src="./images/image_4.png"></img>
      </div>
      <img src='./images/hero.jpg' className='w-4/5'></img>
    </div>
  );
}

export default Hero