import React, { useState } from 'react'
import styles from './ColorPicker.module.css'

function ColorPicker() {
    const colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const colorsPalette = {
        red: '#FFADAD',
        orange: '#FFD6A5',
        yellow: '#FDFFB6',
        green: '#CAFFBF',
        aqua: '#9BF6FF',
        blue: '#A0C4FF',
        violet: '#BDB2FF',
        pink: '#FFC6FF',
        white: '#FFFFFC'
    };
    const [chosenColor, setChosenColor] = useState(colorsPalette['red']);
    return (
        <>
            <div className={styles['color-picker--container']}>

                {Object.keys(colorsPalette).map(function (color) {
                    return (
                        <div key={color}  className={styles['color-picker--outer']}>
                            <div className={styles['color-picker--inner']} style={{ backgroundColor: colorsPalette[color] }}>{(chosenColor === colorsPalette[color]) ? 'X' : ''}</div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ColorPicker