import ActivityHistoryPanel from '../features/activity-history/ActivityHistoryPanel'
import type { ActivityEntry, WeeklyStats } from '../features/activity-history/types'

const mockActivities: ActivityEntry[] = [
  { id: '1', timestamp: '19 Oct, 2023', time: '14:22 PM', type: 'donacion', product: 'Kits de Higiene Familiar', sku: 'SKU-992-HY', quantity: 450, originDestination: 'Cruz Roja Central', originIcon: 'volunteer_activism', operator: 'Elena R.' },
  { id: '2', timestamp: '19 Oct, 2023', time: '11:05 AM', type: 'despacho', product: 'Mantas Térmicas XL', sku: 'SKU-210-TH', quantity: -1200, originDestination: 'Refugio Valle Norte', originIcon: 'cottage', operator: 'Marc V.' },
  { id: '3', timestamp: '18 Oct, 2023', time: '16:45 PM', type: 'donacion', product: 'Botellas de Agua (5L)', sku: 'SKU-004-WA', quantity: 2400, originDestination: 'Suministros Global S.A.', originIcon: 'corporate_fare', operator: 'Sonia L.' },
  { id: '4', timestamp: '18 Oct, 2023', time: '09:12 AM', type: 'despacho', product: 'Antibióticos Genéricos', sku: 'SKU-881-MD', quantity: -250, originDestination: 'Hospital de Campaña B', originIcon: 'local_hospital', operator: 'Dr. Aris' },
  { id: '5', timestamp: '17 Oct, 2023', time: '15:30 PM', type: 'donacion', product: 'Arroz Fortificado 20kg', sku: 'SKU-441-RZ', quantity: 800, originDestination: 'FAO Donaciones', originIcon: 'corporate_fare', operator: 'Carlos M.' },
  { id: '6', timestamp: '17 Oct, 2023', time: '10:00 AM', type: 'despacho', product: 'Kits de Cocina', sku: 'SKU-775-KC', quantity: -150, originDestination: 'Cocina Comunitaria', originIcon: 'community', operator: 'Lucía P.' },
  { id: '7', timestamp: '16 Oct, 2023', time: '13:45 PM', type: 'donacion', product: 'Pastillas Potabilizadoras', sku: 'SKU-100-PP', quantity: 5000, originDestination: 'Fundación Agua Viva', originIcon: 'volunteer_activism', operator: 'Ricardo T.' },
  { id: '8', timestamp: '16 Oct, 2023', time: '08:30 AM', type: 'despacho', product: 'Carpa Familiar 4P', sku: 'SKU-009-CP', quantity: -30, originDestination: 'Albergue Temporal Norte', originIcon: 'cottage', operator: 'Ana G.' },
  { id: '9', timestamp: '15 Oct, 2023', time: '14:00 PM', type: 'donacion', product: 'Lámparas Solares', sku: 'SKU-001-LS', quantity: 200, originDestination: 'Energía Sin Fronteras', originIcon: 'corporate_fare', operator: 'Pedro J.' },
  { id: '10', timestamp: '15 Oct, 2023', time: '09:15 AM', type: 'despacho', product: 'Suero Oral', sku: 'SKU-778-SO', quantity: -500, originDestination: 'Puesto Médico Móvil 3', originIcon: 'local_hospital', operator: 'Dra. Rivas' },
]

const mockStats: WeeklyStats = {
  weeklyEntries: 12400,
  entriesTrend: 8.2,
  weeklyExits: 8900,
  exitsTrend: 14.5,
  activeOperators: 24,
  operatorChange: 21,
}

export default function ActivityPage() {
  return (
    <ActivityHistoryPanel
      activities={mockActivities}
      stats={mockStats}
    />
  )
}
