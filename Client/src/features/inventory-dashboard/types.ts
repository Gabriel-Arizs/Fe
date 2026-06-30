export interface DashboardStats {
  totalStock: number
  totalStockChange: number
  incoming: number
  incomingOrders: number
  outgoing: number
  outgoingOrders: number
  lowStock: number
  lowStockLabel: string
}

export interface Supply {
  id: string
  name: string
  category: string
  stock: number
  maxStock: number
}

export interface MovementData {
  type: 'entrada' | 'salida'
  product: string
  quantity: number
  originDestination: string
}
