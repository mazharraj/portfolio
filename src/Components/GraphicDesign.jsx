import React from "react";

export default function GraphicDesign() {
  return (
    <div>
      <div>
        <p className="text-white text-2xl font-semibold py-4 md:py-6 lg:py-10">
          Illustration:
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-6 lg:gap-10">
          <a
            href="./graphic/graphic1.jpg"
            target="blank"
            className="group h-[280px] w-full bg-[url(./graphic/graphic1.jpg)] bg-center bg-cover duration-500 max-h-[500px] overflow-hidden bg-gray-700 relative"
          ></a>
          <a
            href="./graphic/graphic2.jpg"
            target="blank"
            className="group h-[280px] w-full bg-[url(./graphic/graphic2.jpg)] bg-center bg-cover duration-500 max-h-[500px] overflow-hidden bg-gray-700 relative"
          ></a>
          <a
            href="./graphic/graphic3.jpg"
            target="blank"
            className="group h-[280px] w-full bg-[url(./graphic/graphic3.jpg)] bg-center bg-cover duration-500 max-h-[500px] overflow-hidden bg-gray-700 relative"
          ></a>
          <a
            href="./graphic/graphic4.jpg"
            target="blank"
            className="group h-[280px] w-full bg-[url(./graphic/graphic4.jpg)] bg-center bg-cover duration-500 max-h-[500px] overflow-hidden bg-gray-700 relative"
          ></a>
          <a
            href="./graphic/graphic5.jpg"
            target="blank"
            className="group h-[280px] w-full bg-[url(./graphic/graphic5.jpg)] bg-center bg-cover duration-500 max-h-[500px] overflow-hidden bg-gray-700 relative"
          ></a>
          <a
            href="./graphic/graphic6.jpg"
            target="blank"
            className="group h-[280px] w-full bg-[url(./graphic/graphic6.jpg)] bg-center bg-cover duration-500 max-h-[500px] overflow-hidden bg-gray-700 relative"
          ></a>
        </div>
        <div className="bg-gray-500 h-[1px] w-full my-3 md:my-6 lg:my-10"></div>
      </div>
    </div>
  );
}
