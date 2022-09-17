import React from 'react'
import styles from './Section.css'

function Section({children}) {
  return (
	<div className={styles['container-flex']}>{children}</div>
  )
}

export default Section