import { ComponentPropsWithRef } from 'react'

export function TextError({ children, className = '', ...rest }: Props & ComponentPropsWithRef<'span'>) {
  return (
    <span className={`text-rose-500 ${className}`} {...rest}>
      {children}
    </span>
  )
}
export function TextSuccess({ children, className = '', ...rest }: Props & ComponentPropsWithRef<'span'>) {
  return (
    <span className={`text-emerald-500 ${className}`} {...rest}>
      {children}
    </span>
  )
}
