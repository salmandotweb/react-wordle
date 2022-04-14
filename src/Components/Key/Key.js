import React, { useContext } from "react";
import { AppContext } from "../../App";
import classes from "./Key.module.css";

const Key = ({ letter, CapsKey }) => {
  const { onLetterSelect, onLetterDelete, onEnter } = useContext(AppContext);
  const enterLetter = () => {
    if (letter === "ENTER") {
      onEnter();
    } else if (letter === "DELETE") {
      onLetterDelete();
    } else {
      onLetterSelect(letter);
    }
  };
  return (
    <div
      className={`${classes.key} ${CapsKey && classes.capsKey}`}
      onClick={enterLetter}
    >
      {letter}
    </div>
  );
};

export default Key;
