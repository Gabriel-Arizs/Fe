import type { InventoryCategory } from "../types/inventory";
import { CATEGORY_STYLES } from "../data/inventoryStyles";

interface CategoryBadgeProps {
  category: InventoryCategory;
}

export function CategoryBadge({ category }: CategoryBadgeProps) {
  const style = CATEGORY_STYLES[category];

  return (
    <span
      className={`px-3 py-1 rounded-full text-caption font-label-caps ${style.badgeClass}`}
    >
      {style.label}
    </span>
  );
}
