import React, { useEffect, useState } from "react";
import classes from "./field.module.css";
import { FieldItem } from "../field-item/field-item";


const visibleCard = [];

export const Field = ({data, getRound}) => {
  const [count, setCount] = useState(2);
  const [firstColorId, setFirstColor] = useState(null);
  const [secondColorId, setSecondColor] = useState(null);
  const [canClick, setCanClick] = useState(true);


  const onVisible = id => {
    if (visibleCard.length > 0) {
      return visibleCard.indexOf(id) > -1;
    }
  };


  const addElements = (id, colorId) => {
    if (count === 2) {
      setFirstColor(colorId);
      visibleCard.push(id);
    } else if (count === 1) {
      setSecondColor(colorId);
      visibleCard.push(id);
    }
    setCount(count - 1);
  };

  useEffect(() => {
    let intervalForClick = null;

    if (!count) {
      if (firstColorId !== secondColorId) {
        visibleCard.splice(-2, 2);
      }

      setFirstColor(null);
      setSecondColor(null);
      setCanClick(false);
      setCount(2);
      getRound();


    } else if (count) {

// Добавляем интервал, по прошествии которого  будем разблокировать возможность кликать по полю

      intervalForClick = setTimeout(() => {
        setCanClick(true);
      }, 500);
    }

//Удаляем интервал чтобы не было утечки памяти

    return () => {
      clearTimeout(intervalForClick);
    };
  }, [count, canClick, firstColorId, secondColorId, getRound]);


  return (
    <div className={classes.field}>
      {
        data.map(({id, color, colorId}) => {
          return (
            <FieldItem
              key={id}
              id={id}
              color={color}
              numberPair={colorId}
              addElements={addElements}
              isFlipped={onVisible(id)}
              canClicked={canClick} />
          );
        })
      }
    </div>
  );
};