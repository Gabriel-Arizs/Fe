import AlertCenterPanel from '../features/alert-center/AlertCenterPanel'
import type { StatusCardData, CriticalAlert } from '../features/alert-center/types'

const mockStatusCards: StatusCardData[] = [
  { icon: 'ac_unit', label: 'COLD CHAIN', status: 'Optimum', value: '2.4°C avg' },
  { icon: 'wifi', label: 'NETWORK SYNC', status: 'Stable', value: '99.2% uptime' },
  { icon: 'sync', label: 'LAST SYNC', status: 'Checking', value: '14 mins ago' },
]

const mockAlerts: CriticalAlert[] = [
  { id: '1', icon: 'emergency', severity: 'critico', location: 'Pasillo B-12', product: 'Insulina Humana (Viales 10ml)', stock: 'Stock remanente: 4 unidades', trend: 'down', action: 'REORDER NOW', actionIcon: 'shopping_cart' },
  { id: '2', icon: 'warning', severity: 'advertencia', location: 'Almacén Central', product: 'Kits de Sutura Estériles', stock: 'Stock remanente: 9 unidades', action: 'REVIEW ORDER' },
  { id: '3', icon: 'info', severity: 'info', location: 'Refrigerador 04', product: 'Vacuna SRP (Triple Viral)', stock: 'Próximo vencimiento: 12 Mar 2024', action: 'MOVE TO FRONT', actionIcon: 'move_up' },
  { id: '4', icon: 'water_drop', severity: 'critico', location: 'Zona Logística C', product: 'Solución Salina 0.9% (500ml)', stock: 'Stock remanente: 2 unidades', action: 'REORDER NOW', actionIcon: 'shopping_cart' },
  { id: '5', icon: 'masks', severity: 'advertencia', location: 'Despensa Médica', product: 'Mascarillas N95', stock: 'Stock remanente: 8 unidades', action: 'REVIEW ORDER' },
]

export default function AlertsPage() {
  return (
    <AlertCenterPanel
      statusCards={mockStatusCards}
      alerts={mockAlerts}
      onAlertAction={(id, action) => console.log(`Alert ${id}: ${action}`)}
    />
  )
}
