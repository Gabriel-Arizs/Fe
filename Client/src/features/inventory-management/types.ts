export interface InventoryItem {
  id: string
  name: string
  sku: string
  category: string
  currentStock: number
  maxStock: number
  expirationDate: string | null
  status: 'optimo' | 'bajo' | 'critico'
  icon: string
}

export interface FilterState {
  category: string
  status: string
  search: string
}
