import React, { ComponentPropsWithRef } from 'react'
export function Page({ children, className = '', clip, ...rest }: { clip?: boolean } & ComponentPropsWithRef<'main'>) {
  return (
    <main
      className={`w-full flex flex-col items-center text-zinc-800 dark:text-zinc-100 dark:bg-zinc-800 ${className} ${
        clip && 'overflow-hidden'
      }`}
      {...rest}
    >
      {children}
    </main>
  )
}
export function PageContent({ children, className = '', ...rest }: Props & ComponentPropsWithRef<'section'>) {
  return (
    <section className={`w-full max-w-screen-xl dark:bg-zinc-800 ${className}`} {...rest}>
      {children}
    </section>
  )
}
