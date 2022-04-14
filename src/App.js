import Board from "./Components/Board/Board";
import Keyboard from "./Components/Keyboard/Keyboard";
import "./App.css";
import { createContext, useState } from "react";
import { boardDefault } from "./Words";

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setcurrAtempt] = useState({
    attempt: 0,
    letterPosition: 0,
  });
  const [correctWord, setCorrectWord] = useState("");

  const onLetterSelect = (letter) => {
    if (currAttempt.letterPosition > 4) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPosition] = letter;
    setBoard(newBoard);
    setcurrAtempt({
      ...currAttempt,
      letterPosition: currAttempt.letterPosition + 1,
    });
  };
  const onLetterDelete = () => {
    if (currAttempt.letterPosition === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPosition - 1] = "";
    setBoard(newBoard);
    setcurrAtempt({
      ...currAttempt,
      letterPosition: currAttempt.letterPosition - 1,
    });
  };
  const onEnter = () => {
    if (currAttempt.letterPosition !== 5) return;
    setcurrAtempt({ attempt: currAttempt.attempt + 1, letterPosition: 0 });
  };

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currAttempt,
          setcurrAtempt,
          onLetterSelect,
          onLetterDelete,
          onEnter,
          correctWord,
        }}
      >
        <Board />
        <Keyboard />
      </AppContext.Provider>
    </div>
  );
}

export default App;
