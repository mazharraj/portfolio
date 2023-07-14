import React from "react";
import Button from "./Button";

const About = () => {
  return (
    <div className="lg:px-20 md:px-10 px-6">
      <p className="text-white text-4xl uppercase font-semibold py-4 md:py-6 lg:py-10">
        || about me
      </p>
      <div className="text-violet-200 text-justify space-y-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          praesentium sunt architecto reiciendis. Numquam, ea dolor quisquam at
          voluptatum facere incidunt odio minus alias corrupti aut officiis,
          iste, nobis reprehenderit amet sint excepturi obcaecati. Aliquid,
          incidunt rerum tenetur in nemo distinctio eligendi repellat. Excepturi
          ipsa et odio dignissimos laudantium aliquam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod atque ut
          libero cupiditate laborum nisi similique facilis, optio quas est.
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
