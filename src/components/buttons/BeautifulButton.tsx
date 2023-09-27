import React from 'react'
import styles from './BeautifulButton.module.css'
interface Props {
  children: React.ReactNode
  href?: string
  icon?: React.ReactNode
  className?: string
}
export function BeautifulButton({ children, icon, className }: Props) {
  return (
    <div
      className={[styles.buttonWrapper, 'md:px-6 py-2 cursor-pointer transition-all rounded-full', className].join(' ')}
    >
      (
      <div className='flex items-center gap-1'>
        <div className={styles.arrowLeft}>{icon}</div>
        <span className={[styles.label, 'font-secondary text-sm md:text-lg'].join(' ')}>{children}</span>
        <div className={styles.arrowRight}>{icon}</div>
      </div>
      )
    </div>
  )
}
