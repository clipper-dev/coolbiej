'use client'
import React, { useState } from 'react'
import { TriangleIcon } from '../../_misc/icons'

export function Accordion({ children, label, className, arrow = false, fill = false }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={`${fill ? 'w-full' : 'w-fit'}`}>
      <button
        className={`w-full flex flex-row justify-between bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 border border-gray-200 dark:border-zinc-700 focus:outline-none rounded-lg font-semibold text-sm px-5 py-2.5 text-center items-center hover:bg-gray-100 transition-all duration-75 dark:hover:bg-zinc-700 ${className}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
        {arrow && (
          <TriangleIcon className={`ml-2 h-full aspect-square transition ${isOpen ? 'rotate-0' : '-rotate-180'}`} />
        )}
      </button>
      <div className={`${isOpen ? 'block]' : 'hidden'}`}>{children}</div>
    </div>
  )
}

export function AccordionDrawer({ children, className = '', border = false }: AccordionDrawerProps) {
  return (
    <div
      className={`w-full bg-white dark:bg-zinc-800 mt-2 px-5 py-2.5  ${
        border ? 'border border-gray-200 dark:border-zinc-700 rounded-lg' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}
