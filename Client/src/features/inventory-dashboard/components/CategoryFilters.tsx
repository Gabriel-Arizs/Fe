export interface CategoryFiltersProps {
  categories: string[];
  activeCategory: string;
  onSelect: (category: string) => void;
}

export function CategoryFilters({
  categories,
  activeCategory,
  onSelect,
}: CategoryFiltersProps) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar mb-8">
      {categories.map((category) => {
        const isActive = category === activeCategory;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onSelect(category)}
            className={
              isActive
                ? "category-pill whitespace-nowrap px-6 py-3 bg-primary text-on-primary rounded-2xl font-bold shadow-lg shadow-primary/20"
                : "category-pill whitespace-nowrap px-6 py-3 bg-surface-container-low text-primary font-bold rounded-2xl hover:bg-primary-fixed/50"
            }
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
