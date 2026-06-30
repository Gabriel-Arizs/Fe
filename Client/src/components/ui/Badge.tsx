interface BadgeProps {
  variant: 'optimal' | 'bajo' | 'critico' | 'warning' | 'info' | 'advertencia'
  children: React.ReactNode
}

const variants = {
  optimal: 'bg-optimal-bg text-optimal',
  bajo: 'bg-warning-bg text-warning',
  critico: 'bg-critical-bg text-critical',
  warning: 'bg-warning-bg text-warning',
  info: 'bg-blue-100 text-blue-700',
  advertencia: 'bg-warning-bg text-warning',
}

export default function Badge({ variant, children }: BadgeProps) {
  return (
    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-pill text-label-sm ${variants[variant]}`}>
      {children}
    </span>
  )
}
