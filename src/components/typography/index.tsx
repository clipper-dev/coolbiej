export function Display({ children, className = '' }: Props) {
  return <h1 className={`text-4xl md:text-5xl lg:text-6xl font-semibold dark:text-zinc-50 ${className}`}>{children}</h1>
}
export function Headline({ children, className = '' }: Props) {
  return <h2 className={`text-2xl md:text-3xl lg:text-4xl font-semibold dark:text-zinc-50 ${className}`}>{children}</h2>
}
export function Title({ children, className = '' }: Props) {
  return <h3 className={`text-lg md:text-xl lg:text-2xl font-semibold dark:text-zinc-50 ${className}`}>{children}</h3>
}
export function Header({ children, className = '' }: Props) {
  return <h4 className={`text-base md:text-lg lg:text-xl font-medium dark:text-zinc-50 ${className}`}>{children}</h4>
}
export function Body({ children, className = '' }: Props) {
  return (
    <p className={`text-base md:text-base lg:text-lg text-zinc-700 dark:text-zinc-300 max-w-[70ch] ${className}`}>
      {children}
    </p>
  )
}
export function Label({ children, className = '' }: Props) {
  return (
    <p className={`text-sm md:text-sm lg:text-base font-bold text-zinc-600 dark:text-zinc-500 ${className}`}>
      {children}
    </p>
  )
}
export function Small({ children, className = '' }: Props) {
  return <span className={`text-xs dark:text-zinc-50 ${className}`}>{children}</span>
}
export function Code({ children, className = '' }: Props) {
  return <span className={`text-xs font-mono dark:text-zinc-50 ${className}`}>{children}</span>
}
export function NavItem({ children, className = '' }: Props) {
  return (
    <span className={'text-zinc-400 hover:text-purple-500 md:text-lg dark:text-zinc-50 ' + className}>{children}</span>
  )
}
