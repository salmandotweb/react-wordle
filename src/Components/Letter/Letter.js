import React, { useContext } from "react";
import { AppContext } from "../../App";
import classes from "./Letter.module.css";

const Letter = ({ letterPosition, attemptValue }) => {
  const { board, correctWord, currAttempt } = useContext(AppContext);
  const letter = board[attemptValue][letterPosition];

  const correct = correctWord[letterPosition] === letter;
  const almost =
    !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
  const letterState =
    currAttempt.attempt > letter &&
    (correct ? "correct" : almost ? "almost" : "error");
  return (
    <div className={classes.letter} id={letterState}>
      {letter}
    </div>
  );
};

export default Letter;
