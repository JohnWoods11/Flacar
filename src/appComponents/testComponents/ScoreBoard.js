import React from "react"
import styles from "./scoreBoard.module.css"

function ScoreBoard(props) {
    return (<div className={styles.scoreBoardContainer}>
        <div>Card {props.currentCard} / {props.maxMark}</div>
        {props.currentStreak > 1 ? <div className={styles.streak}>{props.currentStreak} in a row</div> : <div />}

        <div>Score: {props.score}</div>
    </div>)
}

export default ScoreBoard;