import { StatCard } from "./StatCard";

export interface StatsGridProps {
  totalStock: number;
  incoming: number;
  outgoing: number;
  lowStockCount: number;
}

export function StatsGrid({
  totalStock,
  incoming,
  outgoing,
  lowStockCount,
}: StatsGridProps) {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 gap-gutter">
      <StatCard
        icon="inventory_2"
        iconWrapperClassName="bg-primary-fixed text-on-primary-fixed-variant"
        label="Stock Total"
        value={totalStock.toLocaleString()}
        hint="+12%"
      />
      <StatCard
        icon="arrow_downward"
        iconWrapperClassName="bg-primary-fixed text-on-primary-fixed-variant"
        label="Entradas"
        value={incoming}
        hint="3 en camino"
      />
      <StatCard
        icon="arrow_upward"
        iconWrapperClassName="bg-secondary-container text-on-secondary-container"
        label="Salidas"
        value={outgoing}
        hint="8 Despachos"
        valueClassName="text-secondary"
        hintClassName="text-secondary/80"
      />
      <StatCard
        icon="warning"
        iconWrapperClassName="bg-error-container text-error"
        label="Stock Bajo"
        value={lowStockCount}
        hint="Crítico"
        valueClassName="text-error"
        hintClassName="text-error/80"
      />
    </section>
  );
}
