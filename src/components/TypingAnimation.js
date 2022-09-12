import React from 'react'
import styles from './TypingAnimation.module.css'

function TypingAnimation() {
  return (
    <div className={styles['main-container']}>
        <div className={styles['static-text']}><span className={['h2']}></span></div>
        <div className={styles['dynamic-text']}>
            <div className={[styles['text-item'],styles['text1']].join(" ")}><span className={[['h2'],['no-margin']].join(" ")}>Achieve goals.</span></div>
            <div className={[styles['text-item'],styles['text2']].join(" ")}><span className={[['h2'],['no-margin']].join(" ")}>Meet deadlines.</span></div>
            <div className={[styles['text-item'],styles['text3']].join(" ")}><span className={[['h2'],['no-margin']].join(" ")}>Beat procrastination.</span></div>
            <div className={[styles['text-item'],styles['text4']].join(" ")}><span className={[['h2'],['no-margin']].join(" ")}>Cultivate habits.</span></div>
        </div>
    </div>
  )
}

export default TypingAnimation