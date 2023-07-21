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
      <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-6 lg:gap-10">
        <div className="max-h-[500px] overflow-hidden">
          <img src={"1.jpg"} alt="" />
        </div>

        <div className="max-h-[500px] overflow-hidden">
          <img src={"2.png"} alt="" />
        </div>

        <div className="max-h-[500px] overflow-hidden">
          <img src={"3.png"} alt="" />
        </div>

        <div className="max-h-[500px] overflow-hidden">
          <img src={"4.png"} alt="" />
        </div>

        <div className="max-h-[500px] overflow-hidden">
          <img src={"5.png"} alt="" />
        </div>

        <div className="max-h-[500px] overflow-hidden">
          <img src={"6.png"} alt="" />
        </div>

        <div className="max-h-[500px] overflow-hidden">
          <img src={"8.png"} alt="" />
        </div>

        <div className="max-h-[500px] overflow-hidden">
          <img src={"9.png"} alt="" />
        </div>

        <div className="max-h-[500px] overflow-hidden">
          <img src={"10.png"} alt="" />
        </div>

        <div className="max-h-[500px] overflow-hidden">
          <img src={"11.png"} alt="" />
        </div>

        <div className="max-h-[500px] overflow-hidden">
          <img src={"12.png"} alt="" />
        </div>

        <div className="max-h-[500px] overflow-hidden">
          <img src={"13.png"} alt="" />
        </div>
      </div>
      <div className="bg-gray-500 h-[1px] w-full my-3 md:my-6 lg:my-10"></div>
    </div>
  );
};

export default Gallery;
