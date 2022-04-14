import React from "react";
import Letter from "../Letter/Letter";
import classes from "./Board.module.css";

const Board = () => {
  return (
    <div className={classes.board}>
      <div className={classes.row}>
        <Letter letterPosition={0} attemptValue={0} />
        <Letter letterPosition={1} attemptValue={0} />
        <Letter letterPosition={2} attemptValue={0} />
        <Letter letterPosition={3} attemptValue={0} />
        <Letter letterPosition={4} attemptValue={0} />
      </div>
      <div className={classes.row}>
        <Letter letterPosition={0} attemptValue={1} />
        <Letter letterPosition={1} attemptValue={1} />
        <Letter letterPosition={2} attemptValue={1} />
        <Letter letterPosition={3} attemptValue={1} />
        <Letter letterPosition={4} attemptValue={1} />
      </div>
      <div className={classes.row}>
        <Letter letterPosition={0} attemptValue={2} />
        <Letter letterPosition={1} attemptValue={2} />
        <Letter letterPosition={2} attemptValue={2} />
        <Letter letterPosition={3} attemptValue={2} />
        <Letter letterPosition={4} attemptValue={2} />
      </div>
      <div className={classes.row}>
        <Letter letterPosition={0} attemptValue={3} />
        <Letter letterPosition={1} attemptValue={3} />
        <Letter letterPosition={2} attemptValue={3} />
        <Letter letterPosition={3} attemptValue={3} />
        <Letter letterPosition={4} attemptValue={3} />
      </div>
      <div className={classes.row}>
        <Letter letterPosition={0} attemptValue={4} />
        <Letter letterPosition={1} attemptValue={4} />
        <Letter letterPosition={2} attemptValue={4} />
        <Letter letterPosition={3} attemptValue={4} />
        <Letter letterPosition={4} attemptValue={4} />
      </div>
      <div className={classes.row}>
        <Letter letterPosition={0} attemptValue={5} />
        <Letter letterPosition={1} attemptValue={5} />
        <Letter letterPosition={2} attemptValue={5} />
        <Letter letterPosition={3} attemptValue={5} />
        <Letter letterPosition={4} attemptValue={5} />
      </div>
    </div>
  );
};

export default Board;
