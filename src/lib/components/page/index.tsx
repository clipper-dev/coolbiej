export function Page({children, className, clip}: {children: React.ReactNode, className?: string, clip?: boolean}) {
  return (
    <main className={`w-full flex flex-col items-center ${className} ${clip && 'overflow-hidden'}`}>{children}</main>
  )
}
export function PageContent({ children, className }: Props) {
  return (
    <section className={`w-full max-w-screen-xl ${className}`}>{children}</section>
  )
}
