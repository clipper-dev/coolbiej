export function Title({ children, className }: Props) {
  return <h1 className={`text-5xl lg:text-6xl xl:text-8xl font-header uppercase ${className}`}>{children}</h1>
}
export function Header1({ children, className }: Props) {
  return <h1 className={`text-2xl lg:text-3xl xl:text-5xl font-header uppercase ${className}`}>{children}</h1>
}
export function Header2({ children, className }: Props) {
  return <h2 className={`text-xl lg:text-2xl xl:text-4xl font-normal font-secondary  ${className}`}>{children}</h2>
}
export function Header3({ children, className }: Props) {
  return <h3 className={`text-lg xl:text-xl font-secondary ${className}`}>{children}</h3>
}
export function Lead({ children, className }: Props) {
  return <p className={`text-lg md:text-xl font-secondary text-zinc-400 ${className}`}>{children}</p>
}
export function P({ children, className }: Props) {
  return <p className={`leading-7 [&:not(:first-child)]:mt-6 ${className}`}>{children}</p>
}
export function Small({ children, className }: Props) {
  return <span className={`text-xs ${className}`}>{children}</span>
}
export function NavItem({ children, className }: Props) {
  return (
    <span className={'font-secondary text-zinc-400 hover:text-purple-500 md:text-lg ' + className}>{children}</span>
  )
}
