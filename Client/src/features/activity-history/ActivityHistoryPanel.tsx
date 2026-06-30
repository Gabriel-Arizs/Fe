import { useState, useMemo } from 'react'
import Icon from '../../components/ui/Icon'
import type { ActivityEntry, WeeklyStats } from './types'
import ActivityFilters from './ActivityFilters'
import ActivityTable from './ActivityTable'
import ActivityStatsCards from './ActivityStatsCards'
import Pagination from '../../components/ui/Pagination'

interface ActivityHistoryPanelProps {
  activities: ActivityEntry[]
  stats: WeeklyStats
}

const PAGE_SIZE = 8

export default function ActivityHistoryPanel({ activities, stats }: ActivityHistoryPanelProps) {
  const [dateRange, setDateRange] = useState('OCT 12 - OCT 19, 2023')
  const [filterType, setFilterType] = useState('TODOS LOS TIPOS')
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    return activities.filter((entry) => {
      if (filterType === 'ENTRADAS / DONACIÓN') return entry.type === 'donacion'
      if (filterType === 'SALIDAS / DESPACHO') return entry.type === 'despacho'
      return true
    })
  }, [activities, filterType])

  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-2">
        <Icon name="LOGISTICS_HQ" size={24} className="text-primary" />
        <div>
          <h1 className="text-headline-lg text-on-surface">Historial de Actividad</h1>
          <p className="text-body-md text-on-surface-variant mt-1">
            Seguimiento en tiempo real de todos los movimientos de suministros y donaciones dentro del ecosistema de ayuda.
          </p>
        </div>
      </div>

      {/* Filters */}
      <ActivityFilters
        dateRange={dateRange}
        filterType={filterType}
        onDateRangeChange={setDateRange}
        onFilterTypeChange={(t) => { setFilterType(t); setPage(1) }}
        onExport={() => console.log('Export report')}
      />

      {/* Table */}
      <ActivityTable activities={paginated} />

      {/* Pagination */}
      <Pagination
        currentPage={page}
        totalItems={filtered.length}
        pageSize={PAGE_SIZE}
        onPageChange={setPage}
      />

      {/* Stats */}
      <ActivityStatsCards stats={stats} />
    </div>
  )
}
