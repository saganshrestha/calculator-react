import React from "react";

const getStyleName = (button) => {
  const className = {
    "=": "equals",
    "/": "operators",
    x: "operators",
    "-": "operators",
    "+": "operators",
  };
  return className[button];
};

const Button = ({ value }) => {
  return (
    <button
      className={`${getStyleName(
        value
      )} bg-white h-12 w-12 rounded-md flex items-center justify-center cursor-pointer text-lg text-[#242424] border-none`}
    >
      {value}
    </button>
  );
};

export default Button;
