import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButton from "../components/LetterButton/LetterButton";
import HangMan from "../components/HangMan/HangMan";
import confetti from "canvas-confetti";

function PlayGame() {
  const location = useLocation();
  const { wordSelected } = location.state || {};

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [step, setStep] = useState(0);
  const [hasConfetti, setHasConfetti] = useState(false);

  function onClickHandler(event) {
    const letter = event.target.value;

    console.log("Button clicked!", letter);
    if (wordSelected.toUpperCase().includes(letter)) {
      console.log("Correct Guess!", letter);
    } else {
      console.log("Wrong Guess!", letter);
      setStep(step + 1);
    }
    setGuessedLetters([...guessedLetters, letter]);
  }

  useEffect(() => {
    if (!wordSelected) return;

    const wordSet = new Set(wordSelected.toUpperCase());
    const guessedSet = new Set(guessedLetters);

    const allGuessed = [...wordSet].every((letter) => guessedSet.has(letter));

    if (allGuessed && !hasConfetti) {
      setHasConfetti(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, [wordSelected, guessedLetters, hasConfetti]);

  return (
    <>
      <h1>Play Game</h1>
      {wordSelected && <p>Word Selected from Start Game: {wordSelected}</p>}
      <MaskedText wordSelected={wordSelected} guessedLetters={guessedLetters} />
      <div>
        <LetterButton
          wordSelected={wordSelected}
          guessedLetters={guessedLetters}
          onClickHandler={onClickHandler}
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
