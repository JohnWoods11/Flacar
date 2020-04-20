import React from "react";

import styles from "./cardInfo.module.css";

function CardInfo(props) {
  return (
    <div className={styles.cardInfoContainer}>
      <div className={styles.hintSide}>
        {props.hint !== null ? props.hint : "Hover a card..."}
      </div>
      <div className={styles.AnswerSide}>
        {props.answer !== null ? props.answer : "Hover a card..."}
      </div>
    </div>
  );
}

export default CardInfo;
