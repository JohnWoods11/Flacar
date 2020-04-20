import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Accordian from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import styles from "./home.module.css";
import { useHistory, Redirect } from "react-router-dom";

function Home(props) {
  const [toDeckCreator, setToDeckCreator] = useState(false);
  const [toTesting, setToTesting] = useState(false);

  const startTestClicked = (index) => {
    props.startTest(index);
    setToTesting(true);
  };

  const deleteDeckClicked = (index) => {
    if (
      window.confirm(
        `Deck Deletion - Are you sure you want to delete "${props.decks[index].name}"?`
      )
    ) {
      props.deleteDeck(index);
    }
  };

  const editDeckClicked = (index) => {
    props.editDeck(index);
    setToDeckCreator(true);
  };

  const createDeckClicked = () => {
    props.createDeck();
  };

  if (toDeckCreator === true) {
    return <Redirect to="/flacar/deckcreator" />;
  }

  if (toTesting === true) {
    return <Redirect to="flacar/testing" />;
  }

  return (
    <div>
      <Accordian className={styles.accordian} defaultActiveKey="0">
        {props.decks.map((deck, index) => (
          <Card key={index}>
            <Accordian.Toggle as={Card.Header} eventKey={index}>
              <div className={styles.cardHeader}>
                <h4>{deck.name}</h4>
                <Button
                  variant="success"
                  size="lg"
                  onClick={() => startTestClicked(index)}
                >
                  Start Test
                </Button>
              </div>
            </Accordian.Toggle>

            <Accordian.Collapse eventKey={index}>
              <Card.Body className={styles.cardBody}>
                Number of cards: {deck.cards.length}
                <div className={styles.bodyButtons}>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => {
                      editDeckClicked(index);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => {
                      deleteDeckClicked(index);
                    }}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Body>
            </Accordian.Collapse>
          </Card>
        ))}
        <Card>
          <Accordian.Toggle as={Card.Header} eventKey={props.decks.length}>
            <div className={styles.cardHeader}>
              <h4>...</h4>
              <Button variant="primary" size="lg" onClick={createDeckClicked}>
                Create
              </Button>
            </div>
          </Accordian.Toggle>
        </Card>
      </Accordian>
    </div>
  );
}

export default Home;
