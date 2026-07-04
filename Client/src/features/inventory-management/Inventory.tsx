import { useMemo, useState } from "react";
import type { InventoryFiltersState, InventoryItem } from "./types/inventory";
import { inventoryItems } from "./data/inventoryItems";
import {
  InventoryHeader,
  InventoryFilters,
  InventoryTable,
  PaginationFooter,
} from "./components";

const INITIAL_FILTERS: InventoryFiltersState = {
  search: "",
  category: "Todas",
  status: "Todos",
};

export function Inventory() {
  const [filters, setFilters] =
    useState<InventoryFiltersState>(INITIAL_FILTERS);

  const filteredItems = useMemo(() => {
    return inventoryItems.filter((item) => {
      const matchesSearch =
        filters.search.trim() === "" ||
        item.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        item.sku.toLowerCase().includes(filters.search.toLowerCase());

      const matchesCategory =
        filters.category === "Todas" || item.category === filters.category;

      const matchesStatus =
        filters.status === "Todos" || item.status === filters.status;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [filters]);

  const handleEditItem = (item: InventoryItem) => {
    console.log("Editar item:", item.id);
  };

  const handleDeleteItem = (item: InventoryItem) => {
    console.log("Eliminar item:", item.id);
  };

  return (
    <div className="bg-surface text-on-surface antialiased">
      <main className="pb-20 md:pb-8 px-margin-mobile md:px-margin-desktop min-h-screen">
        <InventoryHeader
          onExport={() => console.log("Exportar inventario")}
          onNewItem={() => console.log("Nuevo item")}
        />

        <div className="bg-surface-lowest rounded-xl p-container-padding me-plus-shadow border border-outline-subtle/50">
          <InventoryFilters filters={filters} onChange={setFilters} />

          <InventoryTable
            items={filteredItems}
            onEditItem={handleEditItem}
            onDeleteItem={handleDeleteItem}
          />

          <PaginationFooter
            totalItems={458}
            rangeStart={1}
            rangeEnd={10}
            currentPage={1}
          />
        </div>
      </main>
    </div>
  );
}
