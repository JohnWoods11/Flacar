import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import styles from "./flashCard.module.css";

function FlashCard(props) {
  const editCardClicked = () => {
    return props.editCard(props.index);
  };

  const deleteCardClicked = () => {
    if (window.confirm("Are you sure you want to delete this card?"))
      return props.deleteCard(props.index);
  };

  return (
    <Card className={styles.card} onClick={editCardClicked}>
      <div className={styles.content}>
        <Card.Title className={styles.hint}>{props.hint}</Card.Title>
        <Card.Text className={styles.answer}>{props.answer}</Card.Text>
      </div>
      <div className={styles.button}>
        <Button variant="danger" size="sm" onClick={deleteCardClicked}>
          x
        </Button>
      </div>
    </Card>
  );
}

export default FlashCard;
