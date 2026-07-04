import React, { useState } from "react";
import type { InventoryItem, MovementType } from "../types/Inventory";
import { MovementTypeToggle } from "./MovementTypeToggle";
import { QuantityStepper } from "./QuantityStepper";

export interface MovementFormProps {
  inventory: InventoryItem[];
  onSubmit: (input: {
    productId: number;
    quantity: number;
    location: string;
    type: MovementType;
  }) => { success: boolean; error?: string };
}

export function MovementForm({ inventory, onSubmit }: MovementFormProps) {
  const [type, setType] = useState<MovementType>("ENTRADA");
  const [productId, setProductId] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
  const [location, setLocation] = useState("");
  const [error, setError] = useState<string | null>(null);

  const originLabel = type === "ENTRADA" ? "Origen" : "Destino";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    if (!productId) {
      setError("Selecciona un producto");
      return;
    }

    const result = onSubmit({
      productId: parseInt(productId, 10),
      quantity,
      location,
      type,
    });

    if (!result.success) {
      setError(result.error ?? "Ocurrió un error");
      return;
    }

    setType("ENTRADA");
    setProductId("");
    setQuantity(1);
    setLocation("");
  }

  return (
    <div className="bg-surface-container-lowest rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_60px_rgba(124,58,237,0.04)] border border-outline-variant/30">
      <h3 className="text-xl font-bold text-primary mb-8">
        Registrar Movimiento
      </h3>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <MovementTypeToggle value={type} onChange={setType} />

        <div className="space-y-2">
          <label className="text-xs font-bold text-on-surface-variant/40 uppercase tracking-widest px-2">
            Producto
          </label>
          <select
            className="w-full h-16 bg-surface-container-low border-none rounded-2xl focus:ring-2 focus:ring-primary/20 font-medium px-4 appearance-none"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            required
          >
            <option value="">Seleccionar...</option>
            {inventory.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <QuantityStepper value={quantity} onChange={setQuantity} />

        <div className="space-y-2">
          <label className="text-xs font-bold text-on-surface-variant/40 uppercase tracking-widest px-2">
            {originLabel} / Destino
          </label>
          <input
            className="w-full h-16 bg-surface-container-low border-none rounded-2xl focus:ring-2 focus:ring-primary/20 font-medium px-4 placeholder:text-on-surface-variant/20"
            placeholder="Especifique ubicación"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>

        {error && <p className="text-error text-sm font-bold px-2">{error}</p>}

        <button
          type="submit"
          className="w-full h-18 py-5 bg-primary text-on-primary rounded-2xl font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all mt-4"
        >
          PROCESAR
        </button>
      </form>
    </div>
  );
}
