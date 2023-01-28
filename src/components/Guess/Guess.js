import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ answer, guess }) {
  let checkedGuess;
  if (guess) {
    checkedGuess = checkGuess(guess.guess, answer);
  }
  return (
    <p className="guess">
      {guess
        ? checkedGuess.map((checkedGuess, i) => (
            <span key={i} className={`cell ${checkedGuess.status}`}>
              {checkedGuess.letter}
            </span>
          ))
        : range(5).map((num) => <span key={num} className="cell"></span>)}
    </p>
  );
}

export default Guess;
