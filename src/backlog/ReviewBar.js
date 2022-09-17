import React from 'react'
import styles from './ReviewBar.module.css'

import { FaStar } from 'react-icons/fa'

function ReviewBar() {
    return (
        <div className={styles['main-container']}>
            {/*1st review*/}
            <div className={styles['review-container']}>

                <div className={styles['review-stars']}>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>

                <div className={styles['review-label']}>
                    &quot;helped me beat procrastination&quot;
                </div>

            </div>
            {/*2nd review*/}
            <div className={styles['review-container']}>

                <div className={styles['review-stars']}>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>

                <div className={styles['review-label']}>
                    &quot;now I never forget about my errands&quot;
                </div>

            </div>
            {/*3rd review*/}
            <div className={styles['review-container']}>

                <div className={styles['review-stars']}>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>

                <div className={styles['review-label']}>
                    &quot;perfect for busy times&quot;
                </div>

            </div>



        </div>
    )
}

export default ReviewBar