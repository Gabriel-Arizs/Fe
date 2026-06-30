export interface StatusCardData {
  icon: string
  label: string
  status: string
  value: string
}

export interface CriticalAlert {
  id: string
  icon: string
  severity: 'critico' | 'advertencia' | 'info'
  location: string
  product: string
  sku?: string
  stock: string
  trend?: 'up' | 'down'
  action: string
  actionIcon?: string
}
