import React, { ComponentPropsWithRef } from 'react'
import { TriangleIcon } from '../../_misc/icons'

export function Table({ children, className = '', ...rest }: Props & ComponentPropsWithRef<'table'>) {
  return (
    <table className={'w-full caption-bottom text-sm ' + className} {...rest}>
      {children}
    </table>
  )
}

export function TableHead({ children, className = '', ...rest }: Props & ComponentPropsWithRef<'thead'>) {
  return (
    <thead
      className={'bg-zinc-50 dark:bg-zinc-700 border-y border-zinc-100 dark:border-zinc-700 ' + className}
      {...rest}
    >
      <tr>{children}</tr>
    </thead>
  )
}

export function TableBody({ children, className = '', ...rest }: Props & ComponentPropsWithRef<'tbody'>) {
  return (
    <tbody className={'[&_tr:last-child]:border-0 ' + className} {...rest}>
      {children}
    </tbody>
  )
}

export function TableRow({ children, className = '', onClick, ...rest }: PropsClick & ComponentPropsWithRef<'tr'>) {
  return (
    <tr className={'border-b border-zinc-100 dark:border-zinc-700 ' + className} onClick={onClick} {...rest}>
      {children}
    </tr>
  )
}

export function TableHeaderCell({
  children,
  className = '',
  onClick,
  sortable = false,
  sort = 'none',
  align = 'left',
  strong = false,
  ...rest
}: PropsTableHeader & ComponentPropsWithRef<'th'>) {
  return (
    <th
      className={`p-4 text-zinc-500 dark:text-zinc-400 ${sortable ? 'cursor-pointer flex flex-row' : ''} ${
        strong ? 'font-bold' : 'font-medium'
      } ${className}`}
      onClick={onClick}
      align={align}
      {...rest}
    >
      {children}
      {sortable && (
        <span className='ml-1 flex flex-col text-zinc-300 dark:text-zinc-600 '>
          <TriangleIcon
            className={`w-3 h-3 transition-transform transform ${
              sort === 'asc' ? 'text-blue-400 dark:text-purple-200' : ''
            }`}
          />
          <TriangleIcon
            className={`w-3 h-3 transition-transform transform rotate-180 ${
              sort === 'asc' ? '' : 'text-blue-400 dark:text-purple-200'
            }`}
          />
        </span>
      )}
    </th>
  )
}

export function TableDataCell({ children, className = '', align = 'left', strong = false, ...rest }: PropsTableCell) {
  return (
    <td
      className={`p-4 ${
        strong ? 'text-zinc-700 dark:text-zinc-100 font-semibold' : 'text-zinc-500 dark:text-zinc-400'
      } ${className}`}
      align={align}
      {...rest}
    >
      {children}
    </td>
  )
}
