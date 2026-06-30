import Icon from '../../components/ui/Icon'
import type { StatusCardData } from './types'

interface StatusOverviewCardsProps {
  cards: StatusCardData[]
}

export default function StatusOverviewCards({ cards }: StatusOverviewCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {cards.map((card, i) => (
        <div key={i} className="bg-surface-bright rounded-12 border border-outline-variant p-4 md:p-5 flex items-start gap-4">
          <div className="w-12 h-12 rounded-10 bg-primary-fixed-dim/20 flex items-center justify-center shrink-0">
            <Icon name={card.icon} size={24} className="text-primary" />
          </div>
          <div className="min-w-0">
            <p className="text-label-sm text-on-surface-variant uppercase tracking-wider">{card.label}</p>
            <p className="text-body-md text-on-surface font-medium mt-0.5">{card.status}</p>
            <p className="text-label-sm text-on-surface-variant mt-0.5">{card.value}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
