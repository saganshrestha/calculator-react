import React, { useContext } from "react";
import { CalcContext } from "../context/CalcContext";

const Screen = () => {
  const { calc } = useContext(CalcContext);

  return (
    <div className="flex items-center justify-end px-4 mb-4 text-lg bg-white rounded-md h-14">
      {calc.num ? calc.num : calc.res}
    </div>
  );
};

export default Screen;
