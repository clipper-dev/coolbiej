import React, { ComponentPropsWithRef } from 'react'
interface InputProps {
  placeholder?: string
  type?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  icon?: React.ReactNode
  animated?: boolean
}
export function Input({
  placeholder = 'Search',
  value = '',
  onChange,
  className,
  icon,
  animated = false,
  ...rest
}: InputProps & ComponentPropsWithRef<'input'>) {
  return (
    <span className='relative flex flex-row items-center group'>
      <input
        className={`w-full relative px-5 py-2.5 border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 rounded-lg focus:outline-none focus:ring-2 placeholder:dark:text-zinc-400 placeholder:text-zinc-500 text-sm font-medium focus:ring-blue-500 focus:border-transparent group ${
          icon ? 'pl-10' : 'px-5'
        } ${className}`}
        placeholder={animated ? '' : placeholder}
        value={value}
        onChange={onChange}
        {...rest}
      />
      {animated && (
        <span
          className={`px-3 bg-white dark:bg-zinc-800 absolute left-0 transition my-auto text-zinc-500 text-sm font-medium  pointer-events-none group-focus-within:text-blue-400 ${
            icon
              ? value
                ? '-translate-y-5 translate-x-7 scale-75 group-focus-within:-translate-y-5 group-focus-within:scale-75 group-focus-within:translate-x-7'
                : 'translate-x-7 group-focus-within:-translate-y-5 group-focus-within:scale-75 group-focus-within:translate-x-7'
              : value
              ? 'ny translate-x-2 group-focus-within:-translate-y-5 group-focus-within:scale-75 group-focus-within:translate-x-7'
              : 'nn translate-x-2 group-focus-within:-translate-y-5 group-focus-within:scale-75 group-focus-within:translate-x-7'
          }`}
        >
          {placeholder}
        </span>
      )}
      {icon && <span className='absolute left-3 my-auto text-zinc-400 dark:text-zinc-400'>{icon}</span>}
    </span>
  )
}
