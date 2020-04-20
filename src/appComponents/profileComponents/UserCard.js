import React from "react"
import styles from "./userCard.module.css"
import DefaultUserImage from "./DefaultUserImage";


function UserCard(props) {

    return (
        <div className={styles.userCardContainer}>
            <h2>Me</h2>
            <div className={styles.imageContainer}>
                <DefaultUserImage />
            </div>

            <div className={styles.userStatsContainer}>
                <h4> {props.profile.name}</h4>
                <ul className={styles.userStats}>
                    <div className={styles.statsItem}><p>Score:</p> <p>{props.profile.score}</p></div>
                    <div className={styles.statsItem}><p>Tests Taken:</p> <p>{props.profile.testsCompleted}</p></div>
                    <div className={styles.statsItem}><p>Perfect Scores:</p> <p>{props.profile.perfectScores}</p></div>
                    <div className={styles.statsItem}><p>Decks Completed:</p> <p>{props.profile.perfectScores}</p></div>
                    <div className={styles.statsItem}><p>Time Testing:</p> <p>{props.profile.perfectScores}</p></div>

                </ul>
            </div>
        </div>
    )
}

export default UserCard;