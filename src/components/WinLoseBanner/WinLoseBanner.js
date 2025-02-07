import React from "react";

function WinLoseBanner({ condition, guesses, answer }) {
  if (condition === "win")
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {guesses.length} guesses</strong>.
        </p>
      </div>
    );
  if (condition === "lose")
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  return null;
}

export default WinLoseBanner;
