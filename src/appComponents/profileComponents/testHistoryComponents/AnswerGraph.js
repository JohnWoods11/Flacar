import React from "react";
import Modal from "react-bootstrap/Modal";
import CardInfo from "./answerGraphComponents/CardInfo";
import styles from "./answerGraph.module.css";

function AnswerGraph(props) {
  console.log(props.results);
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      dialogClassName={styles.modal}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="deckName">{props.deckName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={styles.deckReview}>
          <div className={styles.deckResults}>
            {props.results.map((questionResults, index) => (
              <div className={styles.questionResults}>
                Question {index}
                {questionResults.map((result, index) => (
                  <div
                    className={
                      result[0] === null
                        ? styles.resultNull
                        : result[0] === true
                        ? styles.resultRight
                        : styles.resultWrong
                    }
                  >
                    {console.log(result)}
                  </div>
                ))}{" "}
              </div>
            ))}
          </div>
          <div className={styles.cardInfo}>
            <CardInfo></CardInfo>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default AnswerGraph;
