import React from 'react'
import styles from './LoadingScreen.module.css'

function LoadingScreen() {
    return (
        <div
            className={styles["loading-container"]}
        >
            <div
                className={styles["loading-animation"]}
            >
                
            </div>
        </div>
    )
}

export default LoadingScreen