import React, { useEffect, useState } from "react";
import classes from "./field-item.module.css";


export const FieldItem = ({id, addElements, color, numberPair, isFlipped, canClicked}) => {
  const [show, setShow] = useState(false);

  const onHandlerClick = (idItem, idColor) => {
    addElements(idItem, idColor);
  };

  useEffect(() => {
    let timer = null;
    if (isFlipped) {
      setShow(true);
    } else {
// Добавляем таймер для того, чтобы цвета изчезали не мнгновенно
      timer = setTimeout(() => {
        setShow(false);
      }, 500);
    }
// удаляем таймер
    return () => {
      clearTimeout(timer);
    };

  }, [isFlipped, canClicked]);


  const cls = [
    classes.fieldItem
  ];

  if (show) {
    cls.push(color);
  }

  return (
    <div className={cls.join(" ")}
         onClick={canClicked ? () => onHandlerClick(id, numberPair) : null} />
  );
};