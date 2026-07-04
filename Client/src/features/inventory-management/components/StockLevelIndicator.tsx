import type { InventoryCategory } from "../types/inventory";
import { CATEGORY_STYLES, ACCENT_CLASSES } from "../data/inventoryStyles";

interface StockLevelIndicatorProps {
  current: number;
  max: number;
  category: InventoryCategory;
}

export function StockLevelIndicator({
  current,
  max,
  category,
}: StockLevelIndicatorProps) {
  const percentage = max > 0 ? Math.round((current / max) * 100) : 0;
  const accent = ACCENT_CLASSES[CATEGORY_STYLES[category].accentColor];

  return (
    <div className="flex flex-col gap-1 w-40">
      <div className="flex justify-between text-caption font-label-caps">
        <span className={`font-bold ${accent.text}`}>
          {current.toLocaleString("es")} / {max.toLocaleString("es")}
        </span>
        <span>{percentage}%</span>
      </div>
      <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
        <div
          className={`h-full ${accent.bg}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
