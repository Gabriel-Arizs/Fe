export type ItemStatus = "OK" | "CRITICO";

export type MovementType = "ENTRADA" | "SALIDA";

export type Category = "Alimentos" | "Salud" | "Higiene" | "Logística";

export interface InventoryItem {
  id: number;
  name: string;
  category: Category;
  stock: number;
  status: ItemStatus;
}

export interface Activity {
  id: number;
  time: string;
  product: string;
  amount: number;
  type: MovementType;
  location: string;
}

export interface MovementFormState {
  productId: number | null;
  quantity: number;
  location: string;
  type: MovementType;
}
