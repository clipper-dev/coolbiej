import React, { ComponentPropsWithRef } from 'react'
interface CheckboxProps extends PropsClick {
  checked?: boolean
}
export function Checkbox({
  onClick,
  checked = false,
  className = '',
  children,
  ...rest
}: CheckboxProps & ComponentPropsWithRef<'button'>) {
  return (
    <button className='flex flex-row items-center gap-2' type='button' role='checkbox' onClick={onClick} {...rest}>
      <div
        className={`flex items-center justify-center w-5 h-5 rounded-md border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
          checked ? 'bg-blue-500 border-transparent' : ''
        } ${className}`}
      >
        <div
          className={`pointer-events-none transitio duration-75 dark:bg-zinc-300 bg-zinc-800 top-0  ${
            checked ? 'w-1/2 h-1/2 rounded-full' : 'w-0 h-0 rounded-full'
          }`}
        ></div>
      </div>
      {children}
    </button>
  )
}
