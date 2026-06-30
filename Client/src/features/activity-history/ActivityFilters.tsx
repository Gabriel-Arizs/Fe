import Button from '../../components/ui/Button'

interface ActivityFiltersProps {
  dateRange: string
  filterType: string
  onDateRangeChange: (range: string) => void
  onFilterTypeChange: (type: string) => void
  onExport: () => void
}

const types = ['TODOS LOS TIPOS', 'ENTRADAS / DONACIÓN', 'SALIDAS / DESPACHO']

export default function ActivityFilters({
  dateRange,
  filterType,
  onDateRangeChange,
  onFilterTypeChange,
  onExport,
}: ActivityFiltersProps) {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
      <div className="flex items-center gap-2 flex-wrap">
        <div className="flex items-center gap-2 px-3 py-2 rounded-8 bg-secondary-container">
          <span className="material-symbols-outlined text-xl text-on-surface-variant">calendar_month</span>
          <input
            type="text"
            value={dateRange}
            onChange={(e) => onDateRangeChange(e.target.value)}
            className="bg-transparent border-none text-label-lg text-on-surface font-medium focus:outline-none w-48"
          />
        </div>
        <div className="flex gap-1">
          {types.map((t) => (
            <button
              key={t}
              onClick={() => onFilterTypeChange(t)}
              className={`px-3 py-2 rounded-pill text-label-sm font-semibold transition-colors ${
                filterType === t
                  ? 'bg-primary text-on-primary'
                  : 'bg-secondary-container text-on-surface-variant hover:bg-outline-variant'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
      <Button variant="outline" size="sm" icon="download" onClick={onExport}>
        EXPORTAR REPORTE
      </Button>
    </div>
  )
}
