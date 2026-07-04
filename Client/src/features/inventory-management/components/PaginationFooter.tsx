import Icon from '../../../components/ui/Icon'

interface PaginationFooterProps {
  totalItems: number;
  rangeStart: number;
  rangeEnd: number;
  currentPage: number;
  onPageChange?: (page: number) => void;
}

export function PaginationFooter({
  totalItems,
  rangeStart,
  rangeEnd,
  currentPage,
  onPageChange,
}: PaginationFooterProps) {
  return (
    <footer className="mt-stack-lg pt-gutter border-t border-outline-subtle flex flex-col sm:flex-row items-center justify-between gap-gutter">
      <p className="text-caption font-label-caps text-outline">
        MOSTRANDO {rangeStart}-{rangeEnd} DE {totalItems} ITEMS
      </p>
      <div className="flex items-center gap-2">
        <button
          onClick={() => onPageChange?.(currentPage - 1)}
          className="w-10 h-10 flex items-center justify-center rounded-xl border border-outline-subtle text-outline hover:border-primary hover:text-primary transition-all"
          aria-label="Página anterior"
        >
          <Icon name="chevron_left" size={20} />
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary text-on-primary font-bold">
          {currentPage}
        </button>
      </div>
    </footer>
  );
}
