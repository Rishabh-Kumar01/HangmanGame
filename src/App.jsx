import "./App.css";
import { Routes, Route } from "react-router-dom";
import StartGame from "./pages/StartGame/StartGame";
import PlayGame from "./pages/PlayGame/PlayGame";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/start" element={<StartGame />} />
        <Route path="/game" element={<PlayGame />} />
      </Routes>
    </>
  );
}

export default App;
