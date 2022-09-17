import React from 'react'
import styles from './Section2.css'

function Section2({children}) {
  return (
	<div className={styles['container-flex']}>{children}</div>
  )
}

export default Section2