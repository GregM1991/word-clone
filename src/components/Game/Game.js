import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import WinLoseBanner from "../WinLoseBanner"
import { hasWonOrLost } from '../../game-helpers'

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const Game = () => {
  const [guesses, setGuesses] = React.useState([]);
  const condition = hasWonOrLost(guesses, answer)
  console.log(condition)

  const handleAddGuess = (guess) => {
    if (guesses.length === 6) {
      console.log("You've run out of attempts, restart the game to receive a new word");
      return
    }
    const newGuess = {
      guess,
      id: Math.random(),
    };
    const nextGuesses = [...guesses, newGuess];
    setGuesses(nextGuesses);
  };

  return (
    <>
      <GuessInput handleAddGuess={handleAddGuess} condition={condition}/>
      <GuessResults guesses={guesses} answer={answer}/>
      <WinLoseBanner condition={condition} guesses={guesses} answer={answer}/>
    </>
  );
};

export default Game;
