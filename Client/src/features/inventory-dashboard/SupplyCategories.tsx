interface SupplyCategoriesProps {
  categories: string[]
  selected: string
  onSelect: (category: string) => void
}

export default function SupplyCategories({ categories, selected, onSelect }: SupplyCategoriesProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-4 py-2 rounded-pill text-label-lg font-semibold transition-colors ${
            selected === cat
              ? 'bg-primary text-on-primary'
              : 'bg-secondary-container text-on-surface-variant hover:bg-outline-variant'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
