import SearchInput from '../../components/ui/SearchInput'
import type { FilterState } from './types'

interface InventoryFiltersProps {
  filters: FilterState
  categories: string[]
  statuses: string[]
  onFilterChange: (filters: FilterState) => void
}

export default function InventoryFilters({ filters, categories, statuses, onFilterChange }: InventoryFiltersProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex-1">
        <SearchInput
          value={filters.search}
          onChange={(search) => onFilterChange({ ...filters, search })}
          placeholder="Buscar por nombre o SKU..."
        />
      </div>
      <div className="flex flex-wrap gap-2">
        <div className="flex flex-col gap-1">
          <span className="text-label-sm text-on-surface-variant ml-1">CATEGORÍA</span>
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => onFilterChange({ ...filters, category: cat })}
                className={`px-3 py-1.5 rounded-pill text-label-sm font-semibold transition-colors ${
                  filters.category === cat
                    ? 'bg-primary text-on-primary'
                    : 'bg-secondary-container text-on-surface-variant hover:bg-outline-variant'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-label-sm text-on-surface-variant ml-1">ESTADO</span>
          <div className="flex flex-wrap gap-1.5">
            {statuses.map((st) => (
              <button
                key={st}
                onClick={() => onFilterChange({ ...filters, status: st })}
                className={`px-3 py-1.5 rounded-pill text-label-sm font-semibold transition-colors ${
                  filters.status === st
                    ? 'bg-primary text-on-primary'
                    : 'bg-secondary-container text-on-surface-variant hover:bg-outline-variant'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
