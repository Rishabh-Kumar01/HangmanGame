import React from "react";
import { getMaskedString } from "./MaskedUtility";

function MaskedText({ wordSelected, guessedLetters }) {
  const maskedText = getMaskedString(wordSelected, guessedLetters);

  return (
    <>
      {maskedText.map((char, index) => (
        <span key={index} className="mx-1">
          {char}
        </span>
      ))}
    </>
  );
}

export default MaskedText;
