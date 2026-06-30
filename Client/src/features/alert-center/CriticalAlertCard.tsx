import Icon from '../../components/ui/Icon'
import type { CriticalAlert } from './types'
import Button from '../../components/ui/Button'

const severityConfig = {
  critico: { bg: 'bg-critical-bg', text: 'text-critical', icon: 'emergency' },
  advertencia: { bg: 'bg-warning-bg', text: 'text-warning', icon: 'warning' },
  info: { bg: 'bg-blue-100', text: 'text-blue-700', icon: 'info' },
}

interface CriticalAlertCardProps {
  alert: CriticalAlert
  onAction: (alertId: string, action: string) => void
}

export default function CriticalAlertCard({ alert, onAction }: CriticalAlertCardProps) {
  const sev = severityConfig[alert.severity]

  return (
    <div className="bg-surface-bright rounded-12 border border-outline-variant p-4 md:p-5">
      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 rounded-10 flex items-center justify-center shrink-0 ${sev.bg}`}>
          <Icon name={alert.icon} size={24} className={sev.text} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-pill text-label-sm font-semibold ${sev.bg} ${sev.text}`}>
              <Icon name={sev.icon} size={14} />
              {alert.severity.toUpperCase()}
            </span>
            <span className="text-label-sm text-on-surface-variant">• {alert.location}</span>
          </div>
          <h3 className="text-body-md text-on-surface font-semibold">{alert.product}</h3>
          <p className="text-label-sm text-on-surface-variant mt-0.5">{alert.stock}</p>
          {alert.trend && (
            <div className="flex items-center gap-1 mt-1">
              <Icon name={`trending_${alert.trend}`} size={18} className={alert.trend === 'down' ? 'text-critical' : 'text-optimal'} />
              <span className={`text-label-sm font-medium ${alert.trend === 'down' ? 'text-critical' : 'text-optimal'}`}>
                {alert.trend === 'down' ? 'Decreciendo' : 'Estable'}
              </span>
            </div>
          )}
        </div>
        <Button
          variant="primary"
          size="sm"
          icon={alert.actionIcon || 'shopping_cart'}
          onClick={() => onAction(alert.id, alert.action)}
        >
          {alert.action}
        </Button>
      </div>
    </div>
  )
}
