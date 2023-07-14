import React from "react";

const Button = ({ btn }) => {
  return (
    <div>
      <button className="border-2 rounded-xl py-2 px-4 text-white hover:text-black hover:bg-white hover:border-white duration-300 text-xl uppercase">
        {btn}
      </button>
    </div>
  );
};

export default Button;
