import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButton from "../components/LetterButton/LetterButton";
import HangMan from "../components/HangMan/HangMan";

function PlayGame() {
  const location = useLocation();
  const { wordSelected } = location.state || {};

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [step, setStep] = useState(0);

  function onClickAfterHandler(letter) {
    console.log("Button clicked After!", letter);
    if (wordSelected.toUpperCase().includes(letter)) {
      console.log("Correct Guess!", letter);
    } else {
      console.log("Wrong Guess!", letter);
      setStep(step + 1);
    }
    setGuessedLetters([...guessedLetters, letter]);
  }

  return (
    <>
      <h1>Play Game</h1>
      {wordSelected && <p>Word Selected from Start Game: {wordSelected}</p>}
      <MaskedText wordSelected={wordSelected} guessedLetters={guessedLetters} />
      <div>
        <LetterButton
          wordSelected={wordSelected}
          guessedLetters={guessedLetters}
          onClickHandler={onClickAfterHandler}
        />
      </div>
      <div>
        <HangMan step={step} />
      </div>
      <Link to="/start">Start Game</Link>
    </>
  );
}

export default PlayGame;
