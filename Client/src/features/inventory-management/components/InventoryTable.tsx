import type { InventoryItem } from "../types/inventory";
import { InventoryTableRow } from "./InventoryTableRow";

interface InventoryTableProps {
  items: InventoryItem[];
  onEditItem?: (item: InventoryItem) => void;
  onDeleteItem?: (item: InventoryItem) => void;
}

const COLUMNS = [
  "Suministro",
  "Categoría",
  "Nivel de Stock",
  "Vencimiento",
  "Estado",
];

export function InventoryTable({
  items,
  onEditItem,
  onDeleteItem,
}: InventoryTableProps) {
  return (
    <div className="overflow-x-auto custom-scrollbar -mx-margin-mobile md:mx-0">
      <table className="w-full text-left border-separate border-spacing-y-3">
        <thead>
          <tr className="text-label-caps font-label-caps text-outline">
            {COLUMNS.map((col) => (
              <th key={col} className="px-6 py-4 font-normal">
                {col}
              </th>
            ))}
            <th className="px-6 py-4 font-normal text-right">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <InventoryTableRow
              key={item.id}
              item={item}
              onEdit={onEditItem}
              onDelete={onDeleteItem}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
