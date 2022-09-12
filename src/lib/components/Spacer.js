import React from 'react'
import styles from './Spacer.module.css'

function Spacer(props) {
    return (
        <div className={[styles['spacer-container'],styles[props.size]].join(" ")}>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#D0E2FF" d="M37.8,20.7C24.9,44.2,-26.2,44.4,-38.9,21.1C-51.6,-2.3,-25.8,-49.2,-0.2,-49.3C25.3,-49.4,50.7,-2.8,37.8,20.7Z" transform="translate(100 100)" />
            </svg><svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#D0E2FF" d="M37.8,20.7C24.9,44.2,-26.2,44.4,-38.9,21.1C-51.6,-2.3,-25.8,-49.2,-0.2,-49.3C25.3,-49.4,50.7,-2.8,37.8,20.7Z" transform="translate(100 100)" />
            </svg><svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#D0E2FF" d="M37.8,20.7C24.9,44.2,-26.2,44.4,-38.9,21.1C-51.6,-2.3,-25.8,-49.2,-0.2,-49.3C25.3,-49.4,50.7,-2.8,37.8,20.7Z" transform="translate(100 100)" />
            </svg>
        </div>
    )
}
export default Spacer