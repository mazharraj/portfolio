import React, { useState } from "react";
import Button from "./Button";

function Header() {
  let [open, setOpen] = useState(false);
  return (
    <div>
      <div className="flex justify-between px-6 lg:px-20 justify-between items-center bg-gray-900 py-3 shadow-lg relative">
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
          className="text-4xl text-white lg:hidden cursor-pointer">
          <ion-icon name={open ? "close-outline" : "menu-outline"}></ion-icon>
        </div>
      </div>
      <ul
        className={`absolute lg:static lg:bg-gray-900 bg-gray-700 w-full top-full flex right-0 top-0 lg:flex-row flex-col gap-6 text-white lg:z-auto justify-center lg:justify-end items-center text-xl lg:text-lg duration-500 overflow-hidden ${
          open ? "h-screen" : "h-0"
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
  );
}

export default Header;
