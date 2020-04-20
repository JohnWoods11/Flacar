class DeckLibrary {
  constructor(props) {
    if (props.decks) {
      this.state.decks = props.decks;
    } else {
      this.state.decks = [];
    }
  }
}

export default DeckLibrary;
