export interface ActivityEntry {
  id: string
  timestamp: string
  time: string
  type: 'donacion' | 'despacho'
  product: string
  sku: string
  quantity: number
  originDestination: string
  originIcon: string
  operator: string
}

export interface WeeklyStats {
  weeklyEntries: number
  entriesTrend: number
  weeklyExits: number
  exitsTrend: number
  activeOperators: number
  operatorChange: number
}
