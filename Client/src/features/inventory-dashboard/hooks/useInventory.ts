import { useCallback, useMemo, useState } from "react";
import type { Activity, InventoryItem, MovementType } from "../types/Inventory";
import {
  initialActivities,
  initialInventory,
  LOW_STOCK_THRESHOLD,
} from "../data/seed";

interface RegisterMovementInput {
  productId: number;
  quantity: number;
  location: string;
  type: MovementType;
}

interface UseInventoryResult {
  inventory: InventoryItem[];
  activities: Activity[];
  totalStock: number;
  lowStockCount: number;
  registerMovement: (input: RegisterMovementInput) => {
    success: boolean;
    error?: string;
  };
}

export function useInventory(): UseInventoryResult {
  const [inventory, setInventory] = useState<InventoryItem[]>(initialInventory);
  const [activities, setActivities] = useState<Activity[]>(initialActivities);

  const totalStock = useMemo(
    () => inventory.reduce((acc, item) => acc + item.stock, 0),
    [inventory],
  );

  const lowStockCount = useMemo(
    () => inventory.filter((item) => item.stock < LOW_STOCK_THRESHOLD).length,
    [inventory],
  );

  const registerMovement = useCallback(({
    productId,
    quantity,
    location,
    type,
  }: RegisterMovementInput) => {
    const product = inventory.find((item) => item.id === productId);

    if (!product) {
      return { success: false, error: "Selecciona un producto válido" };
    }

    if (type === "SALIDA" && quantity > product.stock) {
      return {
        success: false,
        error: `Stock insuficiente (${product.stock} disponibles)`,
      };
    }

    setInventory((prev) =>
      prev.map((item) => {
        if (item.id !== productId) return item;
        const newStock =
          type === "ENTRADA" ? item.stock + quantity : item.stock - quantity;
        return {
          ...item,
          stock: newStock,
          status: newStock < LOW_STOCK_THRESHOLD ? "CRITICO" : "OK",
        };
      }),
    );

    setActivities((prev) => [
      ...prev,
      {
        id: Date.now(),
        time: "Ahora",
        product: product.name,
        amount: quantity,
        type,
        location,
      },
    ]);

    return { success: true };
  }, [inventory, setInventory, setActivities]);

  return { inventory, activities, totalStock, lowStockCount, registerMovement };
}
