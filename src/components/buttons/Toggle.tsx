interface ToggleProps extends Props {
  checked: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export function Toggle({ className = '', checked, onChange }: ToggleProps) {
  return (
    <label className={`relative inline-flex items-center cursor-pointer ${className}`}>
      <input type='checkbox' value='' className='sr-only peer' checked={checked} onChange={onChange} />
      <div className="w-11 h-6 bg-zinc-400 peer-focus:outline-none rounded-full peer dark:bg-zinc-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-zinc-600"></div>
    </label>
  )
}
