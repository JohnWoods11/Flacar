import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Nav from "./appComponents/Nav";
import Home from "./appComponents/Home";
import Options from "./appComponents/Options";
import Profile from "./appComponents/Profile";
import DeckCreator from "./appComponents/DeckCreator";
import Test from "./appComponents/Test";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      decks: [],
      currentSelection: null,
    };
  }
  componentDidMount() {
    if (localStorage.getItem("decks")) {
      let savedDecks = localStorage.getItem("decks");
      savedDecks = JSON.parse(savedDecks);
      this.setState({ decks: savedDecks });
    }
  }

  saveDeck = (newDeck) => {
    let newDecks = [...this.state.decks];
    newDecks[this.state.currentSelection] = newDeck;
    this.setState(
      { decks: newDecks },
      localStorage.setItem("decks", JSON.stringify(newDecks))
    );
  };

  deleteDeck = (index) => {
    let newDecks = [...this.state.decks];
    newDecks.splice(index, 1);
    this.setState(
      { decks: newDecks },
      localStorage.setItem("decks", JSON.stringify(newDecks))
    );
  };

  editDeck = (index) => {
    let selection = this.state.currentSelection;
    selection = index;
    this.setState({ currentSelection: selection });
  };

  startTest = (index) => {
    let selection = this.state.currentSelection;
    selection = index;
    this.setState({ currentSelection: selection });
  };

  createDeck = () => {
    let newDecks = [...this.state.decks];
    newDecks.push({ name: "New Deck", cards: [] });
    this.setState(
      { decks: newDecks },
      localStorage.setItem("decks", JSON.stringify(newDecks))
    );
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Nav />
          <Switch>
            <Route
              path="/flacar"
              exact
              render={(props) => (
                <Home
                  decks={this.state.decks}
                  currentSelection={this.state.currentSelection}
                  deleteDeck={this.deleteDeck}
                  editDeck={this.editDeck}
                  startTest={this.startTest}
                  createDeck={this.createDeck}
                ></Home>
              )}
            />
            <Route
              path="/flacar/options"
              render={(props) => <Options></Options>}
            />
            <Route
              path="/flacar/profile"
              render={(props) => <Profile></Profile>}
            />
            <Route
              path="/flacar/deckcreator"
              render={(props) => (
                <DeckCreator
                  decks={this.state.decks}
                  currentSelection={this.state.currentSelection}
                  saveDeck={this.saveDeck}
                ></DeckCreator>
              )}
            />
            <Route
              path="/flacar/testing"
              render={(props) => (
                <Test
                  deck={this.state.decks[this.state.currentSelection]}
                ></Test>
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
