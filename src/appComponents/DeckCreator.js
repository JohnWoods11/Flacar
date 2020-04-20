import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import styles from "./deckCreator.module.css";
import { Redirect } from "react-router";

import FlashCard from "./deckCreatorComponents/FlashCard";
import ModalTextEntry from "./deckCreatorComponents/ModalTextEntry";

class DeckCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDeck:
        this.props.currentSelection === null
          ? null
          : JSON.parse(JSON.stringify(props.decks[props.currentSelection])),
      currentCard: null,
      defaultCard: {
        hint: "Click a card to continue...",
        answer: "------------------->",
      },
      nameChangeActive: false,
      exitDeckCreation: false,
    };
  }

  //Exit Deck Creation

  exit = () => {
    let exitTrue = this.state.exitDeckCreation;
    exitTrue = true;
    this.setState({ exitDeckCreation: exitTrue });
  };

  //Save Deck

  saveDeck = () => {
    this.props.saveDeck(this.state.currentDeck);
    this.exit();
  };

  //Tag functionality TODO

  //Deck name functionality
  changeDeckName = () => {
    let newnameChangeActive = this.state.nameChangeActive;
    newnameChangeActive = true;
    this.setState({ nameChangeActive: newnameChangeActive });
  };

  deckNameChanged = (event) => {
    let newDeck = this.state.currentDeck;
    newDeck.name = event.target.value;
    this.setState({ currentDeck: newDeck });
  };

  closeDeckNameModal = () => {
    let newnameChangeActive = this.state.nameChangeActive;
    newnameChangeActive = false;
    this.setState({ nameChangeActive: newnameChangeActive });
  };

  //Card functionality  FIX PROPAGATION
  editCard = (index) => {
    let cardSelection = this.state.currentCard;
    //GET RID OF THIS BY DISABLING PROPAGATION
    this.state.currentDeck.cards.length
      ? this.state.currentDeck.cards[this.state.currentCard] === undefined
        ? (cardSelection = this.state.currentDeck.cards.length - 1)
        : (cardSelection = index)
      : (cardSelection = undefined);

    this.setState({ currentCard: cardSelection });
    console.log(this.state.currentCard);
    console.log(this.state.currentDeck.cards[this.state.currentCard]);
  };

  deleteCard = (index) => {
    let newDeck = this.state.currentDeck;
    newDeck.cards.splice(index, 1);
  };

  currentHintChange = (event) => {
    let newDeck = this.state.currentDeck;
    if (newDeck.cards[this.state.currentCard] === undefined) {
      return;
    }
    newDeck.cards[this.state.currentCard].hint = event.target.value;
    this.setState({ currentDeck: newDeck });
  };

  currentAnswerChange = (event) => {
    let newDeck = this.state.currentDeck;
    if (newDeck.cards[this.state.currentCard] === undefined) {
      return;
    }
    newDeck.cards[this.state.currentCard].answer = event.target.value;
    this.setState({ currentDeck: newDeck });
  };

  addNewCard = () => {
    console.log(this.props.decks);
    let newDeck = this.state.currentDeck;
    let newCurrentCard = this.state.currentCard;
    newCurrentCard = newDeck.cards.length;
    newDeck.cards.push({ hint: "", answer: "" });
    this.setState({ currentDeck: newDeck, currentCard: newCurrentCard });
  };

  render() {
    if (
      this.props.decks[this.props.currentSelection] == null ||
      this.state.exitDeckCreation == true
    )
      return <Redirect to="/flacar"></Redirect>;
    return (
      <div className={styles.deckCreator}>
        <ListGroup className={styles.stats}>
          <h2>
            {this.state.currentDeck.name != ""
              ? this.state.currentDeck.name
              : `Unnamed deck`}
            <h5>
              <Badge
                pill
                variant="primary"
                size="sm"
                onClick={this.changeDeckName}
              >
                Edit Name
              </Badge>
            </h5>
          </h2>
          <ListGroup.Item className={styles.statsListContainer}>
            <ul className={styles.statsList}>
              <li className={styles.statsListItem}>
                Number of cards: {this.state.currentDeck.cards.length}
              </li>
              <li className={styles.statsListItem}>Tags:</li>
            </ul>
          </ListGroup.Item>
        </ListGroup>
        <div className={styles.creationContainer}>
          <div className={styles.creationPanel}>
            <Form className={styles.cardForm}>
              <Form.Group controlId="formHintInput">
                <Form.Label>Hint</Form.Label>
                <Form.Control
                  value={
                    this.state.currentCard != undefined ||
                    this.state.currentCard != null
                      ? this.state.currentDeck.cards[this.state.currentCard]
                          .hint
                      : this.state.defaultCard.hint
                  }
                  onChange={this.currentHintChange}
                  as="textarea"
                  rows="3"
                  type="text"
                  placeholder="Enter hint here..."
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="formAnswerInput">
                <Form.Label>Answer</Form.Label>
                <Form.Control
                  value={
                    this.state.currentCard != undefined ||
                    this.state.currentCard != null
                      ? this.state.currentDeck.cards[this.state.currentCard]
                          .answer
                      : this.state.defaultCard.answer
                  }
                  onChange={this.currentAnswerChange}
                  as="textarea"
                  rows="3"
                  type="text"
                  placeholder="Enter answer here..."
                ></Form.Control>
              </Form.Group>
            </Form>
            <Button variant="success" size="lg" onClick={this.saveDeck} block>
              SAVE DECK AND EXIT
            </Button>
            <Button variant="danger" size="lg" onClick={this.exit} block>
              EXIT WITHOUT SAVING
            </Button>
          </div>
          <div className={styles.cards}>
            {this.state.currentDeck.cards.map((card, index) => (
              <FlashCard
                index={index}
                hint={card.hint}
                answer={card.answer}
                editCard={this.editCard}
                deleteCard={this.deleteCard}
              ></FlashCard>
            ))}
            {this.state.currentDeck.cards.length < 20 ? (
              <div
                className={styles.newCardButton}
                hint={"NEW CARD"}
                onClick={this.addNewCard}
              >
                NEW CARD
              </div>
            ) : null}
          </div>
        </div>
        <ModalTextEntry
          show={this.state.nameChangeActive}
          hide={this.closeDeckNameModal}
          currentValue={this.state.currentDeck.name}
          valueChanged={this.deckNameChanged}
          placeholder={"New deck name..."}
        />
      </div>
    );
  }
}

export default DeckCreator;
