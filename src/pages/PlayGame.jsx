import React from "react";
import { Link } from "react-router-dom";

function PlayGame() {
  return (
    <>
      <h1>Play Game</h1>
      <Link to="/start">Start Game</Link>
    </>
  );
}

export default PlayGame;
