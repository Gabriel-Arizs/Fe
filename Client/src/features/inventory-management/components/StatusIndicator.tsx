import type { InventoryCategory, StockStatus } from "../types/inventory";
import { CATEGORY_STYLES, ACCENT_CLASSES } from "../data/inventoryStyles";

interface StatusIndicatorProps {
  status: StockStatus;
  category: InventoryCategory;
}

export function StatusIndicator({ status, category }: StatusIndicatorProps) {
  const accent = ACCENT_CLASSES[CATEGORY_STYLES[category].accentColor];
  const isCritical = status === "Crítico";

  return (
    <span
      className={`flex items-center gap-1.5 font-bold text-caption uppercase ${accent.text}`}
    >
      <span
        className={`w-2 h-2 rounded-full ${accent.bg} ${
          isCritical ? "animate-pulse" : ""
        }`}
      />
      {status}
    </span>
  );
}
