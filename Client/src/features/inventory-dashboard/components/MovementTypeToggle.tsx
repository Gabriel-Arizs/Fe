import type { MovementType } from "../types/Inventory";
import Icon from "../../../components/ui/Icon";

export interface MovementTypeToggleProps {
  value: MovementType;
  onChange: (type: MovementType) => void;
}

export function MovementTypeToggle({
  value,
  onChange,
}: MovementTypeToggleProps) {
  const isEntrada = value === "ENTRADA";

  return (
    <div className="grid grid-cols-2 gap-3 p-1.5 bg-surface-container-low rounded-2xl">
      <button
        type="button"
        onClick={() => onChange("ENTRADA")}
        className={
          isEntrada
            ? "flex items-center justify-center gap-2 py-4 rounded-xl font-bold transition-all bg-primary text-on-primary shadow-lg shadow-primary/20"
            : "flex items-center justify-center gap-2 py-4 rounded-xl font-bold transition-all text-on-surface-variant/40 hover:text-primary"
        }
      >
        <Icon name="add_circle" /> Entrada
      </button>
      <button
        type="button"
        onClick={() => onChange("SALIDA")}
        className={
          !isEntrada
            ? "flex items-center justify-center gap-2 py-4 rounded-xl font-bold transition-all bg-error text-on-primary shadow-lg shadow-error/20"
            : "flex items-center justify-center gap-2 py-4 rounded-xl font-bold transition-all text-on-surface-variant/40 hover:text-primary"
        }
      >
        <Icon name="remove_circle" /> Salida
      </button>
    </div>
  );
}
