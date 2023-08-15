import React from "react";

export default function WebDevelopment() {
  return (
    <div>
      <div>
        <p className="text-white text-2xl font-semibold py-4 md:py-6 lg:py-10">
          Web Development:
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-6 lg:gap-10">
          <div className="group duration-500 max-h-[500px] overflow-hidden bg-gray-700 relative">
            <div className="bg-violet-900 hidden group-hover:block opacity-80 inset-0 absolute z-10"></div>
            <div className="justify-center hidden group-hover:flex items-center inset-0 absolute z-20">
              <a href="https://mazharraj.github.io/travel/" target="blank">
                <button className="bg-white flex items-center gap-2 hover:bg-gray-900 hover:text-white border-2 border-white duration-500 py-2 px-8 font-semibold my-4">
                  <ion-icon name="pulse-outline"></ion-icon>
                  Live Preview
                </button>
              </a>
            </div>
            <img src={"project1.jpg"} alt="" />
          </div>

          <div className="group duration-500 max-h-[500px] overflow-hidden bg-gray-700 relative">
            <div className="bg-violet-900 hidden group-hover:block opacity-80 inset-0 absolute z-10"></div>
            <div className="justify-center hidden group-hover:flex items-center inset-0 absolute z-20">
              <a href="https://mazharraj.github.io/carshop/" target="blank">
                <button className="bg-white flex items-center gap-2 hover:bg-gray-900 hover:text-white border-2 border-white duration-500 py-2 px-8 font-semibold my-4">
                  <ion-icon name="pulse-outline"></ion-icon>
                  Live Preview
                </button>
              </a>
            </div>
            <img src={"project2.jpg"} alt="" />
          </div>

          <div className="group duration-500 max-h-[500px] overflow-hidden bg-gray-700 relative">
            <div className="bg-violet-900 hidden group-hover:block opacity-80 inset-0 absolute z-10"></div>
            <div className="justify-center hidden group-hover:flex items-center inset-0 absolute z-20">
              <a href="https://mazharraj.github.io/coffee/" target="blank">
                <button className="bg-white flex items-center gap-2 hover:bg-gray-900 hover:text-white border-2 border-white duration-500 py-2 px-8 font-semibold my-4">
                  <ion-icon name="pulse-outline"></ion-icon>
                  Live Preview
                </button>
              </a>
            </div>
            <img src={"project3.jpg"} alt="" />
          </div>

          <div className="group duration-500 max-h-[500px] overflow-hidden bg-gray-700 relative">
            <div className="bg-violet-900 hidden group-hover:block opacity-80 inset-0 absolute z-10"></div>
            <div className="justify-center hidden group-hover:flex items-center inset-0 absolute z-20">
              <a href="https://mazharraj.github.io/bproject5/" target="blank">
                <button className="bg-white flex items-center gap-2 hover:bg-gray-900 hover:text-white border-2 border-white duration-500 py-2 px-8 font-semibold my-4">
                  <ion-icon name="pulse-outline"></ion-icon>
                  Live Preview
                </button>
              </a>
            </div>
            <img src={"project4.jpg"} alt="" />
          </div>

          <div className="group duration-500 max-h-[500px] overflow-hidden bg-gray-700 relative">
            <div className="bg-violet-900 hidden group-hover:block opacity-80 inset-0 absolute z-10"></div>
            <div className="justify-center hidden group-hover:flex items-center inset-0 absolute z-20">
              <a href="https://mazharraj.github.io/project2/" target="blank">
                <button className="bg-white flex items-center gap-2 hover:bg-gray-900 hover:text-white border-2 border-white duration-500 py-2 px-8 font-semibold my-4">
                  <ion-icon name="pulse-outline"></ion-icon>
                  Live Preview
                </button>
              </a>
            </div>
            <img src={"project5.jpg"} alt="" />
          </div>

          <div className="group duration-500 max-h-[500px] overflow-hidden bg-gray-700 relative">
            <div className="bg-violet-900 hidden group-hover:block opacity-80 inset-0 absolute z-10"></div>
            <div className="justify-center hidden group-hover:flex items-center inset-0 absolute z-20">
              <a
                href="https://mazharraj.github.io/digitalmarket/"
                target="blank"
              >
                <button className="bg-white flex items-center gap-2 hover:bg-gray-900 hover:text-white border-2 border-white duration-500 py-2 px-8 font-semibold my-4">
                  <ion-icon name="pulse-outline"></ion-icon>
                  Live Preview
                </button>
              </a>
            </div>
            <img src={"project6.jpg"} alt="" />
          </div>
        </div>
        <div className="bg-gray-500 h-[1px] w-full my-3 md:my-6 lg:my-10"></div>
      </div>
    </div>
  );
}
