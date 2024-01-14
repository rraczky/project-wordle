import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  function updateGuessList(guess) {
    const nextGuessList = [...guessList, guess];
    setGuessList(nextGuessList);
    console.log(guessList);
  }

  const [guessList, setGuessList] = React.useState([]);
  return (
    <>
      <GuessResults guessList={guessList} answer={answer} />
      <GuessInput updateGuessList={updateGuessList} />
    </>
  );
}

export default Game;
