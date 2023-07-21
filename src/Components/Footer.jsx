import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-violet-500 lg:px-20 md:px-10 px-6 lg:pt-12">
        <div className="text-center py-4 text-white text-2xl md:text-3xl font-semibold">
          Contact with me anytime. I am waiting for your work.
        </div>
        <div className="py-4">
          <div className="text-white flex justify-center items-center gap-6 text-4xl">
            <a
              href="https://www.facebook.com/md.mazharulislam.18"
              className="hover:text-black duration-500">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a
              href="https://github.com/mazharraj"
              className="hover:text-black duration-500">
              <ion-icon name="logo-github"></ion-icon>
            </a>
            <a
              href="https://www.behance.net/mazharraj185261"
              className="hover:text-black duration-500">
              <ion-icon name="logo-behance"></ion-icon>
            </a>
          </div>
        </div>
        <p className="text-gray-400 text-center">Developed by Mazhar Raj</p>
      </div>
    </div>
  );
};

export default Footer;
