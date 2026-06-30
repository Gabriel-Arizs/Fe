import type { StatusCardData, CriticalAlert } from './types'
import StatusOverviewCards from './StatusOverviewCards'
import CriticalAlertCard from './CriticalAlertCard'
import Button from '../../components/ui/Button'

interface AlertCenterPanelProps {
  statusCards: StatusCardData[]
  alerts: CriticalAlert[]
  onAlertAction: (alertId: string, action: string) => void
}

export default function AlertCenterPanel({ statusCards, alerts, onAlertAction }: AlertCenterPanelProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-headline-lg text-on-surface">Centro de Alertas</h1>
        <p className="text-body-md text-on-surface-variant mt-1">
          Supervisión en tiempo real de la integridad del sistema y suministros críticos.
        </p>
      </div>

      {/* Status Overview */}
      <StatusOverviewCards cards={statusCards} />

      {/* Critical Inventory Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-headline-md text-on-surface">Inventario Crítico ({alerts.length})</h2>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" icon="filter_list">Filtros</Button>
            <Button variant="outline" size="sm" icon="download">Exportar</Button>
          </div>
        </div>
        <div className="space-y-3">
          {alerts.map((alert) => (
            <CriticalAlertCard key={alert.id} alert={alert} onAction={onAlertAction} />
          ))}
        </div>
      </div>
    </div>
  )
}
