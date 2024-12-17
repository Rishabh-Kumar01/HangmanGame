import React from "react";
import { Link, useLocation } from "react-router-dom";

function PlayGame() {
  const location = useLocation();
  const { value } = location.state || {};

  return (
    <>
      <h1>Play Game</h1>
      {value && <p>Value from Start Game: {value}</p>}
      <Link to="/start">Start Game</Link>
    </>
  );
}

export default PlayGame;
