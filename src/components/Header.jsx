import React from 'react'

const Header = () => {
  return (
    <div className="bg-medium-blue text-white text-14 flex justify-between items-center w-full px-12 py-4">
      <img src="./images/aan_logo.png" className='w-[100px]'></img>
      <div className='flex gap-6'>
        <a>Top Selling</a>
        <a>Activities</a>
        <a>Burj Khalifa</a>
        <a>Desert Safari</a>
        <div className='bg-white h-6 w-[1px]'></div>
        <a>Login</a>
        <img src="./images/search.png" className='w-[20px] h-[20px]'></img>
        <img src="./images/cart.png" className='w-[20px] h-[20px]'></img>
      </div>
    </div>
  );
}

export default Header