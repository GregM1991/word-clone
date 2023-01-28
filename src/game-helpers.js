export function checkGuess(guess, answer) {
  if (!guess) {
    return null;
  }

  const guessChars = guess.toUpperCase().split('');
  const answerChars = answer.split('');

  return guessChars.map((guessChar, index) => {
    const answerChar = answerChars[index];

    let status;
    if (guessChar === answerChar) {
      status = 'correct';
    } else if (answerChars.includes(guessChar)) {
      status = 'misplaced';
    } else {
      status = 'incorrect';
    }
    return {
      letter: guessChar,
      status,
    };
  });
}

export const hasWonOrLost = (guesses, answer) => {
  const hasGuessedWord = guesses.filter(guess => guess.guess === answer)
  console.log(hasGuessedWord)
  if (hasGuessedWord.length > 0) {
    return 'win'
  } else if (guesses.length === 6) {
    return 'lose'
  } else {
    return null
  }
}