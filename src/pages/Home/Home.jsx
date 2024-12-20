import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

function Home() {
  const [word, setWord] = useState("");
  const [hint, setHint] = useState("");

  async function fetchWords() {
    const response = await fetch("http://localhost:3000/words");
    const words = await response.json();
    const randomIndex = Math.floor(Math.random() * words.length);
    setWord(words[randomIndex].wordValue);
    setHint(words[randomIndex].wordHint);
  }

  useEffect(() => {
    fetchWords();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div>
          <Link to="/game" state={{ wordSelected: word, hint: hint }}>
            <Button text="One Player" />
          </Link>
        </div>
        <div className="mt-4">
          <Link to="/start">
            <Button text="Two Players" variant="secondary" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
