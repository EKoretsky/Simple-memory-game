import React, { useState } from "react";
import classes from "./App.module.css";
import { Field } from "../field/field";
import { BtnForShuffle } from "../btn-for-shuffle/btn-for-shuffle";
import { data } from "../field/commonData/commonData";
import { getRandomInit } from "../../service/service";
import { Container } from "../../hoc/container";


export const App = () => {
  const [dataForCard, setData] = useState(data);
  const [round, setRound] = useState(1);

  const getRound = () => {
    setRound(round + 1);
  };

  const getShuffleCard = () => {
    setRound(1);

    const arrWithNewId = data.map(el => {
      return {
        ...el,
        id: getRandomInit(1, 1000),
      };
    });
    const newDataForCard = arrWithNewId.sort((a, b) => a.id - b.id);
    setData(newDataForCard);
  };

  const getMessage = () => {
    alert(`Вы набрали ${round} очков`);
  };


  return (
    <div className={classes.App}>
      <h1 className="h1">Simple memory game</h1>
      <Container>
        <Field data={dataForCard} getRound={getRound} getMessage={getMessage} />

        <Container column>
          <span className={classes.round}>Раунд: {round}</span>
          <BtnForShuffle getShuffle={getShuffleCard} />
        </Container>

      </Container>
    </div>
  );
};
