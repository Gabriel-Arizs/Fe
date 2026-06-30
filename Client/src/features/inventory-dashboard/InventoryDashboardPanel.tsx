import { useState } from 'react'
import Icon from '../../components/ui/Icon'
import type { DashboardStats, Supply, MovementData } from './types'
import StatsOverviewCards from './StatsOverviewCards'
import SupplyCategories from './SupplyCategories'
import MovementForm from './MovementForm'
import SearchInput from '../../components/ui/SearchInput'
import Button from '../../components/ui/Button'

interface InventoryDashboardPanelProps {
  stats: DashboardStats
  supplies: Supply[]
  categories: string[]
  onRegisterMovement: (data: MovementData) => void
}

export default function InventoryDashboardPanel({
  stats,
  supplies,
  categories,
  onRegisterMovement,
}: InventoryDashboardPanelProps) {
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [search, setSearch] = useState('')

  const filteredSupplies = supplies.filter((s) => {
    const matchCategory = selectedCategory === 'Todos' || s.category === selectedCategory
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase())
    return matchCategory && matchSearch
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-headline-lg text-on-surface">Emergency Inventory</h1>
          <p className="text-body-md text-on-surface-variant mt-1">Lumina Direct</p>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="md" icon="notifications" />
          <div className="w-10 h-10 rounded-full bg-primary-fixed-dim/30 flex items-center justify-center">
            <Icon name="person" size={20} className="text-primary" />
          </div>
        </div>
      </div>

      {/* Stats */}
      <StatsOverviewCards stats={stats} />

      {/* Supplies Section */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex-1 max-w-md">
            <SearchInput value={search} onChange={setSearch} placeholder="Buscar suministros..." />
          </div>
          <Button variant="primary" size="md" icon="add_box">Registrar Movimiento</Button>
        </div>

        <SupplyCategories
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />

        {/* Supply Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSupplies.map((supply) => (
            <div key={supply.id} className="bg-surface-bright rounded-12 border border-outline-variant p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-label-sm text-on-surface-variant uppercase">{supply.category}</p>
                  <h3 className="text-body-md text-on-surface font-semibold">{supply.name}</h3>
                </div>
                <div className={`px-2.5 py-1 rounded-pill text-label-sm font-semibold ${
                  supply.stock / supply.maxStock > 0.5
                    ? 'bg-optimal-bg text-optimal'
                    : supply.stock / supply.maxStock > 0.2
                    ? 'bg-warning-bg text-warning'
                    : 'bg-critical-bg text-critical'
                }`}>
                  {supply.stock}/{supply.maxStock}
                </div>
              </div>
              <div className="w-full bg-surface-dim rounded-full h-2 mt-3">
                <div
                  className={`h-2 rounded-full transition-all ${
                    supply.stock / supply.maxStock > 0.5
                      ? 'bg-optimal'
                      : supply.stock / supply.maxStock > 0.2
                      ? 'bg-warning'
                      : 'bg-critical'
                  }`}
                  style={{ width: `${(supply.stock / supply.maxStock) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Movement Form */}
      <div className="max-w-md">
        <MovementForm
          products={supplies.map((s) => s.name)}
          onRegister={onRegisterMovement}
        />
      </div>

      {/* History Link */}
      <div className="flex items-center gap-2 text-primary cursor-pointer hover:underline">
        <Icon name="history" size={20} />
        <span className="text-label-lg font-semibold">Historial</span>
      </div>
    </div>
  )
}
