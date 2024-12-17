import React from "react";
import { Link, useLocation } from "react-router-dom";

function PlayGame() {
  const location = useLocation();
  const { wordSelected } = location.state || {};

  return (
    <>
      <h1>Play Game</h1>
      {wordSelected && <p>Word Selected from Start Game: {wordSelected}</p>}
      <Link to="/start">Start Game</Link>
    </>
  );
}

export default PlayGame;
