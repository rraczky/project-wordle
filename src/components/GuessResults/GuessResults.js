import React from "react";

import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessResults({ guessList, answer }) {
  const rows = range(NUM_OF_GUESSES_ALLOWED);
  return (
    <div className="guess-results">
      {rows.map((index) => (
        <Guess key={index} letters={guessList[index]} answer={answer} />
      ))}
    </div>
  );
}

export default GuessResults;
