import type { InventoryCategory } from "../types/inventory";

/**
 * Cada categoría tiene un color de acento único (icono, barra de stock,
 * texto de estado y punto indicador comparten el mismo tono). El badge
 * de categoría puede tener un color distinto (ej. Medicinas).
 */
export const CATEGORY_STYLES: Record<
  InventoryCategory,
  {
    label: string;
    badgeClass: string;
    iconBg: string;
    accentColor: "primary" | "secondary" | "tertiary" | "error";
  }
> = {
  Medicinas: {
    label: "MEDICINA",
    badgeClass: "bg-primary/10 text-primary",
    iconBg: "bg-error-container/20",
    accentColor: "error",
  },
  Alimentos: {
    label: "ALIMENTOS",
    badgeClass: "bg-tertiary-fixed text-on-tertiary-fixed-variant",
    iconBg: "bg-tertiary-fixed/30",
    accentColor: "tertiary",
  },
  Agua: {
    label: "AGUA",
    badgeClass: "bg-secondary-fixed text-on-secondary-fixed-variant",
    iconBg: "bg-secondary-fixed/30",
    accentColor: "secondary",
  },
  Herramientas: {
    label: "HERRAMIENTAS",
    badgeClass: "bg-primary/10 text-primary",
    iconBg: "bg-primary/10",
    accentColor: "primary",
  },
  Higiene: {
    label: "HIGIENE",
    badgeClass: "bg-primary/10 text-primary",
    iconBg: "bg-primary/10",
    accentColor: "primary",
  },
};

/** Traduce el accentColor semántico a las clases de Tailwind necesarias. */
export const ACCENT_CLASSES: Record<
  "primary" | "secondary" | "tertiary" | "error",
  { text: string; bg: string }
> = {
  primary: { text: "text-primary", bg: "bg-primary" },
  secondary: { text: "text-secondary", bg: "bg-secondary" },
  tertiary: { text: "text-tertiary", bg: "bg-tertiary" },
  error: { text: "text-error", bg: "bg-error" },
};
