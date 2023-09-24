import React from 'react'
interface Props {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  disabled?: boolean
}
export function MainButton({ children, onClick, className, disabled }: Props) {
  return (
    <button
      className={
        'bg-gradient-to-r from-orange-500 to-purple-500 px-4 py-2 rounded-full font-secondary' + ' ' + className
      }
      disabled={disabled}
      onClick={onClick}
    >
      <div className='p-px'>{children}</div>
    </button>
  )
}
export function SecondaryButton({ children, onClick, className, disabled }: Props) {
  return (
    <button
      className={'bg-gradient-to-r from-orange-500 to-purple-500 p-px rounded-full font-secondary' + ' ' + className}
      onClick={onClick}
      disabled={disabled}
    >
      <div className='bg-zinc-800 rounded-full px-4 py-2'>{children}</div>
    </button>
  )
}
