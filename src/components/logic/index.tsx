export function TextError({ children, className = '' }: Props) {
  return <span className={`text-rose-500 ${className}`}>{children}</span>
}
export function TextSuccess({ children, className = '' }: Props) {
  return <span className={`text-emerald-500 ${className}`}>{children}</span>
}
