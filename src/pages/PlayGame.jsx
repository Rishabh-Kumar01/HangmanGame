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
      const duration = 5 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
      }

      const interval = setInterval(function () {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        });
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        });
      }, 250);
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
          hasConfetti={hasConfetti}
        />
      </div>
      <div>
        <HangMan step={step} />
      </div>
      {hasConfetti && (
        <div style={styles.overlay}>
          <h2 className="mb-2">Guessed Correctly!! 🎉</h2>
          <Link
            to="/start"
            className="mt-8 px-4 py-1 border-dashed border-2 border-blue-500 rounded-md"
          >
            Start Again
          </Link>
        </div>
      )}
    </>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: "30px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    zIndex: 1000,
  },
};

export default PlayGame;
