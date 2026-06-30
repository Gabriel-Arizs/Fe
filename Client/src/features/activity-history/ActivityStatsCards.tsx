import Icon from '../../components/ui/Icon'
import type { WeeklyStats } from './types'

interface ActivityStatsCardsProps {
  stats: WeeklyStats
}

export default function ActivityStatsCards({ stats }: ActivityStatsCardsProps) {
  const cards = [
    {
      icon: 'inventory_2',
      label: 'ENTRADAS SEMANALES',
      value: `+${stats.weeklyEntries.toLocaleString()}`,
      change: `trending_up ${stats.entriesTrend}% vs semana pasada`,
      changeColor: 'text-optimal',
    },
    {
      icon: 'local_shipping',
      label: 'SALIDAS SEMANALES',
      value: `${stats.weeklyExits.toLocaleString()}`,
      change: `trending_up ${stats.exitsTrend}% vs semana pasada`,
      changeColor: 'text-critical',
    },
    {
      icon: 'badge',
      label: 'OPERADORES ACTIVOS',
      value: `${stats.activeOperators}`,
      change: `${stats.operatorChange > 0 ? '+' : ''}${stats.operatorChange}`,
      changeColor: 'text-optimal',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {cards.map((card) => (
        <div key={card.label} className="bg-surface-bright rounded-12 border border-outline-variant p-5">
          <div className="flex items-start justify-between mb-3">
            <p className="text-label-sm text-on-surface-variant uppercase tracking-wider">{card.label}</p>
            <Icon name={card.icon} size={24} className="text-primary" />
          </div>
          <p className="text-display text-on-surface">{card.value}</p>
          <div className="flex items-center gap-1 mt-2">
            <Icon name="trending_up" size={18} className="text-optimal" />
            <span className={`text-label-sm font-medium ${card.changeColor}`}>{card.change}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
