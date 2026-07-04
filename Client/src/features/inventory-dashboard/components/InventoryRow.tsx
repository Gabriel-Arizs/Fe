import type { InventoryItem } from "../types/Inventory";
import { LOW_STOCK_THRESHOLD } from "../data/seed";
import Icon from "../../../components/ui/Icon";

export interface InventoryRowProps {
  item: InventoryItem;
}

const categoryIconMap: Record<string, string> = {
  Alimentos: "restaurant",
  Salud: "medical_services",
  Higiene: "soap",
  Logística: "local_shipping",
};

export function InventoryRow({ item }: InventoryRowProps) {
  const isCritical = item.stock < LOW_STOCK_THRESHOLD;
  const statusClass = isCritical
    ? "bg-error-container text-error"
    : "bg-primary-fixed text-on-primary-fixed-variant";

  return (
    <div className="group flex items-center justify-between p-6 bg-surface-container-low/50 hover:bg-surface-container rounded-2xl transition-all duration-300 border border-transparent hover:border-outline-variant/50">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
          <Icon name={categoryIconMap[item.category] || "package_2"} size={24} />
        </div>
        <div>
          <p className="font-bold text-on-surface group-hover:translate-x-1 transition-transform">
            {item.name}
          </p>
          <p className="text-xs font-medium text-on-surface-variant/40 uppercase tracking-tighter">
            {item.category}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="text-right">
          <p className="text-xl font-bold text-primary">
            {item.stock.toLocaleString()}
          </p>
          <span
            className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-lg ${statusClass}`}
          >
            {item.status}
          </span>
        </div>
        <button className="w-10 h-10 rounded-full hover:bg-primary-fixed/50 flex items-center justify-center text-on-surface-variant/20 hover:text-primary transition-colors">
          <Icon name="more_vert" />
        </button>
      </div>
    </div>
  );
}
