interface PaginationProps {
  currentPage: number
  totalItems: number
  pageSize: number
  onPageChange: (page: number) => void
}

export default function Pagination({ currentPage, totalItems, pageSize, onPageChange }: PaginationProps) {
  const totalPages = Math.ceil(totalItems / pageSize)
  if (totalPages <= 1) return null

  const startItem = (currentPage - 1) * pageSize + 1
  const endItem = Math.min(currentPage * pageSize, totalItems)

  const pages: (number | string)[] = []
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
      pages.push(i)
    } else if (pages[pages.length - 1] !== '...') {
      pages.push('...')
    }
  }

  return (
    <div className="flex items-center justify-between px-4 py-3">
      <span className="text-label-sm text-on-surface-variant">
        MOSTRANDO {startItem}-{endItem} DE {totalItems} ITEMS
      </span>
      <div className="flex items-center gap-1">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-1.5 rounded-6 hover:bg-secondary-container disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <span className="material-symbols-outlined text-xl">chevron_left</span>
        </button>
        {pages.map((page, i) =>
          typeof page === 'string' ? (
            <span key={`e${i}`} className="px-2 text-on-surface-variant">...</span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`min-w-[36px] h-9 rounded-8 text-label-lg font-semibold transition-colors ${
                page === currentPage
                  ? 'bg-primary text-on-primary'
                  : 'text-on-surface-variant hover:bg-secondary-container'
              }`}
            >
              {page}
            </button>
          )
        )}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-1.5 rounded-6 hover:bg-secondary-container disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <span className="material-symbols-outlined text-xl">chevron_right</span>
        </button>
      </div>
    </div>
  )
}
