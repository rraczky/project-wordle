import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";
function Guess({ letters, answer }) {
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
