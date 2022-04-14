import React from "react";
import Key from "../Key/Key";
import classes from "./Keyboard.module.css";

const Keyboard = () => {
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];
  return (
    <div className={classes.keyboard}>
      <div className={`${classes.firstLine} ${classes.line}`}>
        {keys1.map((key) => {
          return <Key letter={key} />;
        })}
      </div>
      <div className={`${classes.secondLine} ${classes.line}`}>
        {keys2.map((key) => {
          return <Key letter={key} />;
        })}
      </div>
      <div className={`${classes.thirdLine} ${classes.line}`}>
        <Key letter="ENTER" CapsKey={true} />
        {keys3.map((key) => {
          return <Key letter={key} />;
        })}
        <Key letter="DELETE" CapsKey={true} />
      </div>
    </div>
  );
};

export default Keyboard;
