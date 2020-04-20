import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import styles from "./testHistory.module.css";

function TestHistory(props) {
  return (
    <div className={styles.testHistory}>
      <Accordion defaultActiveKey="0">
        {props.defaultdeckHistory.map((deck, index) =>
          deck.currentProfile !== null ? (
            <Card key={index}>
              <Accordion.Toggle as={Card.Header} eventKey={index}>
                <div>
                  <p>{deck.name}</p>
                </div>
              </Accordion.Toggle>

              <Accordion.Collapse eventKey={index}>
                <Card.Body>
                  <div className={styles.statsContainer}>
                    <div className={styles.stats}>
                      <p>
                        Times completed:{" "}
                        {deck[props.currentProfile].timesCompleted}
                      </p>
                      <p>
                        Average score (last 5 attempts):{" "}
                        {deck[props.currentProfile].avgLastfive}
                      </p>
                    </div>
                    <div className={styles.moreInfo}>
                      <Button variant="primary" onClick={props.showModal}>
                        more info
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          ) : null
        )}
      </Accordion>
    </div>
  );
}

export default TestHistory;
