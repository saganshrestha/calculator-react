import React from "react";
import Screen from "./Components/Screen";
import ButtonBox from "./Components/ButtonBox";
import Button from "./Components/Button";

const buttonValues = [
  ["AC", "CE", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "+/-", "="],
];

const App = () => {
  return (
    <div className="bg-purple-600 p-4 rounded-lg">
      <Screen />
      <ButtonBox>
        {buttonValues.flat().map((button, index) => (
          <Button value={button} key={index} />
        ))}
      </ButtonBox>
    </div>
  );
};

export default App;
