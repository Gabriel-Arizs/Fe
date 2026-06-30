import InventoryDashboardPanel from '../features/inventory-dashboard/InventoryDashboardPanel'
import type { DashboardStats, Supply } from '../features/inventory-dashboard/types'

const mockStats: DashboardStats = {
  totalStock: 2450,
  totalStockChange: 12,
  incoming: 450,
  incomingOrders: 3,
  outgoing: 120,
  outgoingOrders: 8,
  lowStock: 2,
  lowStockLabel: 'Crítico',
}

const mockSupplies: Supply[] = [
  { id: '1', name: 'Amoxicilina 500mg', category: 'Salud', stock: 120, maxStock: 1500 },
  { id: '2', name: 'Arroz Fortificado', category: 'Alimentos', stock: 4500, maxStock: 5000 },
  { id: '3', name: 'Agua Mineral 5L', category: 'Logística', stock: 600, maxStock: 2000 },
  { id: '4', name: 'Kit de Higiene', category: 'Higiene', stock: 340, maxStock: 800 },
  { id: '5', name: 'Mantas Térmicas', category: 'Logística', stock: 1200, maxStock: 3000 },
  { id: '6', name: 'Vendas Estériles', category: 'Salud', stock: 80, maxStock: 500 },
]

export default function DashboardPage() {
  return (
    <InventoryDashboardPanel
      stats={mockStats}
      supplies={mockSupplies}
      categories={['Todos', 'Alimentos', 'Salud', 'Higiene', 'Logística']}
      onRegisterMovement={(data) => console.log('Movement:', data)}
    />
  )
}
