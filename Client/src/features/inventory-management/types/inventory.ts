export type InventoryCategory =
  | "Alimentos"
  | "Medicinas"
  | "Agua"
  | "Herramientas"
  | "Higiene";

export type StockStatus = "Óptimo" | "Bajo" | "Crítico";

export interface InventoryItem {
  id: string;
  name: string;
  sku: string;
  category: InventoryCategory;
  icon: string; // nombre del Material Symbol
  currentStock: number;
  maxStock: number;
  expirationDate: string | null; // null => "-- -- --"
  status: StockStatus;
}

export interface InventoryFiltersState {
  search: string;
  category: InventoryCategory | "Todas";
  status: StockStatus | "Todos";
}
