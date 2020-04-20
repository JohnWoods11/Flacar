import React from "react"
import styles from "./defaultUserImage.module.css"


function DefaultUserImage() {
    return (
        <div className={styles.userImageContainer}>
            <div className={styles.headContainer}>
                <div className={styles.head}></div>
            </div>
            <div className={styles.bodyContainer}>
                <div className={styles.body}></div>
            </div>
        </div>
    )
}

export default DefaultUserImage;