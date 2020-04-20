import React from "react";
import styles from "./scoreMultiplier.module.css"
function ScoreMultiplier(props) {
    return <div className={styles.multiplierContainer}>
        <div className={props.currentMultiplier > 4 ? styles.fiveTimesOn : styles.fiveTimesOff}>5x</div>
        <div className={props.currentMultiplier > 3 ? styles.fourTimesOn : styles.fourTimesOff}>4x</div>
        <div className={props.currentMultiplier > 2 ? styles.threeTimesOn : styles.threeTimesOff}>3x</div>
        <div className={props.currentMultiplier > 1 ? styles.twoTimesOn : styles.twoTimesOff}>2x</div>
        <div className={styles.oneTimeOn}>1x</div>
    </div>
}

export default ScoreMultiplier;