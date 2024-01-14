import React from "react";

import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessResults({ guessList }) {
  const rows = range(NUM_OF_GUESSES_ALLOWED);
  return (
    <div className="guess-results">
      {rows.map((index) => (
        <Guess key={index} letters={guessList[index]} />
      ))}
    </div>
  );
}

export default GuessResults;
