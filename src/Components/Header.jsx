import React, { useState } from "react";
import Button from "./Button";

function Header() {
  let [open, setOpen] = useState(false);
  return (
    <div>
      <div className="flex justify-between px-6 lg:px-20 justify-between items-center bg-gray-900 py-3 shadow-lg relative border-b border-gray-600">
        <div className="flex items-center gap-2">
          <a href="#">
            <img src="vite.svg" alt="" className="logo" />
          </a>
          <p className="border px-1 lg:border-violet-400 text-3xl font-bold uppercase text-white lg:text-violet-400 whitespace-nowrap">
            mazhar
          </p>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-4xl text-white lg:hidden cursor-pointer">
          <ion-icon name={open ? "close-outline" : "menu-outline"}></ion-icon>
        </div>

        <ul
          className={`absolute lg:static lg:bg-gray-900 bg-gray-700 w-full top-full flex right-0 top-0 lg:flex-row flex-col gap-6 text-white lg:z-auto justify-center lg:justify-end items-center text-xl lg:text-lg duration-500 overflow-hidden ${
            open ? "h-screen opacity-95 lg:h-auto" : "h-0 lg:h-auto"
          }`}>
          <li>
            <a href="#" className="hover:text-violet-200 duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-violet-200 duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#service" className="hover:text-violet-200 duration-300">
              Service
            </a>
          </li>
          <li>
            <a href="#skill" className="hover:text-violet-200 duration-300">
              Skill
            </a>
          </li>
          <li>
            <a href="#gallery" className="hover:text-violet-200 duration-300">
              Gallery
            </a>
          </li>
          <li>
            <a href="tel:+8801316146231">
              <Button btn="Call Now" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
