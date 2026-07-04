import { StatsGrid } from "./components/StatsGrid";
import { InventoryTable } from "./components/InventoryTable";
import { MovementForm } from "./components/MovementForm";
import { ActivityList } from "./components/ActivityList";
import { useInventory } from "./hooks/useInventory";

export default function InventoryDashboard() {
  const { inventory, activities, totalStock, lowStockCount, registerMovement } =
    useInventory();

  const incoming = 450;
  const outgoing = 120;

  return (
    <div className="bg-background text-on-surface-variant min-h-full">
      <main className="max-w-7xl mx-auto p-margin-mobile md:p-margin-desktop space-y-lg">
        <StatsGrid
          totalStock={totalStock}
          incoming={incoming}
          outgoing={outgoing}
          lowStockCount={lowStockCount}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg items-start">
          <InventoryTable inventory={inventory} />

          <aside className="lg:col-span-4 space-y-gutter">
            <MovementForm inventory={inventory} onSubmit={registerMovement} />
            <ActivityList activities={activities} />
          </aside>
        </div>
      </main>
    </div>
  );
}
