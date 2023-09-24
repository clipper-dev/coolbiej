import React from 'react'
interface Props {
  placeholder?: string
  type?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  name?: string
  id?: string
  required?: boolean
  disabled?: boolean
  autoComplete?: string
  autoFocus?: boolean
}
export function Input({
  placeholder,
  type,
  value,
  onChange,
  className,
  name,
  id,
  required,
  disabled,
  autoComplete,
  autoFocus,
}: Props) {
  return (
    <input
      className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      name={name}
      id={id}
      required={required}
      disabled={disabled}
      autoComplete={autoComplete}
      autoFocus={autoFocus}
    />
  )
}
