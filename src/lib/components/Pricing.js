import React from 'react'
import styles from './Pricing.module.css'

import { FaCheck } from "react-icons/fa";

function Pricing() {
    return (
        <div className={styles['main-container']}>

            {/*Free tier*/}
            {/*Green*/}
            <div className={[styles['card-container'], styles['card-free']].join(" ")}>

                {/*Title section with price*/}
                <div className={[styles['title-section'], styles['title-section-free']].join(" ")}>
                    <div className={[styles['title'], styles['title-free']].join(" ")}>FREE FOREVER</div>
                    <div className={[styles['subtitle'], styles['subtitle-free']].join(" ")}>For beginners</div>
                    <div className={[styles['price'], styles['price-free']].join(" ")}>Free</div>
                    <div className={[styles['frequency'], styles['frequency-free']].join(" ")}>FOREVER</div>
                    <div className={[styles['button-register'], styles['button-free']].join(" ")}>CHOOSE</div>
                </div>

                {/*Divider*/}
                <div className={[styles['divider'], styles['divider-free']].join(" ")}></div>

                {/*Features of the pricing plan*/}
                <div className={[styles['feature-list'], styles['feature-list-free']].join(" ")}>
                    <div className={[styles['feature'], styles['feature-free']].join(" ")}>
                        <FaCheck className={[styles['icon'], styles['icon-free']].join(" ")} />
                        3 workspaces
                    </div>
                    <div className={[styles['feature'], styles['feature-free']].join(" ")}>
                        <FaCheck className={[styles['icon'], styles['icon-free']].join(" ")} />
                        5 projects
                    </div>
                    <div className={[styles['feature'], styles['feature-free']].join(" ")}>
                        <FaCheck className={[styles['icon'], styles['icon-free']].join(" ")} />
                        5 tags
                    </div>
                    <div className={[styles['feature'], styles['feature-free']].join(" ")}>
                        <FaCheck className={[styles['icon'], styles['icon-free']].join(" ")} />
                        5 habits
                    </div>
                    <div className={[styles['feature'], styles['feature-free']].join(" ")}>
                        <FaCheck className={[styles['icon'], styles['icon-free']].join(" ")} />
                        1000 tasks
                    </div>
                    <div className={[styles['feature'], styles['feature-free']].join(" ")}>
                        <FaCheck className={[styles['icon'], styles['icon-free']].join(" ")} />
                        100 MB file storage
                    </div>
                </div>

            </div>
            {/*Pro tier*/}
            {/*Reddish*/}
            <div className={[styles['card-container'], styles['card-pro']].join(" ")}>

                {/*Title section with price*/}
                <div className={[styles['title-section'], styles['title-section-pro']].join(" ")}>
                    <div className={[styles['title'], styles['title-pro']].join(" ")}>PRO</div>
                    <div className={[styles['subtitle'], styles['subtitle-pro']].join(" ")}>For power users</div>
                    <div className={[styles['price'], styles['price-pro']].join(" ")}>4$</div>
                    <div className={[styles['frequency'], styles['frequency-pro']].join(" ")}>per month</div>
                    <div className={[styles['button-register'], styles['button-pro']].join(" ")}>CHOOSE</div>
                </div>

                {/*Divider*/}
                <div className={[styles['divider'], styles['divider-pro']].join(" ")}></div>

                {/*Features of the pricing plan*/}
                <div className={[styles['feature-list'], styles['feature-list-pro']].join(" ")}>
                    <div className={[styles['feature'], styles['feature-pro']].join(" ")}>
                        <FaCheck className={[styles['icon'], styles['icon-pro']].join(" ")} />
                        Unlimited workspaces
                    </div>
                    <div className={[styles['feature'], styles['feature-pro']].join(" ")}>
                        <FaCheck className={[styles['icon'], styles['icon-pro']].join(" ")} />
                        Unlimited projects
                    </div>
                    <div className={[styles['feature'], styles['feature-pro']].join(" ")}>
                        <FaCheck className={[styles['icon'], styles['icon-pro']].join(" ")} />
                        Unlimited tags
                    </div>
                    <div className={[styles['feature'], styles['feature-pro']].join(" ")}>
                        <FaCheck className={[styles['icon'], styles['icon-pro']].join(" ")} />
                        Unlimited habits
                    </div>
                    <div className={[styles['feature'], styles['feature-pro']].join(" ")}>
                        <FaCheck className={[styles['icon'], styles['icon-pro']].join(" ")} />
                        Unlimited tasks
                    </div>
                    <div className={[styles['feature'], styles['feature-pro']].join(" ")}>
                        <FaCheck className={[styles['icon'], styles['icon-pro']].join(" ")} />
                        Smart notifications
                    </div>
                    <div className={[styles['feature'], styles['feature-pro']].join(" ")}>
                        <FaCheck className={[styles['icon'], styles['icon-pro']].join(" ")} />
                        Majordomu AI
                    </div>
                    <div className={[styles['feature'], styles['feature-pro']].join(" ")}>
                        <FaCheck className={[styles['icon'], styles['icon-pro']].join(" ")} />
                        Development Add-ons
                    </div>
                    <div className={[styles['feature'], styles['feature-pro']].join(" ")}>
                        <FaCheck className={[styles['icon'], styles['icon-pro']].join(" ")} />
                        2 GB file storage
                    </div>
                </div>

            </div>
            {/*Team tier*/}
            {/*Bluish*/}
            <div className={[styles['card-container'], styles['card-team']].join(" ")}>

                {/*Title section with price*/}
                <div className={[styles['title-section'], styles['title-section-team']].join(" ")}>
                    <div className={[styles['title'], styles['title-team']].join(" ")}>TEAMS</div>
                    <div className={[styles['subtitle'], styles['subtitle-team']].join(" ")}>For families and bussinesses</div>
                    <div className={[styles['price'], styles['price-team']].join(" ")}>5$</div>
                    <div className={[styles['frequency'], styles['frequency-team']].join(" ")}>per person per month</div>
                    <div className={[styles['button-register'], styles['button-team']].join(" ")}>CHOOSE</div>
                </div>

                {/*Divider*/}
                <div className={[styles['divider'], styles['divider-team']].join(" ")}></div>

                {/*Features of the pricing plan*/}
                <div className={[styles['feature-list'], styles['feature-list-team']].join(" ")}>
                    <div className={[styles['feature'], styles['feature-team']].join(" ")}>
                        <FaCheck className={[styles['icon'], styles['icon-team']].join(" ")} />
                        Everything in Pro plan
                    </div>
                    <div className={[styles['feature'], styles['feature-team']].join(" ")}>
                        <FaCheck className={[styles['icon'], styles['icon-team']].join(" ")} />
                        Unlimited collaborations
                    </div>
                    <div className={[styles['feature'], styles['feature-team']].join(" ")}>
                        <FaCheck className={[styles['icon'], styles['icon-team']].join(" ")} />
                        Admin management and roles
                    </div>
                    <div className={[styles['feature'], styles['feature-team']].join(" ")}>
                        <FaCheck className={[styles['icon'], styles['icon-team']].join(" ")} />
                        Share Add-ons
                    </div>
                    <div className={[styles['feature'], styles['feature-team']].join(" ")}>
                        <FaCheck className={[styles['icon'], styles['icon-team']].join(" ")} />
                        5 GB common file storage
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Pricing