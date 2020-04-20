import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ActiveFlashCard from "./testComponents/ActiveFlashCard";
import Results from "./testComponents/Results";
import ScoreBoard from "./testComponents/ScoreBoard";
import styles from "./test.module.css";
import { Redirect } from "react-router";
import ScoreMultiplier from "./testComponents/ScoreMultiplier";
import ProgressBar from "./testComponents/ProgressBar";

class Test extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cardsAnswered: 0,
            currentCard: 0,
            currentAnswer: "",
            score: 0,
            marks: this.props.deck ? this.props.deck.cards.map(() => (null)) : null,
            currentMark: 0,
            currentStreak: 0,
            markedCorrect: false,
            markedIncorrect: false,
            showBack: false,
        }
        console.log(this.state.marks);
    }

    answerChanged = (event) => {
        let newAnswer = this.state.currentAnswer;
        newAnswer = event.target.value;
        this.setState({ currentAnswer: newAnswer });
    }

    checkAnswerClicked = () => {
        if (this.state.currentAnswer.toLowerCase() == this.props.deck.cards[this.state.currentCard].answer.toLowerCase()) {
            let correctMark = this.state.markedCorrect;
            correctMark = true;
            let newCurrentMark = this.state.currentMark;
            newCurrentMark++;
            let newCurrentStreak = this.state.currentStreak;
            newCurrentStreak++;
            let newScore = this.state.score;
            newScore += this.state.currentStreak < 5 ? 100 * (this.state.currentStreak + 1) : 500
            let showBackNow = this.state.showBack;
            showBackNow = true;
            let newMarks = [...this.state.marks];
            newMarks[this.state.currentCard] = true
            let newCardsAnswered = this.state.cardsAnswered;
            newCardsAnswered++;
            this.setState({ markedCorrect: correctMark, score: newScore, currentMark: newCurrentMark, currentStreak: newCurrentStreak, showBack: showBackNow, marks: newMarks, cardsAnswered: newCardsAnswered });
        }
        else {
            let incorrectMark = this.state.markedIncorrect;
            incorrectMark = true;
            let showBackNow = this.state.showBack;
            showBackNow = true;
            let newCurrentStreak = this.state.currentStreak;
            newCurrentStreak = 0;
            let newMarks = [...this.state.marks];
            newMarks[this.state.currentCard] = false
            let newCardsAnswered = this.state.cardsAnswered;
            newCardsAnswered++;
            this.setState({ markedIncorrect: incorrectMark, showBack: showBackNow, currentStreak: newCurrentStreak, marks: newMarks, cardsAnswered: newCardsAnswered })
        }
    }

    nextQuestion = () => {
        let nextCard = this.state.currentCard;

        nextCard++
        let incorrectMarkClear = this.state.markedIncorrect;
        incorrectMarkClear = false;
        let correctMarkClear = this.state.markedCorrect;
        correctMarkClear = false;
        let showFront = this.state.showBack;
        showFront = false;
        let refreshAnswer = this.state.currentAnswer;
        refreshAnswer = "";
        this.setState({ currentCard: nextCard, markedIncorrect: incorrectMarkClear, markedCorrect: correctMarkClear, showBack: showFront, currentAnswer: refreshAnswer })

    }


    render() {
        if (this.props.deck === undefined || this.props.deck.cards.length === 0) {

            return <Redirect to="/" />
        }
        if (this.state.currentCard === this.props.deck.cards.length) {
            return <Results mark={this.state.currentMark} maxMark={this.props.deck.cards.length} score={this.state.score} />
        }
        return (<div className={styles.testingContainer}>
            <ScoreBoard currentCard={this.state.currentCard} maxMark={this.props.deck.cards.length} score={this.state.score} currentStreak={this.state.currentStreak}></ScoreBoard>
            <div className={styles.nonScoreBoardContent}>
                <div className={styles.progressContainer} >
                    <div className={styles.progress}>
                        <ProgressBar currentCard={this.state.cardsAnswered - 1} currentMark={this.state.currentMark} marks={this.state.marks}></ProgressBar>
                    </div>
                </div>
                <div className={styles.cardAndInput}><div className={styles.flashCardContainer}><ActiveFlashCard card={this.props.deck.cards[this.state.currentCard]} showBack={this.state.showBack} currentStreak={this.state.currentStreak}></ActiveFlashCard></div>
                    <Form.Control className={styles.answerBox} rows="1" as="textarea" placeholder="Answer..." onChange={this.answerChanged} value={this.state.currentAnswer} >

                    </Form.Control>
                    {!(this.state.markedCorrect || this.state.markedIncorrect) ? <Button className={styles.checkButton} variant="primary" onClick={this.checkAnswerClicked} >CHECK!</Button> : this.state.markedCorrect ? <Button className={styles.continueButton} variant="success" onClick={this.nextQuestion} >WELL DONE!</Button> : <Button className={styles.continueButton} variant="danger" onClick={this.nextQuestion} >BETTER LUCK NEXT TIME!</Button>}
                </div>
                <div className={styles.scoreMultiplierContainer}>
                    <div className={styles.scoreMultiplier}>
                        <ScoreMultiplier currentMultiplier={this.state.currentStreak < 5 ? this.state.currentStreak + 1 : 5} />
                    </div></div>
            </div>
        </div>
        )
    }
}

export default Test;