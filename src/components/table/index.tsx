export function TableTextBody({ children, className = '' }: Props) {
  return <p className={`text-base md:text-base lg:text-lg text-zinc-400 max-w-[70ch] ${className}`}>{children}</p>
}
export function TableTextSmall({ children, className = '' }: Props) {
  return <p className={`text-sm md:text-sm lg:text-base text-zinc-400 max-w-[70ch] ${className}`}>{children}</p>
}
export function TableTextHeader({ children, className = '' }: Props) {
  return <p className={`text-sm md:text-sm lg:text-base font-semibold text-zinc-400 ${className}`}>{children}</p>
}
