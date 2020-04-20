import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import styles from "./results.module.css"
import { Redirect } from "react-router"


function Results(props) {

    const [toHome, setToHome] = useState(false);
    const highScoreText = "You got a great score! Keep up with the practice and you'll keep on getting high scores like these!"
    const midHighScoreText = "Good going! Your score is good but there is a little room for improvement. Keep practicing and you'll get there!"
    const midLowScoreText = "Nice try! You didn't score that high but all it will take is a bit of practice to change that!"
    const lowScore = "Good effort! You strugled with these questions but we all have to start somewhere. Keep up the good work!"

    return <div className={styles.resultsContainer}>
        {toHome ? <Redirect to="/" /> : null}
        <div>
            You scored: {props.score}!
        </div>
        <div>{props.mark} / {props.maxMark}</div>
        <div>
            {props.mark / props.maxMark >= .50 ? props.mark / props.maxMark >= .75 ? highScoreText : midHighScoreText : props.mark / props.maxMark >= .25 ? midLowScoreText : lowScore}
        </div>
        <div>
            answer stats
        </div>
        <Button variant="success" size="lg" onClick={() => { setToHome(true) }} >Continue</Button>
    </div>
}

export default Results;