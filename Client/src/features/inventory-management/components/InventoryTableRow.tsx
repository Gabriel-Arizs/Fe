import type { InventoryItem } from "../types/inventory";
import { ItemIcon } from "./ItemIcon";
import { CategoryBadge } from "./CategoryBadge";
import { StockLevelIndicator } from "./StockLevelIndicator";
import { StatusIndicator } from "./StatusIndicator";
import { RowActions } from "./RowActions";

interface InventoryTableRowProps {
  item: InventoryItem;
  onEdit?: (item: InventoryItem) => void;
  onDelete?: (item: InventoryItem) => void;
}

export function InventoryTableRow({
  item,
  onEdit,
  onDelete,
}: InventoryTableRowProps) {
  return (
    <tr className="bg-white hover:bg-surface-container-low transition-all group">
      <td className="px-6 py-5 rounded-l-2xl">
        <div className="flex items-center gap-4">
          <ItemIcon icon={item.icon} category={item.category} />
          <div>
            <p className="font-bold text-on-surface">{item.name}</p>
            <p className="text-caption font-caption text-outline">
              SKU: {item.sku}
            </p>
          </div>
        </div>
      </td>
      <td className="px-6 py-5">
        <CategoryBadge category={item.category} />
      </td>
      <td className="px-6 py-5">
        <StockLevelIndicator
          current={item.currentStock}
          max={item.maxStock}
          category={item.category}
        />
      </td>
      <td className="px-6 py-5 font-body-md text-on-surface-variant">
        {item.expirationDate ?? "-- -- --"}
      </td>
      <td className="px-6 py-5">
        <StatusIndicator status={item.status} category={item.category} />
      </td>
      <td className="px-6 py-5 rounded-r-2xl text-right">
        <RowActions
          onEdit={() => onEdit?.(item)}
          onDelete={() => onDelete?.(item)}
        />
      </td>
    </tr>
  );
}
