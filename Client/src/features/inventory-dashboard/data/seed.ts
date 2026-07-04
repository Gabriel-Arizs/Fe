import type { Activity, InventoryItem } from "../types/Inventory";

export const LOW_STOCK_THRESHOLD = 10;

export const initialInventory: InventoryItem[] = [
  {
    id: 1,
    name: "Agua Mineral 1L",
    category: "Alimentos",
    stock: 1200,
    status: "OK",
  },
  {
    id: 2,
    name: "Paracetamol 500mg",
    category: "Salud",
    stock: 8,
    status: "CRITICO",
  },
  {
    id: 3,
    name: "Atún en Conserva",
    category: "Alimentos",
    stock: 450,
    status: "OK",
  },
  {
    id: 4,
    name: "Mantas Térmicas",
    category: "Logística",
    stock: 75,
    status: "OK",
  },
  {
    id: 5,
    name: "Jabón Antiséptico",
    category: "Higiene",
    stock: 5,
    status: "CRITICO",
  },
  {
    id: 6,
    name: "Linternas LED Pro",
    category: "Logística",
    stock: 120,
    status: "OK",
  },
];

export const initialActivities: Activity[] = [
  {
    id: 1,
    time: "5 min",
    product: "Agua 1L",
    amount: 150,
    type: "ENTRADA",
    location: "Donación Central",
  },
  {
    id: 2,
    time: "20 min",
    product: "Atún Lata",
    amount: 20,
    type: "SALIDA",
    location: "Refugio Norte",
  },
];

export const categories: string[] = [
  "Todos",
  "Alimentos",
  "Salud",
  "Higiene",
  "Logística",
];
