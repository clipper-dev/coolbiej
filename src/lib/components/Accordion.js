import React, { useState, useEffect } from 'react'
import styles from './Accordion.module.css'



function Accordion(props) {
    const [clicked, setClicked] = useState(false);
    const toggle = index => {
        if (clicked === index) {
            //if already clicked, close it
            return setClicked(null);
        }
        //set the index
        setClicked(index);
    }
    const getQuestionStyle = index => {
        if (clicked === index) {
            return [styles['question-container'], styles['question-container-chosen']].join(" ");
        }
        else {
            return styles['question-container'];
        }
    }
    const getAnswerStyle = index => {
        if (clicked === index) {
            return [styles['answer-container'], styles['answer-container-chosen']].join(" ");
        }
        else {
            return styles['answer-container'];
        }
    }

    return (
        <div className={styles['accordion-container']}>
            <div className={styles['main-container']}>
                {props.data.map((item, index) => {
                    return (
                        <>
                            <div className={styles['item-container']} onClick={() => toggle(index)} key={index}>
                                <div className={getQuestionStyle(index)} key={index + 'q'}>
                                    {item.question}
                                </div>
                                <div className={getAnswerStyle(index)} key={index + 'a'}>
                                    {item.answer}
                                </div>

                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default Accordion