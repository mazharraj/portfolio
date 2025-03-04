import React from "react";

const Hero = () => {
  return (
    <div className="grid md:grid-cols-2 justify-between z-[-20]">
      <img src={"profile3.png"} alt="" className="grayscale " />
      <div className=" flex flex-col justify-center md:gap-3 gap-1 lg:gap-6 md:px-10 px-6 lg:px-20">
        <p className="text-2xl md:text-4xl font-semibold text-white pt-4 md:pt-0">
          Hello, I am
        </p>
        <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white uppercase">
          mazharul islam
        </p>
        <p className="text-gray-300 text-2xl md:text-3xl">
          Web Developer & Digital Illustrator
        </p>
      </div>
    </div>
  );
};

export default Hero;
