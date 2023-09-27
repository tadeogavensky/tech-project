import React, { useState } from "react";
const PhoneSelector = ({ imgURL, changeGrayIphoneImg, grayImage }) => {
  const handleClick = () => {
    if (grayImage !== imgURL.gray) {
      changeGrayIphoneImg(imgURL.gray);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        grayImage === imgURL.gray
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center  sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgURL}
          alt="shoe colletion"
          width={127}
          height={103.34}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default PhoneSelector;
