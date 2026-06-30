import { useState } from 'react'
import type { MovementData } from './types'
import Button from '../../components/ui/Button'

interface MovementFormProps {
  products: string[]
  onRegister: (data: MovementData) => void
}

export default function MovementForm({ products, onRegister }: MovementFormProps) {
  const [type, setType] = useState<'entrada' | 'salida'>('entrada')
  const [product, setProduct] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [originDestination, setOriginDestination] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!product || !originDestination) return
    onRegister({ type, product, quantity, originDestination })
    setProduct('')
    setQuantity(1)
    setOriginDestination('')
  }

  return (
    <form onSubmit={handleSubmit} className="bg-surface-bright rounded-12 border border-outline-variant p-5 space-y-4">
      <h3 className="text-headline-md text-on-surface">Registrar Movimiento</h3>

      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setType('entrada')}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-10 text-label-lg font-semibold transition-colors ${
            type === 'entrada'
              ? 'bg-primary text-on-primary'
              : 'bg-secondary-container text-on-surface-variant'
          }`}
        >
          <span className="material-symbols-outlined text-xl">add_circle</span> Entrar
        </button>
        <button
          type="button"
          onClick={() => setType('salida')}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-10 text-label-lg font-semibold transition-colors ${
            type === 'salida'
              ? 'bg-critical text-white'
              : 'bg-secondary-container text-on-surface-variant'
          }`}
        >
          <span className="material-symbols-outlined text-xl">remove_circle</span> Salir
        </button>
      </div>

      <div>
        <label className="text-label-sm text-on-surface-variant mb-1 block">Producto</label>
        <select
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          className="w-full h-12 px-4 rounded-10 border border-outline-variant bg-surface-bright text-on-surface focus:outline-none focus:border-2 focus:border-primary text-body-md"
        >
          <option value="">Seleccionar...</option>
          {products.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-label-sm text-on-surface-variant mb-1 block">Cantidad</label>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-10 h-10 rounded-8 bg-secondary-container flex items-center justify-center hover:bg-outline-variant transition-colors"
          >
            <span className="material-symbols-outlined text-xl">remove</span>
          </button>
          <span className="text-numeric-data text-on-surface min-w-[40px] text-center">{quantity}</span>
          <button
            type="button"
            onClick={() => setQuantity(quantity + 1)}
            className="w-10 h-10 rounded-8 bg-secondary-container flex items-center justify-center hover:bg-outline-variant transition-colors"
          >
            <span className="material-symbols-outlined text-xl">add</span>
          </button>
        </div>
      </div>

      <div>
        <label className="text-label-sm text-on-surface-variant mb-1 block">Origen / Destino</label>
        <input
          type="text"
          value={originDestination}
          onChange={(e) => setOriginDestination(e.target.value)}
          placeholder="Ej: Almacén Central"
          className="w-full h-12 px-4 rounded-10 border border-outline-variant bg-surface-bright text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:border-2 focus:border-primary text-body-md"
        />
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full">PROCESAR</Button>
    </form>
  )
}
