import React from 'react'
import styles from './TypingAnimation.module.css'

function TypingAnimation() {
  return (
    <div className={styles['main-container']}>
        <div className={styles['static-text']}><span className={['h2']}></span></div>
        <div className={styles['dynamic-text']}>
            <div ticks={10} className={[styles['text-item'],styles['text']].join(" ")}><span className={[['h2'],['no-margin']].join(" ")}>Achieve goals.</span></div>
            <div ticks={10} className={[styles['text-item'],styles['text']].join(" ")}><span className={[['h2'],['no-margin']].join(" ")}>Meet deadlines.</span></div>
            <div ticks={10} className={[styles['text-item'],styles['text']].join(" ")}><span className={[['h2'],['no-margin']].join(" ")}>Beat procrastination.</span></div>
            <div ticks={10} className={[styles['text-item'],styles['text']].join(" ")}><span className={[['h2'],['no-margin']].join(" ")}>Cultivate habits.</span></div>
       
        </div>
    </div>
  )
}

export default TypingAnimation