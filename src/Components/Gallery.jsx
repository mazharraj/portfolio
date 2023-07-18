import React from "react";

const Gallery = () => {
  return (
    <div className="lg:px-20 md:px-10 px-6 pb-10">
      <p className="text-white text-4xl uppercase font-semibold py-4 md:py-6 lg:py-10">
        || Recent work
      </p>
      <p className="text-white text-2xl uppercase font-semibold py-4 md:py-6 lg:py-10">
        Web Development:
      </p>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-6 lg:gap-10">
        <img src={"profile.jpg"} alt="" />
        <img src={"profile.jpg"} alt="" />
        <img src={"profile.jpg"} alt="" />
      </div>
      <div className="bg-gray-500 h-[1px] w-full my-3 md:my-6 lg:my-10"></div>
      <p className="text-white text-2xl uppercase font-semibold py-4 md:py-6 lg:py-10">
        Graphic design:
      </p>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-6 lg:gap-10">
        <img src={"profile.jpg"} alt="" />
        <img src={"profile.jpg"} alt="" />
        <img src={"profile.jpg"} alt="" />
      </div>
    </div>
  );
};

export default Gallery;
