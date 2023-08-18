import React, { useState } from "react";
import WebDevelopment from "./WebDevelopment";
import GraphicDesign from "./GraphicDesign";

const Gallery = () => {
  const [toggle, setToggle] = useState(1);

  function toggleShow(id) {
    setToggle(id);
  }
  return (
    <div className="lg:px-20 md:px-10 px-6 pb-10">
      <p className="text-white text-4xl uppercase font-semibold py-4 md:py-6 lg:py-10 ">
        || Recent work
      </p>
      <div className="grid grid-cols-2 xl:px-[300px] text-center justify-center items-center gap-4">
        <p
          onClick={() => toggleShow(1)}
          className="text-violet-800 hover:opacity-90 font-bold cursor-pointer text-sm md:text-2xl bg-white py-2 px-1 md:px-6 uppercase"
        >
          Web Development
        </p>
        <p
          onClick={() => toggleShow(2)}
          className="text-violet-800 hover:opacity-90 font-bold cursor-pointer text-sm md:text-2xl bg-white py-2 px-1 md:px-6 uppercase"
        >
          Illustration
        </p>
      </div>
      {/* Web Development */}
      <div className={toggle === 1 ? "block" : "hidden"}>
        <WebDevelopment />
      </div>

      {/* Graphic Design */}
      <div className={toggle === 2 ? "block" : "hidden"}>
        <GraphicDesign />
      </div>
    </div>
  );
};

export default Gallery;
