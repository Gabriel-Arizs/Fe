import Icon from './Icon'

interface SearchInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export default function SearchInput({ value, onChange, placeholder = 'Buscar...' }: SearchInputProps) {
  return (
    <div className="relative">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">
        <Icon name="search" size={20} />
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full h-12 pl-11 pr-4 rounded-10 border border-outline-variant bg-surface-bright text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:border-2 focus:border-primary text-body-md"
      />
    </div>
  )
}
