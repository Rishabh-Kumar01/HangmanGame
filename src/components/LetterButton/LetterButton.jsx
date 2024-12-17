const ALPHABETS = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");

function LetterButton({ wordSelected, guessedLetters, onClickHandler }) {
  const wordSelectedSet = new Set(wordSelected.toUpperCase());
  const guessedLettersSet = new Set(guessedLetters);

  function buttonStyle(letter) {
    if (guessedLettersSet.has(letter)) {
      return wordSelectedSet.has(letter) ? "bg-green-500" : "bg-red-500";
    }
    return "bg-blue-500";
  }

  function onClickButtonHandler(event) {
    console.log("Button clicked!", event.target.value);
    onClickHandler(event.target.value);
  }

  const buttons = ALPHABETS.map((letter) => {
    return (
      <button
        className={`h-12 w-12 m-1 text-white rounded-md ${buttonStyle(letter)}`}
        onClick={onClickButtonHandler}
        value={letter}
        key={`button-${letter}`}
        disabled={guessedLettersSet.has(letter)}
      >
        {letter}
      </button>
    );
  });

  return <>{buttons}</>;
}

export default LetterButton;
