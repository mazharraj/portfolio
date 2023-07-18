import React from "react";
import Button from "./Button";

const About = () => {
  return (
    <div className="lg:px-20 md:px-10 px-6 bg-gray-800 py-12">
      <p className="text-white text-4xl uppercase font-semibold py-4 md:py-6 lg:py-10">
        || about me
      </p>
      <div className="text-violet-200 text-justify space-y-4">
        <p>
          Hello, I'm Mazhar. I have more than 2 years experience in Web
          Development. I am expert in HTML5, CSS3, TailwindCSS, Bootstrap5,
          JavaScript, React.js. I am a self-taught web developer. I love
          codding. And I am 24/7 online.
        </p>
        <p>
          I want to build up my career in any high prospect sector. I would like
          to develop my professional skills and work in a challenging
          environment with ample prospects for growth in a reputed organization.
        </p>

        <p className="pb-8">Download my resume :</p>
      </div>
      <a href={"cv.pdf"} download>
        <button className="border-2 flex items-center gap-4 rounded-xl py-2 px-4 text-white hover:text-black hover:bg-white hover:border-white duration-300 text-xl uppercase">
          <ion-icon name="cloud-download-outline"></ion-icon> Get Resume
        </button>
      </a>
    </div>
  );
};

export default About;
