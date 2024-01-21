import { ComponentPropsWithRef } from 'react'

export function DropdownBreaker({ className = '', ...rest }: ComponentPropsWithRef<'hr'>) {
  return <hr className={`border-zinc-200 dark:border-zinc-600 border-1 my-1 ${className}`} {...rest} />
}
export function DropdownItem({ children, className = '', ...rest }: Props & ComponentPropsWithRef<'div'>) {
  return (
    <div
      className={`cursor-pointer whitespace-nowrap bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 text-sm px-4 py-2.5 text-center inline-flex items-center rounded-md hover:bg-gray-100 transition-all duration-75 dark:hover:bg-zinc-700 ${className}`}
      {...rest}
    >
      {children}
    </div>
  )
}
export function DropdownLink({ children, className = '', ...rest }: Props & ComponentPropsWithRef<'a'>) {
  return (
    <a
      className={`cursor-pointer whitespace-nowrap bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 text-sm px-4 py-2.5 text-center inline-flex items-center rounded-md hover:bg-gray-100 transition-all duration-75 dark:hover:bg-zinc-700 ${className}`}
      {...rest}
    >
      {children}
    </a>
  )
}
export function DropdownHeader({ children, className = '', ...rest }: Props & ComponentPropsWithRef<'div'>) {
  return (
    <div
      className={`whitespace-nowrap bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 text-sm px-4 py-2.5 text-center inline-flex items-center font-semibold ${className}`}
      {...rest}
    >
      {children}
    </div>
  )
}
