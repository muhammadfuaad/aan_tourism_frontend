import React from 'react'

const Feature = ({heading, description, image}) => {
  return (
    <div className="flex gap-2">
      <img
        src={image}
        className="w-[20px] h-[20px]"
      ></img>
      <div>
        <p className="text-14 text-dark-blue">{heading}</p>
        <p className="text-13 text-gray">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Feature