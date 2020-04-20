import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import TestHistory from "./profileComponents/TestHistory";
import styles from "./profile.module.css";
import UserCard from "./profileComponents/UserCard";
import AnswerGraph from "./profileComponents/testHistoryComponents/AnswerGraph";

function Profile(props) {
  const [showModal, setShowModal] = useState(false);
  const [currentdeckModal, setCurrentDeckModal] = useState(null);

  let defaultProfile = {
    name: "John",
    score: 324234,
    testsCompleted: 231,
    perfectScores: 2,
  };
  let defaultdeckHistory = [
    {
      name: "deck 1",
      john: { avgLastfive: 0.8, timesCompleted: 12 },
      cardnumber: 21,
      recentResults: [
        [[true], [false], [null]],
        [[true], [true], [true]],
        [[false], [true], [false]],
      ],
    },
    {
      name: "deck 2",
      john: { avgLastfive: 0.8, timesCompleted: 187 },
      cardnumber: 2,
      recentResults: [
        [[true], [false], [null]],
        [[true], [true], [true]],
        [[false], [true], [false]],
      ],
    },
  ];
  let currentProfile = "john";

  return (
    <div className={styles.profileContainer}>
      <div className={styles.deckStatsContainer}>
        <div className={styles.deckStats}>
          <TestHistory
            currentProfile={currentProfile}
            defaultdeckHistory={defaultdeckHistory}
            showModal={() => setShowModal(true)}
          />
        </div>{" "}
      </div>
      <div className={styles.userCardContainer}>
        <div className={styles.userCard}>
          <UserCard profile={defaultProfile} />
        </div>
        {showModal ? (
          <AnswerGraph
            show={true}
            onHide={() => setShowModal(false)}
            deckName={defaultdeckHistory[1].name}
            results={defaultdeckHistory[1].recentResults}
          />
        ) : null}
      </div>
    </div>
  );
}

export default Profile;
