import React from "react";

const Hero = () => {
  return (
    <div className="grid md:grid-cols-2 justify-between static z-[-20]">
      <div className="md:order-1 order-2 flex flex-col justify-center md:gap-3 gap-1 lg:gap-6 md:px-10 px-6 lg:px-20">
        <p className="text-2xl md:text-4xl font-semibold text-white">
          Hello, I am
        </p>
        <p className="text-3xl md:text-4xl lg:text-6xl font-semibold text-white uppercase">
          mazhar raj
        </p>
        <p className="text-gray-300 text-2xl md:text-3xl">
          Web Developer & Digital Illustrator
        </p>
      </div>
      <img src={"profile.jpg"} alt="" className="md:order-2 order-1" />
    </div>
  );
};

export default Hero;
