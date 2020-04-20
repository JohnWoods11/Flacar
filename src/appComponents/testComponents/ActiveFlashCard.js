import React, { useEffect } from "react";
import styles from "./activeFlashCard.module.css"

function ActiveFlashCard(props) {

    if (document.getElementById("flashCardInner") !== null) {
        props.showBack ? document.getElementById("flashCardInner").style.transform = "rotateY(180deg)" : document.getElementById("flashCardInner").style.transform = "none";
    }
    if (document.getElementById("answer") !== null) {
        props.showBack ? document.getElementById("answer").style.color = "black" : document.getElementById("answer").style.color = "thistle";

    }


    return (
        <div className={styles.flashCard}>
            <div id="flashCardInner" className={styles.flashCardInner}>
                <div className={styles.flashCardFront}>
                    <p className={styles.hint}>{props.card.hint}</p>
                </div>
                <div className={styles.flashCardBack}><p id="answer" className={styles.answer}>{props.card.answer}</p></div>
                <div>{props.currentStreak > 1 ? <div>{props.currentStreak} in a row!!</div> : <div />}</div>
            </div>
        </div >
    )
}

export default ActiveFlashCard;