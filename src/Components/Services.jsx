import React from "react";

const Services = () => {
  return (
    <div className="lg:px-20 md:px-10 px-6">
      <p className="text-white text-4xl uppercase font-semibold py-4 md:py-6 lg:py-10">
        || service
      </p>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-6 lg:gap-10">
        <div className="bg-gray-800 rounded-tl-[70px] rounded-br-[70px] py-10 px-12 text-white flex flex-col justify-between gap-4">
          <div className="text-6xl text-violet-300 rounded-full flex justify-center">
            <ion-icon name="code-outline"></ion-icon>
          </div>
          <p className="text-3xl font-bold uppercase">Web development</p>
          <div>
            <ul className="space-y-3">
              <li>HTML, CSS website</li>
              <li>HTML, CSS website</li>
              <li>HTML, CSS website</li>
              <li>HTML, CSS website</li>
              <li>HTML, CSS website</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-800 rounded-tl-[70px] rounded-br-[70px] py-10 px-12 text-white flex flex-col justify-between gap-4">
          <div className="text-6xl text-violet-300 rounded-full flex justify-center">
            <ion-icon name="code-outline"></ion-icon>
          </div>
          <p className="text-3xl font-bold uppercase">Web development</p>
          <div>
            <ul className="space-y-3">
              <li>HTML, CSS website</li>
              <li>HTML, CSS website</li>
              <li>HTML, CSS website</li>
              <li>HTML, CSS website</li>
              <li>HTML, CSS website</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-800 rounded-tl-[70px] rounded-br-[70px] py-10 px-12 text-white flex flex-col justify-between gap-4">
          <div className="text-6xl text-violet-300 rounded-full flex justify-center">
            <ion-icon name="code-outline"></ion-icon>
          </div>
          <p className="text-3xl font-bold uppercase">Web development</p>
          <div>
            <ul className="space-y-3">
              <li>HTML, CSS website</li>
              <li>HTML, CSS website</li>
              <li>HTML, CSS website</li>
              <li>HTML, CSS website</li>
              <li>HTML, CSS website</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
