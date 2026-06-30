import type { DashboardStats } from './types'

interface StatsOverviewCardsProps {
  stats: DashboardStats
}

const cards = [
  { key: 'totalStock' as const, icon: 'inventory_2', label: 'Total Stock', changeKey: 'totalStockChange' as const, changeSuffix: '%' },
  { key: 'incoming' as const, icon: 'arrow_downward', label: 'Incoming', changeKey: 'incomingOrders' as const, changeSuffix: ' En camino' },
  { key: 'outgoing' as const, icon: 'arrow_upward', label: 'Outgoing', changeKey: 'outgoingOrders' as const, changeSuffix: ' Despachos' },
  { key: 'lowStock' as const, icon: 'warning', label: 'Low Stock', changeKey: 'lowStockLabel' as const, changeSuffix: '' },
]

export default function StatsOverviewCards({ stats }: StatsOverviewCardsProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card) => {
        const value = stats[card.key]
        const change = stats[card.changeKey]
        return (
          <div key={card.key} className="bg-surface-bright rounded-12 border border-outline-variant p-4 md:p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className={`w-10 h-10 rounded-10 flex items-center justify-center ${
                card.key === 'lowStock' ? 'bg-critical-bg' : 'bg-primary-fixed-dim/20'
              }`}>
                <span className={`material-symbols-outlined text-xl ${
                  card.key === 'lowStock' ? 'text-critical' : 'text-primary'
                }`}>{card.icon}</span>
              </div>
            </div>
            <p className="text-label-sm text-on-surface-variant uppercase tracking-wider">{card.label}</p>
            <p className={`text-numeric-data mt-1 ${card.key === 'lowStock' ? 'text-critical' : 'text-on-surface'}`}>
              {typeof value === 'number' ? value.toLocaleString() : value}
            </p>
            <p className={`text-label-sm mt-1 ${
              card.key === 'lowStock' ? 'text-critical' : 'text-optimal'
            }`}>
              {typeof change === 'number' && change > 0 ? '+' : ''}{change}{card.changeSuffix}
            </p>
          </div>
        )
      })}
    </div>
  )
}
