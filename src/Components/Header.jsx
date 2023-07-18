import React, { useState } from "react";
import Button from "./Button";

function Header() {
  let [open, setOpen] = useState(false);
  return (
    <div>
      <div className="flex lg:flex-row flex-col px-6 lg:px-20 justify-between lg:items-center bg-gray-900 py-3 shadow-lg">
        <div className="flex items-center gap-2">
          <a href="#">
            <img src="vite.svg" alt="" className="logo" />
          </a>
          <p className="text-3xl font-bold uppercase text-white lg:text-violet-400">
            mazhar raj
          </p>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="absolute right-6 text-4xl text-white lg:hidden cursor-pointer">
          <ion-icon name={open ? "close-outline" : "menu-outline"}></ion-icon>
        </div>

        <ul
          className={`absolute lg:static lg:bg-gray-900 bg-gray-700 w-[70%] flex right-0 top-19 lg:flex-row flex-col gap-6 text-white z-[-1] lg:z-auto h-[90%] justify-center lg:justify-end items-center text-xl lg:text-lg duration-500 ease-in ${
            open ? "top-0" : "top-[-600px]"
          }`}>
          <li>
            <a href="#" className="hover:text-violet-200 duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-violet-200 duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-violet-200 duration-300">
              Service
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-violet-200 duration-300">
              Skill
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-violet-200 duration-300">
              Gallery
            </a>
          </li>

          <li>
            <a href={"cv.pdf"} download>
              <Button btn="Contact Now" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
