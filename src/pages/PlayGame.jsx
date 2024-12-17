import React from "react";
import { Link, useLocation } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";

function PlayGame() {
  const location = useLocation();
  const { wordSelected } = location.state || {};

  return (
    <>
      <h1>Play Game</h1>
      {wordSelected && <p>Word Selected from Start Game: {wordSelected}</p>}
      <MaskedText wordSelected={wordSelected} guessedLetters={[]} />
      <Link to="/start">Start Game</Link>
    </>
  );
}

export default PlayGame;
