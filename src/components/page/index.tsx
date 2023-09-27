import React from 'react'
export function Page({
  children,
  className = '',
  clip,
}: {
  children: React.ReactNode
  className?: string
  clip?: boolean
}) {
  return (
    <main
      className={`w-full flex flex-col items-center text-zinc-800 dark:text-zinc-100 dark:bg-zinc-800 ${className} ${
        clip && 'overflow-hidden'
      }`}
    >
      {children}
    </main>
  )
}
export function PageContent({ children, className = '' }: Props) {
  return <section className={`w-full max-w-screen-xl dark:bg-zinc-800 ${className}`}>{children}</section>
}
