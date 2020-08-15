import React from "react";
import classes from "./btn-for-shuffle.module.css";


export const BtnForShuffle = ({getShuffle}) => {
  return (
    <button className={classes.btn} type="button" onClick={getShuffle}>
      Перемешать!
    </button>
  );
};