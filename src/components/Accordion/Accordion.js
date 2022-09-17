import React, { useState } from 'react'
import styles from './Accordion.css'

/**
 * Animated accordion element
 * @param {Array} data The JSON array that contains objects with defined "id", "title", and "content"
 * @return {Object} jakis obiekt
 */
function Accordion({ data }) {
  const [clicked, setClicked] = useState(false)
  const toggle = (index) => {
    if (clicked === index) {
      // if already clicked, close it
      return setClicked(null)
    }
    // set the index

    setClicked(index)
  }
  const getQuestionStyle = (index) => {
    if (clicked === index) {
      return styles['question-container question-container-chosen']
    } else {
      return styles['question-container']
    }
  }
  const getAnswerStyle = (index) => {
    if (clicked === index) {
      return styles['answer-container answer-container-chosen']
    } else {
      return styles['answer-container']
    }
  }

  return (
    <div className={styles['accordion-container']}>
      <div className={styles['main-container']}>
        {data.map((item, index) => {
          return (
            <div>
              <div
                className={styles['item-container']}
                onClick={() => toggle(index)}
                key={index}
              >
                <div className={getQuestionStyle(index)} key={index + 'q'}>
                  {item.title}
                </div>
                <div className={getAnswerStyle(index)} key={index + 'a'}>
                  {item.content}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Accordion
