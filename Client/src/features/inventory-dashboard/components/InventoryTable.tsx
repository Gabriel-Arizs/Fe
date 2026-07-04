import { useMemo, useState } from "react";
import type { InventoryItem } from "../types/Inventory";
import { categories } from "../data/seed";
import Icon from "../../../components/ui/Icon";
import { CategoryFilters } from "./CategoryFilters";
import { InventoryRow } from "./InventoryRow";

export interface InventoryTableProps {
  inventory: InventoryItem[];
}

export function InventoryTable({ inventory }: InventoryTableProps) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredInventory = useMemo(() => {
    return inventory.filter((item) => {
      const matchesCategory =
        activeCategory === "Todos" || item.category === activeCategory;
      const matchesSearch = item.name
        .toLowerCase()
        .includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [inventory, activeCategory, search]);

  return (
    <section className="lg:col-span-8 bg-surface-container-lowest rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_60px_rgba(124,58,237,0.04)] border border-outline-variant/30">
      {/* Cambiamos md:flex-row a sm:flex-row o md:flex-row dependiendo de cuándo quieras que se pongan a la par */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <h2 className="text-2xl font-bold text-primary whitespace-nowrap shrink-0">
          Suministros Activos
        </h2>

        <div className="flex-1 w-full">
          <div className="flex items-center gap-3 w-full h-14 px-4 bg-surface-container-low border-none rounded-2xl focus-within:ring-2 focus-within:ring-primary/20">
            <Icon
              name="search"
              size={18}
              className="text-primary/40 shrink-0"
            />
            <input
              className="flex-1 min-w-0 h-full bg-transparent border-none text-body font-medium placeholder:text-on-surface-variant/30 focus:outline-none truncate"
              placeholder="Buscar en inventario..."
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      <CategoryFilters
        categories={categories}
        activeCategory={activeCategory}
        onSelect={setActiveCategory}
      />

      <div className="space-y-3">
        {filteredInventory.map((item) => (
          <InventoryRow key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
