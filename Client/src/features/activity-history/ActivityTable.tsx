import type { ActivityEntry } from './types'

interface ActivityTableProps {
  activities: ActivityEntry[]
}

export default function ActivityTable({ activities }: ActivityTableProps) {
  return (
    <div className="overflow-x-auto rounded-12 border border-outline-variant">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-surface-dim">
            {['TIMESTAMP', 'OPERACIÓN', 'PRODUCTO', 'CANTIDAD', 'ORIGEN / DESTINO', 'OPERADOR'].map((h) => (
              <th key={h} className="px-4 py-3 text-left text-label-sm text-on-surface-variant uppercase tracking-wider whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {activities.map((entry) => (
            <tr key={entry.id} className="border-t border-outline-variant hover:bg-surface-container-low transition-colors">
              <td className="px-4 py-3 whitespace-nowrap">
                <p className="text-body-md text-on-surface font-medium">{entry.timestamp}</p>
                <p className="text-label-sm text-on-surface-variant">{entry.time}</p>
              </td>
              <td className="px-4 py-3">
                <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-pill text-label-sm font-semibold ${
                  entry.type === 'donacion'
                    ? 'bg-optimal-bg text-optimal'
                    : 'bg-blue-100 text-blue-700'
                }`}>
                  <span className="material-symbols-outlined text-[16px]">
                    {entry.type === 'donacion' ? 'download' : 'local_shipping'}
                  </span>
                  {entry.type === 'donacion' ? 'DONACIÓN' : 'DESPACHO'}
                </div>
              </td>
              <td className="px-4 py-3">
                <p className="text-body-md text-on-surface font-medium">{entry.product}</p>
                <p className="text-label-sm text-on-surface-variant">{entry.sku}</p>
              </td>
              <td className="px-4 py-3">
                <span className={`text-numeric-data ${
                  entry.quantity > 0 ? 'text-optimal' : 'text-critical'
                }`}>
                  {entry.quantity > 0 ? '+' : ''}{entry.quantity.toLocaleString()}
                </span>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg text-on-surface-variant">{entry.originIcon}</span>
                  <span className="text-body-md text-on-surface">{entry.originDestination}</span>
                </div>
              </td>
              <td className="px-4 py-3">
                <span className="text-body-md text-on-surface font-medium">{entry.operator}</span>
              </td>
            </tr>
          ))}
          {activities.length === 0 && (
            <tr>
              <td colSpan={6} className="px-4 py-8 text-center text-on-surface-variant">
                No hay movimientos registrados
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
