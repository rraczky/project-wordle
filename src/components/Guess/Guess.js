import React from "react";
import { range } from "../../utils";
function Guess({ letters }) {
  return (
    <p className="guess">
      {range(5).map((index) => (
        <span key={index} className="cell">
          {letters ? letters[index] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
