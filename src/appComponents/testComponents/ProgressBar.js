import React from "react"
import styles from "./progressBar.module.css"

function ProgressBar(props) {
    return (<div className={styles.progressContainer}>
        <div className={styles.marksTable}> {props.marks.map((mark, index) => (<div className={styles.progressItem}><p className={styles.questionNumber}>Question {index + 1}</p> <p className={styles.mark}>{mark === null ? "-" : mark === true ? "Y" : "N"}</p></div>))}

        </div>
        <div className={styles.correctlyAnswered}>
            <p>Correct: {props.currentMark} / {props.currentCard + 1}</p>
        </div>
    </div>
    )
}

export default ProgressBar