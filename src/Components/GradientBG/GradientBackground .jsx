import React from "react";

const GradientBackground = ({ gradientFrom, gradientTo, animationClass }) => {
  return (
    <div className="relative over">
      {/* Gradient background with blur effect */}
      <div
        className={`absolute flex top-[47%] -left-[25%] transform -translate-x-1/2 -translate-y-1/2 z-10`}
      >
        <div
          className={`z-[2] absolute w-[65rem] h-[50rem] bg-gradient-to-r from-[${gradientFrom}] to-[${gradientTo}] filter blur-[5rem] rounded-full transform lg:-translate-x-[29vw] -translate-y-[35rem] `}
        ></div>
      </div>
    </div>
  );
};

export default GradientBackground;
