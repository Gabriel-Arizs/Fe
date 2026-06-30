import type { InventoryItem } from './types'
import Badge from '../../components/ui/Badge'
import Button from '../../components/ui/Button'

interface InventoryTableProps {
  items: InventoryItem[]
  onEdit: (item: InventoryItem) => void
  onDelete: (item: InventoryItem) => void
}

const statusVariant = {
  optimo: 'optimal' as const,
  bajo: 'bajo' as const,
  critico: 'critico' as const,
}

export default function InventoryTable({ items, onEdit, onDelete }: InventoryTableProps) {
  return (
    <div className="overflow-x-auto rounded-12 border border-outline-variant">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-surface-dim">
            {['Suministro', 'Categoría', 'Nivel de Stock', 'Vencimiento', 'Estado', 'Acciones'].map((h) => (
              <th key={h} className="px-4 py-3 text-left text-label-sm text-on-surface-variant uppercase tracking-wider whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            const pct = Math.round((item.currentStock / item.maxStock) * 100)
            return (
              <tr key={item.id} className="border-t border-outline-variant hover:bg-surface-container-low transition-colors">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-10 bg-primary-fixed-dim/20 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-xl text-primary">{item.icon}</span>
                    </div>
                    <div>
                      <p className="text-body-md text-on-surface font-medium">{item.name}</p>
                      <p className="text-label-sm text-on-surface-variant">{item.sku}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className="text-label-sm text-on-surface-variant uppercase">{item.category}</span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3 min-w-[160px]">
                    <div className="flex-1 bg-surface-dim rounded-full h-2.5">
                      <div
                        className={`h-2.5 rounded-full transition-all ${
                          pct > 50 ? 'bg-optimal' : pct > 20 ? 'bg-warning' : 'bg-critical'
                        }`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="text-label-sm text-on-surface-variant whitespace-nowrap">
                      {item.currentStock.toLocaleString()} / {item.maxStock.toLocaleString()}
                    </span>
                  </div>
                  <span className={`text-label-sm ${pct > 50 ? 'text-optimal' : pct > 20 ? 'text-warning' : 'text-critical'}`}>
                    {pct}%
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="text-body-md text-on-surface">
                    {item.expirationDate || '-- -- --'}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <Badge variant={statusVariant[item.status]}>
                    {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                  </Badge>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="sm" icon="edit" onClick={() => onEdit(item)} />
                    <Button variant="ghost" size="sm" icon="delete" onClick={() => onDelete(item)} className="hover:bg-critical-bg hover:text-critical" />
                  </div>
                </td>
              </tr>
            )
          })}
          {items.length === 0 && (
            <tr>
              <td colSpan={6} className="px-4 py-8 text-center text-on-surface-variant">
                No hay items que coincidan con los filtros
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
