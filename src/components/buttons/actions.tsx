export function Action({ className = '', children, onClick }: PropsClick) {
  return (
    <div className={`font-medium cursor-pointer text-blue-500 hover:underline ${className}`} onClick={onClick}>
      {children}
    </div>
  )
}
export function Caution({ className = '', children, onClick }: PropsClick) {
  return (
    <div className={`font-medium cursor-pointer text-rose-500 hover:underline ${className}`} onClick={onClick}>
      {children}
    </div>
  )
}
