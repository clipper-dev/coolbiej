export function Display({ children, className = '', ...rest }: Props & React.ComponentPropsWithRef<'h1'>) {
  return (
    <h1 className={`text-4xl md:text-5xl lg:text-6xl font-semibold dark:text-zinc-50 ${className}`} {...rest}>
      {children}
    </h1>
  )
}
export function Headline({ children, className = '', ...rest }: Props & React.ComponentPropsWithRef<'h2'>) {
  return (
    <h2 className={`text-2xl md:text-3xl lg:text-4xl font-semibold dark:text-zinc-50 ${className}`} {...rest}>
      {children}
    </h2>
  )
}
export function Title({ children, className = '', ...rest }: Props & React.ComponentPropsWithRef<'h3'>) {
  return (
    <h3 className={`text-lg md:text-xl lg:text-2xl font-semibold dark:text-zinc-50 ${className}`} {...rest}>
      {children}
    </h3>
  )
}
export function Header({ children, className = '', ...rest }: Props & React.ComponentPropsWithRef<'h4'>) {
  return (
    <h4 className={`text-base md:text-lg lg:text-xl font-medium dark:text-zinc-50 ${className}`} {...rest}>
      {children}
    </h4>
  )
}
export function Body({ children, className = '', ...rest }: Props & React.ComponentPropsWithRef<'p'>) {
  return (
    <p className={`text-base md:text-base lg:text-lg text-zinc-700 dark:text-zinc-300 ${className}`} {...rest}>
      {children}
    </p>
  )
}
export function Label({ children, className = '', ...rest }: Props & React.ComponentPropsWithRef<'p'>) {
  return (
    <p className={`text-sm md:text-sm lg:text-base font-bold text-zinc-600 dark:text-zinc-500 ${className}`} {...rest}>
      {children}
    </p>
  )
}
export function Small({ children, className = '', ...rest }: Props & React.ComponentPropsWithRef<'span'>) {
  return (
    <span className={`text-xs dark:text-zinc-50 ${className}`} {...rest}>
      {children}
    </span>
  )
}
export function Code({ children, className = '', ...rest }: Props & React.ComponentPropsWithRef<'span'>) {
  return (
    <span className={`text-xs font-mono dark:text-zinc-50 ${className}`} {...rest}>
      {children}
    </span>
  )
}
export function NavItem({ children, className = '', ...rest }: Props & React.ComponentPropsWithRef<'span'>) {
  return (
    <span className={'text-zinc-400 hover:text-purple-500 md:text-lg dark:text-zinc-50 ' + className} {...rest}>
      {children}
    </span>
  )
}
