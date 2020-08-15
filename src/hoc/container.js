import React from "react";
import classes from "./container.module.css"


export const Container = (props) => {

  const cls = [classes.container]

  if (props.column) {
    cls.push(classes.column)
  }
  return (
    <div className={cls.join(" ")}>
      {props.children}
    </div>
  );
};