import React, { Children } from 'react'
import styles from './NotificationHeader.module.css'//icons
import { FaLongArrowAltRight } from 'react-icons/fa'
import Link from 'next/link'


function NotificationHeader(props) {
  return (
    <Link href={props.link} passHref>
    <div className={styles['main-container']}>
      <div className={styles['box-container']}>
        <span className={[styles['notification'], styles['notification-item']].join(" ")}>NEW</span>
        <div className={styles['text-container']}>
          <span className={styles['notification-item']}>{props.content1}
            <span className={styles['emphasis']}>{props.emphasis}</span>
            {props.content2}
          </span>
          <FaLongArrowAltRight className={styles['icon']} />

        </div>
      </div>
    </div>
    </Link>
  )
}

function Important(props) {
  return (
    <div className={styles['main-container']}>
      <div className={styles['box-container']}>
        <span className={[styles['notification-important'], styles['notification-item']].join(" ")}>IMPORTANT</span>
        <div className={styles['text-container']}>
          <span className={styles['notification-item']}>{props.content1}
            <span className={styles['emphasis']}>{props.emphasis}</span>
            {props.content2}
          </span>

        </div>
      </div>
    </div>
  )
}

function OpenForHire(props) {
  return (
    <Link href={props.link} passHref>
    <div className={styles['main-container']}>
      <div className={styles['box-container']}>
        <span className={[styles['notification-open-for-hire'], styles['notification-item']].join(" ")}>OPEN FOR HIRE</span>
        <div className={styles['text-container']}>
          <span className={styles['notification-item']}>{props.content1}
            <span className={styles['emphasis']}>{props.emphasis}</span>
            {props.content2}
          </span>
          <FaLongArrowAltRight className={styles['icon']} />

        </div>
      </div>
    </div>
    </Link>
  )
}

export { NotificationHeader, OpenForHire, Important }