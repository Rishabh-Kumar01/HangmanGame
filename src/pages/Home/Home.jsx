import React from "react";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div>
          <Link to="/game">
            <Button text="Single Player" />
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
