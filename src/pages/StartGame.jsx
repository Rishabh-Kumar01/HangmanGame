import React from "react";
import TextInputFormContainer from "../components/TextInputForm/TextInputFormContainer";
import { Link } from "react-router-dom";

function StartGame() {
  return (
    <>
      <h1>Start Game</h1>
      <TextInputFormContainer />
      <Link to="/game">Play Game</Link>
    </>
  );
}

export default StartGame;
