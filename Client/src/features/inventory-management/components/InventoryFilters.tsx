import Icon from "../../../components/ui/Icon";
import type { InventoryFiltersState } from "../types/inventory";

interface InventoryFiltersProps {
  filters: InventoryFiltersState;
  onChange: (filters: InventoryFiltersState) => void;
}

const CATEGORY_OPTIONS: InventoryFiltersState["category"][] = [
  "Todas",
  "Alimentos",
  "Medicinas",
  "Agua",
  "Herramientas",
  "Higiene",
];

const STATUS_OPTIONS: InventoryFiltersState["status"][] = [
  "Todos",
  "Óptimo",
  "Bajo",
  "Crítico",
];

export function InventoryFilters({ filters, onChange }: InventoryFiltersProps) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-end gap-gutter mb-stack-lg">
      <div className="flex-1 relative">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <Icon name="search" size={20} className="text-outline" />
        </div>
        <input
          className="w-full h-14 pl-12 pr-4 bg-surface-container-low border border-outline-subtle rounded-2xl focus:ring-2 focus:ring-primary/20 text-body-md transition-all"
          placeholder="Buscar por SKU, nombre o ubicación..."
          type="text"
          value={filters.search}
          onChange={(e) => onChange({ ...filters, search: e.target.value })}
        />
      </div>

      <div className="flex flex-wrap md:flex-nowrap items-end gap-stack-md">
        <div className="flex flex-col gap-1">
          <span className="font-label-caps text-label-caps text-outline ml-2">
            CATEGORÍA
          </span>
          <select
            className="h-14 px-4 bg-surface-container-low border border-outline-subtle rounded-2xl focus:ring-2 focus:ring-primary/20 text-body-md appearance-none min-w-[140px]"
            value={filters.category}
            onChange={(e) =>
              onChange({
                ...filters,
                category: e.target.value as InventoryFiltersState["category"],
              })
            }
          >
            {CATEGORY_OPTIONS.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <span className="font-label-caps text-label-caps text-outline ml-2">
            ESTADO
          </span>
          <select
            className="h-14 px-4 bg-surface-container-low border border-outline-subtle rounded-2xl focus:ring-2 focus:ring-primary/20 text-body-md appearance-none min-w-[140px]"
            value={filters.status}
            onChange={(e) =>
              onChange({
                ...filters,
                status: e.target.value as InventoryFiltersState["status"],
              })
            }
          >
            {STATUS_OPTIONS.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>

        {/* Quitamos self-end porque el padre ya se encarga de alinearlo abajo */}
        <button className="h-14 w-14 flex items-center justify-center bg-surface-container-low border border-outline-subtle rounded-2xl text-on-surface-variant hover:bg-primary/10 transition-all">
          <Icon name="filter_list" size={20} />
        </button>
      </div>
    </div>
  );
}
