import React, { useContext } from "react";
import { AppContext } from "../../App";
import classes from "./Letter.module.css";

const Letter = ({ letterPosition, attemptValue }) => {
  const { board } = useContext(AppContext);
  const letter = board[attemptValue][letterPosition];
  return <div className={classes.letter}>{letter}</div>;
};

export default Letter;
