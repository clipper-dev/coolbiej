'use client'
import { ReactNode, useEffect, useState } from 'react'
import { TriangleIcon } from '../../_misc/icons'
interface DropdownProps {
  children: ReactNode
  label: ReactNode
  className?: string
  openTimeout?: number
  arrow?: boolean
}
export function Dropdown({ children, label, openTimeout = 150, className = '', arrow = false }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [hoverTimer, setHoverTimer] = useState<NodeJS.Timeout | null>(null)

  const onMouseEnter = () => {
    // Clear any existing timer when mouse enters the dropdown area again
    if (hoverTimer) {
      clearTimeout(hoverTimer)
      setHoverTimer(null)
    }
    setIsOpen(true)
  }

  const onMouseLeave = () => {
    // Set a timer to close the dropdown after 300ms
    const timer = setTimeout(() => {
      setIsOpen(false)
    }, openTimeout)
    setHoverTimer(timer)
  }

  useEffect(() => {
    // Clear the timer when the component is unmounted
    return () => {
      if (hoverTimer) {
        clearTimeout(hoverTimer)
      }
    }
  }, [hoverTimer])
  return (
    <div className='relative w-fit' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <button
        className={
          'bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 border border-gray-200 dark:border-zinc-700 focus:outline-none rounded-lg font-semibold text-sm px-5 py-2.5 text-center inline-flex items-center hover:bg-gray-100 transition-all duration-75 dark:hover:bg-zinc-700 ' +
          className
        }
        type='button'
      >
        {label}
        {arrow && (
          <TriangleIcon className={`ml-2 h-full aspect-square transition ${isOpen ? 'rotate-0' : '-rotate-180'}`} />
        )}
      </button>
      <div
        className={`${
          isOpen ? 'flex' : 'hidden'
        } absolute left-0 mt-2 min-w-full bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 border border-gray-200 dark:border-zinc-700 focus:outline-none rounded-md shadow-lg px-1 py-1.5 transition ease-out duration-200 flex flex-col z-50`}
        role='menu'
      >
        {children}
      </div>
    </div>
  )
}

export function DropdownBreaker() {
  return <hr className='border-zinc-200 dark:border-zinc-600 border-1 my-1' />
}
export function DropdownItem({ children, className = '' }: Props) {
  return (
    <div
      className={`cursor-pointer whitespace-nowrap bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 text-sm px-4 py-2.5 text-center inline-flex items-center rounded-md hover:bg-gray-100 transition-all duration-75 dark:hover:bg-zinc-700 ${className}`}
    >
      {children}
    </div>
  )
}
export function DropdownHeader({ children, className = '' }: Props) {
  return (
    <div
      className={`whitespace-nowrap bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 text-sm px-4 py-2.5 text-center inline-flex items-center font-semibold ${className}`}
    >
      {children}
    </div>
  )
}
