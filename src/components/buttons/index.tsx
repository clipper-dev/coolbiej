import React, { ComponentPropsWithRef } from 'react'
interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  disabled?: boolean
  type?: 'submit' | 'reset' | 'button'
  pill?: boolean
  color?: 'blue' | 'red' | 'green' | 'purple'
}
export function PrimaryButton({
  children,
  onClick,
  className = '',
  disabled = false,
  pill = false,
  type = 'button',
  color = 'blue',
  ...rest
}: ButtonProps & ComponentPropsWithRef<'button'>) {
  return (
    <button
      className={`disabled:cursor-not-allowed px-5 py-2.5 w-fit  transition text-white font-semibold bg-zinc-500 ${
        pill ? 'rounded-full' : 'rounded-lg'
      } ${
        color === 'blue'
          ? 'enabled:bg-blue-600 enabled:hover:bg-blue-700'
          : color === 'red'
          ? 'enabled:bg-red-500 enabled:hover:bg-red-800'
          : color === 'green'
          ? 'enabled:bg-green-600 enabled:hover:bg-green-700'
          : color === 'purple'
          ? 'enabled:bg-purple-500 enabled:hover:bg-purple-600'
          : ''
      } ${className}`}
      disabled={disabled}
      onClick={onClick}
      type={type}
      {...rest}
    >
      <div className='p-px'>{children}</div>
    </button>
  )
}
export function SecondaryButton({
  children,
  onClick,
  className = '',
  disabled = false,
  pill = false,
  type = 'button',
  color = 'blue',
  ...rest
}: ButtonProps & ComponentPropsWithRef<'button'>) {
  return (
    <button
      className={`border border-zinc-200 dark:border-zinc-700 enabled:bg-white dark:bg-zinc-800 disabled:cursor-not-allowed px-5 py-2.5 w-fit  transition font-semibold bg-zinc-500 ${
        pill ? 'rounded-full' : 'rounded-lg'
      } ${
        color === 'blue'
          ? 'enabled:hover:text-blue-500 enabled:hover:border-blue-300 enabled:dark:hover:border-blue-900'
          : color === 'red'
          ? 'enabled:hover:text-red-400 enabled:hover:border-red-300 enabled:dark:hover:border-red-400'
          : color === 'green'
          ? 'enabled:hover:text-green-600 enabled:hover:border-green-300 enabled:dark:hover:border-green-900'
          : color === 'purple'
          ? 'enabled:hover:text-purple-500 enabled:hover:border-purple-300 enabled:dark:hover:border-purple-900'
          : ''
      } ${className}`}
      disabled={disabled}
      onClick={onClick}
      type={type}
      {...rest}
    >
      {children}
    </button>
  )
}
export function TertiaryButton({
  children,
  onClick,
  className = '',
  disabled = false,
  pill = false,
  type = 'button',
  color = 'blue',
  ...rest
}: ButtonProps & ComponentPropsWithRef<'button'>) {
  return (
    <button
      className={`disabled:cursor-not-allowed px-5 py-2.5 w-fit  transition text-zinc-800 dark:text-white font-semibold bg-transparent enabled:hover:underline ${
        pill ? 'rounded-full' : 'rounded-lg'
      } ${
        color === 'blue'
          ? 'enabled:hover:text-blue-500 enabled:hover:border-blue-100 enabled:dark:hover:border-blue-900'
          : color === 'red'
          ? 'enabled:hover:text-red-400 enabled:hover:border-red-100 enabled:dark:hover:border-red-400'
          : color === 'green'
          ? 'enabled:hover:text-green-600 enabled:hover:border-green-100 enabled:dark:hover:border-green-900'
          : color === 'purple'
          ? 'enabled:hover:text-purple-500 enabled:hover:border-purple-100 enabled:dark:hover:border-purple-900'
          : ''
      } ${className}`}
      disabled={disabled}
      onClick={onClick}
      type={type}
      {...rest}
    >
      <div className='p-px'>{children}</div>
    </button>
  )
}
