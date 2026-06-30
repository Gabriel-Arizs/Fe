import { useState, useMemo } from 'react'
import type { InventoryItem, FilterState } from './types'
import InventoryFilters from './InventoryFilters'
import InventoryTable from './InventoryTable'
import Pagination from '../../components/ui/Pagination'
import Button from '../../components/ui/Button'

interface InventoryManagementPanelProps {
  items: InventoryItem[]
  categories: string[]
  onAddItem: () => void
  onExport: () => void
  onEdit: (item: InventoryItem) => void
  onDelete: (item: InventoryItem) => void
}

const PAGE_SIZE = 10

const allStatuses = ['Todos', 'Óptimo', 'Bajo', 'Crítico']

export default function InventoryManagementPanel({
  items,
  categories,
  onAddItem,
  onExport,
  onEdit,
  onDelete,
}: InventoryManagementPanelProps) {
  const [filters, setFilters] = useState<FilterState>({
    category: 'Todas',
    status: 'Todos',
    search: '',
  })
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    return items.filter((item) => {
      const matchCategory = filters.category === 'Todas' || item.category === filters.category
      const matchSearch = !filters.search ||
        item.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        item.sku.toLowerCase().includes(filters.search.toLowerCase())
      const statusMap: Record<string, string> = { 'Óptimo': 'optimo', 'Bajo': 'bajo', 'Crítico': 'critico', 'Todos': 'todos' }
      const matchStatus = filters.status === 'Todos' || item.status === statusMap[filters.status]
      return matchCategory && matchSearch && matchStatus
    })
  }, [items, filters])

  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-headline-lg text-on-surface">Gestión de Inventario</h1>
          <p className="text-body-md text-on-surface-variant mt-1">
            Monitoreo y control de suministros humanitarios en tiempo real.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="md" icon="download" onClick={onExport}>Exportar</Button>
          <Button variant="primary" size="md" icon="add" onClick={onAddItem}>Nuevo Item</Button>
        </div>
      </div>

      {/* Filters */}
      <InventoryFilters
        filters={filters}
        categories={['Todas', ...categories]}
        statuses={allStatuses}
        onFilterChange={(f) => { setFilters(f); setPage(1) }}
      />

      {/* Table */}
      <InventoryTable items={paginated} onEdit={onEdit} onDelete={onDelete} />

      {/* Pagination */}
      <Pagination
        currentPage={page}
        totalItems={filtered.length}
        pageSize={PAGE_SIZE}
        onPageChange={setPage}
      />
    </div>
  )
}
