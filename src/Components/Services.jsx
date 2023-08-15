import React from "react";

const Services = () => {
  return (
    <div className="lg:px-20 md:px-10 px-6">
      <p className="text-white text-4xl uppercase font-semibold py-4 md:py-6 lg:py-10">
        || service
      </p>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-6 lg:gap-10">
        <div className="bg-gray-800 flex group flex-col items-start border-b-8 duration-500 border-violet-500 hover:border-white  py-10 px-12 text-white justify-between gap-6">
          <div className="text-6xl text-violet-300 rounded-full bg-violet-900 text-white p-2 duration-500 group-hover:bg-violet-600 flex justify-center">
            <ion-icon name="code-slash-outline"></ion-icon>
          </div>
          <p className="text-2xl text-violet-500 font-bold uppercase">
            Web development
          </p>
          <div>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white">
                <ion-icon name="caret-forward-outline"></ion-icon>Landing page
              </li>
              <li className="flex items-center gap-3 text-white">
                <ion-icon name="caret-forward-outline"></ion-icon>Agency Website
              </li>
              <li className="flex items-center gap-3 text-white">
                <ion-icon name="caret-forward-outline"></ion-icon>Portfolio
                Website
              </li>
              <li className="flex items-center gap-3 text-white">
                <ion-icon name="caret-forward-outline"></ion-icon>Dentist
                Website
              </li>
              <li className="flex items-center gap-3 text-white">
                <ion-icon name="caret-forward-outline"></ion-icon>Blogging
                Website
              </li>
              <li className="flex items-center gap-3 text-white">
                <ion-icon name="caret-forward-outline"></ion-icon>Tour Website
              </li>
              <li className="flex items-center gap-3 text-white">
                <ion-icon name="caret-forward-outline"></ion-icon>Dashboard
              </li>
            </ul>
          </div>
          <button className="mx-auto border-2 flex items-center gap-4 py-2 px-4 text-white hover:text-black hover:bg-white hover:border-white duration-300 text-xl uppercase">
            Learn More <ion-icon name="arrow-forward-circle-outline"></ion-icon>
          </button>
        </div>

        <div className="bg-gray-800 flex group flex-col items-start border-b-8 duration-500 border-violet-500 hover:border-white  py-10 px-12 text-white justify-between gap-6">
          <div className="text-6xl text-violet-300 rounded-full bg-violet-900 text-white p-2 duration-500 group-hover:bg-violet-600 flex justify-center">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <p className="text-2xl text-violet-500 font-bold uppercase">
            Illustration
          </p>
          <div>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white">
                <ion-icon name="caret-forward-outline"></ion-icon>Character
                Design
              </li>
              <li className="flex items-center gap-3 text-white">
                <ion-icon name="caret-forward-outline"></ion-icon>Vector Tracing
              </li>
              <li className="flex items-center gap-3 text-white">
                <ion-icon name="caret-forward-outline"></ion-icon>Digital
                illustrator Design
              </li>
              <li className="flex items-center gap-3 text-white">
                <ion-icon name="caret-forward-outline"></ion-icon>Vector
                Portrait
              </li>
              <li className="flex items-center gap-3 text-white">
                <ion-icon name="caret-forward-outline"></ion-icon>Raster to
                vector
              </li>
              <li className="flex items-center gap-3 text-white">
                <ion-icon name="caret-forward-outline"></ion-icon>Logo Design
              </li>
              <li className="flex items-center gap-3 text-white">
                <ion-icon name="caret-forward-outline"></ion-icon>All
                Illustrator related design
              </li>
            </ul>
          </div>
          <button className="mx-auto border-2 flex items-center gap-4 py-2 px-4 text-white hover:text-black hover:bg-white hover:border-white duration-300 text-xl uppercase">
            Learn More <ion-icon name="arrow-forward-circle-outline"></ion-icon>
          </button>
        </div>

        <div className="bg-gray-800 flex group flex-col items-start border-b-8 duration-500 border-violet-500 hover:border-white  py-10 px-12 text-white justify-between gap-6">
          <div className="text-6xl text-violet-300 rounded-full bg-violet-900 text-white p-2 duration-500 group-hover:bg-violet-600 flex justify-center">
            <ion-icon name="share-social-outline"></ion-icon>
          </div>
          <p className="text-2xl text-violet-500 font-bold uppercase">
            HTML conversion
          </p>
          <div>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white">
                <ion-icon name="caret-forward-outline"></ion-icon>PSD to HTML
              </li>
              <li className="flex items-center gap-3 text-white">
                <ion-icon name="caret-forward-outline"></ion-icon>FIGMA to HTML
              </li>
              <li className="flex items-center gap-3 text-white">
                <ion-icon name="caret-forward-outline"></ion-icon>XD to HTML
              </li>
              <li className="flex items-center gap-3 text-white">
                <ion-icon name="caret-forward-outline"></ion-icon>SKETCH to HTML
              </li>
              <li className="flex items-center gap-3 text-white">
                <ion-icon name="caret-forward-outline"></ion-icon>AI to HTML
              </li>
              <li className="flex items-center gap-3 text-white">
                <ion-icon name="caret-forward-outline"></ion-icon>PDF to HTML
              </li>
              <li className="flex items-center gap-3 text-white">
                <ion-icon name="caret-forward-outline"></ion-icon>JPG to HTML
              </li>
            </ul>
          </div>
          <button className="mx-auto border-2 flex items-center gap-4 py-2 px-4 text-white hover:text-black hover:bg-white hover:border-white duration-300 text-xl uppercase">
            Learn More <ion-icon name="arrow-forward-circle-outline"></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
