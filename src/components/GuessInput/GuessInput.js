import React from "react";

const GuessInput = ({ handleAddGuess, condition }) => {
  const [input, setInput] = React.useState("");

  const handleOnChange = (event) => {
    const value = event.target.value.toUpperCase()
    if (value.length > 5) return
    setInput(value)
  }

  const handleOnSubmit = (event) => {
    event.preventDefault()
    if (input.length < 5) {
      console.log('Guess must be 5 characters');
      return
    }

    handleAddGuess(input)
    setInput('')
  }

  return (
    <form 
      className="guess-input-wrapper" 
      onSubmit={event => handleOnSubmit(event)
      }>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={input}
        onChange={(event) => handleOnChange(event)}
        disabled={!!condition}
      />
    </form>
  );
};

export default GuessInput;
