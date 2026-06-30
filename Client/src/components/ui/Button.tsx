interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  icon?: string
  children?: React.ReactNode
}

const variantStyles = {
  primary: 'bg-primary text-on-primary hover:bg-primary-container',
  secondary: 'bg-secondary-container text-on-surface hover:bg-outline-variant',
  outline: 'border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-on-primary',
  ghost: 'bg-transparent text-primary hover:bg-primary-fixed-dim/20',
}

const sizeStyles = {
  sm: 'px-3 py-1.5 text-label-sm',
  md: 'px-4 py-2.5 text-label-lg',
  lg: 'px-6 py-3 text-label-lg',
}

export default function Button({ variant = 'primary', size = 'md', icon, children, className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-8 font-semibold transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {icon && <span className="material-symbols-outlined text-[20px]">{icon}</span>}
      {children}
    </button>
  )
}
