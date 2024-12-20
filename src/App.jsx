import "./App.css";
import { Routes, Route } from "react-router-dom";
import StartGame from "./pages/StartGame/StartGame";
import PlayGame from "./pages/PlayGame/PlayGame";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start" element={<StartGame />} />
        <Route path="/game" element={<PlayGame />} />
      </Routes>
    </>
  );
}

export default App;
