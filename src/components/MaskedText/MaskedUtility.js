/**
 * @param {The word to be guessed} typedString
 * @param {The letters that have been guessed} guessedLetters
 */

export function getMaskedString(typedString, guessedLetters) {
  guessedLetters = guessedLetters.map((char) => char.toUpperCase());

  const maskedString = typedString
    .toUpperCase()
    .split("")
    .map((char) => {
      if (guessedLetters.includes(char)) {
        return char;
      }
      return "_";
    });

  return maskedString.join("");
}
